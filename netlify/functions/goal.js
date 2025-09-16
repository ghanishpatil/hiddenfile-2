// Netlify Function: /flag/goal.txt
// WARNING: Replace placeholder flag before production; do not expose real secrets on public servers.

export async function handler() {
  // Return the same content as the Express server's flag file
  const flag = 'flag = FIREHYDRANT FRONT OF CC';
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    body: flag
  };
}


