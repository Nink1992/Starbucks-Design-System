---
description: "针对 [组件名称] 的通用开发规约，包含 Vue 3 SFC 结构、Figma 对齐逻辑、样式规范及 Trae 执行指令。"
globs: "src/components/[组件目录]/**/*.vue"
alwaysApply: false
---

# [组件名称] 组件开发规范

## 一、概览 (Overview)

### 1. 目的 (Purpose)
描述该组件解决的具体 UI 问题。例如：`[组件名称]` 用于在 [场景] 下展示 [信息/功能]，确保用户能够 [操作/理解]。

### 2. 主要能力 (Primary Capabilities)
* **视觉渲染**: 支持 [插槽/图标/插画] 的灵活配置。
* **布局变体**: 提供 [默认/紧凑/宽松] 等布局模式。
* **交互反馈**: 支持 [主要操作/次要操作] 的点击响应。
* **响应式**: 适配不同容器宽度的 [自动缩放/隐藏] 逻辑。

---

## 二、代码导入规范 (Import)
* **基础组件引用**: 优先引用项目内的 `Base` 组件或 `Ant Design Vue` 的基础能力。
* **类型定义**: 统一从 `./types.ts` 导入 Props 和接口。
* **样式引用**: 使用 CSS Modules 或 Scoped SCSS。

---

## 三、架构规划 (Architecture Planning)

### 1. 文件结构建议 (File Structure)
```text
[ComponentName]/
├── [ComponentName].vue             // 主组件 (SFC)
├── [ComponentName].types.ts        // Props, Emits, Slots 定义
├── [ComponentName].module.scss     // 组件级样式 (CSS Modules)
├── index.ts                        // 统一导出
├── components/                     // 内部子组件目录
│   ├── [ComponentName]SubPart.vue  // 被拆分的子组件
├── hooks/                          // 逻辑抽离 (如 useLayout, useSelection)
├── __tests__/                      // 单元测试
└── __stories__/                    // Storybook 文档与预览

```

### 2. 开发理由 (Rationale)

* 
**Figma 对齐**: 子组件拆分需直接对应 Figma 图层中的“属性开关”，确保设计师在代码中能找到与设计稿一一对应的配置项。 


* 
**逻辑解耦**: 将复杂的计算属性（Computed）或事件处理移入 `hooks`，保持 Vue 模板简洁。 


* 
**Token 驱动**: 强制通过全局 CSS 变量实现主题切换。 



---

## 四、详细开发规范 (Detailed Specs)

### 1. 属性与插槽定义 (Props & Slots)

* **Props**: 使用 `defineProps<Props>()` 定义，遵循驼峰命名（camelCase）。
* **Slots**: 对于复杂的视觉部分（如 Header, Footer），优先使用 `slot` 而非单纯的 `string props`。
* **v-model**: 如果涉及输入或状态切换，必须支持 `v-model` 双向绑定。

### 2. 无障碍要求 (Accessibility)

* 
**角色声明**: 必须具备正确的 `role` 属性（如 `role="alert"` 或 `role="status"`）。 


* 
**语义化**: 交互元素必须支持键盘 `Tab` 聚焦，并提供 `aria-label` 或 `aria-describedby` 关联描述文本。 



### 3. 样式开发 (Styling)

* 
**禁止硬编码**: 禁止使用 Hex/RGB 颜色，必须引用 `var(--primary-color)` 等全局 Token。 


* 
**样式修改**: 使用 `className` 属性透传，严禁使用 `[data-testid]` 或标签选择器覆盖样式。 



---

## 五、AI (Cursor/Trae) 执行指令

请基于以上规范，使用 **Vue 3 (SFC) + TypeScript** 构建组件：

1. **代码结构**:
* 使用 `<script setup>` 语法。
* 引用 Ant Design Vue 的基础按钮/图标能力，但通过 CSS Modules 覆盖样式以符合项目视觉。 




2. **逻辑要求**:
* 必须实现 `props.status` 控制的视觉状态切换（Normal, Success, Error）。 


* 如果宽度小于 [X]px，自动切换为“紧凑 (Compact)”布局。 




3. **Token 校验**:
* 检查并确保所有 `color`, `border-radius`, `padding` 均引用自全局变量。 




4. **文档同步**:
* 为该组件生成 `[ComponentName].stories.tsx` 或 `.mdx` 文件。
* 文档必须包含 `Import` 示例、`Props` 属性表、以及展示所有变体的 `Canvas`。 





```

---
