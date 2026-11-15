# AGENTS.md

中文 IDaaS / IAM 技术书，使用 Astro + Starlight 开发。

## 仓库约定

- 正文：`src/content/docs/`。frontmatter 保留 `title`、`description`、`sidebar.order`。侧栏由 `astro.config.mjs` 的 `sidebar` 按目录生成。
- 博客 frontmatter（`src/content/docs/blog/`）：`title`、`description`、`date`、`lastmod`、`tags`。不写 `categories`——starlight-blog 不渲染它，RSS 也只取 `tags`，写了等于白写且容易出现大小写不一致。
- 静态源文件：`public/`（favicon 等原样拷贝到站点根）。Logo 等需处理的资源：`src/assets/`。
- 站内链接：普通 Markdown 路径，如 `[标题](/docs/fundamentals/xxx/)`。
- 页面搬家默认不加 redirects，旧地址 404。
- 只改任务所需文件。不顺手改无关章节。
- 中间过程性内容不入库如：讨论、迁移校验脚本。
- 博客标签（`src/content/docs/blog/` 的 `tags`）只能用下方固定词表，每篇取「产品 + 1–2 个问题域」，最多 3 个；不要在标签里堆关键词。

  | 轴 | 词表 |
  | --- | --- |
  | 产品 | `keycloak` / `oauth2-proxy` / `openbao` / `active-directory` |
  | 问题域 | `auth` / `database` / `kubernetes` |

  **产品标签按文章主题判定，不按提及判定。** 只有文章确实在讲这个产品（排障对象、配置主体、集成方案的一方）才打；只是顺带提一句、或作为另一篇文章的前置条件出现的，不打。判断标准：去掉该产品名后文章主题是否仍成立——仍成立就不打这个标签。

  **问题域标签描述文章回答的问题类型**，与产品无关。`auth` 是宽口径：登录、登出、会话、OIDC、反向代理下的认证链路都归它，不再拆分。

  不属于这两轴的词（具体报错串、单个配置项、单个机制名、厂商特性名如 Traefik/ForwardAuth/JDBC）不建标签，交给标题和 `description`。新增产品要先在 issue 或讨论里确认，不要临时造词。大小写一律小写 kebab-case，同义词只保留一个。

## 写作风格

- 读取并遵循项目 skill `tech-docs-blog-writing`（`npx skills add https://github.com/void-sleep/agent-skills --skill tech-docs-blog-writing`）

## Git 提交规范

Conventional Commits：`<type>(<scope>): <description>`。`type`：`feat` / `fix` / `docs` / `chore` / `ci` / `build`。`scope`：小写 kebab-case。按模块分批，互不相关的改动分开提交。未明确指定时不提交未跟踪文件和二进制。

### Worktree

linked worktree 只放本仓 `.worktrees/<slug>/`。`<slug>` 用分支语义（如 `astro-starlight`），不用项目名。禁止仓库外、并列目录或其他路径。

### 提交信息

- 英文（header 与 body；Issue 放页脚 `Refs:` / `Closes:`）
- 写主要变更和原因，不写逐文件流水账
- 禁止 agent 署名后缀（`Co-Authored-By`、`Generated with ...`）

### main 分支清洁

- 构建产物、日志、缓存、临时文件、依赖目录等中间产物一律不入库
- 排除规则写进仓库 `.gitignore`
- 提交前 `git status`，确认无多余文件

## 红线

- 不入库任何敏感信息：实密（密码、token、私钥、`.env`、cookie、证书）、本公司内网与未公开接入点、未公开产品规划。
