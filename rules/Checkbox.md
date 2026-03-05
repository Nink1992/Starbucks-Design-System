# 组件规范: Checkbox (复选框)

## 1. 概览 (Overview)

* **目的 (Purpose):** `Checkbox` 组件用于在一组可选项中进行多项选择。
* **核心能力 (Capabilities):**
* **多状态:** 支持选中 (Checked)、未选中 (Unchecked) 和 部分选中 (Indeterminate) 三种状态。
* **组合使用:** 通过 `CheckboxGroup` 实现全选/反选及数据双向绑定。
* **灵活布局:** 支持单独使用或成组使用，适应不同的表单场景。
* **状态反馈:** 包含 Hover、Focus、Disabled 等标准交互状态。

---

## 2. 架构规划 (Architecture Planning)

建议 Vue 文件结构如下：

```text
Checkbox/
├── Checkbox.vue             // 主组件
├── CheckboxGroup.vue        // 复选框组组件
├── Checkbox.types.ts        // 类型定义
├── index.ts                 // 导出组件
└── __tests__/               // 单元测试
```

---

## 3. 详细开发规范 (Detailed Specs)

### 3.1 属性定义 (Props - Vue 3)

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `modelValue` | `boolean | any[]` | `false` | 绑定值 (单个为布尔，组为数组) |
| `label` | `string` | `-` | 复选框显示的文本 |
| `value` | `string | number | boolean` | `-` | 选中时的值 (用于组合) |
| `disabled` | `boolean` | `false` | 是否禁用 |
| `indeterminate` | `boolean` | `false` | 是否处于部分选中状态 |

### 3.2 尺寸规格 (Sizing)

* **复选框 (Box):**
    * 宽高: 16px * 16px (视觉对齐建议)
    * 圆角: 4px
* **间距 (Spacing):**
    * 框与文字间距: 8px
    * 组内选项间距: 16px (水平排列)

### 3.3 视觉状态与颜色 Token (Visual Tokens)

请严格遵守 `/rules/Color.md` 中的全局 Token。

| 状态 | 视觉表现 |
| --- | --- |
| **Normal (Unchecked)** | 边框: `gray-4` / 背景: `white` |
| **Checked** | 边框: `primary-color` / 背景: `primary-color` / 图标: `white` |
| **Indeterminate** | 边框: `primary-color` / 背景: `primary-color` / 图标: `white` (横线) |
| **Hover (Unchecked)** | 边框: `primary-color-hover` |
| **Disabled** | 边框: `gray-4` / 背景: `gray-2` / 透明度: 0.5 |

---

## 4. 交互行为 (Interaction)

1. **点击交互:** 点击 Box 或 Label 均可触发状态切换。
2. **Indeterminate:** 该状态通常由父级控制，点击时通常切换为“全选”或“全不选”状态。
3. **动画:** 选中/取消选中时应有轻微的缩放或渐变动画。
