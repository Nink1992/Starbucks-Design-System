import{j as l,M as h}from"./index-BFY9KAEO.js";import{useMDXComponents as n}from"./index-BI3CByS1.js";import{r as m,R as g}from"./index-DS66mu5R.js";import"./iframe-xI3DQHaB.js";import"./index-8_2S3kac.js";import"./index-DrFu-skq.js";const b=()=>{const e={div:"div",...n()},[s,o]=m.useState(null),a=m.useRef(null);g.useEffect(()=>{if(a.current){const i=a.current.getBoundingClientRect(),r=i.width/2,t=i.height/2,c=Math.floor(r/20),d=Math.floor(t/20);o({x:c*20,y:d*20})}},[]);const u=i=>{if(!a.current)return;const r=a.current.getBoundingClientRect(),t=i.clientX-r.left,c=i.clientY-r.top,d=Math.floor(t/20),p=Math.floor(c/20);o({x:d*20,y:p*20})},v=()=>{if(a.current){const i=a.current.getBoundingClientRect(),r=i.width/2,t=i.height/2,c=Math.floor(r/20),d=Math.floor(t/20);o({x:c*20,y:d*20})}};return l.jsx(e.div,{className:"grid-base-pattern",ref:a,onMouseMove:u,onMouseLeave:v,children:s&&l.jsxs(e.div,{className:"grid-base-hover-cell",style:{left:s.x,top:s.y},children:[l.jsxs(e.div,{className:"grid-base-label-top",children:[l.jsx(e.div,{className:"grid-base-label-top-mark"}),"8px"]}),l.jsxs(e.div,{className:"grid-base-label-right",children:[l.jsx(e.div,{className:"grid-base-label-right-top-mark"}),"8px"]})]})})};function x(e){const s={h1:"h1",h2:"h2",h3:"h3",p:"p",...n(),...e.components};return l.jsxs(l.Fragment,{children:[l.jsx(h,{title:"通用/栅格 Grid"}),`
`,l.jsx("style",{children:`
    .section-desc {
      color: #666666 !important;
      font-size: 14px !important;
      margin-bottom: 24px;
      line-height: 1.6;
    }
    
    .grid-section {
      margin-bottom: 48px;
    }
    
    .grid-base-box {
      background: #F6F9F8;
      border-radius: 8px;
      padding: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    .grid-base-pattern {
      width: 100%;
      height: 300px;
      background-color: #ffffff;
      background-image: 
        linear-gradient(rgba(0, 117, 74, 0.2) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0, 117, 74, 0.2) 1px, transparent 1px);
      background-size: 20px 20px; /* Represents 8px scale */
      border: 1px solid #00754A;
      border-radius: 4px;
      position: relative;
      overflow: hidden;
      cursor: crosshair;
    }
    
    .grid-base-hover-cell {
      width: 20px; /* 1 grid unit */
      height: 20px; /* 1 grid unit */
      background: rgba(0, 98, 65, 0.8);
      position: absolute;
      pointer-events: none;
    }
    
    .grid-base-label-top {
      position: absolute;
      top: -24px;
      left: 50%;
      transform: translateX(-50%);
      color: #00754A;
      font-size: 14px;
      white-space: nowrap;
      font-family: monospace;
    }
    
    .grid-base-label-right {
      position: absolute;
      right: -32px;
      top: 50%;
      transform: translateY(-50%);
      color: #00754A;
      font-size: 14px;
      font-family: monospace;
    }

    .grid-base-label-top::before {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 100%;
      height: 1px;
      background: #00754A;
    }
    
    .grid-base-label-top::after,
    .grid-base-label-top-mark {
      content: '';
      position: absolute;
      bottom: -8px;
      width: 1px;
      height: 8px;
      background: #00754A;
    }
    .grid-base-label-top-mark { left: 0; }
    .grid-base-label-top::after { right: 0; }
    
    .grid-base-label-right::before {
      content: '';
      position: absolute;
      left: -4px;
      top: 0;
      height: 100%;
      width: 1px;
      background: #00754A;
    }
    
    .grid-base-label-right::after,
    .grid-base-label-right-top-mark {
      content: '';
      position: absolute;
      left: -8px;
      height: 1px;
      width: 8px;
      background: #00754A;
    }
    .grid-base-label-right-top-mark { top: 0; }
    .grid-base-label-right::after { bottom: 0; }

    .grid-compose-box {
      display: flex;
      flex-direction: column;
      gap: 32px;
    }

    .grid-compose-table {
      width: 100%;
      border-collapse: collapse;
      border: 1px solid #E2ECE8;
      border-radius: 8px;
      overflow: hidden;
      background: #F6F9F8;
    }

    .grid-compose-row {
      display: flex;
      border-bottom: 1px solid #E2ECE8;
    }

    .grid-compose-row:last-child {
      border-bottom: none;
    }

    .grid-compose-title-col {
      width: 200px;
      padding: 16px;
      display: flex;
      align-items: center;
      font-weight: 500;
      font-size: 12px;
      color: #292F2E;
      border-right: 1px solid #E2ECE8;
    }

    .grid-compose-desc-col {
      flex: 1;
      padding: 16px;
      font-size: 12px;
      color: #666;
      line-height: 1.6;
      display: flex;
      align-items: center;
    }

    .grid-visual-demo {
      background: #F6F9F8;
      border-radius: 8px;
      padding: 40px;
      display: flex;
      align-items: stretch;
      justify-content: center;
      height: 300px;
    }

    .visual-container-box {
      width: 100%;
      max-width: 800px;
      display: flex;
      position: relative;
      margin-top: 40px;
      margin-bottom: 40px;
      border: 1px dashed #00754A;
      padding: 1px; /* 留出一点空间给虚线框 */
      transition: border-color 0.3s ease;
    }
    
    .visual-container-box:hover {
      border-color: #004D30;
    }

    .visual-margin-box {
      width: 48px;
      background: #FEDEDF; /* 红色边距 */
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      transition: background 0.3s ease;
      cursor: pointer;
    }
    
    .visual-margin-box:hover {
      background: #FCD0D2;
    }

    .visual-margin-box:hover .visual-label-margin {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }

    .visual-columns-box {
      flex: 1;
      display: flex;
      padding: 0 8px;
      position: relative;
    }

    .visual-column-item {
      flex: 1;
      background: #FFEFE1; /* 橙色槽 */
      position: relative;
      transition: background 0.3s ease;
      cursor: pointer;
    }
    
    .visual-column-item:hover {
      background: #FFDCC0;
    }

    .visual-column-item:hover .visual-label-column {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }

    .visual-gutter-item {
      width: 8px;
      position: relative;
      transition: background 0.3s ease;
      cursor: pointer;
    }

    .visual-gutter-item:hover {
      background: rgba(0, 117, 74, 0.15);
    }

    .visual-gutter-item:hover .visual-label-gutter {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }

    .visual-label {
      position: absolute;
      font-size: 14px;
      display: flex;
      align-items: center;
      gap: 8px;
      font-family: monospace;
      white-space: nowrap;
      opacity: 0;
      pointer-events: none;
      z-index: 10;
      transition: all 0.3s ease;
    }

    .visual-label-margin {
      bottom: -32px;
      left: 50%;
      transform: translateX(-50%) translateY(10px);
      color: #E2484D;
    }

    .visual-label-column {
      bottom: -32px;
      left: 50%;
      transform: translateX(-50%) translateY(10px);
      color: #E88321;
    }

    .visual-label-gutter {
      bottom: -32px;
      left: 50%;
      transform: translateX(-50%) translateY(10px);
      color: #00754A;
    }

    .visual-label-container {
      top: -32px;
      left: 50%;
      transform: translateX(-50%);
      color: #00754A;
      opacity: 1 !important;
    }

    .visual-arrow-line {
      width: 100%;
      height: 1px;
      background: #00754A;
      position: absolute;
      bottom: -10px;
    }

    .grid-split-demo {
      background: #F6F9F8;
      border-radius: 8px;
      padding: 40px;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .grid-split-row {
      display: flex;
      gap: 8px;
      width: 100%;
      height: 48px;
    }

    .grid-split-col {
      background: rgba(0, 117, 74, 0.05);
      border: 1px solid rgba(0, 117, 74, 0.2);
      border-radius: 4px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #00754A;
      font-size: 14px;
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .grid-split-col:hover {
      background: rgba(0, 117, 74, 0.1);
      border-color: #00754A;
      box-shadow: 0 2px 8px rgba(0, 117, 74, 0.15);
      transform: translateY(-1px);
    }
  `}),`
`,`
`,l.jsx(s.h1,{id:"栅格-grid",children:"栅格 Grid"}),`
`,l.jsx("div",{className:"section-desc",children:l.jsx(s.p,{children:"栅格是以规则的网格阵列来指导和规范网页中的版面布局以及信息分布，提高界面内布局的一致性，节约成本。"})}),`
`,l.jsx(s.h2,{id:"网格基数",children:"网格基数"}),`
`,l.jsx("div",{className:"section-desc",children:l.jsx(s.p,{children:"网格基数是栅格系统中的基本网格单位。栅格化之前先定义网格基数尤其重要，一方面规范设计，指导版式设计与内容布局，辅助规范页面元素对齐和间距设定；另一方面节省设计开发沟通的时间。目前栅格系统中以 8 点为网格基数，粒度大小合适，且能够匹配多数主流屏幕。"})}),`
`,l.jsx("div",{className:"grid-section",children:l.jsx("div",{className:"grid-base-box",children:l.jsx(b,{})})}),`
`,l.jsx(s.h2,{id:"栅格构成",children:"栅格构成"}),`
`,l.jsx("div",{className:"section-desc",children:l.jsx(s.p,{children:"栅格由容器（Container）、列（column）、槽（gutter）、边距（margin）组成。"})}),`
`,l.jsx("div",{className:"grid-section",children:l.jsxs("div",{className:"grid-compose-box",children:[l.jsxs("div",{className:"grid-compose-table",children:[l.jsxs("div",{className:"grid-compose-row",children:[l.jsx("div",{className:"grid-compose-title-col",children:"容器（Container）"}),l.jsx("div",{className:"grid-compose-desc-col",children:"指的是我们需要布局信息的版面区域，一般为整个屏幕，或排除固定浮动区域的其他部分。栅格系统的其他三大元素都要基于该容器的大小去计算。"})]}),l.jsxs("div",{className:"grid-compose-row",children:[l.jsx("div",{className:"grid-compose-title-col",children:"边距（Margin）"}),l.jsx("div",{className:"grid-compose-desc-col",children:"边距是内容和屏幕边缘之间的间隔。通常为固定宽度，用来定义在所有尺寸屏幕下最小的呼吸空间。侧边距默认值为 16px。（也可根据实际情况确定取值，建议使用 8 的倍数）"})]}),l.jsxs("div",{className:"grid-compose-row",children:[l.jsx("div",{className:"grid-compose-title-col",children:"列（Column）"}),l.jsx("div",{className:"grid-compose-desc-col",children:"一般指的是纵向分割空间中较宽松的部分，常用与放置主要信息，其边界对应着模块化信息 Box 的外边框。在设计软件中一般以带有颜色的矩形的形式展示，很容易分辨。"})]}),l.jsxs("div",{className:"grid-compose-row",children:[l.jsx("div",{className:"grid-compose-title-col",children:"槽（Gutter）"}),l.jsx("div",{className:"grid-compose-desc-col",children:"槽是列之间的间隔。槽用来分隔内容。通常槽的宽度为固定值。默认为 8px。"})]})]}),l.jsx("div",{className:"grid-visual-demo",children:l.jsxs("div",{className:"visual-container-box",children:[l.jsx("div",{className:"visual-label visual-label-container",children:"Container"}),l.jsx("div",{className:"visual-margin-box",children:l.jsx("div",{className:"visual-label visual-label-margin",children:"Margin"})}),l.jsxs("div",{className:"visual-columns-box",children:[l.jsx("div",{className:"visual-column-item",children:l.jsx("div",{className:"visual-label visual-label-column",children:"Column"})}),l.jsx("div",{className:"visual-gutter-item",children:l.jsx("div",{className:"visual-label visual-label-gutter",children:"Gutter"})}),l.jsx("div",{className:"visual-column-item",children:l.jsx("div",{className:"visual-label visual-label-column",children:"Column"})}),l.jsx("div",{className:"visual-gutter-item",children:l.jsx("div",{className:"visual-label visual-label-gutter",children:"Gutter"})}),l.jsx("div",{className:"visual-column-item",children:l.jsx("div",{className:"visual-label visual-label-column",children:"Column"})}),l.jsx("div",{className:"visual-gutter-item",children:l.jsx("div",{className:"visual-label visual-label-gutter",children:"Gutter"})}),l.jsx("div",{className:"visual-column-item",children:l.jsx("div",{className:"visual-label visual-label-column",children:"Column"})}),l.jsx("div",{className:"visual-gutter-item",children:l.jsx("div",{className:"visual-label visual-label-gutter",children:"Gutter"})}),l.jsx("div",{className:"visual-column-item",children:l.jsx("div",{className:"visual-label visual-label-column",children:"Column"})}),l.jsx("div",{className:"visual-gutter-item",children:l.jsx("div",{className:"visual-label visual-label-gutter",children:"Gutter"})}),l.jsx("div",{className:"visual-column-item",children:l.jsx("div",{className:"visual-label visual-label-column",children:"Column"})}),l.jsx("div",{className:"visual-gutter-item",children:l.jsx("div",{className:"visual-label visual-label-gutter",children:"Gutter"})}),l.jsx("div",{className:"visual-column-item",children:l.jsx("div",{className:"visual-label visual-label-column",children:"Column"})}),l.jsx("div",{className:"visual-gutter-item",children:l.jsx("div",{className:"visual-label visual-label-gutter",children:"Gutter"})}),l.jsx("div",{className:"visual-column-item",children:l.jsx("div",{className:"visual-label visual-label-column",children:"Column"})}),l.jsx("div",{className:"visual-gutter-item",children:l.jsx("div",{className:"visual-label visual-label-gutter",children:"Gutter"})}),l.jsx("div",{className:"visual-column-item",children:l.jsx("div",{className:"visual-label visual-label-column",children:"Column"})}),l.jsx("div",{className:"visual-gutter-item",children:l.jsx("div",{className:"visual-label visual-label-gutter",children:"Gutter"})}),l.jsx("div",{className:"visual-column-item",children:l.jsx("div",{className:"visual-label visual-label-column",children:"Column"})}),l.jsx("div",{className:"visual-gutter-item",children:l.jsx("div",{className:"visual-label visual-label-gutter",children:"Gutter"})}),l.jsx("div",{className:"visual-column-item",children:l.jsx("div",{className:"visual-label visual-label-column",children:"Column"})}),l.jsx("div",{className:"visual-gutter-item",children:l.jsx("div",{className:"visual-label visual-label-gutter",children:"Gutter"})}),l.jsx("div",{className:"visual-column-item",children:l.jsx("div",{className:"visual-label visual-label-column",children:"Column"})})]}),l.jsx("div",{className:"visual-margin-box",children:l.jsx("div",{className:"visual-label visual-label-margin",children:"Margin"})})]})})]})}),`
`,l.jsx(s.h2,{id:"栅格分栏",children:"栅格分栏"}),`
`,l.jsx(s.h3,{id:"均等分栏",children:"均等分栏"}),`
`,l.jsx("div",{className:"section-desc",children:l.jsx(s.p,{children:"均等分栏建议数量为二、三、四、六、八栏。"})}),`
`,l.jsx("div",{className:"grid-section",children:l.jsxs("div",{className:"grid-split-demo",children:[l.jsx("div",{className:"grid-split-row",children:l.jsx("div",{className:"grid-split-col",style:{flex:24},children:"占 24 格"})}),l.jsxs("div",{className:"grid-split-row",children:[l.jsx("div",{className:"grid-split-col",style:{flex:12},children:"占 12 格"}),l.jsx("div",{className:"grid-split-col",style:{flex:12},children:"占 12 格"})]}),l.jsxs("div",{className:"grid-split-row",children:[l.jsx("div",{className:"grid-split-col",style:{flex:8},children:"占 8 格"}),l.jsx("div",{className:"grid-split-col",style:{flex:8},children:"占 8 格"}),l.jsx("div",{className:"grid-split-col",style:{flex:8},children:"占 8 格"})]}),l.jsxs("div",{className:"grid-split-row",children:[l.jsx("div",{className:"grid-split-col",style:{flex:6},children:"占 6 格"}),l.jsx("div",{className:"grid-split-col",style:{flex:6},children:"占 6 格"}),l.jsx("div",{className:"grid-split-col",style:{flex:6},children:"占 6 格"}),l.jsx("div",{className:"grid-split-col",style:{flex:6},children:"占 6 格"})]}),l.jsxs("div",{className:"grid-split-row",children:[l.jsx("div",{className:"grid-split-col",style:{flex:4},children:"占 4 格"}),l.jsx("div",{className:"grid-split-col",style:{flex:4},children:"占 4 格"}),l.jsx("div",{className:"grid-split-col",style:{flex:4},children:"占 4 格"}),l.jsx("div",{className:"grid-split-col",style:{flex:4},children:"占 4 格"}),l.jsx("div",{className:"grid-split-col",style:{flex:4},children:"占 4 格"}),l.jsx("div",{className:"grid-split-col",style:{flex:4},children:"占 4 格"})]})]})}),`
`,l.jsx(s.h3,{id:"自定义两栏示例",children:"自定义两栏示例"}),`
`,l.jsx("div",{className:"section-desc",children:l.jsx(s.p,{children:"常用比例 1:1（均分）、2:8、3:7、4:6，就近对应 24 栅格，如下图。 允许自定义比例，比如 6 格 : 18 格（即 1 : 3）、 8 格 : 16 格（即 1 : 2）等。"})}),`
`,l.jsx("div",{className:"grid-section",children:l.jsxs("div",{className:"grid-split-demo",children:[l.jsxs("div",{className:"grid-split-row",children:[l.jsx("div",{className:"grid-split-col",style:{flex:5},children:"占 5 格"}),l.jsx("div",{className:"grid-split-col",style:{flex:19},children:"占 19 格"})]}),l.jsxs("div",{className:"grid-split-row",children:[l.jsx("div",{className:"grid-split-col",style:{flex:7},children:"占 7 格"}),l.jsx("div",{className:"grid-split-col",style:{flex:17},children:"占 17 格"})]}),l.jsxs("div",{className:"grid-split-row",children:[l.jsx("div",{className:"grid-split-col",style:{flex:10},children:"占 10 格"}),l.jsx("div",{className:"grid-split-col",style:{flex:14},children:"占 14 格"})]})]})}),`
`,l.jsx(s.h3,{id:"自定义三栏示例",children:"自定义三栏示例"}),`
`,l.jsx("div",{className:"section-desc",children:l.jsx(s.p,{children:"比例可参考 1:1:1（均分）、1:1:2 、1:1:4、1:2:3 允许自定义比例。 按比例分 n 栏，同理，不一一列举。"})}),`
`,l.jsx("div",{className:"grid-section",children:l.jsxs("div",{className:"grid-split-demo",children:[l.jsxs("div",{className:"grid-split-row",children:[l.jsx("div",{className:"grid-split-col",style:{flex:6},children:"占 6 格"}),l.jsx("div",{className:"grid-split-col",style:{flex:6},children:"占 6 格"}),l.jsx("div",{className:"grid-split-col",style:{flex:12},children:"占 12 格"})]}),l.jsxs("div",{className:"grid-split-row",children:[l.jsx("div",{className:"grid-split-col",style:{flex:4},children:"占 4 格"}),l.jsx("div",{className:"grid-split-col",style:{flex:4},children:"占 4 格"}),l.jsx("div",{className:"grid-split-col",style:{flex:16},children:"占 16 格"})]}),l.jsxs("div",{className:"grid-split-row",children:[l.jsx("div",{className:"grid-split-col",style:{flex:4},children:"占 4 格"}),l.jsx("div",{className:"grid-split-col",style:{flex:8},children:"占 8 格"}),l.jsx("div",{className:"grid-split-col",style:{flex:12},children:"占 12 格"})]})]})})]})}function C(e={}){const{wrapper:s}={...n(),...e.components};return s?l.jsx(s,{...e,children:l.jsx(x,{...e})}):x(e)}export{b as GridBaseInteractive,C as default};
