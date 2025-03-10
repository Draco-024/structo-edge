
import { createClient } from '@supabase/supabase-js';

// These would normally be in .env.local, but for demonstration we'll use the provided values directly
const supabaseUrl = 'https://kjfgwxjwfwuyoicbeyxp.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtqZmd3eGp3Znd1eW9pY2JleXhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE1ODU5MjgsImV4cCI6MjA1NzE2MTkyOH0.MsQXJUuk1vqoLXpyKa8p-0ueyezzGUwevtp86AtJAYg';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
