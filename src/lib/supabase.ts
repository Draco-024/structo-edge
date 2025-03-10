
import { createClient } from '@supabase/supabase-js';

// Use the provided values directly since .env.local isn't an option in this environment
const supabaseUrl = 'https://kjfgwxjwfwuyoicbeyxp.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtqZmd3eGp3Znd1eW9pY2JleXhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE1ODU5MjgsImV4cCI6MjA1NzE2MTkyOH0.MsQXJUuk1vqoLXpyKa8p-0ueyezzGUwevtp86AtJAYg';

// Google client credentials
export const googleClientId = '99280002045-tkenhhjs750iocq6s4sehsl9oj174no0.apps.googleusercontent.com';
export const googleClientSecret = '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';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
