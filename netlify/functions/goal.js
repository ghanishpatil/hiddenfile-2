// Netlify Function: /flag/goal.txt
// WARNING: Replace placeholder flag before production; do not expose real secrets on public servers.

export async function handler() {
  // Return the same placeholder flag as the Express server
  const flag = 'CTF{example_flag_DO_NOT_USE_IN_PRODUCTION}\n';
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    body: flag
  };
}


