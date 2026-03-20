import{j as a,M as n}from"./index-Dkyg6AX-.js";import{useMDXComponents as r}from"./index-BI3CByS1.js";import"./iframe-BQok-kjy.js";import"./index-DS66mu5R.js";import"./index-8_2S3kac.js";import"./index-DrFu-skq.js";function e(l){const s={h1:"h1",h2:"h2",p:"p",...r(),...l.components};return a.jsxs(a.Fragment,{children:[a.jsx(n,{title:"通用/颜色 Colors"}),`
`,a.jsx("style",{children:`
    .color-section {
      margin-bottom: 48px;
    }
    
    .color-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
      gap: 24px;
      margin-top: 24px;
    }
    
    /* Brand Color Layout */
    .brand-grid {
      display: flex;
      gap: 8px;
      margin-top: 24px;
      align-items: stretch;
      height: 358px;
    }
    
    .brand-main-col {
      width: 260px;
      flex-shrink: 0;
      display: flex;
    }
    
    .brand-sub-col {
      display: flex;
      flex-direction: column;
      gap: 8px;
      flex-grow: 1;
    }
    
    .brand-sub-row {
      display: flex;
      gap: 8px;
      flex: 1; /* Distribute remaining height evenly */
    }
    
    .brand-card {
      border-radius: 8px;
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      color: #fff;
      box-sizing: border-box;
      transition: all 0.2s ease;
      position: relative;
    }
    
    .brand-card:hover {
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12);
      transform: translateY(-2px);
      z-index: 1;
    }
    
    .brand-card.light-text {
      color: rgba(0, 0, 0, 0.9);
    }
    
    .brand-card.light-text .brand-variable {
      color: rgba(0, 0, 0, 0.4);
    }
    
    .brand-card-main {
      width: 100%;
    }
    
    .brand-card-row-full {
      flex: 1; /* Distribute height evenly */
    }
    
    .brand-card-half {
      flex: 1;
    }

    .brand-info {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }
    
    .brand-info-left {
      display: flex;
      flex-direction: column;
    }

    .brand-name {
      font-size: 16px;
      font-weight: 700;
      margin-bottom: 4px;
    }

    .brand-variable {
      font-size: 14px;
      color: rgba(255, 255, 255, 0.55);
      font-family: monospace;
    }

    .brand-value {
      font-size: 14px;
      font-weight: 500;
    }

    .color-card {
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
      border: 1px solid #E7E7E7;
      display: flex;
      flex-direction: column;
      transition: all 0.2s ease;
    }
    
    .color-card:hover {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
      transform: translateY(-2px);
    }

    .color-preview {
      height: 120px;
      padding: 16px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      color: #fff;
      position: relative;
    }
    
    .color-preview.light-text {
      color: rgba(0, 0, 0, 0.9);
    }

    .color-name {
      font-size: 16px;
      font-weight: 600;
    }

    .color-value {
      font-family: monospace;
      font-size: 14px;
      opacity: 0.9;
    }

    .color-info {
      padding: 16px;
      background: #fff;
    }

    .color-variable {
      font-family: monospace;
      font-size: 12px;
      color: #666;
      background: #f5f5f5;
      padding: 4px 8px;
      border-radius: 4px;
      display: inline-block;
      margin-bottom: 8px;
    }
    
    .neutral-row.dark-bg .color-variable {
      background: rgba(255, 255, 255, 0.5);
      color: #000;
    }

    .color-desc {
      font-size: 12px;
      color: #999;
      margin: 0;
    }
    
    /* Layout for functional colors */
    .functional-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 24px;
      margin-top: 24px;
    }
    
    .functional-col {
      display: flex;
      flex-direction: column;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
      border: 1px solid #E7E7E7;
    }
    
    .functional-header {
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 60px;
      color: #fff;
      transition: all 0.2s ease;
      position: relative;
    }
    
    .functional-header:hover {
      z-index: 2;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
      transform: scale(1.02);
      border-radius: 4px;
    }
    
    .functional-header-top {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }
    
    .functional-title {
      font-size: 16px;
      font-weight: 600;
    }
    
    .functional-tag {
      font-size: 12px;
      background: rgba(255, 255, 255, 0.2);
      padding: 2px 8px;
      border-radius: 4px;
    }
    
    .functional-header-bottom {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }
    
    .functional-hex {
      font-size: 16px;
      font-family: monospace;
      font-weight: 500;
    }
    
    .functional-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 60px;
      padding: 0 20px;
      font-size: 13px;
      font-family: monospace;
      transition: all 0.2s ease;
      position: relative;
      cursor: pointer;
    }
    
    .functional-row:hover {
      z-index: 2;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
      transform: scale(1.02);
      border-radius: 4px;
    }
    
    .functional-row.light-text {
      color: rgba(0, 0, 0, 0.85);
    }
    
    .functional-row.dark-text {
      color: #fff;
    }
    
    /* Layout for neutral colors */
    .neutral-grid {
      display: flex;
      flex-direction: column;
      gap: 0;
      border-radius: 8px;
      overflow: hidden;
      border: 1px solid #E7E7E7;
    }
    
    .neutral-row {
      display: flex;
      height: 48px;
      align-items: center;
      padding: 0 24px;
      justify-content: space-between;
      transition: all 0.2s ease;
      position: relative;
      cursor: pointer;
    }
    
    .neutral-row:hover {
      z-index: 2;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
      transform: scale(1.02);
      border-radius: 4px;
    }
    
    .neutral-row.dark-bg {
      color: #fff;
    }
    
    .neutral-row.light-bg {
      color: #000;
    }
    
    .section-desc {
      color: #666666 !important;
      font-size: 14px !important;
      margin-bottom: 24px;
      line-height: 1.6;
    }
  `}),`
`,a.jsx(s.h1,{id:"颜色-colors",children:"颜色 Colors"}),`
`,a.jsx("div",{className:"section-desc",children:a.jsx(s.p,{children:"颜色是一个设计系统的重要基石，它能快速地建立起品牌识别度，使一个产品能够区别于同类功能的产品。此外，建立一个好的色盘能够清晰的展现页面层次，帮助用户形成使用习惯，建立起一致的品牌形象。"})}),`
`,a.jsx(s.h2,{id:"品牌色",children:"品牌色"}),`
`,a.jsx("div",{className:"section-desc",children:a.jsx(s.p,{children:"品牌色是产品中最核心、最高频使用的颜色，它常用于强调信息、引导操作，并在很大程度上决定了产品整体的基调和风格。"})}),`
`,a.jsx("div",{className:"color-section",children:a.jsxs("div",{className:"brand-grid",children:[a.jsx("div",{className:"brand-main-col",children:a.jsxs("div",{className:"brand-card brand-card-main",style:{background:"#00754A"},children:[a.jsx("div",{className:"brand-info-left",children:a.jsx("span",{className:"brand-name",children:"Brand Normal"})}),a.jsxs("div",{className:"brand-info",children:[a.jsx("div",{className:"brand-info-left",children:a.jsx("span",{className:"brand-variable",children:"--primary-color"})}),a.jsx("span",{className:"brand-value",children:"#00754A"})]})]})}),a.jsxs("div",{className:"brand-sub-col",children:[a.jsxs("div",{className:"brand-card brand-card-row-full",style:{background:"#006A44"},children:[a.jsx("div",{className:"brand-info-left",children:a.jsx("span",{className:"brand-name",children:"Brand Click"})}),a.jsxs("div",{className:"brand-info",children:[a.jsx("div",{className:"brand-info-left",children:a.jsx("span",{className:"brand-variable",children:"--primary-color-click"})}),a.jsx("span",{className:"brand-value",children:"#006A44"})]})]}),a.jsxs("div",{className:"brand-sub-row",children:[a.jsxs("div",{className:"brand-card brand-card-half",style:{background:"#1A9162"},children:[a.jsx("div",{className:"brand-info-left",children:a.jsx("span",{className:"brand-name",children:"Brand Hover"})}),a.jsxs("div",{className:"brand-info",children:[a.jsx("div",{className:"brand-info-left",children:a.jsx("span",{className:"brand-variable",children:"--primary-color-hover"})}),a.jsx("span",{className:"brand-value",children:"#1A9162"})]})]}),a.jsxs("div",{className:"brand-card brand-card-half light-text",style:{background:"#8BDBBB"},children:[a.jsx("div",{className:"brand-info-left",children:a.jsx("span",{className:"brand-name",children:"Brand Disabled"})}),a.jsxs("div",{className:"brand-info",children:[a.jsx("div",{className:"brand-info-left",children:a.jsx("span",{className:"brand-variable",children:"--primary-color-disabled"})}),a.jsx("span",{className:"brand-value",children:"#8BDBBB"})]})]})]}),a.jsxs("div",{className:"brand-sub-row",children:[a.jsxs("div",{className:"brand-card brand-card-half light-text",style:{background:"#B8E9D6"},children:[a.jsx("div",{className:"brand-info-left",children:a.jsx("span",{className:"brand-name",children:"Brand Focus"})}),a.jsxs("div",{className:"brand-info",children:[a.jsx("div",{className:"brand-info-left",children:a.jsx("span",{className:"brand-variable",children:"--primary-color-focus"})}),a.jsx("span",{className:"brand-value",children:"#B8E9D6"})]})]}),a.jsxs("div",{className:"brand-card brand-card-half light-text",style:{background:"#E6F7F1"},children:[a.jsx("div",{className:"brand-info-left",children:a.jsx("span",{className:"brand-name",children:"Brand Light"})}),a.jsxs("div",{className:"brand-info",children:[a.jsx("div",{className:"brand-info-left",children:a.jsx("span",{className:"brand-variable",children:"--primary-color-light"})}),a.jsx("span",{className:"brand-value",children:"#E6F7F1"})]})]})]})]})]})}),`
`,a.jsx(s.h2,{id:"功能色",children:"功能色"}),`
`,a.jsx("div",{className:"section-desc",children:a.jsx(s.p,{children:"功能色是指用于特定场景、表达特殊语义的颜色，例如成功、失败、告警、链接等状态。我们定义了4种功能色，在遵循色彩通用含义选取色相的基础上，从视觉一致性的角度选取了与品牌色更具一致关系的色调，并结合WCAG2.0标准综合考量，使其达到可用性标准。"})}),`
`,a.jsxs("div",{className:"functional-grid",children:[a.jsxs("div",{className:"functional-col",children:[a.jsxs("div",{className:"functional-header",style:{background:"#2BA471"},children:[a.jsxs("div",{className:"functional-header-top",children:[a.jsx("span",{className:"functional-title",children:"success5-color-normal"}),a.jsx("span",{className:"functional-tag",children:"成功"})]}),a.jsx("div",{className:"functional-header-bottom",children:a.jsx("span",{className:"functional-hex",children:"#2BA471"})})]}),a.jsxs("div",{className:"functional-row light-text",style:{background:"#E3F9E9"},children:[a.jsx("span",{children:"success1-color-light"}),a.jsx("span",{children:"#E3F9E9"})]}),a.jsxs("div",{className:"functional-row light-text",style:{background:"#C6F3D7"},children:[a.jsx("span",{children:"success2-color-focus"}),a.jsx("span",{children:"#C6F3D7"})]}),a.jsxs("div",{className:"functional-row light-text",style:{background:"#92DAB2"},children:[a.jsx("span",{children:"success3-color-disabled"}),a.jsx("span",{children:"#92DAB2"})]}),a.jsxs("div",{className:"functional-row dark-text",style:{background:"#56C08D"},children:[a.jsx("span",{children:"success4-color-hover"}),a.jsx("span",{children:"#56C08D"})]}),a.jsxs("div",{className:"functional-row dark-text",style:{background:"#2BA471"},children:[a.jsx("span",{children:"success5-color-normal"}),a.jsx("span",{children:"#2BA471"})]}),a.jsxs("div",{className:"functional-row dark-text",style:{background:"#008858"},children:[a.jsx("span",{children:"success6-color-click"}),a.jsx("span",{children:"#008858"})]})]}),a.jsxs("div",{className:"functional-col",children:[a.jsxs("div",{className:"functional-header",style:{background:"#E37318"},children:[a.jsxs("div",{className:"functional-header-top",children:[a.jsx("span",{className:"functional-title",children:"warning5-color-normal"}),a.jsx("span",{className:"functional-tag",children:"告警"})]}),a.jsx("div",{className:"functional-header-bottom",children:a.jsx("span",{className:"functional-hex",children:"#E37318"})})]}),a.jsxs("div",{className:"functional-row light-text",style:{background:"#FFF1E9"},children:[a.jsx("span",{children:"warning1-color-light"}),a.jsx("span",{children:"#FFF1E9"})]}),a.jsxs("div",{className:"functional-row light-text",style:{background:"#FFD9C2"},children:[a.jsx("span",{children:"warning2-color-focus"}),a.jsx("span",{children:"#FFD9C2"})]}),a.jsxs("div",{className:"functional-row light-text",style:{background:"#FFB98C"},children:[a.jsx("span",{children:"warning3-color-disabled"}),a.jsx("span",{children:"#FFB98C"})]}),a.jsxs("div",{className:"functional-row dark-text",style:{background:"#FA9550"},children:[a.jsx("span",{children:"warning4-color-hover"}),a.jsx("span",{children:"#FA9550"})]}),a.jsxs("div",{className:"functional-row dark-text",style:{background:"#E37318"},children:[a.jsx("span",{children:"warning5-color-normal"}),a.jsx("span",{children:"#E37318"})]}),a.jsxs("div",{className:"functional-row dark-text",style:{background:"#BE5A00"},children:[a.jsx("span",{children:"warning6-color-click"}),a.jsx("span",{children:"#BE5A00"})]})]}),a.jsxs("div",{className:"functional-col",children:[a.jsxs("div",{className:"functional-header",style:{background:"#D54941"},children:[a.jsxs("div",{className:"functional-header-top",children:[a.jsx("span",{className:"functional-title",children:"error5-color-normal"}),a.jsx("span",{className:"functional-tag",children:"错误"})]}),a.jsx("div",{className:"functional-header-bottom",children:a.jsx("span",{className:"functional-hex",children:"#D54941"})})]}),a.jsxs("div",{className:"functional-row light-text",style:{background:"#FFF0ED"},children:[a.jsx("span",{children:"error1-color-light"}),a.jsx("span",{children:"#FFF0ED"})]}),a.jsxs("div",{className:"functional-row light-text",style:{background:"#FFD8D2"},children:[a.jsx("span",{children:"error2-color-focus"}),a.jsx("span",{children:"#FFD8D2"})]}),a.jsxs("div",{className:"functional-row light-text",style:{background:"#FFB9B0"},children:[a.jsx("span",{children:"error3-color-disabled"}),a.jsx("span",{children:"#FFB9B0"})]}),a.jsxs("div",{className:"functional-row dark-text",style:{background:"#F6685D"},children:[a.jsx("span",{children:"error4-color-hover"}),a.jsx("span",{children:"#F6685D"})]}),a.jsxs("div",{className:"functional-row dark-text",style:{background:"#D54941"},children:[a.jsx("span",{children:"error5-color-normal"}),a.jsx("span",{children:"#D54941"})]}),a.jsxs("div",{className:"functional-row dark-text",style:{background:"#AD352F"},children:[a.jsx("span",{children:"error6-color-click"}),a.jsx("span",{children:"#AD352F"})]})]}),a.jsxs("div",{className:"functional-col",children:[a.jsxs("div",{className:"functional-header",style:{background:"#0F68DF"},children:[a.jsxs("div",{className:"functional-header-top",children:[a.jsx("span",{className:"functional-title",children:"information5-color-normal"}),a.jsx("span",{className:"functional-tag",children:"信息"})]}),a.jsx("div",{className:"functional-header-bottom",children:a.jsx("span",{className:"functional-hex",children:"#0F68DF"})})]}),a.jsxs("div",{className:"functional-row light-text",style:{background:"#E6F4FF"},children:[a.jsx("span",{children:"information1-color-light"}),a.jsx("span",{children:"#E6F4FF"})]}),a.jsxs("div",{className:"functional-row light-text",style:{background:"#BAE0FF"},children:[a.jsx("span",{children:"information2-color-focus"}),a.jsx("span",{children:"#BAE0FF"})]}),a.jsxs("div",{className:"functional-row light-text",style:{background:"#91CAFF"},children:[a.jsx("span",{children:"information3-color-disabled"}),a.jsx("span",{children:"#91CAFF"})]}),a.jsxs("div",{className:"functional-row dark-text",style:{background:"#409FFF"},children:[a.jsx("span",{children:"information4-color-hover"}),a.jsx("span",{children:"#409FFF"})]}),a.jsxs("div",{className:"functional-row dark-text",style:{background:"#0F68DF"},children:[a.jsx("span",{children:"information5-color-normal"}),a.jsx("span",{children:"#0F68DF"})]}),a.jsxs("div",{className:"functional-row dark-text",style:{background:"#0A58BF"},children:[a.jsx("span",{children:"information6-color-click"}),a.jsx("span",{children:"#0A58BF"})]})]})]}),`
`,a.jsx(s.h2,{id:"中性色",children:"中性色"}),`
`,a.jsx("div",{className:"section-desc",children:a.jsx(s.p,{children:"中性色包含一系列灰黑色，用于文本、背景、边框和分割线等，构建界面的层级结构。"})}),`
`,a.jsx("div",{className:"color-section",children:a.jsxs("div",{className:"neutral-grid",children:[a.jsxs("div",{className:"neutral-row light-bg",style:{background:"#FFFFFF"},children:[a.jsx("span",{className:"color-name",children:"White"}),a.jsx("span",{className:"color-value",children:"#FFFFFF"}),a.jsx("span",{className:"color-variable",children:"--white"})]}),a.jsxs("div",{className:"neutral-row light-bg",style:{background:"#F3F3F3"},children:[a.jsx("span",{className:"color-name",children:"Gray 1"}),a.jsx("span",{className:"color-value",children:"#F3F3F3"}),a.jsx("span",{className:"color-variable",children:"--gray-1"})]}),a.jsxs("div",{className:"neutral-row light-bg",style:{background:"#EEEEEE"},children:[a.jsx("span",{className:"color-name",children:"Gray 2"}),a.jsx("span",{className:"color-value",children:"#EEEEEE"}),a.jsx("span",{className:"color-variable",children:"--gray-2"})]}),a.jsxs("div",{className:"neutral-row light-bg",style:{background:"#E7E7E7"},children:[a.jsx("span",{className:"color-name",children:"Gray 3"}),a.jsx("span",{className:"color-value",children:"#E7E7E7"}),a.jsx("span",{className:"color-variable",children:"--gray-3 (Divider)"})]}),a.jsxs("div",{className:"neutral-row light-bg",style:{background:"#DCDCDC"},children:[a.jsx("span",{className:"color-name",children:"Gray 4"}),a.jsx("span",{className:"color-value",children:"#DCDCDC"}),a.jsx("span",{className:"color-variable",children:"--gray-4 (Border)"})]}),a.jsxs("div",{className:"neutral-row light-bg",style:{background:"#C5C5C5"},children:[a.jsx("span",{className:"color-name",children:"Gray 5"}),a.jsx("span",{className:"color-value",children:"#C5C5C5"}),a.jsx("span",{className:"color-variable",children:"--gray-5"})]}),a.jsxs("div",{className:"neutral-row light-bg",style:{background:"#A6A6A6"},children:[a.jsx("span",{className:"color-name",children:"Gray 6"}),a.jsx("span",{className:"color-value",children:"#A6A6A6"}),a.jsx("span",{className:"color-variable",children:"--gray-6"})]}),a.jsxs("div",{className:"neutral-row light-bg",style:{background:"#8B8B8B"},children:[a.jsx("span",{className:"color-name",children:"Gray 7"}),a.jsx("span",{className:"color-value",children:"#8B8B8B"}),a.jsx("span",{className:"color-variable",children:"--gray-7"})]}),a.jsxs("div",{className:"neutral-row dark-bg",style:{background:"#777777"},children:[a.jsx("span",{className:"color-name",children:"Gray 8"}),a.jsx("span",{className:"color-value",children:"#777777"}),a.jsx("span",{className:"color-variable",children:"--gray-8"})]}),a.jsxs("div",{className:"neutral-row dark-bg",style:{background:"#5E5E5E"},children:[a.jsx("span",{className:"color-name",children:"Gray 9"}),a.jsx("span",{className:"color-value",children:"#5E5E5E"}),a.jsx("span",{className:"color-variable",children:"--gray-9"})]}),a.jsxs("div",{className:"neutral-row dark-bg",style:{background:"#4B4B4B"},children:[a.jsx("span",{className:"color-name",children:"Gray 10"}),a.jsx("span",{className:"color-value",children:"#4B4B4B"}),a.jsx("span",{className:"color-variable",children:"--gray-10"})]}),a.jsxs("div",{className:"neutral-row dark-bg",style:{background:"#383838"},children:[a.jsx("span",{className:"color-name",children:"Gray 11"}),a.jsx("span",{className:"color-value",children:"#383838"}),a.jsx("span",{className:"color-variable",children:"--gray-11"})]}),a.jsxs("div",{className:"neutral-row dark-bg",style:{background:"#2C2C2C"},children:[a.jsx("span",{className:"color-name",children:"Gray 12"}),a.jsx("span",{className:"color-value",children:"#2C2C2C"}),a.jsx("span",{className:"color-variable",children:"--gray-12"})]}),a.jsxs("div",{className:"neutral-row dark-bg",style:{background:"#242424"},children:[a.jsx("span",{className:"color-name",children:"Gray 13"}),a.jsx("span",{className:"color-value",children:"#242424"}),a.jsx("span",{className:"color-variable",children:"--gray-13"})]}),a.jsxs("div",{className:"neutral-row dark-bg",style:{background:"#181818"},children:[a.jsx("span",{className:"color-name",children:"Gray 14"}),a.jsx("span",{className:"color-value",children:"#181818"}),a.jsx("span",{className:"color-variable",children:"--gray-14"})]})]})}),`
`,a.jsx(s.h2,{id:"文本图标色",children:"文本/图标色"}),`
`,a.jsx("div",{className:"section-desc",children:a.jsx(s.p,{children:"用于文本、图标等元素的颜色，分为浅色背景下的深色文本和深色背景下的浅色文本。"})}),`
`,a.jsxs("div",{className:"color-section",children:[a.jsx("h3",{children:"浅色背景"}),a.jsxs("div",{className:"neutral-grid",children:[a.jsxs("div",{className:"neutral-row light-bg",style:{background:"#FFFFFF",color:"rgba(0, 0, 0, 0.90)"},children:[a.jsx("span",{className:"color-name",children:"Text Primary"}),a.jsx("span",{className:"color-value",children:"rgba(0, 0, 0, 0.90)"}),a.jsx("span",{className:"color-variable",children:"--text-primary"})]}),a.jsxs("div",{className:"neutral-row light-bg",style:{background:"#FFFFFF",color:"rgba(0, 0, 0, 0.60)"},children:[a.jsx("span",{className:"color-name",children:"Text Secondary"}),a.jsx("span",{className:"color-value",children:"rgba(0, 0, 0, 0.60)"}),a.jsx("span",{className:"color-variable",children:"--text-secondary"})]}),a.jsxs("div",{className:"neutral-row light-bg",style:{background:"#FFFFFF",color:"rgba(0, 0, 0, 0.40)"},children:[a.jsx("span",{className:"color-name",children:"Text Placeholder"}),a.jsx("span",{className:"color-value",children:"rgba(0, 0, 0, 0.40)"}),a.jsx("span",{className:"color-variable",children:"--text-placeholder"})]}),a.jsxs("div",{className:"neutral-row light-bg",style:{background:"#FFFFFF",color:"rgba(0, 0, 0, 0.26)"},children:[a.jsx("span",{className:"color-name",children:"Text Disabled"}),a.jsx("span",{className:"color-value",children:"rgba(0, 0, 0, 0.26)"}),a.jsx("span",{className:"color-variable",children:"--text-disabled"})]})]}),a.jsx("h3",{style:{marginTop:"32px"},children:"深色背景 (Dark Background)"}),a.jsxs("div",{className:"neutral-grid",style:{background:"#000000"},children:[a.jsxs("div",{className:"neutral-row dark-bg",style:{color:"rgba(255, 255, 255, 0.90)"},children:[a.jsx("span",{className:"color-name",children:"Text White Primary"}),a.jsx("span",{className:"color-value",children:"rgba(255, 255, 255, 0.90)"}),a.jsx("span",{className:"color-variable",children:"--text-white-primary"})]}),a.jsxs("div",{className:"neutral-row dark-bg",style:{color:"rgba(255, 255, 255, 0.55)"},children:[a.jsx("span",{className:"color-name",children:"Text White Secondary"}),a.jsx("span",{className:"color-value",children:"rgba(255, 255, 255, 0.55)"}),a.jsx("span",{className:"color-variable",children:"--text-white-secondary"})]}),a.jsxs("div",{className:"neutral-row dark-bg",style:{color:"rgba(255, 255, 255, 0.35)"},children:[a.jsx("span",{className:"color-name",children:"Text White Tertiary"}),a.jsx("span",{className:"color-value",children:"rgba(255, 255, 255, 0.35)"}),a.jsx("span",{className:"color-variable",children:"--text-white-tertiary"})]}),a.jsxs("div",{className:"neutral-row dark-bg",style:{color:"rgba(255, 255, 255, 0.22)"},children:[a.jsx("span",{className:"color-name",children:"Text White Quaternary"}),a.jsx("span",{className:"color-value",children:"rgba(255, 255, 255, 0.22)"}),a.jsx("span",{className:"color-variable",children:"--text-white-quaternary"})]})]})]})]})}function h(l={}){const{wrapper:s}={...r(),...l.components};return s?a.jsx(s,{...l,children:a.jsx(e,{...l})}):e(l)}export{h as default};
