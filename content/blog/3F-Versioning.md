---
title: '3F Versioning'
---

# 3F Versioning

**Foundation • Feature • Fix**

3F Versioning ("FFF Versioning", "Triple F Versioning", "3FVer" or whatever will stick) is a risk-based versioning system that prioritizes the **User Experience** and **Workflow Integrity** over internal code structure. It is based on [Hyrum's Law](https://www.hyrumslaw.com/) and acknowledges that while any change can be breaking, the scale of the change determines the level of caution required by the user when updating.

## The Categories

3F Versioning consists of three categories: *Foundation.Feature.Fix*

### Foundation
The first digit represents a **Systemic Shift**.
- **Definition:** Changes that alter the mental model, core architecture, or primary interface of the software.
- **Criteria:** If a user needs to "re-learn" how to perform a primary task, or if data migration requires manual intervention.
- **Examples:** A complete UI overhaul, changing from a local-save to a cloud-save model, or a total API rewrite that requires updating all integration logic.
- **User Action:** High caution. Read the migration guide; expect workflow disruption.

### Feature

The second digit represents **Evolution and Expansion**.
- **Definition:** New capabilities added to the software or meaningful modifications to existing ones that do not redefine the overall system.
- **Criteria:** The "Core Loop" or primary workflow remains intact, even if specific sub-tasks or tools have changed. A user might have to adjust a specific workflow, but they don't have to re-learn the entire software.
- **Examples:**
    - **Modification:** Changing the mechanics of a specific tool (e.g., the Minecraft combat update or changing how a "Crop" tool behaves).
    - **Addition:** Adding a new "Blur" tool, a new game mode, or a new API endpoint.
    - **Refinement:** Improving the logic of an existing filter to produce better results, even if it slightly changes the output.
- **User Action:** Moderate awareness. Explore new additions and check if your specific sub-workflows need minor adjustments. The "big picture" remains the same.

### Fix

The third digit represents **Maintenance and Polishing**.
- **Definition:** Any change intended to bring the software's behavior back in line with its original intent.
- **Criteria:** Rectifying unintended behavior, security vulnerabilities, or cosmetic errors (typos). This includes backend structural changes (like a database migration) that result in zero change to the user’s experience.
- **Examples:** Patching a memory leak, fixing a typo in a menu, or updating a security dependency.
- **User Action:** No caution. Recommended for all users; purely beneficial.

## The Golden Rules of 3F

1. **The User-Centric Lens** Categorization is determined by **User Impact**, not code complexity.
    - A massive backend rewrite with no functional change = **Fix**.
    - A "Death by a Thousand Cuts": While five individual small tweaks might be **Features** if released separately, grouping them into one massive release that alters the entire system's feel makes that release a **Foundation** change.
2. **The Feature Scope** The Feature category is the "workhorse" of 3F. It includes:
    - **Additions:** New tools, modes, or endpoints.
    - **Modifications:** Updates to existing mechanics. If you change how a specific tool works, it is a Feature update. Even if that change "breaks" a user's specific habit, if it doesn't break the *entire* system's logic, it stays in the second digit.
3. **The Transparency Principle** Every release requires a changelog because 3F acknowledges that any change is potentially breaking.
    - **Foundation** releases **must** include a Migration Guide or "What's New" onboarding to help users repair broken components or mental models.
    - **Feature/Fix** releases require standard notes so users can self-diagnose unexpected behavior.
4. **Security & Invisible Infrastructure** Security patches, dependency updates, and performance optimizations are **Fixes**. They only move to a higher category if the patch *forces* a visible change in how the user interacts with the software (e.g., a security patch that removes an old login method entirely).

## 3F Versioning Policy

This project uses **3F Versioning** (*Foundation.Feature.Fix*).
1. **Foundation:** Massive systemic changes or bundled features that alter the core experience.
2. **Feature:** New tools or modifications to existing ones. Individual workflows may shift, but the system remains recognizable.
3. **Fix:** Maintenance, security, and invisible backend improvements.

*Note: While 3F follows the 0.0.0 format for compatibility with package managers, the logic is based on User Impact rather than strict API breaking-change rules.*