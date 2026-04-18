# Contributing Guide

Thank you for contributing to FORE.

This repository is currently focused on a product MVP, so contributions should favor clarity, speed, and clean extensibility over premature complexity.

## Contribution Principles

- Keep repository content in English only
- Prefer small, reviewable changes over broad refactors
- Preserve the MVP product loop before adding secondary features
- Make architecture more replaceable, not more rigid
- Document meaningful product or engineering decisions

## Recommended Contribution Areas

- UI polish and accessibility improvements
- Wallet integration groundwork
- Better mock data and demo realism
- Portfolio and settlement state improvements
- Documentation quality
- Build and dependency hardening

## Before You Start

1. Read the `README.md` for project context.
2. Review the current MVP scope before proposing large changes.
3. Check whether the change belongs in the MVP or in a later phase.

## Local Setup

```bash
npm install
npm run dev
```

## Development Expectations

- Use TypeScript for new code
- Keep code comments concise and only where needed
- Avoid adding dead code or placeholder logic that is not wired into the product flow
- Keep UI copy aligned with the product tone: sharp, neutral, and trustworthy
- Do not add Chinese text, comments, or documentation to repository files

## Pull Request Checklist

Before opening a pull request, confirm:

- the project builds successfully with `npm run build`
- new repository content is English only
- user-facing copy matches the FORE product tone
- new logic is connected to a real UI or API path
- documentation is updated if behavior changed

## Commit Style

Use clear, direct commit messages. Examples:

- `Add market discovery filters`
- `Refine trade panel position state`
- `Expand repository documentation`

## Scope Boundaries

Please avoid introducing the following without explicit project alignment:

- production tokenomics assumptions
- irreversible protocol or governance claims
- legal or regulatory promises
- hidden dependencies on external paid services

## Reporting Issues

If you discover a bug, open an issue with:

- a short summary
- expected behavior
- actual behavior
- reproduction steps
- screenshots or logs when useful

## Questions

If a proposed change affects product direction, wallet behavior, settlement semantics, or public messaging, document the reasoning clearly before implementation.

