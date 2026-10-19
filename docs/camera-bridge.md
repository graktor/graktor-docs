---
id: camera-bridge
title: Zendoria Camera Bridge
sidebar_position: 5
---

# Zendoria Camera Bridge

Runs on one always-on computer at a branch, on the same network as its cameras. It pulls each
camera's video feed and publishes it as a real, secure web address that the Graktor admin app can
show — no port forwarding on the shop's router, no manual URLs to paste in.

## Downloads

| Platform | Download |
|---|---|
| Windows (64-bit) | **[ZendoriaCameraBridge-win-x64.exe](https://pub-339115a4b0fb49f68be8268e590f7328.r2.dev/releases/ZendoriaCameraBridge-win-x64.exe)** |
| macOS (Intel) | **[ZendoriaCameraBridge-macos-x64](https://pub-339115a4b0fb49f68be8268e590f7328.r2.dev/releases/ZendoriaCameraBridge-macos-x64)** |
| macOS (Apple Silicon) | **[ZendoriaCameraBridge-macos-arm64](https://pub-339115a4b0fb49f68be8268e590f7328.r2.dev/releases/ZendoriaCameraBridge-macos-arm64)** |
| Linux (64-bit) | **[ZendoriaCameraBridge-linux-x64](https://pub-339115a4b0fb49f68be8268e590f7328.r2.dev/releases/ZendoriaCameraBridge-linux-x64)** |

Source and every build are also published on GitHub:
[graktor/graktor-camera-bridge releases](https://github.com/graktor/graktor-camera-bridge/releases/tag/latest).

Each is a single self-contained executable — no separate .NET install needed. On macOS/Linux,
make it executable first: `chmod +x ZendoriaCameraBridge-*`. On macOS, Gatekeeper will say it's
from an unidentified developer the first time — right-click and choose "Open" to bypass that.

## What it needs on that computer

- Always on (or on whenever you want cameras viewable).
- **[Tailscale](https://tailscale.com/download)** installed first — a real, separate install
  this program does not do for you (it drives Tailscale's own command line rather than
  replacing it). Nothing else needs configuring in Tailscale itself; the Bridge connects it to
  Zendoria's own private network automatically during setup. Tailscale has its own installers
  for [Windows](https://tailscale.com/download/windows), [macOS](https://tailscale.com/download/mac),
  and [Linux](https://tailscale.com/download/linux) — use whichever matches the computer running
  the Bridge. On Linux, the Bridge needs to run with permission to configure networking (typically
  as root, or however your distro's Tailscale install expects to be driven).
- Network access to the cameras' IP addresses (it should be, since it's the same LAN).

MediaMTX (the actual video relay engine) is downloaded automatically on first run, matching your
OS and CPU — nothing to install by hand for that part.

## Setup

1. In the Graktor admin app, go to **Cameras → Zendoria Camera Bridge**, pick the branch, and
   generate a pairing code (valid 15 minutes).
2. Run the Bridge executable for your platform (see Downloads above).
3. Paste in the pairing code when asked. That's it — from then on it runs unattended,
   automatically picks up any camera added to that branch in Graktor, and keeps each camera's
   playback URL up to date on its own.

To run it automatically at startup:
- **Windows**: add a shortcut to it in `shell:startup` (Win+R → `shell:startup`), or set it up as
  a Scheduled Task set to run at log-on.
- **macOS**: add it as a Login Item (System Settings → General → Login Items).
- **Linux**: a systemd user service or your distro's autostart mechanism.

## How it actually works

Every 60 seconds it: sends a heartbeat, fetches the branch's camera list (with real RTSP
credentials — this program is the thing that connects to the cameras directly, not a browser),
regenerates and restarts a local [MediaMTX](https://github.com/bluenviron/mediamtx) instance if
the camera list changed, makes sure Tailscale is connected and its
[Funnel](https://tailscale.com/kb/1223/funnel) is turned on for MediaMTX's port, and reports each
camera's resulting public HTTPS address back to Zendoria.

## Troubleshooting

Check `bridge.log`, next to the executable — every run appends to it, and it's what to look at
first if a camera isn't showing up. Re-running the program with a fresh pairing code (delete
`bridge-config.json` first) starts pairing over from scratch if something's gone wrong with this
installation's own key.

**A camera won't connect even though pairing and Tailscale both succeeded**: if the error looks
like a socket/permission failure (not a timeout), check whether a VPN is running on that computer
— some VPN clients (especially WireGuard-based ones with a "block untunneled traffic" option)
block local LAN access entirely while connected, which prevents the Bridge from ever reaching the
camera on your own network. Disconnect the VPN, or exclude your camera's subnet from its tunnel.
