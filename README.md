# IDaaS Book

登录页好接，身份系统不好做。账号、权限、SSO、会话、审计，每一项都会在生产里单独翻车。

这是一本中文 IDaaS / IAM 技术书。先讲 OAuth 2.0 / OIDC / SAML 为什么这样设计，再落到 Keycloak、CAS、Dex 与 Kubernetes 上能跑的配置。

选型用同一套标准比 Keycloak、CAS、Dex、Casdoor。Passkey、ReBAC、零信任单独成章。

在线阅读：[idaas.xlabs.club](https://idaas.xlabs.club)

[![Deploy](https://img.shields.io/github/actions/workflow/status/void-sleep/idaas-book/.github%2Fworkflows%2Fgh-pages.yml?label=deploy)](https://github.com/void-sleep/idaas-book/actions/workflows/gh-pages.yml)
[![License](https://img.shields.io/badge/License-CC%20BY--NC%204.0-blue)](https://creativecommons.org/licenses/by-nc/4.0/)

- [阅读](#阅读)
- [构建](#构建)
- [贡献](#贡献)
- [许可](#许可)

## 阅读

| 章节 | 内容 |
|------|------|
| [阅读指南](https://idaas.xlabs.club/docs/guides/introduction/) | 路线与约定 |
| [基础](https://idaas.xlabs.club/docs/fundamentals/) | IDaaS / IAM、AuthN vs AuthZ、生命周期 |
| [协议与标准](https://idaas.xlabs.club/docs/protocols/) | OAuth 2.0 / 2.1、OIDC、SAML、LDAP、SCIM、JWT |
| [核心能力](https://idaas.xlabs.club/docs/core-capabilities/) | SSO、MFA、联邦、审计 |
| [实现与实践](https://idaas.xlabs.club/docs/implementation/) | Keycloak、CAS、Dex 及其他实现、K8s |
| [Keycloak 实战](https://idaas.xlabs.club/docs/keycloak/) | 部署、主题、安全、排障 |
| [高级主题](https://idaas.xlabs.club/docs/advanced-topics/) | 授权模型、零信任、多租户、合规 |
| [解决方案](https://idaas.xlabs.club/docs/solution-blogs/) | 可复现的落地笔记 |
| [博客](https://idaas.xlabs.club/blog/) | 短文 |

按手头的问题进：

| 要做的事 | 从这里读 |
|----------|----------|
| 先建立体系 | [阅读指南](https://idaas.xlabs.club/docs/guides/introduction/) → [基础](https://idaas.xlabs.club/docs/fundamentals/) → [协议](https://idaas.xlabs.club/docs/protocols/) |
| SSO / 协议接入 | [OAuth 2.0](https://idaas.xlabs.club/docs/protocols/oauth2-deep-dive/) → [OIDC](https://idaas.xlabs.club/docs/protocols/openid-connect/) → [SAML](https://idaas.xlabs.club/docs/protocols/saml2/) → [SSO](https://idaas.xlabs.club/docs/core-capabilities/sso-single-sign-on/) → [集成模式](https://idaas.xlabs.club/docs/implementation/integration-patterns/) |
| 身份平台选型 | [Keycloak 架构](https://idaas.xlabs.club/docs/implementation/keycloak-architecture/) → [CAS](https://idaas.xlabs.club/docs/implementation/cas-apereo/) / [Dex](https://idaas.xlabs.club/docs/implementation/dex-identity/) → [方案对比](https://idaas.xlabs.club/docs/advanced-topics/opensource-iam-comparison/) → [K8s](https://idaas.xlabs.club/docs/implementation/kubernetes-production/) |
| 权限治理 | [AuthN vs AuthZ](https://idaas.xlabs.club/docs/fundamentals/authentication-vs-authorization/) → [授权模型](https://idaas.xlabs.club/docs/advanced-topics/authorization-models/) → [审计](https://idaas.xlabs.club/docs/core-capabilities/audit-and-compliance/) |
| 安全增强 | [MFA](https://idaas.xlabs.club/docs/core-capabilities/multi-factor-authentication/) → [安全实践](https://idaas.xlabs.club/docs/advanced-topics/security-best-practices/) → [零信任](https://idaas.xlabs.club/docs/advanced-topics/zero-trust-identity/) |

## 构建

站点随 `main` 部署。需要 Node.js 26 与 pnpm。[Astro](https://astro.build/) + [Starlight](https://starlight.astro.build/)。

```text
.
├── astro.config.mjs          # 站点与侧栏
├── public/                   # 静态源文件（favicon 等）
├── src/
│   ├── assets/               # 需处理的资源（logo）
│   ├── content/docs/         # 正文
│   │   ├── index.md          # 首页 → /
│   │   ├── blog/             # → /blog/
│   │   └── docs/             # → /docs/… 章节
│   ├── overrides/            # 组件覆盖
│   ├── plugins/
│   └── styles/
└── dist/                     # 构建产物，不入库
```

```bash
pnpm install
pnpm run dev      # http://localhost:4321
pnpm run build    # dist/
```

站内链接用 Markdown 路径，例如 `[标题](/docs/fundamentals/xxx/)`。

## 贡献

[Issue](https://github.com/void-sleep/idaas-book/issues) · [Pull Request](https://github.com/void-sleep/idaas-book/pulls)

## 许可

正文：[CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/)。站点脚手架遵循 [Astro](https://github.com/withastro/astro) / [Starlight](https://github.com/withastro/starlight)。[English](README.en.md)
