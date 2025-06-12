// supabaseClient.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ihwwbktphcckqrkwcvku.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlod3dia3RwaGNja3Fya3djdmt1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk0NTUwNzMsImV4cCI6MjA2NTAzMTA3M30.f92qxeHGFrm_j_vUWMLqeMu1Yjn2ymEWW2teEhsNaUE'

export const supabase = createClient(supabaseUrl, supabaseKey)
