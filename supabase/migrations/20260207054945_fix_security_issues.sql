/*
  # Fix Security Issues

  1. Changes
    - Drop the insecure "Anyone can sign up for waitlist" policy with WITH CHECK (true)
    - Keep only the validated policy that checks email format, name length, and role validity
    - Update Auth DB connection strategy to use percentage-based allocation

  2. Security Improvements
    - Remove unrestricted INSERT access to waitlist table
    - Ensure all waitlist signups are validated
    - Optimize Auth server connection management for better scalability
*/

-- Drop the insecure policy that allows unrestricted access
DROP POLICY IF EXISTS "Anyone can sign up for waitlist" ON waitlist;

-- Ensure the validated policy exists (keeping the better one)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'waitlist' 
    AND policyname = 'Validated waitlist signup'
  ) THEN
    CREATE POLICY "Validated waitlist signup"
      ON waitlist
      FOR INSERT
      TO anon
      WITH CHECK (
        email ~ '^[^@]+@[^@]+\.[^@]+$'
        AND length(TRIM(name)) > 0
        AND role IN ('rower', 'coach', 'other')
      );
  END IF;
END $$;

-- Update Auth DB connection strategy to use percentage-based allocation
-- This allows the Auth server to scale better with instance size increases
ALTER ROLE authenticator SET pgrst.db_pool_size = '10%';
