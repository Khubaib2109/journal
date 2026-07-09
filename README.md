[Uploading README.md…]()
# Grace Notes

A static, GitHub Pages-ready journalling prompt generator built around philosophy, literature, art, memory, time, mortality, selfhood, relationships, law, power, uncertainty, mountains, and strange futures.

The name is a small play on two things: a musical grace note, and a place for Grace's own notes. It is meant to feel lighter and more personal than the earlier “Examined Day” wording.

## What it does

- Generates philosophical journalling prompts from topic banks rather than one fixed list.
- Lets you choose a main philosophy topic, an optional second lens, mood, and writing length.
- Gives you a stable daily prompt, plus a remix button for fresh prompts.
- Provides a writing area directly below the generator.
- Saves entries privately in the browser using local storage.
- Filters saved entries by topic or search term.
- Exports saved entries as a readable `.txt` file.
- Also supports JSON export/import as a backup format.
- Works as a static site with no backend.
- Includes light/dark mode and mobile-friendly styling.

## Files

- `index.html` — page structure
- `styles.css` — visual design, transitions, responsive layout
- `script.js` — prompt engine, local saving, filtering, export/import

## How to host on GitHub Pages

1. Create a new GitHub repository.
2. Upload `index.html`, `styles.css`, `script.js`, and this `README.md` to the repository root.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Choose your `main` branch and `/root` folder.
6. Save. GitHub will give you a public site link after it deploys.

## Privacy note

Entries are saved in the browser's local storage. They are not uploaded anywhere by this site. If you clear browser data, switch browsers, or use another device, the entries will not appear unless you export and import the JSON backup.

For ordinary reading, use **Export text**. For restoring entries into the site later, use **Export backup JSON**.

## Future upgrade idea

A live AI-generated prompt engine would require a backend or serverless function. Do not put an OpenAI or other AI API key directly into this static frontend, because visitors could inspect the code and copy the key.
