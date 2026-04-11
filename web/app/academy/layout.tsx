import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Zeplynk Academy | Tech Courses & Corporate Training",
    description: "Launch your tech career with our comprehensive courses or upskill your team with corporate training workshops.",
};

export default function AcademyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
