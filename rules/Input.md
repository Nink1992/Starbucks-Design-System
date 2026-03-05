# 组件规范: Input (输入框)

## 1. 概览 (Overview)

* **目的 (Purpose):** `Input` 组件是表单系统的核心元素，用于承载用户的文本数据输入。它通过标准化的视觉反馈和功能扩展，引导用户高效、准确地完成信息录入。
* **核心能力 (Capabilities):**
* **基础输入:** 支持受控/非受控模式，支持原生 `type` 属性（text, password, number 等）。
* **尺寸变体:** 提供 Large (40px)、Medium (32px)、Small (24px) 三种高度。
* **增强插件:** 支持前缀/后缀（图标或文本）、一键清空（Clearable）、字数统计（Show Count）。
* **反馈交互:** 包含 Hover、Focus、Disabled、ReadOnly 及 Validation Error 等视觉状态。

---

## 2. 架构规划 (Architecture Planning)

建议 Vue 文件结构如下：

```text
Input/
├── Input.vue                 // 主组件
├── Input.types.ts            // 类型定义
├── components/               // 子组件
│   ├── InputAffix.vue        // 前后缀
│   └── InputCount.vue        // 字数统计
├── index.ts                  // 导出组件
└── __tests__/                // 单元测试
```

---

## 3. 详细开发规范 (Detailed Specs)

### 3.1 属性定义 (Props - Vue 3)

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `modelValue` | `string | number` | `-` | 绑定值 |
| `type` | `string` | `'text'` | 输入框类型 |
| `placeholder` | `string` | `-` | 占位文本 |
| `size` | `'large' | 'medium' | 'small'` | `'medium'` | 尺寸 |
| `disabled` | `boolean` | `false` | 是否禁用 |
| `allowClear` | `boolean` | `false` | 是否允许清空 |
| `status` | `'error' | 'warning'` | `-` | 校验状态 |

### 3.2 尺寸规格 (Sizing)

* **高度 (Height):**
    * `large`: 40px
    * `medium`: 32px
    * `small`: 24px
* **圆角 (Border Radius):**
    * 统一圆角: 4px
* **内边距 (Padding):**
    * 水平内边距: 12px

### 3.3 视觉状态与颜色 Token (Visual Tokens)

请严格遵守 `/rules/Color.md` 中的全局 Token。

| 状态 | 视觉表现 |
| --- | --- |
| **Normal** | 边框: `gray-4` / 背景: `white` |
| **Hover** | 边框: `primary-color-hover` |
| **Focus** | 边框: `primary-color` / 阴影: `primary-color` (Fade) |
| **Error** | 边框: `error-color` |
| **Disabled** | 背景: `gray-2` / 边框: `gray-4` / 文字: `text-disabled` |

---

## 4. 交互行为 (Interaction)

1. **聚焦行为:** 聚焦时边框变色并显示光晕阴影。
2. **清空操作:** 当 `allowClear` 开启且有内容时，Hover 显示清空图标，点击清空内容并保持焦点。
3. **字数统计:** 输入时实时更新字数，超出限制时显示错误样式。
