# Design Migration Plan — Phase 1

## Principle

Integrate centrally without redesigning blindly.

## Sequence

### Step 1 — Dependencies
Install central packages and prove CI access.

### Step 2 — Token compatibility
Import central token CSS.
Keep current Engineering token names temporarily as aliases so rendering does not change unexpectedly.

### Step 3 — Font/runtime contract
Read Engineering profile from central font registry.
Keep self-hosted Shabnam assets in the consumer until the central font binary strategy is finalized.

### Step 4 — Locale helper
Replace duplicated direction/number logic with central helpers while keeping the existing locale persistence UX.

### Step 5 — Remove locale route surface
Delete generated `app/fa` compatibility output and the legacy redirect mechanism.
Update tests and documentation so only language-neutral routes remain.

### Step 6 — QA
Run the central viewport matrix and interaction checks.
Only then classify visual differences for Phase 2.

## Rollback

Central dependencies are pinned to exact prerelease versions.
If integration fails, revert the adoption PR without rewriting prior Engineering history.
