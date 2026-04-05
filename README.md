# LinkedIn Easy Apply Unchecker

A lightweight Chrome extension that automatically unchecks the **"Follow company"** checkbox in LinkedIn's Easy Apply modal.

## The problem

Every time you apply for a job using LinkedIn's Easy Apply, the modal silently checks a "Follow this company" box by default. After dozens of applications, your feed fills up with company posts you never chose to follow.

## What it does

The extension watches for that checkbox in the background and unchecks it instantly — no clicks, no extra steps, no distractions. You apply, it handles the rest.

## Features

- Automatically unchecks the follow checkbox on every Easy Apply modal
- Toggle on/off from the toolbar icon without reloading the page
- Available in **English** and **Spanish**
- No data collected — no external requests, no tracking
- Minimal permissions: only `storage` (to save your toggle preference) and access to `linkedin.com`

## Installation

### From source (Developer Mode)

1. Clone or download this repository
2. Open Chrome and go to `chrome://extensions`
3. Enable **Developer mode** (top right toggle)
4. Click **Load unpacked** and select the `LinkedinUnCheker/` folder

### From Chrome Web Store

*(Coming soon)*

## Project structure

```
LinkedinUnCheker/
├── manifest.json        # Extension manifest (MV3)
├── content.js           # Content script — detects and unchecks the checkbox
├── popup.html           # Toolbar popup UI
├── popup.js             # Popup logic (toggle + language switcher)
├── icons/               # Extension icons (16, 48, 128px)
└── _locales/            # i18n strings
    ├── en/messages.json
    └── es/messages.json
```

## Permissions

| Permission | Reason |
|---|---|
| `storage` | Saves your toggle state and language preference |
| `https://www.linkedin.com/*` | Required to run the content script on LinkedIn |

## Build

Requires `make` and `zip` to be available in your shell.

```bash
# Generate the ZIP ready to upload to the Chrome Web Store
make zip

# Remove the generated ZIP
make clean
```

The ZIP is created at `../LinkedinUnCheker.zip` and excludes dev files (`Makefile`, `README.md`, `.git/`).

## Author

Built by [RamDev](https://www.linkedin.com/in/ramsis/)
