// Netlify Function: /flag
// WARNING: Replace placeholder flag before production; do not expose real secrets on public servers.

export async function handler() {
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    body: 'you are on the right path, just follow your goal\n'
  };
}


