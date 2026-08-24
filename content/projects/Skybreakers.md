---
title: Skybreakers
description: A multiplayer dogfighting game inspired by Wii Sports Resort, built with realistic airplane physics and custom shaders.
category: Game Development
cover: /images/projects/skybreakers/cover.jpg
coverAlt: The Skybreakers title screen over a stylised ocean and island
year: '2024'
role: Solo Developer
order: 1
gallery:
  - src: /images/projects/skybreakers/gallery-1.jpg
    alt: Two planes chasing each other above the clouds
  - src: /images/projects/skybreakers/gallery-2.jpg
    alt: A plane banking sharply over the island terrain
  - src: /images/projects/skybreakers/gallery-3.jpg
    alt: The island rendered with custom water and lighting shaders
stack:
  - label: Unity
    icon: logos:unity
    url: https://unity.com
  - label: C#
    icon: logos:c-sharp
    url: https://learn.microsoft.com/dotnet/csharp
  - label: HLSL
    icon: mdi:code-braces
links:
  - label: Play in Browser
    url: https://example.itch.io/skybreakers
    icon: mdi:play
    primary: true
  - label: Source Code
    url: https://github.com/example/skybreakers
    icon: mdi:github
---

## Overview

Skybreakers is a multiplayer dogfighting game that takes the pick-up-and-play feel of Wii Sports Resort's Air Sports mode and rebuilds it for the browser. Two to eight players spawn over a shared island, pick a plane, and chase each other through the sky until one pilot is left standing.

## Highlights

- Custom flight model that trades full aerodynamic simulation for something that feels responsive on a keyboard and mouse within seconds
- Hand-written HLSL shaders for the ocean, cloud layer, and hit-effects, tuned to run smoothly on integrated graphics
- Rollback-friendly netcode so mid-air collisions still feel fair with 100ms+ of latency between players

## Under the Hood

Planes are driven by a small set of forces (lift, drag, thrust, and gravity) recalculated every physics tick, rather than a full flight-dynamics model. That trade-off keeps the game readable and skill-based instead of simulation-heavy, which matters more for an eight-player free-for-all than for realism.

## What I'd Do Differently

Given more time, the next iteration would move hit detection fully server-side to remove the last bit of client trust from the netcode, and add a replay system so close finishes can be reviewed shot by shot.