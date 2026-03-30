import{j as s,M as e}from"./index-BFY9KAEO.js";import{useMDXComponents as x}from"./index-BI3CByS1.js";import"./iframe-xI3DQHaB.js";import"./index-DS66mu5R.js";import"./index-8_2S3kac.js";import"./index-DrFu-skq.js";function d(o){const a={h1:"h1",h2:"h2",p:"p",...x(),...o.components};return s.jsxs(s.Fragment,{children:[s.jsx(e,{title:"通用/阴影 Shadows"}),`
`,s.jsx("style",{children:`
    .shadow-section {
      margin-bottom: 48px;
    }

    .shadow-grid {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .shadow-row {
      display: flex;
      align-items: center;
      background: #F6F9F8;
      border-radius: 8px;
      padding: 40px;
      gap: 29px;
    }

    .shadow-box {
      width: 110px;
      height: 110px;
      background: #FFFFFF;
      border-radius: 10px;
      flex-shrink: 0;
    }

    /* Card Shadows */
    .shadow-1 {
      box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.12), 
                  0px 4px 5px 0px rgba(0, 0, 0, 0.08), 
                  0px 1px 10px 0px rgba(0, 0, 0, 0.05);
    }

    .shadow-2 {
      box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.1), 
                  0px 8px 10px 1px rgba(0, 0, 0, 0.06), 
                  0px 3px 14px 2px rgba(0, 0, 0, 0.05);
    }

    .shadow-3 {
      box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.08), 
                  0px 16px 24px 2px rgba(0, 0, 0, 0.04), 
                  0px 6px 30px 5px rgba(0, 0, 0, 0.05);
    }

    /* Focus Shadows */
    .focus-shadow-default {
      box-shadow: 0px 0px 0px 2px rgba(184, 233, 214, 1);
    }

    .focus-shadow-error {
      box-shadow: 0px 0px 0px 2px rgba(255, 216, 210, 1);
    }

    .focus-shadow-warning {
      box-shadow: 0px 0px 0px 2px rgba(255, 217, 194, 1);
    }

    .shadow-info {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .shadow-title {
      font-size: 20px;
      font-weight: 400;
      color: #000000;
      margin: 0;
      padding: 0;
      border: none;
    }

    .shadow-desc {
      font-size: 14px;
      color: rgba(0, 0, 0, 0.6);
      line-height: 1.57;
      margin: 0;
      white-space: pre-wrap;
    }
    
    .section-desc {
      color: #666666 !important;
      font-size: 14px !important;
      margin-bottom: 24px;
      line-height: 1.6;
    }
  `}),`
`,s.jsx(a.h1,{id:"阴影-shadows",children:"阴影 Shadows"}),`
`,s.jsx("div",{className:"section-desc",children:s.jsx(a.p,{children:"阴影能够表达界面的层级关系，通过不同的阴影深度来区分组件在 Z 轴上的高度，帮助用户理解页面的空间结构。"})}),`
`,s.jsx(a.h2,{id:"卡片阴影",children:"卡片阴影"}),`
`,s.jsx("div",{className:"section-desc",children:s.jsx(a.p,{children:"主要用于区分页面中的不同信息区块，避免内容粘连。"})}),`
`,s.jsx("div",{className:"shadow-section",children:s.jsxs("div",{className:"shadow-grid",children:[s.jsxs("div",{className:"shadow-row",children:[s.jsx("div",{className:"shadow-box shadow-1"}),s.jsxs("div",{className:"shadow-info",children:[s.jsx("h3",{className:"shadow-title",children:"浅层悬浮"}),s.jsxs("p",{className:"shadow-desc",children:["Hover 状态下的卡片浮起、列表项拖拽状态",s.jsx("br",{}),"token：shadow-1",s.jsx("br",{}),"box-shadow: 0 1px 10px rgba(0, 0, 0, 5%), 0 4px 5px rgba(0, 0, 0, 8%), 0 2px 4px -1px rgba(0, 0, 0, 12%)"]})]})]}),s.jsxs("div",{className:"shadow-row",children:[s.jsx("div",{className:"shadow-box shadow-2"}),s.jsxs("div",{className:"shadow-info",children:[s.jsx("h3",{className:"shadow-title",children:"中层浮层"}),s.jsxs("p",{className:"shadow-desc",children:["使用场景：下拉菜单（Dropdown）、气泡提示（Tooltip）、选择器面板（如 DatePicker 展开面板）",s.jsx("br",{}),"token：shadow-2",s.jsx("br",{}),"box-shadow: 0 3px 14px 2px rgba(0, 0, 0, 5%), 0 8px 10px 1px rgba(0, 0, 0, 6%), 0 5px 5px -3px rgba(0, 0, 0, 10%)"]})]})]}),s.jsxs("div",{className:"shadow-row",children:[s.jsx("div",{className:"shadow-box shadow-3"}),s.jsxs("div",{className:"shadow-info",children:[s.jsx("h3",{className:"shadow-title",children:"高层模态"}),s.jsxs("p",{className:"shadow-desc",children:["使用场景：全局弹窗（Modal）、侧边抽屉（Drawer）、全局通知（Notification）",s.jsx("br",{}),"token：shadow-3",s.jsx("br",{}),"box-shadow: 0 6px 30px 5px rgba(0, 0, 0, 5%), 0 16px 24px 2px rgba(0, 0, 0, 4%), 0 8px 10px -5px rgba(0, 0, 0, 8%)"]})]})]})]})}),`
`,s.jsx(a.h2,{id:"聚焦阴影",children:"聚焦阴影"}),`
`,s.jsx("div",{className:"section-desc",children:s.jsx(a.p,{children:"主要用于表单录入、数据选择等强交互组件的状态响应。"})}),`
`,s.jsx("div",{className:"shadow-section",children:s.jsxs("div",{className:"shadow-grid",children:[s.jsxs("div",{className:"shadow-row",children:[s.jsx("div",{className:"shadow-box focus-shadow-default"}),s.jsxs("div",{className:"shadow-info",children:[s.jsx("h3",{className:"shadow-title",children:"聚焦 (Focus)"}),s.jsxs("p",{className:"shadow-desc",children:["使用场景：用户点击输入框、使用 Tab 键切换到某组件准备输入内容时。",s.jsx("br",{}),"token：Focus shadow-default",s.jsx("br",{}),"box-shadow: 0 0 0 2px #B8E9D6;"]})]})]}),s.jsxs("div",{className:"shadow-row",children:[s.jsx("div",{className:"shadow-box focus-shadow-error"}),s.jsxs("div",{className:"shadow-info",children:[s.jsx("h3",{className:"shadow-title",children:"报错 (Error)"}),s.jsxs("p",{className:"shadow-desc",children:["使用场景：表单校验未通过、必填项遗漏时，配合红色边框进行强警示。",s.jsx("br",{}),"token：Focus shadow-error ",s.jsx("br",{}),"box-shadow: 0 0 0 2px #FFD8D2;"]})]})]}),s.jsxs("div",{className:"shadow-row",children:[s.jsx("div",{className:"shadow-box focus-shadow-warning"}),s.jsxs("div",{className:"shadow-info",children:[s.jsx("h3",{className:"shadow-title",children:"警告 (Warning)"}),s.jsxs("p",{className:"shadow-desc",children:["使用场景：输入格式不建议但未被阻断时的弱警示。",s.jsx("br",{}),"token：Focus shadow-warning",s.jsx("br",{}),"box-shadow: 0 0 0 2px #FFD9C2;"]})]})]})]})})]})}function l(o={}){const{wrapper:a}={...x(),...o.components};return a?s.jsx(a,{...o,children:s.jsx(d,{...o})}):d(o)}export{l as default};
