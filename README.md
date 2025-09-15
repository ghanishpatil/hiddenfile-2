# Ugly CTF Web Challenge (Node + Express)

This is a tiny, intentionally unattractive CTF-style web challenge.

Important warnings:

- Replace placeholder flag before production; do not expose real secrets on public servers.

## Run locally

1. Install dependencies:

```bash
npm install
```

2. Start the server:

```bash
npm start
```

3. Open the site:

- Homepage: `http://localhost:3000/`
- Flag (plaintext): `http://localhost:3000/flag/goal.txt`

The flag endpoint responds with `Content-Type: text/plain` and contains the placeholder flag:

```
CTF{example_flag_DO_NOT_USE_IN_PRODUCTION}
```

## Project structure

```
public/
  index.html
  styles.css
server.js
package.json
README.md
netlify.toml
netlify/
  functions/
    flag.js
    goal.js
```

The UI is deliberately ugly (tiny serif font, gray background, and a janky layout) to fit the challenge theme.

## Notes

- Replace placeholder flag before production; do not expose real secrets on public servers.

## Deploy to Netlify

This project includes a production option for Netlify. The static site is served from `public/`, and the endpoints are provided by Netlify Functions.

Endpoints on Netlify:

- `/flag` → handled by `/.netlify/functions/flag` (returns the hint as text/plain)
- `/flag/goal.txt` → handled by `/.netlify/functions/goal` (returns the flag as text/plain)

Steps:

1. Create a new repo on GitHub (or your preferred Git provider) and push this folder.
2. In Netlify, choose "New site from Git" and select your repo.
3. Build settings:
   - Build command: none (leave empty)
   - Publish directory: `public`
   - Functions directory: `netlify/functions` (auto-detected via `netlify.toml`)
4. Deploy.

Local Netlify test (optional):

```bash
npm install -g netlify-cli
netlify dev
```

This will serve the static site and functions locally on a Netlify dev server.


