import { createClient } from "@supabase/supabase-js";

const supabaseURL = "https://quzbvjfanzcjpvzzidpt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF1emJ2amZhbnpjanB2enppZHB0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEyMTU5MjYsImV4cCI6MjA4Njc5MTkyNn0.jeZUxvL9Rd8F-99M7Qwvpi5nmrGcXsCp2eAHC_MWlw8";
const supabase = createClient(supabaseURL, supabaseKey, {
  // Provide a custom schema. Defaults to "public".
  db: { schema: "other_schema" },
});


export default supabase