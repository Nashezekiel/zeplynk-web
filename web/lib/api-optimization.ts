// API optimization utilities

// Cache configuration
const CACHE_CONFIG = {
  defaultTTL: 5 * 60 * 1000, // 5 minutes
  apiCache: new Map(),
};

// Request deduplication
const pendingRequests = new Map();

// Optimized fetch with caching and deduplication
export async function optimizedFetch(
  url: string,
  options: RequestInit & { cacheKey?: string; ttl?: number } = {}
): Promise<Response> {
  const { cacheKey, ttl = CACHE_CONFIG.defaultTTL, ...fetchOptions } = options;
  const key = cacheKey || `${url}:${JSON.stringify(options)}`;

  // Check cache first
  const cached = CACHE_CONFIG.apiCache.get(key);
  if (cached && Date.now() - cached.timestamp < ttl) {
    return new Response(JSON.stringify(cached.data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Check if request is already pending
  if (pendingRequests.has(key)) {
    return pendingRequests.get(key);
  }

  // Make the request
  const requestPromise = fetch(url, fetchOptions)
    .then(async (response) => {
      if (response.ok) {
        const data = await response.clone().json();
        
        // Cache the response
        CACHE_CONFIG.apiCache.set(key, {
          data,
          timestamp: Date.now(),
        });

        // Clean up old cache entries
        if (CACHE_CONFIG.apiCache.size > 100) {
          const oldestKey = CACHE_CONFIG.apiCache.keys().next().value;
          CACHE_CONFIG.apiCache.delete(oldestKey);
        }
      }

      pendingRequests.delete(key);
      return response;
    })
    .catch((error) => {
      pendingRequests.delete(key);
      throw error;
    });

  pendingRequests.set(key, requestPromise);
  return requestPromise;
}

// Batch API calls
export async function batchApiCalls<T>(
  calls: Array<{ url: string; options?: RequestInit }>
): Promise<(T | null)[]> {
  const batchSize = 6; // Limit concurrent requests
  const results: (T | null)[] = [];

  for (let i = 0; i < calls.length; i += batchSize) {
    const batch = calls.slice(i, i + batchSize);
    const batchResults = await Promise.allSettled(
      batch.map(({ url, options }) => optimizedFetch(url, options))
    );

    // Process batch results
    for (const result of batchResults) {
      if (result.status === 'fulfilled') {
        const response = result.value;
        if (response.ok) {
          try {
            const data = await response.json();
            results.push(data);
          } catch (parseError) {
            console.error('Failed to parse response:', parseError);
            results.push(null);
          }
        } else {
          results.push(null);
        }
      } else {
        console.error('Batch API call failed:', result.reason);
        results.push(null);
      }
    }

    // Small delay between batches to avoid overwhelming the server
    if (i + batchSize < calls.length) {
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  }

  return results;
}

// Retry mechanism for failed requests
export async function fetchWithRetry(
  url: string,
  options: RequestInit & { retries?: number; retryDelay?: number } = {},
  attempt = 1
): Promise<Response> {
  const { retries = 3, retryDelay = 1000, ...fetchOptions } = options;

  try {
    return await optimizedFetch(url, fetchOptions);
  } catch (error) {
    if (attempt < retries) {
      console.warn(`Request failed, retrying (${attempt}/${retries}):`, error);
      await new Promise(resolve => setTimeout(resolve, retryDelay * attempt));
      return fetchWithRetry(url, options, attempt + 1);
    }
    throw error;
  }
}

// Preload critical resources
export function preloadCriticalResources(urls: string[]) {
  urls.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = url;
    
    if (url.endsWith('.js')) {
      link.as = 'script';
    } else if (url.endsWith('.css')) {
      link.as = 'style';
    } else if (/\.(png|jpg|jpeg|webp|avif)$/.test(url)) {
      link.as = 'image';
    }

    document.head.appendChild(link);
  });
}

// Clear cache utility
export function clearApiCache(pattern?: string) {
  if (pattern) {
    for (const key of CACHE_CONFIG.apiCache.keys()) {
      if (key.includes(pattern)) {
        CACHE_CONFIG.apiCache.delete(key);
      }
    }
  } else {
    CACHE_CONFIG.apiCache.clear();
  }
}
