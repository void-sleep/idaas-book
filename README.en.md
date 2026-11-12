# IDaaS Book

A login page is easy. An identity system is not. Accounts, permissions, SSO, sessions, and audit each fail on their own in production.

This is a Chinese technical book on IDaaS / IAM. It explains why OAuth 2.0, OIDC, and SAML work the way they do, then lands on configurations that run on Keycloak, CAS, Dex, and Kubernetes.

Products are compared with one set of criteria: Keycloak, CAS, Dex, Casdoor. Passkey, ReBAC, and Zero Trust are their own chapters.

Read online: [idaas.xlabs.club](https://idaas.xlabs.club)

[![Deploy](https://img.shields.io/github/actions/workflow/status/void-sleep/idaas-book/.github%2Fworkflows%2Fgh-pages.yml?label=deploy)](https://github.com/void-sleep/idaas-book/actions/workflows/gh-pages.yml)
[![License](https://img.shields.io/badge/License-CC%20BY--NC%204.0-blue)](https://creativecommons.org/licenses/by-nc/4.0/)

- [Reading](#reading)
- [Build](#build)
- [Contributing](#contributing)
- [License](#license)

## Reading

| Section | Covers |
|---------|--------|
| [Guide](https://idaas.xlabs.club/docs/guides/) | Paths and conventions |
| [Foundations](https://idaas.xlabs.club/docs/fundamentals/) | IDaaS / IAM, AuthN vs AuthZ, lifecycle |
| [Protocols](https://idaas.xlabs.club/docs/protocols/) | OAuth 2.0 / 2.1, OIDC, SAML, LDAP, SCIM, JWT |
| [Capabilities](https://idaas.xlabs.club/docs/core-capabilities/) | SSO, MFA, federation, audit |
| [Implementation](https://idaas.xlabs.club/docs/implementation/) | Keycloak, CAS, Dex, others, K8s |
| [Keycloak](https://idaas.xlabs.club/docs/keycloak/) | Deploy, themes, security, troubleshooting |
| [Advanced](https://idaas.xlabs.club/docs/advanced-topics/) | Authorization models, Zero Trust, multi-tenant, compliance |
| [Solutions](https://idaas.xlabs.club/docs/solution-blogs/) | Reproducible notes |
| [Blog](https://idaas.xlabs.club/blog/) | Short posts |

Start from the job in front of you:

| Job | Start here |
|-----|------------|
| Build a map | [Guide](https://idaas.xlabs.club/docs/guides/introduction/) → [Foundations](https://idaas.xlabs.club/docs/fundamentals/) → [Protocols](https://idaas.xlabs.club/docs/protocols/) |
| SSO / protocol integration | [OAuth 2.0](https://idaas.xlabs.club/docs/protocols/oauth2-deep-dive/) → [OIDC](https://idaas.xlabs.club/docs/protocols/openid-connect/) → [SAML](https://idaas.xlabs.club/docs/protocols/saml2/) → [SSO](https://idaas.xlabs.club/docs/core-capabilities/sso-single-sign-on/) → [Integration](https://idaas.xlabs.club/docs/implementation/integration-patterns/) |
| Pick a platform | [Keycloak architecture](https://idaas.xlabs.club/docs/implementation/keycloak-architecture/) → [CAS](https://idaas.xlabs.club/docs/implementation/cas-apereo/) / [Dex](https://idaas.xlabs.club/docs/implementation/dex-identity/) → [Comparison](https://idaas.xlabs.club/docs/advanced-topics/opensource-iam-comparison/) → [K8s](https://idaas.xlabs.club/docs/implementation/kubernetes-production/) |
| Authorization | [AuthN vs AuthZ](https://idaas.xlabs.club/docs/fundamentals/authentication-vs-authorization/) → [Models](https://idaas.xlabs.club/docs/advanced-topics/authorization-models/) → [Audit](https://idaas.xlabs.club/docs/core-capabilities/audit-and-compliance/) |
| Hardening | [MFA](https://idaas.xlabs.club/docs/core-capabilities/multi-factor-authentication/) → [Practices](https://idaas.xlabs.club/docs/advanced-topics/security-best-practices/) → [Zero Trust](https://idaas.xlabs.club/docs/advanced-topics/zero-trust-identity/) |

## Build

Deploys from `main`. Node.js 26 and pnpm. [Astro](https://astro.build/) + [Starlight](https://starlight.astro.build/).

```text
.
├── astro.config.mjs          # site and sidebar
├── public/                   # static files (favicon)
├── src/
│   ├── assets/               # processed assets (logo)
│   ├── content/docs/         # source
│   │   ├── index.md          # home → /
│   │   ├── blog/             # → /blog/
│   │   └── docs/             # → /docs/… chapters
│   ├── overrides/            # component overrides
│   ├── plugins/
│   └── styles/
└── dist/                     # build output, not committed
```

```bash
pnpm install
pnpm run dev      # http://localhost:4321
pnpm run build    # dist/
```

In-site links are Markdown paths, e.g. `[title](/docs/fundamentals/xxx/)`.

## Contributing

[Issues](https://github.com/void-sleep/idaas-book/issues) · [Pull requests](https://github.com/void-sleep/idaas-book/pulls)

## License

Content: [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/). Site scaffolding follows [Astro](https://github.com/withastro/astro) / [Starlight](https://github.com/withastro/starlight). [简体中文](README.md)
