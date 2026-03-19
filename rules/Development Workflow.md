# Rule 2: Component Development Standards

## 1. 文件夹物理结构 (File Anatomy)
每个组件文件夹必须包含且仅包含以下“五件套”：
- `index.ts`: 统一组件导出入口。
- `[ComponentName].vue`: 组件主文件（逻辑与模板）。
- `[ComponentName].module.scss`: 局部作用域样式，严禁污染全局。
- `types.ts`: 严格定义 Props, Emits 和内部状态的 TypeScript 类型。
- `__tests__/[ComponentName].spec.ts`: 对应的单元测试脚本。

## 2. 编写逻辑顺序 (Script Setup Order)
在 `<script setup>` 中，代码必须按以下顺序排列：
1. `imports`: (外部库 -> 内部组件 -> 类型定义)。
2. `defineProps`: 必须带类型声明及 `default` 默认值。
3. `defineEmits`: 显式声明所有自定义事件。
4. `Composables`: 逻辑抽离（如 `useNamespace`, `useWindowSize`）。
5. `State/Computed`: 内部响应式变量与计算属性。
6. `Methods/Events`: 处理交互函数。

## 3. 实现流程
- **相似调研**：实现前先检索库中是否有相似原子组件。
- **属性先行**：先完成 `types.ts` 中的属性定义，再进行视觉开发。