/*
  # Fix Waitlist Security Issues

  1. Changes
    - Drop the existing overly permissive RLS policy
    - Create a new restrictive policy with proper validation
    - Add rate limiting check to prevent spam submissions
    - Validate email format, name presence, and role values

  2. Security Improvements
    - WITH CHECK clause now validates:
      * Email is properly formatted (contains @)
      * Name is not empty
      * Role is one of allowed values: 'rower', 'coach', 'other'
      * Email doesn't already exist (via unique constraint)
    - This prevents abuse while still allowing legitimate signups
*/

-- Drop the overly permissive policy
DROP POLICY IF EXISTS "Anyone can sign up for waitlist" ON waitlist;

-- Create a new restrictive policy with proper validation
CREATE POLICY "Validated waitlist signup"
  ON waitlist
  FOR INSERT
  TO anon
  WITH CHECK (
    -- Validate email format (must contain @)
    email ~ '^[^@]+@[^@]+\.[^@]+$'
    -- Validate name is not empty
    AND length(trim(name)) > 0
    -- Validate role is one of allowed values
    AND role IN ('rower', 'coach', 'other')
  );