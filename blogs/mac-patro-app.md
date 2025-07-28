---
title: 'Mac Patro App'
slug: 'mac-patro-app'
description: "Standalone app for MacOS "
author: 'Myself'
date: "2025-02-04"
---

# Mac Patro

Mac Patro is a desktop application that displays a Nepali calendar and other relevant information in a tray icon and a pop-up window. It is designed to run on macOS and is available in two versions.

---

## Mac Patro Native (Early Preview)

> **Announcement**: A new, fully native version of Mac Patro is in development for better performance and a smaller footprint. An early preview is available for testing.

The source code will be available on [GitHub](https://github.com/ntn0de/mac-patro-native/) shortly after some refactoring.

### Download
*   [Mac Patro Native](https://github.com/ntn0de/ntn0de.github.io/raw/refs/heads/main/blogs/files/MacPatro.zip)

---

## Mac Patro (Electron)

This is the original, stable version of Mac Patro, built with Electron.

### Download
*   [Mac (Intel)](https://github.com/ntn0de/ntn0de.github.io/raw/refs/heads/main/blogs/files/Mac%20Patro-darwin-x64.zip)
*   [Mac (Apple Silicon)](https://github.com/ntn0de/ntn0de.github.io/raw/refs/heads/main/blogs/files/Mac%20Patro-darwin-arm64.zip)

---

## Installation Guide

These instructions apply to both the Electron and Native versions of the app.

1.  Download the correct `.zip` file for your desired version.
2.  Unzip the downloaded file. This will create a `Mac Patro.app` or `MacPatroNative.app` file.
3.  Move the `.app` file to your `/Applications` folder.

### Troubleshooting Installation Errors

Due to macOS security settings for apps from unidentified developers, you may encounter one of the following errors.

#### Error: "App can't be opened because it is from an unidentified developer."

1.  Open **System Settings** and navigate to **Privacy & Security**.
2.  Scroll down to the "Security" section.
3.  You will see a message about the app being blocked. Click the **"Open Anyway"** button next to it.

#### Error: "App is damaged and can’t be opened. You should move it to the Trash."

This can happen if macOS has quarantined the app. To fix this, open the **Terminal** app and run the following command. Replace `<path to app>` with the actual path to the app file.

```bash
xattr -cr <path to app>
```
**Example:**
```bash
xattr -cr /Applications/Mac\ Patro.app
```

After running the command, try opening the app again. You may still need to follow the "unidentified developer" steps above.
