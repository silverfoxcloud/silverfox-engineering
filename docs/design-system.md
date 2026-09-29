# Silver Fox Engineering Design System

## Direction

The visual language is **Technical Editorial + Living Infrastructure**.

The site should feel engineered rather than decorated: system diagrams, release evidence, package state and technical writing provide the visual/content proof. Motion and accent color are restrained.

## Core palette

The implementation follows the selected Silver Fox strategy:

- Obsidian / near-black: primary infrastructure surfaces;
- charcoal/navy: elevated technical surfaces;
- light editorial gray/white: knowledge and explanatory sections;
- silver: neutral brand/supporting tone;
- Fox Orange: scarce emphasis, release/lifecycle highlights and selected brand moments;
- Engineering Cyan: relationships, flow, telemetry and interactive technical state;
- green: reserved for actual healthy/successful state where needed.

Orange is intentionally not used as the dominant page color.

## Surface rhythm

Homepage surface order deliberately alternates:

- dark system Hero;
- light editorial explanation;
- dark capability/platform surfaces;
- light package evidence;
- dark build/release evidence;
- light engineering writing;
- dark Technology Radar/final engineering surfaces.

This separation communicates a distinction between systems/infrastructure and knowledge/explanation.

## Typography

English and Persian share hierarchy but not forced sentence structure.

Roles used across the portal:

- display/H1;
- H2/H3;
- body and lead;
- kicker/eyebrow;
- metadata;
- monospace for package IDs, versions, dates and code.

Persian copy uses native line-height and removes Latin letter-spacing assumptions. Technical identifiers remain directionally isolated and LTR.

## Spacing and layout

- content uses the shared `.shell` container;
- major editorial sections use generous vertical rhythm rather than dense card grids;
- large capability/platform sections use split rows;
- small metadata uses compact spacing;
- breakpoints collapse structure intentionally instead of relying only on CSS mirroring.

Validated target widths are 320, 375, 430, 768, 1024, 1280, 1440 and 1920.

## Component grammar

### Editorial rows

Used for capabilities, publications, packages and changelog. The row communicates order, metadata and a deep link without turning every item into a floating card.

### Technical surfaces

Dark technical surfaces use:

- fine borders;
- low-contrast grid/connection structure;
- cyan relationship signals;
- restrained depth/shadow;
- no decorative particle field.

### Code surfaces

Package install instructions use directional LTR code blocks even inside Persian pages. Credentials and tokens are never rendered as examples.

### Status

Lifecycle/status language must reflect evidence:

- Prerelease is not styled or worded as Stable.
- Accepted architecture is not styled as Shipped.
- Roadmap is not styled as current runtime.
- Successful verification can use operational/success semantics.

## Diagram grammar

Engineering diagrams use consistent semantics:

- Orange: primary or lifecycle emphasis where needed;
- Cyan: data/network/relationship signal;
- Silver/neutral: shared supporting capability;
- Green: verified healthy/success state only.

Connectors and motion should explain relationships rather than decorate empty space.

## Motion

Allowed motion patterns:

- entering architecture relationships;
- restrained flow pulses;
- radar/filter transitions;
- restrained interaction transitions that never gate content visibility.

Requirements:

- primary content remains visible regardless of JavaScript or scroll position;
- `prefers-reduced-motion: reduce` disables nonessential motion;
- no mouse-following decoration, constant particles or meaningless infinite 3D animation.

## RTL / LTR

Direction is a first-class product mode.

- components use logical properties where possible;
- Persian and English share architecture but can use independently authored copy;
- code/package names/URLs remain LTR-isolated;
- responsive QA is run in both directions;
- RTL and LTR regressions are treated as equally important.

## Accessibility

Current design rules include:

- visible `:focus-visible` treatment;
- keyboard-operable mega menu/radar;
- Escape close behavior;
- semantic mobile navigation;
- reduced-motion support;
- meaningful text fallback for visual systems;
- contrast tuning around dark and light surface transitions.

Browser QA supplements, but does not replace, semantic/accessibility review.
