---
title: Arcane Artistry
description: A Minecraft mod that lets players cast spells by moving their mouse, built around extensible design patterns for adding new spells quickly.
category: Minecraft Mod
cover: /images/projects/arcane-artistry/cover.jpg
coverAlt: A moss-covered stone structure rendered in Minecraft
year: '2023'
role: Solo Developer
order: 2
gallery:
  - src: /images/projects/arcane-artistry/gallery-1.jpg
    alt: A player casting a fireball spell mid-air
  - src: /images/projects/arcane-artistry/gallery-2.jpg
    alt: The spell-crafting menu showing a drawn gesture
stack:
  - label: Java
    icon: logos:java
    url: https://openjdk.org
  - label: Minecraft Forge
    icon: mdi:hammer-wrench
    url: https://files.minecraftforge.net
  - label: Gradle
    icon: logos:gradle
    url: https://gradle.org
links:
  - label: Source Code
    url: https://github.com/example/arcane-artistry
    icon: mdi:github
    primary: true
---

## Overview

Arcane Artistry adds a gesture-based spellcasting system to Minecraft: players draw a shape with the mouse, the mod matches it against a library of known gestures, and the matching spell fires. The goal was to make casting feel physical instead of just another hotbar item.

## Highlights

- A gesture-recognition system that scores the player's mouse path against reference shapes instead of relying on brittle exact matches
- Every spell is built from small, reusable effect components (projectile, area, buff, ...) combined with the Decorator and Strategy patterns
- A spell-crafting menu that lets players preview a gesture before binding it, so new spells can be added through data alone

## Design Patterns in Practice

The spell system is the core of the mod. Each spell is a composition of independent `SpellEffect` objects, which means a new spell is usually just a new combination of existing pieces rather than new code. That structure is what makes it realistic to keep adding spells without the codebase growing linearly in complexity.

## What's Next

The gesture recognizer currently runs entirely on the client; moving validation to the server is the main next step so multiplayer servers can trust which spell was actually cast.