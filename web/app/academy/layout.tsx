import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Zeplynk Academy | Tech Courses & Corporate Training",
    description:
        "Zeplynk Academy offers coding bootcamps, corporate training, and tech courses in Kaduna, Nigeria. Launch your tech career or upskill your team with Zeplynk.",
};

export default function AcademyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
