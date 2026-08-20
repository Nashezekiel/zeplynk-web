-- Run this once in your Supabase project's SQL editor (Dashboard > SQL Editor > New query).
-- Backs the Insights (blog) posts and the Testimonials/feedback moderation queue.
-- All access goes through Next.js server routes using the service role key, so RLS is
-- enabled with no policies: the anon/public key (never exposed to the client here) gets
-- no access at all, and the service role key bypasses RLS by design.

create extension if not exists pgcrypto;

-- Insights / blog posts (replaces the old Upstash Redis store)
create table if not exists news_posts (
    id text primary key,
    slug text unique not null,
    title text not null,
    excerpt text not null,
    content text,
    image text not null,
    category text not null,
    date text not null,
    aspect_ratio text not null,
    created_at timestamptz not null default now()
);

alter table news_posts enable row level security;

-- Reviews submitted via /reviews "Direct Feedback" form; admin picks which ones
-- are "featured" to show as testimonials on the homepage.
create table if not exists feedback (
    id uuid primary key default gen_random_uuid(),
    name text not null,
    email text,
    service text,
    rating smallint not null check (rating between 1 and 5),
    message text not null,
    avatar_url text,
    display_role text,
    featured boolean not null default false,
    display_order integer not null default 0,
    created_at timestamptz not null default now()
);

alter table feedback enable row level security;

create index if not exists feedback_featured_idx on feedback (featured, display_order, created_at desc);

-- Storage bucket for reviewer-submitted photos/logos, uploaded via the service role
-- key and served publicly (read-only) via their returned URL.
insert into storage.buckets (id, name, public)
values ('avatars', 'avatars', true)
on conflict (id) do nothing;
