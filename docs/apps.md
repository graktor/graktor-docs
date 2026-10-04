---
id: apps
title: Apps
sidebar_position: 4
---

# Apps

Graktor runs in any browser first — installing an app is optional, and every install talks to the
same live server, so nothing is ever out of sync between devices.

## Windows

An installable desktop app that opens straight into Graktor, with a friendlier offline screen if
the connection drops. Currently unsigned, so Windows SmartScreen will show an "unrecognized app"
warning on first run — click "More info" → "Run anyway".

## Android

A native Android app, same live-URL approach as Windows. Currently a debug build for testing —
installing it requires enabling "install unknown apps" for whatever app you use to open the file.
A signed release build (needed for the Play Store) hasn't been generated yet.

## macOS

Not yet available for download — it has to be built on actual Mac hardware (there's no way to
cross-build a macOS app from Windows or Linux), via a CI pipeline rather than locally. Check back
or ask for status.
