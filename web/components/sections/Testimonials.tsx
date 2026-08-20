import { getFeaturedFeedback } from "@/lib/feedback-store";
import TestimonialsGrid from "./TestimonialsGrid";

export default async function Testimonials() {
    const testimonials = await getFeaturedFeedback();
    if (testimonials.length === 0) return null;

    const averageRating = testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length;

    const aggregateRatingSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        name: "Zeplynk Tech Solutions",
        image: "https://zeplynk.com/theLogo-removebg-preview.png",
        description:
            "Premier tech solutions and education company in Nigeria. Web development, AI automation, software engineering, and developer training.",
        brand: {
            "@type": "Brand",
            name: "Zeplynk",
        },
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: averageRating.toFixed(1),
            reviewCount: testimonials.length.toString(),
            bestRating: "5",
            worstRating: "1",
        },
        review: testimonials.map((testimonial) => ({
            "@type": "Review",
            reviewRating: {
                "@type": "Rating",
                ratingValue: testimonial.rating.toString(),
                bestRating: "5",
            },
            author: {
                "@type": "Person",
                name: testimonial.name,
            },
            reviewBody: testimonial.message,
        })),
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }}
            />
            <TestimonialsGrid testimonials={testimonials} />
        </>
    );
}
