# Grace Notes — The Examined Day

A static journalling prompt website designed for philosophy-led daily writing.

## What it does

- Generates journalling prompts from topic banks rather than a single fixed list.
- Lets you choose a primary philosophy topic and an optional second lens.
- Offers different writing moods: tender, analytical, literary, strange, and plain.
- Includes a daily seeded prompt, so the same settings produce the same prompt for that day.
- Lets you write and save entries in your browser using local storage.
- Supports exporting and importing saved entries as JSON.
- Works on GitHub Pages without a backend or API key.

## Topics included

- Time & mortality
- Consciousness & selfhood
- Meaning, nihilism & survival
- Memory & narrative
- Art, beauty & attention
- Ethics, fairness & responsibility
- Law, power & legitimacy
- Love, friendship & family
- Mountains, solitude & the sublime
- Knowledge, failure & uncertainty
- AI, minds & strange futures

## How to host on GitHub Pages

1. Create a new GitHub repository.
2. Upload `index.html`, `styles.css`, and `script.js` to the root of the repo.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
5. Save. GitHub will give you a public Pages URL.

## Privacy note

Entries are saved in the browser's local storage. They are not uploaded anywhere by this site. If you clear browser data, switch browsers, or use another device, the entries will not appear unless you export and import the JSON backup.

## Customising prompts

Open `script.js` and edit the `topics` array. Each topic has:

- `name`
- `description`
- `thinkers`
- `tensions`
- `images`
- `questions`

Adding more items to those arrays immediately expands the possible prompts.
