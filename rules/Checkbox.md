# Checkbox 复选框组件规范

### 1. 组件描述
复选框用于在一组可选项中进行多项选择。

### 2. 使用场景
- 在一组数据中，用户可通过复选框选择一个或多个数据。
- 需要明确表示“选中/未选中”状态时。

### 3. 复选框组 (Checkbox Group)
复选框可以与其他复选框具有父子关系，常用于全选/反选场景。

- **全选**: 选中父级选项后，所有子复选框均被选中。
- **部分选中**: 如果选中了部分子复选框，则父复选框变为不确定的复选框 (Indeterminate)，通常表现为横线图标。
- **全不选**: 如果未选中父复选框，则所有子复选框均未选中。

### 4. 属性 (Props)
- `modelValue`: (Boolean | Array) 绑定值。
  - 单个使用时为 `Boolean` (true/false)。
  - 组合使用时为 `Array` (选中值的数组)。
- `label`: (String) 复选框文本内容。
- `value`: (String | Number | Boolean) 复选框的值（用于组合使用）。
- `disabled`: (Boolean) 是否禁用。
- `indeterminate`: (Boolean) 是否处于部分选中状态（常用于全选功能）。

### 4. 样式规范 (Styles)

#### 基础样式
- `display`: inline-flex
- `align-items`: center
- `cursor`: pointer (禁用时为 not-allowed)
- `font-size`: 12px (参考设计稿)
- `line-height`: 1.6
- `color`: `var(--text-primary)`

#### 尺寸规格 (Sizes)
- **复选框 (Box)**:
  - `width`: 14px
  - `height`: 14px
  - `border-radius`: 4px
  - `margin-right`: 8px (Box 与 Label 之间的间距)

#### 颜色规范 (Colors)

**未选中状态 (Unchecked)**
- `border`: 1px solid `var(--gray-4)` (或 #D9D9D9)
- `background-color`: `var(--white)`

**选中状态 (Checked)**
- `border-color`: `var(--primary-color)`
- `background-color`: `var(--primary-color)`
- **勾选图标 (Check Icon)**:
  - `color`: `var(--white)`
  - `width`: 9px
  - `height`: 7px

**部分选中状态 (Indeterminate)**
- `border-color`: `var(--primary-color)`
- `background-color`: `var(--primary-color)`
- **横线图标 (Dash Icon)**:
  - `color`: `var(--white)`

**禁用状态 (Disabled)**
- `opacity`: 0.5
- `cursor`: not-allowed
- `background-color`: `var(--gray-2)`

### 5. 交互 (Interaction)
- **悬浮 (Hover)**:
  - 未选中时，边框颜色加深或变为品牌色（如 `var(--primary-color-hover)`）。
- **点击 (Click)**:
  - 切换选中/未选中状态。
  - 触发 `change` 事件。
- **波纹效果 (Ripple)**:
  - (可选) 点击时可能有扩散动画。
