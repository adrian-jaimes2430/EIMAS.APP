# Security Policy — EIMAS.APP

## Scope

This policy covers security issues affecting the EIMAS.APP repository and application code.

## Reporting

Do not disclose suspected vulnerabilities in a public GitHub issue.

Use GitHub's private security reporting mechanism when available, or contact the project maintainer through the repository's authorized private contact channel.

## Never publish

Do not publicly disclose:

- credentials;
- API keys;
- access tokens;
- production environment variables;
- private customer information;
- private datasets;
- exploit details before remediation;
- secrets accidentally committed to the repository.

## Response principles

Security issues are evaluated according to:

- severity;
- exploitability;
- user impact;
- data exposure;
- production exposure;
- remediation complexity.

If a secret is exposed, assume it is compromised: rotate it, remove it from active use, audit access, and review repository history as appropriate.

## Development requirements

Security review should include:

- authentication;
- authorization;
- input validation;
- output exposure;
- tenant boundaries;
- file access;
- webhook verification;
- rate limits;
- secret handling;
- dependency vulnerabilities;
- error exposure.

## Status

EIMAS.APP is under active development. Security controls will evolve as backend, authentication, integrations and AI capabilities are introduced.
