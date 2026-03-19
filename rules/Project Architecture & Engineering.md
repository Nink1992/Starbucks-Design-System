# Rule 1: Project Architecture & Engineering

## 1. Monorepo 结构管理
- **目录隔离**：所有组件必须定义在 `packages/components` 下，设计变量（Tokens）必须引自 `packages/theme`。
- **引用限制**：组件库内严禁引用任何业务层（apps/*）的代码，确保组件的纯粹性与复用性。

## 2. 依赖管理 (Dependency Guard)
- **原生优先**：优先使用 Vue 3 组合式 API (Composables) 实现逻辑，严禁为了简单功能引入大型第三方库（如 Lodash 全量包）。
- **按需加载**：若必须引入第三方库，必须采用按需引入方式，并配置 Tree-shaking。

## 3. 自动化与质量控制 (CI/CD)
- **合规性检查**：输出的代码必须符合 ESLint (Vue 强校验) 和 Stylelint 规范。
- **单元测试驱动**：新组件创建时，必须同步生成 `[Name].spec.ts` 单元测试，覆盖基础渲染、核心 Props 交互及边界情况。
- **文档自动化**：组件变动必须触发 Storybook 的自动预览更新。