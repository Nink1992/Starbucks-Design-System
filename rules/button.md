
# 组件规范: Button (按钮) 

## 1. 概览 (Overview)

* **目的 (Purpose):** `Button` 组件用于触发具体的业务逻辑或交互行为。
* **核心能力 (Capabilities):**
* **多主题:** 支持默认 (Default)、品牌色 (Primary) 和错误色 (Error) 三种填充方案。
* **全状态反馈:** 包含 常规、悬停、激活、禁用及加载中状态。
* **尺寸与形状:** 提供大、中、小三种尺寸，以及圆角、直角、圆形三种形状。
* **布局逻辑:** 默认采用“适应内容”模式，防止无意义的宽度撑满。



---

## 2. 架构规划 (Architecture Planning)

建议 Vue 文件结构如下：

```text
Button/
├── Button.vue               // 主组件 (SFC: Template + Logic + Scoped CSS)
├── Button.types.ts          // 定义 Props 接口与 Injection Keys
├── ButtonGroup.vue          // 可选：按钮组容器
├── index.ts                 // 导出组件
└── __tests__/               // 单元测试

```

---

## 3. 详细开发规范 (Detailed Specs)

### 3.1 属性定义 (Props - Vue 3)

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `variant` | `'base' | 'outline' | 'dashed' | 'text'` | `'base'` | 按钮类型 (基础, 描边, 虚边, 文字) |
| `theme` | `'primary' | 'default' | 'danger'` | `'default'` | 主题样式 (品牌主要, 默认, 危险) |
| `size` | `'large' | 'medium' | 'small'` | `'medium'` | 尺寸 (大, 中, 小) |
| `shape` | `'rectangle' | 'round' | 'square' | 'circle'` | `'rectangle'` | 形状 (矩形, 圆角矩形, 正方形, 圆形) |
| `icon` | `boolean` | `false` | 是否显示图标 |
| `iconType` | `'prefixIcon' | 'suffixIcon' | 'singleIcon'` | `'prefixIcon'` | 图标位置/类型 |
| `loading` | `boolean` | `false` | 加载中状态 |
| `disabled` | `boolean` | `false` | 禁用状态 |
| `block` | `boolean` | `false` | 是否撑满父容器宽度 |

### 3.2 尺寸规格 (Sizing)

* **高度 (Height):**
    * `large`: 40px
    * `medium`: 32px
    * `small`: 24px
* **圆角 (Border Radius):**
    * `rectangle`: 4px
    * `round`: 4px (默认)
    * `square`: 0px
    * `circle`: 50%
* **间距 (Spacing):** 
    * 图标与文字间距: 8px
    * 水平内边距: 大尺寸 20px, 中尺寸 16px, 小尺寸 12px

### 3.3 视觉状态与颜色 Token (Visual Tokens)

请严格遵守 `/rules/Color.md` 中的全局 Token。

#### 1. 品牌主要主题 (theme="primary")

| 状态 | base (基础填充) | outline (描边) | text (文字) |
| --- | --- | --- | --- |
| **Normal** | 背景: `primary-color` / 文字: `white` | 背景: `white` / 边框: `primary-color` / 文字: `primary-color` | 背景: 透明 / 文字: `primary-color` |
| **Hover** | 背景: `primary-color-hover` | 背景: `primary-color-light` / 边框: `primary-color-hover` / 文字: `primary-color-hover` | 背景: `primary-color-light` / 文字: `primary-color-hover` |
| **Active** | 背景: `primary-color-click` | 背景: `primary-color-light` / 边框: `primary-color-click` / 文字: `primary-color-click` | 背景: `primary-color-light` / 文字: `primary-color-click` |
| **Disabled** | 背景: `primary-color-disabled` / 文字: `white` | 背景: `white` / 边框: `gray-4` / 文字: `text-disabled` | 背景: 透明 / 文字: `text-disabled` |

#### 2. 默认主题 (theme="default")

| 状态 | base (基础填充) | outline (描边) | dashed (虚边) |
| --- | --- | --- | --- |
| **Normal** | 背景: `gray-3` / 文字: `text-primary` | 背景: `white` / 边框: `gray-4` / 文字: `text-primary` | 背景: `white` / 边框: `gray-4` (虚线) / 文字: `text-primary` |
| **Hover** | 背景: `gray-4` | 背景: `white` / 边框: `primary-color-hover` / 文字: `primary-color-hover` | 背景: `white` / 边框: `primary-color-hover` / 文字: `primary-color-hover` |
| **Active** | 背景: `gray-5` | 背景: `white` / 边框: `primary-color-click` / 文字: `primary-color-click` | 背景: `white` / 边框: `primary-color-click` / 文字: `primary-color-click` |
| **Disabled** | 背景: `gray-2` / 文字: `text-disabled` | 背景: `white` / 边框: `gray-4` / 文字: `text-disabled` | 背景: `white` / 边框: `gray-4` / 文字: `text-disabled` |

#### 3. 危险主题 (theme="danger")

* (颜色映射逻辑同 Primary，但使用 `error5-color-normal` 系列 Token)
* **Normal:** 背景: `error5-color-normal` / 文字: `white`
* **Hover:** 背景: `error4-color-hover`
* **Active:** 背景: `error6-color-click`
* **Disabled:** 背景: `error3-color-disabled` / 文字: `white`

---

## 4. 交互行为 (Interaction)

1. **Sizing 行为:** 默认必须设置为 `width: fit-content` 或 `display: inline-flex`。
2. **Loading 状态:** 
    * Primary 变体显示 `loading-white`。
    * Default/Outline 变体显示 `loading-blue`。
3. **Focus 状态:** 显示 `2px` `primary-color-focus` (#B8E9D6) 的外发光。
4. **图标支持:** `singleIcon` 模式下按钮应为正方形（宽高相等）。
