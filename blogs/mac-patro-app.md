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

![macOS Patro](/images/mac-patro-ss.png)

## Downloads and Source Code

> **Important:** Before you download, please [read the installation instructions](#installation-and-troubleshooting) to ensure the app runs correctly on macOS.

- **[Download Latest Version](https://github.com/ntn0de/mac-patro-native/releases/latest/download/Mac-Patro-latest.dmg)**
- [View All Releases](https://github.com/ntn0de/mac-patro-native/releases)
- [Source Code on GitHub](https://github.com/ntn0de/mac-patro-native/)

---

## Installation and Troubleshooting

1.  Download the `Mac.Patro.vX.X.X.dmg` file from the [GitHub Releases page](https://github.com/ntn0de/mac-patro-native/releases).
2.  Open the `.dmg` file.
3.  Drag the `Mac Patro.app` icon into your `Applications` folder.

> **A Quick Heads-Up for macOS Users**
>
> Because the application is not yet notarized by Apple, you might see an error message like this the first time you open it:
>
>
> ![macOS security error message](/images/mac-patro-issue.jpeg)
>
>
> This is a standard macOS security measure. 
>
> To fix it, just open the **Terminal** app and run this command:
>
> ```terminal
> xattr -cr /Applications/Mac\ Patro.app
> ```
>
> After running the command, the app will open without any issues.

## My LinkedIn Announcement

<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7355981573931905025?compact=1" height="399" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>

---

## Legacy Version (Electron)

The original Electron version of Mac Patro is no longer in active development but remains available for download.

*   [Download for Mac (Intel)](https://github.com/ntn0de/ntn0de.github.io/raw/refs/heads/main/blogs/files/Mac%20Patro-darwin-x64.zip)
*   [Download for Mac (Apple Silicon)](https://github.com/ntn0de/ntn0de.github.io/raw/refs/heads/main/blogs/files/Mac%20Patro-darwin-arm64.zip)
