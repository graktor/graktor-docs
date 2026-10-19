---
id: apps
title: Apps
sidebar_position: 4
---

# Apps

Graktor runs in any browser first — installing an app is optional, and every install talks to the
same live server, so nothing is ever out of sync between devices.

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

## macOS

Not yet available for download — it has to be built on actual Mac hardware (there's no way to
cross-build a macOS app from Windows or Linux), via a CI pipeline rather than locally. Check back
or ask for status.
