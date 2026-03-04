# Switch 开关组件规范

### 1. 组件描述
开关用于在两种状态（开启/关闭）之间进行切换。

### 2. 使用场景
- 需要表示开关状态或仅有两种状态之间的切换时。
- 需要操作后立即生效时。

### 3. 组件类型
- **常规尺寸**: 表单、表格等区域常用此尺寸。
- **大尺寸**: 用于卡片、折叠面板、详情页等大区域。

### 4. 属性 (Props)
- `modelValue`: (Boolean) 绑定值，`true` 表示开启，`false` 表示关闭。
- `disabled`: (Boolean) 是否禁用。
- `loading`: (Boolean) 是否处于加载中状态（不可点击，显示加载图标）。
- `size`: (String) 尺寸，可选值：`medium` (常规, 默认), `large` (大尺寸)。
- `active-color`: (String) 开启时的背景色，默认为品牌色 `var(--primary-color)`。
- `inactive-color`: (String) 关闭时的背景色，默认为灰色 `var(--gray-5)`。

### 5. 样式规范 (Styles)

#### 基础样式
- `border-radius`: 100px (全圆角)
- `transition`: background-color 0.3s, transform 0.3s
- `cursor`: pointer (禁用时为 not-allowed)

#### 尺寸规格 (Sizes)

**Medium (常规尺寸 - 默认)**
- `width`: 32px
- `height`: 16px
- **滑块 (Thumb)**:
  - `size`: 12px
  - `margin`: 2px (上下左右间距)

**Large (大尺寸)**
- `width`: 40px
- `height`: 20px
- **滑块 (Thumb)**:
  - `size`: 16px
  - `margin`: 2px

#### 颜色规范 (Colors)

**开启状态 (Active)**
- `background-color`: `var(--primary-color)`
- `thumb-color`: `var(--white)`

**关闭状态 (Inactive)**
- `background-color`: `var(--gray-5)`
- `thumb-color`: `var(--white)`

**禁用状态 (Disabled)**
- `opacity`: 0.6
- `cursor`: not-allowed

**加载状态 (Loading)**
- 显示加载图标，覆盖滑块，或滑块本身变为加载圈。

### 6. 交互 (Interaction)
- 点击时切换 `modelValue` 的值。
- 切换时滑块有平滑的位移动画。
- 禁用或加载状态下点击无效。
