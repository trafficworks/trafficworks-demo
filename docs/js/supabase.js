import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const SUPABASE_URL = 'https://sgwzbuusrhbgpzanzdia.supabase.co'
const SUPABASE_ANON_KEY = 'sb_publishable_7CuSVpkyZBl55XaxbUKmnQ_0L3xllu7'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
