# Rule 4: Storybook Documentation Standards

## 1. 预览页面结构
每个组件的 Story 必须包含以下板块：
- **Overview**: 组件中文名称、用途描述、核心能力摘要。
- **Import Module**: 展示标准的 `import { Component } from '...'` 代码片段。
- **Architecture**: 简述组件的文件拆分逻辑及 Hooks 逻辑拓扑。

## 2. 变体展示 (Variants Gallery)
必须在 Story 中展示以下场景的对比视图：
- **基础状态**: 默认渲染效果。
- **全尺寸展示**: 展示所有 Size 属性的并排对比。
- **交互态展示**: 同时展示 Default, Hover, Active, Focus, Disabled 状态。
- **极端情况**: 模拟超长字符文本、空数据、超大数量级数据。

## 3. 交互开发规范
- **Controls 配置**: `argTypes` 必须自动映射。Boolean 对应开关，Enum 对应下拉/单选。
- **属性文档**: 每个 Prop 必须通过 JSDoc 注释描述其功能及取值范围。