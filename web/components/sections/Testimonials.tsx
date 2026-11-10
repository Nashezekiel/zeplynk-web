import { getFeaturedFeedback } from "@/lib/feedback-store";
import { ORG_ID } from "@/lib/site";
import TestimonialsGrid from "./TestimonialsGrid";

export default async function Testimonials() {
    const testimonials = await getFeaturedFeedback();
    if (testimonials.length === 0) return null;

    const averageRating = testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length;

    // Real, approved testimonials shown right below, attached to the one
    // Organization node (same @id) rather than a separate entity.
    const aggregateRatingSchema = {
        "@context": "https://schema.org",
        "@id": ORG_ID,
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
