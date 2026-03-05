# 组件规范: Radio (单选框)

## 1. 概览 (Overview)

* **目的 (Purpose):** `Radio` 组件允许用户在一组互斥的选项中选择其中一个。它通常用于表单提交、设置偏好或切换特定视图。
* **主要能力 (Primary Capabilities):**
* **组管理:** 通过 `RadioGroup` 统一管理选中状态和排列方向。
* **多种变体:** 支持基础单选框 (Basic) 和 按钮单选框 (Button/Segmented)。
* **完整状态:** 覆盖 Normal, Hover, Active, Disable 以及报错 (Error) 状态。
* **布局灵活:** 支持横向等间距排列和纵向等宽排列。



---

## 2. 架构规划 (Architecture Planning)

### 文件结构建议 (File Structure Recommendation)

```text
Radio/
├── Radio.tsx                // 主组件（导出 Radio 和 RadioGroup）
├── RadioGroup.tsx           // 逻辑容器组件
├── RadioButton.tsx          // 基础单选按钮
├── RadioSegment.tsx         // 按钮式单选变体
├── Radio.types.ts           // 类型定义
├── Radio.module.scss        // 样式文件
├── index.ts                 // 导出文件
├── hooks/
│   └── useRadioGroup.ts     // 处理选中逻辑的自定义 hook
└── __tests__/
    └── Radio.test.tsx       // 单元测试

```

---

## 3. 组件拆分策略 (Component Splitting Strategy)

### RadioGroup (容器):

* **职责:** 负责状态分发。接收 `value` 和 `onChange`，通过 Context 传递给子组件，避免 props drilling。
* **属性:** `direction` (horizontal | vertical), `spacing`, `name`。

### RadioButton (基础型):

* **构成:** 核心圆圈 (Indicator) + 标签文本 (Label)。
* **视觉逻辑:** 严格执行 16px/24px 的间距规范。

### RadioSegment (按钮型):

* **构成:** 类似 Segmented Control 的外观。
* **视觉逻辑:** 选中的按钮具有投影和特定描边，未选中时背景透明或浅灰色。

---

## 4. 详细开发规范 (Detailed Specs)

### 4.1 属性定义 (Props)

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `value` | `string | number` | - | 必填，选项的值 |
| `label` | `string` | - | 显示的文本内容 |
| `disabled` | `boolean` | `false` | 是否禁用 |
| `variant` | `'basic' | 'button' | 'button-primary-filled' | 'button-default-filled' | 'button-outline'` | `'basic'` | 表现形式 (`'button'` 默认等同于 `'button-primary-filled'`) |
| `error` | `boolean` | `false` | 错误状态触发 |

### 4.2 视觉与状态 (Visual States)

请根据以下 Token 进行 CSS/SCSS 开发：

#### 基础单选框 (Basic Radio)

* **尺寸 (Size):** 14px x 14px (外圈)。
* **未选中 (Normal):** 描边 `gray-4` (#DCDCDC)，背景 `white` (#FFFFFF)。
* **选中 (Selected):** 背景 `primary-color` (#00754A)，内圆 `white` (#FFFFFF) (6px)，内圆带微弱阴影。
* **禁用 (Disabled):** 背景 `gray-2` (#EEEEEE)，描边 `gray-4` (#DCDCDC)，文字颜色 `text-disabled` (rgba(0, 0, 0, 0.26))。
* **禁用且选中 (Disabled & Selected):** 描边 `gray-4` (#DCDCDC)，背景 `gray-2` (#EEEEEE)，内圆点 `gray-6` (#A6A6A6)。
* **报错 (Error):** 描边颜色 `error5-color-normal` (#D54941)，下方显示报错文案。

#### 按钮单选框 (Button Radio)

**注意：** `default-filled` 与 `button-primary-filled` 均采用分段控制器 (Segmented Control) 样式。

##### 4.2.1 品牌填充 (Primary Filled) - `button-primary-filled`

**容器 (Group)**

* **尺寸行为 (Sizing):** 适应内容 (Hug Contents / `width: fit-content`)，禁止撑满父容器。
* **布局方式 (Layout):** 水平 Flex 布局 (`display: inline-flex`)。
* **背景:** `gray-3` (#E7E7E7)。
* **内边距 (Padding):** `2px`。
* **间距 (Gap):** `4px`。
* **圆角:** `4px`。

**子项 (Item)**

* **通用:** 圆角 `3px`，Padding `3px 16px` (Medium)。
* **未选中 (Normal):** 背景同容器 (`gray-3`)，文字 `text-secondary`。
* **悬停 (Hover):** 背景同容器，文字 `text-primary`。
* **选中 (Checked):** 背景 `primary-color` (#00754A)，文字 `white` (#FFFFFF)。
* **未选禁用 (Disabled):** 背景同容器，文字 `text-disabled`。
* **选中禁用 (Disabled Checked):** 背景 `primary-color-disabled` (#8BDBBB)，文字 `white`。

##### 4.2.2 默认填充 (Default Filled) - `button-default-filled`

**容器 (Group)**

* **背景:** `gray-3` (#E7E7E7)。
* **内边距 (Padding):** `2px`。
* **间距 (Gap):** `4px`。
* **圆角:** `4px`。

**子项 (Item)**

* **通用:** 圆角 `3px`，Padding `3px 16px` (Medium)。
* **未选中 (Normal):** 背景同容器 (`gray-3`)，文字 `text-secondary`。
* **悬停 (Hover):** 背景同容器，文字 `text-primary`。
* **选中 (Checked):** 背景 `white` (#FFFFFF)，文字 `text-primary`。
* **未选禁用 (Disabled):** 背景同容器，文字 `text-disabled`。
* **选中禁用 (Disabled Checked):** 背景 `white`，文字 `text-disabled`。

##### 4.2.3 描边样式 (Outline) - `button-outline`

* **未选中 (Normal):** 边框 `gray-4` (#DCDCDC)，文字 `text-secondary` (rgba(0,0,0,0.6))。
* **选中 (Checked):** 背景 `white` (#FFFFFF)，文字 `primary-color` (#00754A)，边框 `primary-color`。
* **Hover:** 边框 `gray-4` (保持不变)，文字变更为 `primary-color` (#00754A)。
* **禁用 (Disabled):** 边框 `gray-4`，文字 `text-disabled`。
* **禁用选中 (Disabled Checked):** 边框 `primary-color-disabled` (#8BDBBB)，文字 `primary-color-disabled` (#8BDBBB)。

#### 状态交互 (通用)
* **Focus:** 显示 `2px` `primary-color-focus` (#B8E9D6) 光圈。
* **Disabled:** 背景 `gray-2` (#EEEEEE)，边框 `gray-4`，文字 `text-disabled`。选中且禁用时，Primary Filled 背景为 `primary-color-disabled` (#8BDBBB)。

### 4.3 排列规则 (Alignment)

* **等间距 (Horizontal):** 选项间距固定为 `24px`。
* **等宽 (Vertical):** 多行排列建议等宽，此时行间距固定为 `16px`。

---

## 5. 交互行为 (Interaction & Logic)

1. **点击域:** 响应区域应包含图标及整个 Label 文本区域。
2. **互斥性:** 同一组（由 `name` 或 `RadioGroup` 包裹）内只能有一个选项被选中。
3. **键盘支持:** 支持 `Tab` 键聚焦，使用 `Space` 键进行选择。
4. **错误提示:** 当 `error` 属性为 `true` 时，单选框外圈变为红色，并紧随红色的提示文本。

---

## 6. 指令示例 (Cursor Prompt Example)

> "请参照 `Radio/` 架构规范，使用 React 和 CSS Modules 构建 Radio 组件。要求：
> 1. 实现 RadioGroup 容器，支持 Context 状态管理。
> 2. 基础款选中颜色使用 `#00754A`，未选中描边使用 `#CCCCCC`。
> 3. 严格遵循 24px 水平间距和 16px 垂直间距。
> 4. 实现单选按钮变体（Button Style），支持选中态的投影效果。"
> 
> 

---
