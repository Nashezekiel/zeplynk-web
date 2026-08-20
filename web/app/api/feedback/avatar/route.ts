import { NextRequest, NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

const MAX_BYTES = 5 * 1024 * 1024;
const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/webp", "image/gif"];

export async function POST(request: NextRequest) {
    const supabase = getSupabase();
    if (!supabase) {
        return NextResponse.json({ error: "Storage is not configured." }, { status: 500 });
    }

    const formData = await request.formData().catch(() => null);
    const file = formData?.get("file");
    if (!(file instanceof File)) {
        return NextResponse.json({ error: "No file provided." }, { status: 400 });
    }
    if (!ALLOWED_TYPES.includes(file.type)) {
        return NextResponse.json({ error: "Unsupported image type." }, { status: 400 });
    }
    if (file.size > MAX_BYTES) {
        return NextResponse.json({ error: "Image must be under 5MB." }, { status: 400 });
    }

    const ext = file.type.split("/")[1];
    const path = `${crypto.randomUUID()}.${ext}`;

    const { error } = await supabase.storage.from("avatars").upload(path, file, {
        contentType: file.type,
        upsert: false,
    });
    if (error) {
        return NextResponse.json({ error: `Upload failed: ${error.message}` }, { status: 500 });
    }

    const { data } = supabase.storage.from("avatars").getPublicUrl(path);
    return NextResponse.json({ url: data.publicUrl });
}
