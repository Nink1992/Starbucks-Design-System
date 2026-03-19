# Rule 3: Visual & Layout Constraints

## 1. Design Tokens 强校验
- **严禁硬编码**：禁止在 CSS 中出现 `hex`, `rgb`, `rgba` 或非 `0/1px/50%/100%` 的像素值。
- **变量引用**：必须使用项目预设变量，如 `var(--primary-color)` 或 `var(--spacing-md)`。
- **BEM 命名**：遵循 BEM (Block-Element-Modifier) 命名约定，确保样式层级清晰。
- **禁止 !important**：严禁使用 `!important` 覆盖样式，应通过 CSS 变量或选择器优先级解决。

## 2. 布局逻辑
- **盒子模型**：组件外层严禁设置 `margin`。间距应由父容器组件（如 `Space`）或布局组件控制。
- **原子组装制**：复杂的“分子组件”（如 `SearchSelect`）必须由底层的“原子组件”（如 `Input`, `Tag`, `List`）拼装而成，严禁重写原子逻辑。

## 3. 基础组件约束
- **原子组件**：必须具备高度的属性化开关（Props），支持不同的尺寸（Sm/Md/Lg）、主题颜色和禁用状态。