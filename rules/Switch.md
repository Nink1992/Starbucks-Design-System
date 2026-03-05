# 组件规范: Switch (开关)

## 1. 概览 (Overview)

* **目的 (Purpose):** `Switch` 组件用于在两种状态（开启/关闭）之间进行切换。
* **核心能力 (Capabilities):**
* **即时生效:** 操作后立即触发状态变更，无需额外提交。
* **尺寸变体:** 提供常规 (Medium) 和 大尺寸 (Large) 两种规格。
* **自定义:** 支持自定义开启/关闭的背景色及文字/图标描述。
* **状态反馈:** 支持加载中 (Loading) 和 禁用 (Disabled) 状态。

---

## 2. 架构规划 (Architecture Planning)

建议 Vue 文件结构如下：

```text
Switch/
├── Switch.vue               // 主组件
├── Switch.types.ts          // 类型定义
├── index.ts                 // 导出组件
└── __tests__/               // 单元测试
```

---

## 3. 详细开发规范 (Detailed Specs)

### 3.1 属性定义 (Props - Vue 3)

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `modelValue` | `boolean` | `false` | 绑定值 |
| `size` | `'medium' | 'large'` | `'medium'` | 尺寸 |
| `disabled` | `boolean` | `false` | 是否禁用 |
| `loading` | `boolean` | `false` | 加载状态 |
| `activeColor` | `string` | `-` | 开启时背景色 |
| `inactiveColor` | `string` | `-` | 关闭时背景色 |

### 3.2 尺寸规格 (Sizing)

* **尺寸 (Dimensions):**
    * `medium`: 宽 32px / 高 16px / 滑块 12px
    * `large`: 宽 40px / 高 20px / 滑块 16px
* **圆角 (Border Radius):**
    * 全圆角 (Height / 2)

### 3.3 视觉状态与颜色 Token (Visual Tokens)

请严格遵守 `/rules/Color.md` 中的全局 Token。

| 状态 | 视觉表现 |
| --- | --- |
| **Active (On)** | 背景: `primary-color` / 滑块: `white` |
| **Inactive (Off)** | 背景: `gray-5` / 滑块: `white` |
| **Disabled** | 透明度: 0.6 / 鼠标: not-allowed |
| **Loading** | 显示加载 Spinner / 不可交互 |

---

## 4. 交互行为 (Interaction)

1. **点击交互:** 点击组件区域切换开关状态。
2. **动画:** 滑块移动应有平滑的过渡动画 (Transition)。
3. **加载:** 加载状态下点击无效，且应显示加载指示器。
