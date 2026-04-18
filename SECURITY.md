# Security Policy

## Supported Scope

This repository is currently an MVP and demo-oriented codebase. Security review is still important, but the project should be treated as pre-production unless explicitly stated otherwise.

Current security focus areas:

- dependency hygiene
- environment variable handling
- wallet connection boundaries
- state integrity in demo trading flows
- future settlement and backend integration surfaces

## Reporting a Vulnerability

If you discover a security issue, please do not disclose it publicly first.

Instead, report it privately to the project maintainers with:

- a clear description of the issue
- affected file paths or modules
- impact assessment
- reproduction steps
- suggested mitigation if available

## Response Expectations

Security reports should be triaged with the following goals:

1. confirm the issue
2. estimate severity and scope
3. isolate any unsafe behavior
4. prepare a patch or mitigation plan
5. disclose fixes responsibly after remediation

## Current MVP Security Limitations

The repository currently has known limitations typical of an MVP:

- mock account state is stored in browser storage
- wallet state is simulated and not cryptographically verified
- no backend authentication layer is present
- no production settlement engine is implemented
- dependency upgrades still need to be hardened before public launch

## Safe Contribution Guidelines

Contributors should:

- avoid committing secrets or local environment files
- avoid expanding permissions without clear need
- review dependency changes carefully
- avoid implying production-grade security where it does not yet exist

## Sensitive Data

Never commit:

- `.env.local`
- private keys
- seed phrases
- access tokens
- deployment credentials

