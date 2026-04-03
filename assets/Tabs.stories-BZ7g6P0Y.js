import{e as se,O as ce,r as c,v as de,s as D,P as be,Q as Te,f as v,g as r,n as s,j as w,F as ue,y as pe,k as q,o as T,C as ve,H as fe,m as ye,t as he,l as Pe,N as ge,c as k,z as Ne,J as we,L as Se}from"./vue.esm-bundler-DEFMfx8h.js";import{_ as re}from"./_plugin-vue_export-helper-DlAUqK2U.js";const Ve=["aria-selected","tabindex","onClick"],ke=["onClick"],oe=se({name:"TraeTabs",__name:"Tabs",props:{modelValue:{default:""},type:{default:"normal"},size:{default:"medium"},placement:{default:"top"},closable:{type:Boolean,default:!1},addable:{type:Boolean,default:!1},editable:{type:Boolean,default:!1}},emits:["update:modelValue","change","tab-click","tab-remove","tab-add","edit"],setup(n,{expose:i,emit:y}){const u=n,d=y,b=ce(),o=c(),S=c(),f=c({left:!1,right:!1}),h=()=>{const e=o.value;if(!e)return;const{scrollWidth:t,clientWidth:a,scrollLeft:p}=e,m=t>a,l={left:m&&p>0,right:m&&p<t-a-1};(f.value.left!==l.left||f.value.right!==l.right)&&(f.value=l)},V=()=>{var p;const e=(p=b.default)==null?void 0:p.call(b);if(!e)return[];const t=[],a=m=>{m.forEach(l=>{const P=l.type;P&&(P.name==="TraeTabPane"||P.__name==="TraeTabPane"||typeof P=="object"&&P.name==="TraeTabPane")?t.push(l):typeof l.type=="symbol"&&Array.isArray(l.children)&&a(l.children)})};return a(e),t.map(m=>{const l=m.props||{};return{label:l.label||"",name:l.name,disabled:l.disabled===""||l.disabled===!0,closable:l.closable===""||l.closable===!0,icon:l.icon,slots:m.children}})},$=c(V()),E=()=>{const e=V(),t=m=>m.map(({slots:l,...P})=>P),a=JSON.stringify(t($.value)),p=JSON.stringify(t(e));a!==p&&($.value=e)},M=e=>{const t=o.value;if(!t)return;const a=t.clientWidth*.8,p=e==="left"?t.scrollLeft-a:t.scrollLeft+a;t.scrollTo({left:p,behavior:"smooth"})};let _=null;de(()=>{E(),o.value&&(typeof ResizeObserver<"u"&&(_=new ResizeObserver(h),_.observe(o.value)),o.value.addEventListener("scroll",h),D(h))}),be(()=>{_&&o.value&&(_.disconnect(),o.value.removeEventListener("scroll",h))}),Te(()=>{E(),D(h)});const R=(e,t)=>{e.disabled||(d("update:modelValue",e.name),d("change",e.name),d("tab-click",e,t))},I=(e,t)=>{d("tab-remove",e),d("edit","remove",e)},me=()=>{d("tab-add"),d("edit","add")};return ge("TabsContext",{activeKey:k(()=>u.modelValue),type:k(()=>u.type),size:k(()=>u.size),placement:k(()=>u.placement),handleTabClick:R,handleTabRemove:I}),i({panes:$}),(e,t)=>(T(),v("div",{class:s([e.$style.tabs,e.$style[`type-${n.type}`],e.$style[`size-${n.size}`],e.$style[`placement-${n.placement}`]])},[r("div",{class:s(e.$style["tabs-header"])},[f.value.left?(T(),v("div",{key:0,class:s([e.$style["scroll-btn"],e.$style["scroll-btn-left"]]),onClick:t[0]||(t[0]=a=>M("left"))},[...t[2]||(t[2]=[r("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},[r("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"})],-1)])],2)):w("",!0),r("div",{class:s(e.$style["tabs-nav-wrap"]),ref_key:"navWrap",ref:o},[r("div",{class:s(e.$style["tabs-nav-scroll"]),ref_key:"navScroll",ref:S},[r("div",{class:s(e.$style["tabs-nav"]),role:"tablist"},[(T(!0),v(ue,null,pe($.value,(a,p)=>(T(),v("div",{key:a.name,class:s([e.$style["tabs-tab"],{[e.$style["is-active"]]:a.name===n.modelValue,[e.$style["is-disabled"]]:a.disabled,[e.$style["is-closable"]]:(n.editable||n.closable||a.closable)&&!a.disabled}]),role:"tab","aria-selected":a.name===n.modelValue,tabindex:a.disabled?-1:0,onClick:m=>R(a,m)},[r("div",{class:s(e.$style["tab-content"])},[e.$slots.icon||a.icon||a.slots&&a.slots.icon?(T(),v("span",{key:0,class:s(e.$style["tab-icon"])},[q(e.$slots,"icon",{pane:a},()=>[a.slots&&a.slots.icon?(T(),ve(fe(a.slots.icon),{key:0})):a.icon?(T(),v("i",{key:1,class:s(a.icon)},null,2)):w("",!0)])],2)):w("",!0),r("span",{class:s(e.$style["tab-label"])},[q(e.$slots,"label",{pane:a},()=>[ye(he(a.label),1)])],2),(n.editable||n.closable||a.closable)&&!a.disabled?(T(),v("span",{key:1,class:s(e.$style["tab-close"]),onClick:Pe(m=>I(a.name),["stop"])},[...t[3]||(t[3]=[r("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[r("path",{d:"M4.70013 3.75781L7.99996 7.05764L11.2998 3.75781L12.2426 4.70062L8.94277 8.00045L12.2426 11.3003L11.2998 12.2431L7.99996 8.94326L4.70013 12.2431L3.75732 11.3003L7.05716 8.00045L3.75732 4.70062L4.70013 3.75781Z",fill:"currentColor","fill-opacity":"0.6"})],-1)])],10,ke)):w("",!0)],2)],10,Ve))),128))],2)],2)],2),f.value.right?(T(),v("div",{key:1,class:s([e.$style["scroll-btn"],e.$style["scroll-btn-right"]]),onClick:t[1]||(t[1]=a=>M("right"))},[...t[4]||(t[4]=[r("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},[r("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})],-1)])],2)):w("",!0),n.addable||n.editable?(T(),v("div",{key:2,class:s(e.$style["tabs-add-btn"]),onClick:me,role:"button","aria-label":"Add tab"},[...t[5]||(t[5]=[r("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[r("path",{d:"M8 3.33334V12.6667M3.33333 8.00001H12.6667",stroke:"currentColor","stroke-width":"1.33","stroke-linecap":"round","stroke-linejoin":"round"})],-1)])],2)):w("",!0)],2),r("div",{class:s(e.$style["tabs-content"])},[q(e.$slots,"default")],2)],2))}}),$e="_tabs_34scc_1",_e={tabs:$e,"tabs-header":"_tabs-header_34scc_1","tabs-nav-wrap":"_tabs-nav-wrap_34scc_1","scroll-btn":"_scroll-btn_34scc_1","scroll-btn-left":"_scroll-btn-left_34scc_1","scroll-btn-right":"_scroll-btn-right_34scc_1","tabs-nav-scroll":"_tabs-nav-scroll_34scc_1","tabs-nav":"_tabs-nav_34scc_1","tabs-add-btn":"_tabs-add-btn_34scc_1","tabs-tab":"_tabs-tab_34scc_1","is-disabled":"_is-disabled_34scc_1","tab-icon":"_tab-icon_34scc_1","tab-close":"_tab-close_34scc_1","type-normal":"_type-normal_34scc_1","tab-content":"_tab-content_34scc_1","tab-label":"_tab-label_34scc_1","is-active":"_is-active_34scc_1","size-large":"_size-large_34scc_1","size-medium":"_size-medium_34scc_1","type-card":"_type-card_34scc_1","placement-left":"_placement-left_34scc_1"},ze={$style:_e},g=re(oe,[["__cssModules",ze]]);oe.__docgenInfo={name:"TraeTabs",exportName:"default",displayName:"Tabs",description:"",tags:{},expose:[{name:"panes"}],props:[{name:"modelValue",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"}]},defaultValue:{func:!1,value:"''"}},{name:"type",required:!1,type:{name:"TabsType"},defaultValue:{func:!1,value:"'normal'"}},{name:"size",required:!1,type:{name:"TabsSize"},defaultValue:{func:!1,value:"'medium'"}},{name:"placement",required:!1,type:{name:"TabsPlacement"},defaultValue:{func:!1,value:"'top'"}},{name:"closable",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"addable",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"editable",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue",type:{names:["union"],elements:[{name:"string"},{name:"number"}]}},{name:"change",type:{names:["union"],elements:[{name:"string"},{name:"number"}]}},{name:"tab-click",type:{names:["TabPaneProps"]}},{name:"tab-remove",type:{names:["union"],elements:[{name:"string"},{name:"number"}]}},{name:"tab-add"},{name:"edit",type:{names:["union"],elements:[{name:'"add"'},{name:'"remove"'}]}}],slots:[{name:"icon",scoped:!0,bindings:[{name:"pane",title:"binding"}]},{name:"label",scoped:!0,bindings:[{name:"pane",title:"binding"}]},{name:"default"}],sourceFiles:["/home/runner/work/Starbucks-Design-System/Starbucks-Design-System/Tabs/Tabs.vue"]};const xe=["aria-hidden"],ie=se({name:"TraeTabPane",__name:"TabPane",props:{label:{},name:{},disabled:{type:Boolean},closable:{type:Boolean},icon:{},slots:{}},setup(n){const i=n,y=Se("TabsContext"),u=k(()=>(y==null?void 0:y.activeKey.value)===i.name);return(d,b)=>Ne((T(),v("div",{class:s(d.$style["tab-pane"]),role:"tabpanel","aria-hidden":!u.value},[q(d.$slots,"default")],10,xe)),[[we,u.value]])}}),Ce={"tab-pane":"_tab-pane_1q6sr_2"},Le={$style:Ce},N=re(ie,[["__cssModules",Le]]);ie.__docgenInfo={name:"TraeTabPane",exportName:"default",displayName:"TabPane",description:"",tags:{},props:[{name:"label",required:!0,type:{name:"string"}},{name:"name",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"}]}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"closable",required:!1,type:{name:"boolean"}},{name:"icon",required:!1,type:{name:"string"}},{name:"slots",required:!1,type:{name:"any"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/Starbucks-Design-System/Starbucks-Design-System/Tabs/TabPane.vue"]};const qe={title:"导航/选项卡 Tabs",component:g,subcomponents:{TraeTabPane:N},tags:["autodocs"],parameters:{docs:{description:{component:'<span style="font-size: 14px; color: #666;">Tabs 组件用于在不同的内容区域之间进行切换。</span>'}}},argTypes:{type:{control:"select",options:["normal","card"],description:"风格类型"},size:{control:"select",options:["large","medium"],description:"尺寸"},placement:{control:"select",options:["top","left"],description:"选项卡位置"},closable:{control:"boolean",description:"是否可关闭"},addable:{control:"boolean",description:"是否可添加"},editable:{control:"boolean",description:"是否可编辑（同时开启添加和删除）"},modelValue:{control:"text",description:"当前激活的 tab name"}},args:{type:"normal",size:"medium",placement:"top"}},z={render:n=>({components:{TraeTabs:g,TraeTabPane:N},setup(){const i=c("first"),{modelValue:y,...u}=n;return{args:u,activeName:i}},template:`
      <TraeTabs v-model="activeName" v-bind="args">
        <TraeTabPane label="用户管理" name="first">用户管理内容</TraeTabPane>
        <TraeTabPane label="配置管理" name="second">配置管理内容</TraeTabPane>
        <TraeTabPane label="角色管理" name="third">角色管理内容</TraeTabPane>
        <TraeTabPane label="定时任务补偿" name="fourth">定时任务补偿内容</TraeTabPane>
      </TraeTabs>
    `}),args:{modelValue:"first"}},x={render:()=>({components:{TraeTabs:g,TraeTabPane:N},setup(){return{activeName:c("1")}},template:`
      <TraeTabs v-model="activeName" type="card">
        <TraeTabPane label="选项一" name="1">内容一</TraeTabPane>
        <TraeTabPane label="选项二" name="2">内容二</TraeTabPane>
        <TraeTabPane label="选项三" name="3">内容三</TraeTabPane>
      </TraeTabs>
    `}),args:{modelValue:"1",type:"card"}},C={render:()=>({components:{TraeTabs:g,TraeTabPane:N},setup(){const n=c("1"),i=c("1");return{activeName1:n,activeName2:i}},template:`
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div>
          <h4>Large Size</h4>
          <TraeTabs v-model="activeName1" size="large">
            <TraeTabPane label="用户管理" name="1">用户管理</TraeTabPane>
            <TraeTabPane label="配置管理" name="2">配置管理</TraeTabPane>
          </TraeTabs>
        </div>
        <div>
          <h4>Medium Size</h4>
          <TraeTabs v-model="activeName2" size="medium">
            <TraeTabPane label="用户管理" name="1">用户管理</TraeTabPane>
            <TraeTabPane label="配置管理" name="2">配置管理</TraeTabPane>
          </TraeTabs>
        </div>
      </div>
    `}),args:{modelValue:"1",size:"medium"}},L={render:()=>({components:{TraeTabs:g,TraeTabPane:N},setup(){return{activeName:c("1")}},template:`
      <TraeTabs v-model="activeName" placement="left" style="height: 200px;">
        <TraeTabPane label="用户管理" name="1">用户管理内容</TraeTabPane>
        <TraeTabPane label="配置管理" name="2">配置管理内容</TraeTabPane>
        <TraeTabPane label="角色管理" name="3">角色管理内容</TraeTabPane>
        <TraeTabPane label="定时任务" name="4">定时任务补偿内容</TraeTabPane>
      </TraeTabs>
    `}),args:{modelValue:"1",placement:"left"}},A={render:()=>({components:{TraeTabs:g,TraeTabPane:N},setup(){return{activeName:c("1")}},template:`
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <!-- Normal Style with Icons -->
        <div>
          <h4>Normal Style</h4>
          <TraeTabs v-model="activeName">
            <TraeTabPane label="用户" name="1">
              <template #icon>
                <span>👤</span>
              </template>
              用户管理
            </TraeTabPane>
            <TraeTabPane label="配置" name="2">
               <template #icon>
                <span>⚙️</span>
              </template>
              配置管理
            </TraeTabPane>
          </TraeTabs>
        </div>

        <!-- Card Style with Icons -->
        <div>
          <h4>Card Style</h4>
          <TraeTabs v-model="activeName" type="card">
            <TraeTabPane label="用户" name="1">
              <template #icon>
                <span>👤</span>
              </template>
              用户管理
            </TraeTabPane>
            <TraeTabPane label="配置" name="2">
               <template #icon>
                <span>⚙️</span>
              </template>
              配置管理
            </TraeTabPane>
          </TraeTabs>
        </div>
      </div>
    `}),args:{modelValue:"1"}},B={render:()=>({components:{TraeTabs:g,TraeTabPane:N},setup(){const n=c("2"),i=c([{title:"Tab 1",name:"1",content:"Tab 1 content"},{title:"Tab 2",name:"2",content:"Tab 2 content"}]);let y=2;return{activeName:n,tabs:i,handleAdd:()=>{const b=`${++y}`;i.value.push({title:"New Tab",name:b,content:"New Tab content"}),n.value=b},handleRemove:b=>{const o=i.value;let S=n.value;S===b&&o.forEach((f,h)=>{if(f.name===b){const V=o[h+1]||o[h-1];V&&(S=V.name)}}),n.value=S,i.value=o.filter(f=>f.name!==b)}}},template:`
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div>
          <h4>Normal Editable</h4>
          <TraeTabs
            v-model="activeName"
            type="normal"
            editable
            @edit="(action, name) => action === 'add' ? handleAdd() : handleRemove(name)"
          >
            <TraeTabPane
              v-for="item in tabs"
              :key="item.name"
              :label="item.title"
              :name="item.name"
            >
              {{ item.content }}
            </TraeTabPane>
          </TraeTabs>
        </div>
        
        <div>
          <h4>Card Editable</h4>
          <TraeTabs
            v-model="activeName"
            type="card"
            editable
            @edit="(action, name) => action === 'add' ? handleAdd() : handleRemove(name)"
          >
            <TraeTabPane
              v-for="item in tabs"
              :key="item.name"
              :label="item.title"
              :name="item.name"
            >
              {{ item.content }}
            </TraeTabPane>
          </TraeTabs>
        </div>
      </div>
    `}),args:{modelValue:"2",editable:!0,type:"normal"}};var O,W,j;z.parameters={...z.parameters,docs:{...(O=z.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => ({
    components: {
      TraeTabs,
      TraeTabPane
    },
    setup() {
      const activeName = ref('first');
      // Remove modelValue from args to avoid conflict with v-model
      const {
        modelValue,
        ...restArgs
      } = args;
      return {
        args: restArgs,
        activeName
      };
    },
    template: \`
      <TraeTabs v-model="activeName" v-bind="args">
        <TraeTabPane label="用户管理" name="first">用户管理内容</TraeTabPane>
        <TraeTabPane label="配置管理" name="second">配置管理内容</TraeTabPane>
        <TraeTabPane label="角色管理" name="third">角色管理内容</TraeTabPane>
        <TraeTabPane label="定时任务补偿" name="fourth">定时任务补偿内容</TraeTabPane>
      </TraeTabs>
    \`
  }),
  args: {
    // This value is used by Storybook controls but we filter it out in render
    modelValue: 'first'
  }
}`,...(j=(W=z.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};var F,J,H;x.parameters={...x.parameters,docs:{...(F=x.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => ({
    components: {
      TraeTabs,
      TraeTabPane
    },
    setup() {
      const activeName = ref('1');
      return {
        activeName
      };
    },
    template: \`
      <TraeTabs v-model="activeName" type="card">
        <TraeTabPane label="选项一" name="1">内容一</TraeTabPane>
        <TraeTabPane label="选项二" name="2">内容二</TraeTabPane>
        <TraeTabPane label="选项三" name="3">内容三</TraeTabPane>
      </TraeTabs>
    \`
  }),
  args: {
    modelValue: '1',
    type: 'card'
  }
}`,...(H=(J=x.parameters)==null?void 0:J.docs)==null?void 0:H.source}}};var K,U,Q;C.parameters={...C.parameters,docs:{...(K=C.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => ({
    components: {
      TraeTabs,
      TraeTabPane
    },
    setup() {
      const activeName1 = ref('1');
      const activeName2 = ref('1');
      return {
        activeName1,
        activeName2
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div>
          <h4>Large Size</h4>
          <TraeTabs v-model="activeName1" size="large">
            <TraeTabPane label="用户管理" name="1">用户管理</TraeTabPane>
            <TraeTabPane label="配置管理" name="2">配置管理</TraeTabPane>
          </TraeTabs>
        </div>
        <div>
          <h4>Medium Size</h4>
          <TraeTabs v-model="activeName2" size="medium">
            <TraeTabPane label="用户管理" name="1">用户管理</TraeTabPane>
            <TraeTabPane label="配置管理" name="2">配置管理</TraeTabPane>
          </TraeTabs>
        </div>
      </div>
    \`
  }),
  args: {
    modelValue: '1',
    size: 'medium'
  }
}`,...(Q=(U=C.parameters)==null?void 0:U.docs)==null?void 0:Q.source}}};var Z,G,X;L.parameters={...L.parameters,docs:{...(Z=L.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => ({
    components: {
      TraeTabs,
      TraeTabPane
    },
    setup() {
      const activeName = ref('1');
      return {
        activeName
      };
    },
    template: \`
      <TraeTabs v-model="activeName" placement="left" style="height: 200px;">
        <TraeTabPane label="用户管理" name="1">用户管理内容</TraeTabPane>
        <TraeTabPane label="配置管理" name="2">配置管理内容</TraeTabPane>
        <TraeTabPane label="角色管理" name="3">角色管理内容</TraeTabPane>
        <TraeTabPane label="定时任务" name="4">定时任务补偿内容</TraeTabPane>
      </TraeTabs>
    \`
  }),
  args: {
    modelValue: '1',
    placement: 'left'
  }
}`,...(X=(G=L.parameters)==null?void 0:G.docs)==null?void 0:X.source}}};var Y,ee,ae;A.parameters={...A.parameters,docs:{...(Y=A.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => ({
    components: {
      TraeTabs,
      TraeTabPane
    },
    setup() {
      const activeName = ref('1');
      return {
        activeName
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <!-- Normal Style with Icons -->
        <div>
          <h4>Normal Style</h4>
          <TraeTabs v-model="activeName">
            <TraeTabPane label="用户" name="1">
              <template #icon>
                <span>👤</span>
              </template>
              用户管理
            </TraeTabPane>
            <TraeTabPane label="配置" name="2">
               <template #icon>
                <span>⚙️</span>
              </template>
              配置管理
            </TraeTabPane>
          </TraeTabs>
        </div>

        <!-- Card Style with Icons -->
        <div>
          <h4>Card Style</h4>
          <TraeTabs v-model="activeName" type="card">
            <TraeTabPane label="用户" name="1">
              <template #icon>
                <span>👤</span>
              </template>
              用户管理
            </TraeTabPane>
            <TraeTabPane label="配置" name="2">
               <template #icon>
                <span>⚙️</span>
              </template>
              配置管理
            </TraeTabPane>
          </TraeTabs>
        </div>
      </div>
    \`
  }),
  args: {
    modelValue: '1'
  }
}`,...(ae=(ee=A.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,ne,le;B.parameters={...B.parameters,docs:{...(te=B.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => ({
    components: {
      TraeTabs,
      TraeTabPane
    },
    setup() {
      const activeName = ref('2');
      const tabs = ref([{
        title: 'Tab 1',
        name: '1',
        content: 'Tab 1 content'
      }, {
        title: 'Tab 2',
        name: '2',
        content: 'Tab 2 content'
      }]);
      let tabIndex = 2;
      const handleAdd = () => {
        const newTabName = \`\${++tabIndex}\`;
        tabs.value.push({
          title: 'New Tab',
          name: newTabName,
          content: 'New Tab content'
        });
        activeName.value = newTabName;
      };
      const handleRemove = (targetName: string) => {
        const tabsValue = tabs.value;
        let activeNameValue = activeName.value;
        if (activeNameValue === targetName) {
          tabsValue.forEach((tab, index) => {
            if (tab.name === targetName) {
              const nextTab = tabsValue[index + 1] || tabsValue[index - 1];
              if (nextTab) {
                activeNameValue = nextTab.name;
              }
            }
          });
        }
        activeName.value = activeNameValue;
        tabs.value = tabsValue.filter(tab => tab.name !== targetName);
      };
      return {
        activeName,
        tabs,
        handleAdd,
        handleRemove
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div>
          <h4>Normal Editable</h4>
          <TraeTabs
            v-model="activeName"
            type="normal"
            editable
            @edit="(action, name) => action === 'add' ? handleAdd() : handleRemove(name)"
          >
            <TraeTabPane
              v-for="item in tabs"
              :key="item.name"
              :label="item.title"
              :name="item.name"
            >
              {{ item.content }}
            </TraeTabPane>
          </TraeTabs>
        </div>
        
        <div>
          <h4>Card Editable</h4>
          <TraeTabs
            v-model="activeName"
            type="card"
            editable
            @edit="(action, name) => action === 'add' ? handleAdd() : handleRemove(name)"
          >
            <TraeTabPane
              v-for="item in tabs"
              :key="item.name"
              :label="item.title"
              :name="item.name"
            >
              {{ item.content }}
            </TraeTabPane>
          </TraeTabs>
        </div>
      </div>
    \`
  }),
  args: {
    modelValue: '2',
    editable: true,
    type: 'normal'
  }
}`,...(le=(ne=B.parameters)==null?void 0:ne.docs)==null?void 0:le.source}}};const Ee=["Basic","CardStyle","Sizes","Position","WithIcons","Editable"];export{z as Basic,x as CardStyle,B as Editable,L as Position,C as Sizes,A as WithIcons,Ee as __namedExportsOrder,qe as default};
