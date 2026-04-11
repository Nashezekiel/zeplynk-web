'use client';

import { useEffect, useState } from 'react';

interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
  domContentLoaded: number;
  loadComplete: number;
}

export function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run in production and for performance monitoring
    if (process.env.NODE_ENV !== 'production') return;

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      
      entries.forEach((entry) => {
        if (entry.entryType === 'largest-contentful-paint') {
          setMetrics(prev => prev ? { ...prev, lcp: entry.startTime } : { lcp: entry.startTime } as PerformanceMetrics);
        }
        
        if (entry.entryType === 'first-input') {
          setMetrics(prev => prev ? { ...prev, fid: entry.processingStart - entry.startTime } : { fid: entry.processingStart - entry.startTime } as PerformanceMetrics);
        }
        
        if (entry.entryType === 'layout-shift') {
          setMetrics(prev => {
            const cls = prev ? prev.cls + (entry as any).value : (entry as any).value;
            return { ...prev, cls };
          });
        }
      });
    });

    // Observe performance metrics
    observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });

    // Measure page load times
    const measurePageLoad = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      if (navigation) {
        setMetrics(prev => ({
          fcp: navigation.responseStart - navigation.navigationStart,
          ttfb: navigation.responseStart - navigation.requestStart,
          domContentLoaded: navigation.domContentLoadedEventEnd - navigation.navigationStart,
          loadComplete: navigation.loadEventEnd - navigation.navigationStart,
          ...prev
        }));
      }
    };

    window.addEventListener('load', measurePageLoad);

    // Core Web Vitals monitoring
    const reportWebVitals = async () => {
      if (!metrics) return;

      // Send to analytics service
      try {
        await fetch('/api/analytics/vitals', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...metrics,
            url: window.location.href,
            userAgent: navigator.userAgent,
            timestamp: Date.now()
          })
        });
      } catch (error) {
        console.warn('Failed to report performance metrics:', error);
      }
    };

    // Report metrics after page load
    window.addEventListener('load', () => {
      setTimeout(reportWebVitals, 1000);
    });

    return () => {
      observer.disconnect();
      window.removeEventListener('load', measurePageLoad);
    };
  }, []);

  // Toggle visibility for debugging
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        setIsVisible(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  if (!metrics || !isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-black/90 text-white p-4 rounded-lg shadow-lg z-50 font-mono text-xs">
      <div className="font-bold mb-2">Performance Metrics</div>
      <div>FCP: {metrics.fcp.toFixed(0)}ms</div>
      <div>LCP: {metrics.lcp.toFixed(0)}ms</div>
      <div>FID: {metrics.fid.toFixed(0)}ms</div>
      <div>CLS: {metrics.cls.toFixed(3)}</div>
      <div>TTFB: {metrics.ttfb.toFixed(0)}ms</div>
      <div>DOM: {metrics.domContentLoaded.toFixed(0)}ms</div>
      <div>Load: {metrics.loadComplete.toFixed(0)}ms</div>
      
      {/* Performance indicators */}
      <div className="mt-2 pt-2 border-t border-gray-600">
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${metrics.fcp < 1800 ? 'bg-green-500' : 'bg-red-500'}`} />
          <span className="text-xs">FCP</span>
        </div>
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${metrics.lcp < 2500 ? 'bg-green-500' : 'bg-red-500'}`} />
          <span className="text-xs">LCP</span>
        </div>
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${metrics.fid < 100 ? 'bg-green-500' : 'bg-red-500'}`} />
          <span className="text-xs">FID</span>
        </div>
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${metrics.cls < 0.1 ? 'bg-green-500' : 'bg-red-500'}`} />
          <span className="text-xs">CLS</span>
        </div>
      </div>
    </div>
  );
}
