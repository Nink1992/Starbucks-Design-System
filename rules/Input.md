## 组件规范：Input (输入框)

### 1. 概览 (Overview)

* **目的 (Purpose):** `Input` 组件是表单系统的核心元素，用于承载用户的文本数据输入。它通过标准化的视觉反馈和功能扩展，引导用户高效、准确地完成信息录入。
* **主要能力 (Primary Capabilities):**
* **基础输入:** 支持受控/非受控模式，支持原生 `type` 属性（text, password, number 等）。
* **尺寸变体:** 提供 **Large (40px)**、**Medium (32px)**、**Small (24px)** 三种高度。
* **增强插件:** 支持前缀/后缀（图标或文本）、一键清空（Clearable）、字数统计（Show Count）。
* **反馈交互:** 包含 Hover、Focus、Disabled、ReadOnly 及 Validation Error 等视觉状态。
* **组合性:** 高度灵活，可嵌入表单项、搜索栏或弹窗。



---

### 2. 架构规划 (Architecture Planning)

**文件结构建议 (File Structure Recommendation)**

```text
Input/
├── Input.vue                 // 主组件
├── Input.types.ts            // Props, Emits 定义及接口
├── Input.module.scss         // 作用域样式 (BEM 命名)
├── index.ts                  // 组件导出
├── components/               // 子组件目录
│   ├── InputAffix.vue        // 前缀/后缀装饰组件
│   ├── InputClearIcon.vue    // 清空按钮组件
│   └── InputCount.vue        // 字数统计组件
├── hooks/                    // 逻辑抽象
│   └── useInputStatus.ts     // 处理 Focus/Hover 等状态逻辑
├── consts/                   // 常量目录
│   ├── size-configs.ts       // 预设高度、内边距映射
│   └── status-maps.ts        // 状态 Class 映射
├── __tests__/                // 单元测试
└── __stories__/              // Storybook 展示文件

```

**文件结构理由 (File Structure Rationale):**

* **对齐 Figma:** 子组件拆分直接对应 Figma 属性开关，便于属性映射。
* **状态解耦:** 将复杂的交互逻辑移入 Hooks，确保主组件逻辑清晰。
* **样式原子化:** 方便通过 CSS Variables 实现主题切换。

---

### 3. 组件拆分策略 (Component Splitting Strategy)

**推荐的组件细分 (Recommended Component Breakdown):**

* **Input (主组件):**
* 负责 `v-model` 同步、DOM 事件转发及外层容器状态控制。


* **InputAffix (装饰组件):**
* 处理 `prefix` 和 `suffix` 插槽，需根据主组件 `size` 自动缩放图标尺寸。


* **InputClearIcon (清空功能):**
* 仅在 `allowClear` 为真、非空且 Hover 时显示，点击触发更新事件。


* **InputCount (字数统计):**
* 渲染当前字数/最大字数，并在超出限制时切换为错误色。



---

### 4. 交互与视觉规则 (Interactive & Visual Rules)

| 状态 (Status) | 视觉表现 (Visual Requirements) | 触发条件 |
| --- | --- | --- |
| **Normal** | 边框为 `$color-border-default`，背景白色。 | 默认状态。 |
| **Hover** | 边框色切换为 `$color-primary-hover`。 | 鼠标悬停。 |
| **Focus** | 边框维持主色，增加品牌色扩散阴影。 | 焦点置入。 |
| **Error** | 边框与阴影切换为红色系 `$color-error`。 | `status="error"`。 |
| **Disabled** | 背景变灰，`cursor: not-allowed`。 | `disabled` 激活。 |

---

### 5. 辅助功能 (Accessibility)

* **ARIA:** 支持 `aria-invalid`（错误）及 `aria-required`（必填）。
* **Keyboard:** 支持 `Tab` 切换焦点，`Enter` 触发提交逻辑。

---