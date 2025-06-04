# Vibe Webapp

Vibe is a simple message board built with Express and React. It demonstrates secure defaults via helmet and cors and is designed to run blazing fast on small VPS or Cloudflare Pages. Vibes are stored in `server/vibes.json` so messages survive restarts.

## Development

1. Install Node.js 20 or later.
2. Run `npm install` to install dependencies.
3. Start the server with `node server/index.js` and visit [http://localhost:3000](http://localhost:3000).
   Messages are persisted to `server/vibes.json`.

## Deployment

You can deploy the server to any VPS or to Cloudflare Pages Functions. The front-end is entirely static and lives in `public/`.

## License

This project is released under the MIT License. See `LICENSE` for details.
