/*
# Create contact_messages table for contact form submissions

1. Purpose
   Stores messages submitted through the Contact page form.
   Public-facing, no sign-in required — single-tenant schema.

2. New Tables
   - `contact_messages`
     - `id` (uuid, primary key)
     - `name` (text, not null)
     - `email` (text, not null)
     - `phone` (text)
     - `subject` (text)
     - `message` (text, not null)
     - `created_at` (timestamptz, default now())

3. Security
   - RLS enabled on `contact_messages`.
   - Public insert + read for anon and authenticated.
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  subject text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact_messages" ON contact_messages;
CREATE POLICY "anon_insert_contact_messages" ON contact_messages FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_select_contact_messages" ON contact_messages;
CREATE POLICY "anon_select_contact_messages" ON contact_messages FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_update_contact_messages" ON contact_messages;
CREATE POLICY "anon_update_contact_messages" ON contact_messages FOR UPDATE
  TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_contact_messages" ON contact_messages;
CREATE POLICY "anon_delete_contact_messages" ON contact_messages FOR DELETE
  TO anon, authenticated USING (true);
