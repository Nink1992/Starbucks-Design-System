# Rule 4: Typography & Font Family

## 1. 字体家族核心原则
- **优先无衬线与系统字体**：为了保证性能和一致性，优先使用系统自带的无衬线字体。
- **环境回退机制 (Fallback)**：根据用户的操作系统，提供一套具备高易读性的备用字体栈。
- **商用免费字体推荐**：
  - 中文：`Noto Sans S Chinese`
  - 英文：`Poppins`
  - 数字：`Roboto`

## 2. 操作系统差异化配置
- **MacOS 环境**：
  - 优先使用苹果自带的 `苹方 (PingFang SC)` 作为中文字体。
  - 第二备用中文字体为 `Noto Sans S Chinese`。
  - 英文第二备用字体推荐 `Helvetica`。
  - 数字第二备用字体推荐 `Helvetica`。
- **Windows 环境**：
  - 优先使用系统自带的 `微软雅黑 (Microsoft YaHei)` 作为中文字体。
  - 第二备用中文字体为 `Noto Sans S Chinese`。
  - 英文第二备用字体使用 `Arial`。
  - 数字第二备用字体使用 `Arial`。

## 3. 英文/数字/小语种降级规则
- **第一字体**：优先尝试加载 `Noto Sans S Chinese`。
- **字体加载策略**：若用户系统中未安装 `Noto Sans S Chinese`，系统将默认在后台为用户下载该字体。
- **加载期间占位**：在字体下载期间，应使用第二备用字体进行显示过渡：
  - MacOS 下载期间使用 `Helvetica`。
  - Windows 下载期间使用 `Arial`。

## 4. 全局 CSS 变量使用规范
开发组件时，严禁硬编码字体名称（如直接写 `font-family: Arial`），必须统一引用 `src/styles/variables.css` 中定义的全局变量：
- `var(--font-family-base)`: 综合中英文环境的默认基础字体栈。
- `var(--font-family-en)`: 专门针对英文排版的字体栈。
- `var(--font-family-num)`: 专门针对数字显示的字体栈（适用于价格、图表、统计数据等需要等宽或特定风格的数字场景）。

**CSS 变量示例实现（已写入 variables.css）：**
```css
  /* 
   * 基础字体栈 (综合中英数)
   * 优先英数 (Poppins, Roboto)，然后 MacOS 苹方，然后 Win 雅黑，最后是 Noto 兜底和系统默认无衬线 
   */
  --font-family-base: "Poppins", "Roboto", "PingFang SC", "Microsoft YaHei", "Noto Sans S Chinese", "Helvetica", "Arial", sans-serif;
  
  /* 纯英文字体栈 */
  --font-family-en: "Poppins", "Noto Sans S Chinese", "Helvetica", "Arial", sans-serif;
  
  /* 纯数字字体栈 */
  --font-family-num: "Roboto", "Noto Sans S Chinese", "Helvetica", "Arial", sans-serif;
```
