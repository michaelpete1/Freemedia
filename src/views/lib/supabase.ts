// src/lib/supabase.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vvjiamyxtgtdogjtgpez.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ2amlhbXl4dGd0ZG9nanRncGV6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUzMTI4MDAsImV4cCI6MjA2MDg4ODgwMH0.OXuLiPQEKENlUN51YqOJKLcabz7sWLYCbF0teKU8_28'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
