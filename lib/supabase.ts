import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Le client est créé uniquement lorsque les variables publiques existent.
// La clé service_role ne doit jamais être utilisée ici.
export const supabase = url && anonKey ? createClient(url, anonKey) : null;
