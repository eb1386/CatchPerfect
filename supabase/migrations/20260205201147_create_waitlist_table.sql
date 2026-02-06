/*
  # Create waitlist table

  1. New Tables
    - `waitlist`
      - `id` (uuid, primary key) - unique identifier for each signup
      - `email` (text, unique, not null) - the email address of the person signing up
      - `name` (text, not null) - the name of the person signing up
      - `role` (text, not null, default 'rower') - their role (rower, coach, other)
      - `created_at` (timestamptz, default now()) - when they signed up

  2. Security
    - Enable RLS on `waitlist` table
    - Add policy for anonymous users to insert into the waitlist (public signup form)
    - No read access for anonymous users (admin only)
*/

CREATE TABLE IF NOT EXISTS waitlist (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  name text NOT NULL DEFAULT '',
  role text NOT NULL DEFAULT 'rower',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can sign up for waitlist"
  ON waitlist
  FOR INSERT
  TO anon
  WITH CHECK (true);
