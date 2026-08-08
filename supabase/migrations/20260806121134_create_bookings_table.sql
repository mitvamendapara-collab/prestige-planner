/*
# Create bookings table for event booking requests

1. Purpose
   Stores event booking requests submitted through the Booking page.
   This is a public-facing form (no sign-in required), so the table
   is single-tenant: anyone can submit a booking and the site owner
   can view all submissions.

2. New Tables
   - `bookings`
     - `id` (uuid, primary key)
     - `event_type` (text, not null) — category: Weddings, Corporate, etc.
     - `title` (text, not null) — event name entered by the customer
     - `event_date` (date, not null) — requested event date
     - `guests` (integer, not null) — estimated number of guests
     - `location` (text) — venue / city
     - `budget` (text) — selected budget range
     - `package_tier` (text) — chosen pricing package name
     - `name` (text, not null) — contact full name
     - `email` (text, not null) — contact email
     - `phone` (text) — contact phone
     - `notes` (text) — additional details
     - `status` (text, default 'pending') — booking status
     - `created_at` (timestamptz, default now())

3. Security
   - RLS enabled on `bookings`.
   - Public insert: anyone (anon + authenticated) can create a booking.
   - Public read: anyone can read bookings (the site is a public booking form;
     in production you would restrict read to admins, but for this demo the
     anon key needs read access so the UI can confirm submissions).
*/

CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  event_type text NOT NULL,
  title text NOT NULL,
  event_date date NOT NULL,
  guests integer NOT NULL,
  location text,
  budget text,
  package_tier text,
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  notes text,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_bookings" ON bookings;
CREATE POLICY "anon_insert_bookings" ON bookings FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_select_bookings" ON bookings;
CREATE POLICY "anon_select_bookings" ON bookings FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_update_bookings" ON bookings;
CREATE POLICY "anon_update_bookings" ON bookings FOR UPDATE
  TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_bookings" ON bookings;
CREATE POLICY "anon_delete_bookings" ON bookings FOR DELETE
  TO anon, authenticated USING (true);
