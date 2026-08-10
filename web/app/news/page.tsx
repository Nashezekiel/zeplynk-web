import { getAllNews } from "@/lib/news-store";
import NewsListingContent from "./NewsListingContent";

export const revalidate = 60;

export default async function NewsListingPage() {
    const items = await getAllNews();
    return <NewsListingContent items={items} />;
}
