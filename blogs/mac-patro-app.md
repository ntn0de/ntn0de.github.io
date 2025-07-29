---
title: 'Mac Patro (Now Open Source!)'
slug: 'mac-patro-app'
description: "A native macOS app for the Nepali calendar, now open source!"
author: 'Myself'
date: "2025-07-29"
---

# Mac Patro (Now Open Source!)

I'm excited to announce that Mac Patro, the simple and lightweight menu bar app for the Nepali calendar, has been completely rewritten in Swift and is now **fully open source**!

This new native version offers significant improvements over the original Electron app, including:
*   **Better Performance**: It's faster and uses fewer system resources.
*   **Smaller Size**: The application is much more lightweight.
*   **Universal Binary**: A single download works on both Intel and Apple Silicon Macs.

The source code is now available on GitHub for you to explore, contribute to, or learn from.

### **[Download the Latest Version from GitHub Releases](https://github.com/ntn0de/mac-patro-native/releases/latest/download/Mac-Patro-latest.dmg)**


> **View the Source Code**: [github.com/ntn0de/mac-patro-native](https://github.com/ntn0de/mac-patro-native/)

---

## Installation Guide

1.  Download the `Mac.Patro.vX.X.X.dmg` file from the [GitHub Releases page](https://github.com/ntn0de/mac-patro-native/releases).
2.  Open the `.dmg` file.
3.  Drag the `Mac Patro.app` icon into your `Applications` folder.

### Troubleshooting

Because the application is not yet notarized by Apple, you will likely see an error message the first time you try to open it.

#### Error: "App is damaged and can’t be opened. You should move it to the Trash."

![macOS security error message](./mac-patro-issue.jpeg)

This is a standard macOS security measure for applications downloaded from the internet. To fix it, you just need to remove the quarantine attribute.

Open the **Terminal** app and run the following command:

```bash
xattr -cr /Applications/Mac\ Patro.app
```

After running this command, the app will open without any issues.

---

## Legacy Mac Patro (Electron)

The original version of Mac Patro was built with Electron. It is no longer in active development but remains available for download if needed.

*   [Download for Mac (Intel)](https://github.com/ntn0de/ntn0de.github.io/raw/refs/heads/main/blogs/files/Mac%20Patro-darwin-x64.zip)
*   [Download for Mac (Apple Silicon)](https://github.com/ntn0de/ntn0de.github.io/raw/refs/heads/main/blogs/files/Mac%20Patro-darwin-arm64.zip)
