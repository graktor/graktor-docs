# Graktor Docs

The public documentation site for Graktor (onboarding, modules, plans, apps), built with
[Docusaurus](https://docusaurus.io/). Content is plain Markdown — anyone can adjust it through
GitHub without touching this machine.

## Local development

```bash
npm install
npm run start
```

Opens a live-reloading preview at `http://localhost:3000`.

## Adding or editing a page

- Every page is a `.md` file under `docs/`. Edit the text directly — standard Markdown.
- Add a new page: create a new `.md` file under `docs/` (or a subfolder like `docs/modules/`) with
  frontmatter like:
  ```md
  ---
  id: my-page
  title: My Page Title
  sidebar_position: 99
  ---
  ```
  then add its `id` (e.g. `"modules/my-page"`) to `sidebars.js` wherever it should appear in the
  left-hand navigation.

## Adding an image

1. Drop the image file into `static/img/modules/` (or any subfolder of `static/img/`).
2. Reference it from any page with `![Alt text](/img/modules/your-file.png)`.

No build step needed — static files under `static/` are served as-is. On GitHub, this can be done
entirely from the web UI: open the `static/img/modules/` folder → "Add file" → "Upload files" →
commit — no local git required.

## Adding a new language

This site already supports English (`en`), French (`fr`), Hausa (`ha`), Yorùbá (`yo`), and Igbo
(`ig`) via Docusaurus's built-in i18n. Translated pages live under
`i18n/<locale>/docusaurus-plugin-content-docs/current/`, mirroring the same path as the English
page under `docs/`. A page with no translated file for a given locale just falls back to English.

To add a new locale:
1. Add its code to the `locales` array (and a `localeConfigs` label) in `docusaurus.config.js`.
2. Create `i18n/<locale>/docusaurus-plugin-content-docs/current/<same-path>.md` for whichever
   pages you want translated.

## Editing through GitHub (no local setup)

Every page has an **"Edit this page"** link at the bottom pointing at this repo on GitHub — click
it, edit the Markdown in GitHub's own web editor, and open a pull request. Merging it updates the
live site automatically (see `.github/workflows/deploy.yml`).

## Build

```bash
npm run build
```

Generates static files into `build/`.
