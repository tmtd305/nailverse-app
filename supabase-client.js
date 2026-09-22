const SUPABASE_URL = 'https://wzxccxokzlltiawnnggn.supabase.co';
const SUPABASE_KEY = 'sb_publishable_IIeaAvjNJb3j9mpLxrajFw_kzHmcjbn';
const sb = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

async function getSession() {
  const { data } = await sb.auth.getSession();
  return data.session;
}

async function requireAuth(redirectTo) {
  const session = await getSession();
  if (!session) {
    location.href = redirectTo || 'login.html';
    return null;
  }
  return session;
}

async function getMyProfile() {
  const session = await getSession();
  if (!session) return null;
  const { data } = await sb.from('profiles').select('*').eq('id', session.user.id).single();
  return data;
}

async function signOut() {
  await sb.auth.signOut();
  location.href = 'login.html';
}
