### 投影规范 (Shadows)

#### 卡片阴影 (Card Shadows)
主要用于区分页面中的不同信息区块，避免内容粘连。

- `shadow-1`: 0px 2px 4px -1px rgba(0, 0, 0, 0.12), 0px 4px 5px 0px rgba(0, 0, 0, 0.08), 0px 1px 10px 0px rgba(0, 0, 0, 0.05)
  - **说明**: 浅层悬浮，Hover 状态下的卡片浮起、列表项拖拽状态
- `shadow-2`: 0px 5px 5px -3px rgba(0, 0, 0, 0.1), 0px 8px 10px 1px rgba(0, 0, 0, 0.06), 0px 3px 14px 2px rgba(0, 0, 0, 0.05)
  - **说明**: 中层浮层，下拉菜单（Dropdown）、气泡提示（Tooltip）、选择器面板（如 DatePicker 展开面板）
- `shadow-3`: 0px 8px 10px -5px rgba(0, 0, 0, 0.08), 0px 16px 24px 2px rgba(0, 0, 0, 0.04), 0px 6px 30px 5px rgba(0, 0, 0, 0.05)
  - **说明**: 高层模态，全局弹窗（Modal）、侧边抽屉（Drawer）、全局通知（Notification）

#### 聚焦阴影 (Focus Shadows)
主要用于表单录入、数据选择等强交互组件的状态响应。

- `focus-shadow-default`: 0px 0px 0px 2px rgba(184, 233, 214, 1)
  - **说明**: 聚焦 (Focus)，用户点击输入框、使用 Tab 键切换到某组件准备输入内容时。
- `focus-shadow-error`: 0px 0px 0px 2px rgba(255, 216, 210, 1)
  - **说明**: 报错 (Error)，表单校验未通过、必填项遗漏时，配合红色边框进行强警示。
- `focus-shadow-warning`: 0px 0px 0px 2px rgba(255, 217, 194, 1)
  - **说明**: 警告 (Warning)，输入格式不建议但未被阻断时的弱警示。