---
id: apps
title: Apps
sidebar_position: 4
---

# Apps

Graktor runs in any browser first — installing an app is optional. Three different kinds of
install exist, for three different needs:

- **Cloud apps** (below) — every install talks to the same live server, so nothing is ever out of
  sync between devices. Needs an internet connection.
- **[Graktor Offline](#graktor-offline)** — a standalone install with its own local database, no
  cloud account and no ongoing internet connection needed. Licensed by key.
- **[Graktor Complete Suite](#graktor-complete-suite)** — one installer, choose either of the
  above at setup (and switch later).

## Windows

**[Download for Windows](https://pub-339115a4b0fb49f68be8268e590f7328.r2.dev/releases/Graktor-Setup-1.0.0.exe)**
(.exe installer, 64-bit)

An installable desktop app that opens straight into Graktor, with a friendlier offline screen if
the connection drops. Currently unsigned, so Windows SmartScreen will show an "unrecognized app"
warning on first run — click "More info" → "Run anyway".

## Android

**[Download for Android](https://pub-339115a4b0fb49f68be8268e590f7328.r2.dev/releases/Graktor-1.0.0.apk)**
(.apk, Android 8.0+)

A native Android app, same live-URL approach as Windows. This is a signed release build, installed
directly from the file rather than the Play Store — your phone will ask you to allow installs from
whatever app you used to open the file ("install unknown apps"), a one-time permission per app.
Built from [graktor/graktor-mobile](https://github.com/graktor/graktor-mobile).

## iOS

An iOS build exists ([graktor/graktor-mobile](https://github.com/graktor/graktor-mobile)) but
isn't distributable yet — Apple requires a paid Developer Program account and signing certificates
to install on a real iPhone, which this project doesn't have set up. Camera viewing (not the
Camera Bridge relay itself, which can't run on iOS by design) works fine from the web app in
Safari in the meantime.

## Linux

**[Download for Linux](https://pub-339115a4b0fb49f68be8268e590f7328.r2.dev/releases/Graktor-1.0.0.AppImage)**
(.AppImage, x86_64)

An AppImage runs on most distributions with no install step: make it executable
(`chmod +x Graktor-1.0.0.AppImage`) and double-click or run it directly.

## macOS

**[Download for macOS](https://pub-339115a4b0fb49f68be8268e590f7328.r2.dev/releases/Graktor-1.0.0-universal.dmg)**
(.dmg, universal — works on both Intel and Apple Silicon Macs)

Built via a GitHub Actions macOS runner (electron-builder can't cross-build macOS apps from
Windows or Linux, so this one runs on real Apple hardware in CI). Currently unsigned, so macOS
Gatekeeper will say it's from an unidentified developer — right-click the app and choose "Open"
to bypass that the first time.

## Graktor Offline

A standalone install that runs entirely on the machine it's on — its own local database, no cloud
account and no ongoing internet needed for day-to-day use. Activated once with a 14-digit license
key, an existing paid Graktor account, or by buying a key on the spot. A licensed install can
optionally back its database up to the cloud (at most every 6 hours, plus up to 2 emergency
backups a day), restorable onto a replacement machine with the same key.

Source and every build: **[graktor/graktor-offline](https://github.com/graktor/graktor-offline)**
— see its [latest release](https://github.com/graktor/graktor-offline/releases/tag/latest) for
Windows/macOS/Linux downloads.

In scope: core POS, inventory, customers, reports, staff accounts, a single branch. Cameras, the
online store, SMS/email notifications, and multi-branch are cloud-only and aren't part of this
build.

### Recovering a lost license key

First-run setup also asks for your email and, optionally, your phone number — not a cloud
account, just how Graktor can match a "forgot my key" request back to your install later. If a
key is ever lost (new computer, reinstalled, misplaced), the activation screen's **Recover** tab
sends a one-time code to that email or phone; entering it lists every key registered to that
contact and lets you reuse one directly, no need to dig up the original key. An install set up
with no email or phone on file has no way to recover its key this way.

### Backup scope and platform-requested backups

Beyond the whole-database **Full** backup, a licensed install can also run a lighter **Customers
only** or **Products only** backup — the same data shape as the cloud product's own export,
useful when you just want a safety copy of one thing rather than the entire local database.
Graktor's support team can also flag a backup to run on your license from their side; since an
offline install has no permanent live connection to be pushed to instantly, this is picked up and
run automatically the next time your install checks in (on startup, or when you open the
activation screen). Backup history and whether cloud backup is currently on are both visible from
the activation screen at any time.

## Graktor Complete Suite

For a business that isn't sure yet whether it wants a cloud account or a license-key install — or
wants the option to switch later. One installer; the first launch asks which mode to run in
(**Ctrl+Shift+M** / **Cmd+Shift+M** switches any time afterward). Under the hood it's the exact
same two products above, merged into one app.

Source and every build: **[graktor/graktor-suite](https://github.com/graktor/graktor-suite)** —
see its [latest release](https://github.com/graktor/graktor-suite/releases/tag/latest) for
Windows/macOS/Linux downloads.

## Zendoria Camera Bridge

A separate install, run on one always-on PC at a branch rather than any staff member's own
device — see the dedicated [Camera Bridge](camera-bridge) page for downloads and setup. Its
source and every build are also on GitHub:
**[graktor/graktor-camera-bridge](https://github.com/graktor/graktor-camera-bridge)**
(see its [latest release](https://github.com/graktor/graktor-camera-bridge/releases/tag/latest)
for direct downloads).
