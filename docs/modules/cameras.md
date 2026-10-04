---
id: cameras
title: Cameras & the Camera Bridge
sidebar_position: 11
---

# Cameras & the Camera Bridge

*Add-on — feature key `cameras`, branch-scopable.*

View a branch's camera feeds from the admin app, streamed from ordinary IP/CCTV cameras already
on the shop's own network (no special camera hardware required) — Dahua-compatible RTSP cameras
today.

## How it works

1. Add a camera under a branch (name, IP address, username/password, and its RTSP channel — most
   single-lens cameras are channel 1, but not always; check the camera's own settings if the feed
   doesn't match what you expect).
2. Install the **Zendoria Camera Bridge** — a small Windows program that runs on any PC on the same
   shop network as the cameras — and pair it to the branch using a one-time code generated from
   the Cameras page.
3. The Bridge pulls each camera's RTSP feed, converts it locally, and publishes it through a
   secure public address (no port-forwarding, no static IP needed) — the admin app then just
   plays that address back.

## What it needs

- A Windows PC on the same local network as the cameras, left running (it doesn't need to be a
  dedicated machine — any Windows PC that's normally on will do).
- An internet connection on that PC.
- The camera's IP address, login, and RTSP channel.

If a camera stops showing a feed, the most common causes are: the camera itself is
off/unreachable on the network, the RTSP channel is wrong, or the Bridge's pairing has expired and
needs a fresh code from the Cameras page.
