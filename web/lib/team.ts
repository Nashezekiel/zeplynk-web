// Team shown on the About page. To add a photo, put a square image (at least
// 400x400) in public/images/team/ and set `photo` to its path, e.g.
// "/images/team/nash.jpg". Without a photo the card shows a profile icon.

export interface TeamMember {
    name: string;
    role: string;
    bio?: string;
    photo?: string;
    linkedin?: string;
}

export const TEAM: TeamMember[] = [
    { name: "Abba Umar", role: "Chief Operating Officer" },
    { name: "Zaharadeen Hamdana", role: "Head of Marketing", photo: "/images/team/zaharadeen-hamdana.jpg" },
    { name: "Saeederh", role: "Operations Manager" },
    { name: "Aminu Al-Ameen", role: "Software Engineer" },
];
