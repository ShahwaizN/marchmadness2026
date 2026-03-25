# March Madness Daily Digest

A mobile-first daily digest for March Madness — scores, upsets, highlights, and upcoming games. Updated each morning during the tournament.

## Live Site

Hosted on GitHub Pages: `https://<your-username>.github.io/<repo-name>/`

## Features --

- **Results tab** — all games with seed badges, upset and close-game indicators
- **Highlights tab** — notable moments, buzzer beaters, and biggest upsets
- **Upcoming tab** — full Sweet 16 / Elite 8 schedule with tip times
- **PWA** — add to your phone's home screen for a native app feel
- **Offline support** — works without a connection after first load
- **Dark theme** optimized for OLED screens

## Setup

### GitHub Pages
1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Set source to **Deploy from a branch → main → / (root)**
4. Your site will be live at `https://<username>.github.io/<repo>/`

### Add to Home Screen (iOS)
1. Open the site in Safari
2. Tap the Share button
3. Tap **Add to Home Screen**

### Add to Home Screen (Android)
1. Open in Chrome
2. Tap the three-dot menu
3. Tap **Add to Home screen**

## Updating Daily

Replace `index.html` with the latest digest each morning and push to main. The service worker will automatically fetch the new version for users on their next visit.
