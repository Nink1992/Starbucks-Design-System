import{d as K,b as o,n,e as r,f,g as T,o as i}from"./vue.esm-bundler-DsV38QMi.js";import{_ as Q}from"./_plugin-vue_export-helper-DlAUqK2U.js";const U=["disabled"],H=K({name:"TraeButton",__name:"Button",props:{variant:{default:"base"},theme:{default:"default"},size:{default:"medium"},shape:{default:"rectangle"},icon:{type:Boolean,default:!1},iconType:{default:"prefixIcon"},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},block:{type:Boolean,default:!1}},emits:["click"],setup(t,{emit:j}){const y=t,G=j,J=e=>{y.disabled||y.loading||G("click",e)};return(e,g)=>(i(),o("button",{class:n([e.$style.button,e.$style[`variant-${t.variant}`],e.$style[`theme-${t.theme}`],e.$style[`size-${t.size}`],e.$style[`shape-${t.shape}`],{[e.$style["is-loading"]]:t.loading,[e.$style["is-disabled"]]:t.disabled,[e.$style["is-block"]]:t.block,[e.$style["has-icon"]]:t.icon,[e.$style["icon-only"]]:t.iconType==="singleIcon"}]),disabled:t.disabled||t.loading,onClick:J},[t.loading?(i(),o("span",{key:0,class:n(e.$style["loading-spinner"])},[...g[0]||(g[0]=[r("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[r("circle",{cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4",class:"opacity-25",style:{opacity:"0.25"}}),r("path",{fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1)])],2)):f("",!0),t.icon&&t.iconType==="prefixIcon"&&!t.loading&&e.$slots.prefix?(i(),o("span",{key:1,class:n(e.$style["icon-prefix"])},[T(e.$slots,"prefix")],2)):f("",!0),r("span",{class:n(e.$style.content)},[T(e.$slots,"default")],2),t.icon&&t.iconType==="suffixIcon"&&!t.loading&&e.$slots.suffix?(i(),o("span",{key:2,class:n(e.$style["icon-suffix"])},[T(e.$slots,"suffix")],2)):f("",!0)],10,U))}}),W="_button_i231o_1",X="_content_i231o_1",Y="_spin_i231o_1",Z={button:W,"size-large":"_size-large_i231o_1","shape-circle":"_shape-circle_i231o_1","icon-only":"_icon-only_i231o_1","size-medium":"_size-medium_i231o_1","size-small":"_size-small_i231o_1","shape-rectangle":"_shape-rectangle_i231o_1","shape-round":"_shape-round_i231o_1","shape-square":"_shape-square_i231o_1","is-block":"_is-block_i231o_1","is-loading":"_is-loading_i231o_1",content:X,"icon-prefix":"_icon-prefix_i231o_1","icon-suffix":"_icon-suffix_i231o_1","loading-spinner":"_loading-spinner_i231o_1",spin:Y,"theme-primary":"_theme-primary_i231o_1","variant-base":"_variant-base_i231o_1","is-disabled":"_is-disabled_i231o_1","variant-outline":"_variant-outline_i231o_1","variant-dashed":"_variant-dashed_i231o_1","variant-text":"_variant-text_i231o_1","theme-default":"_theme-default_i231o_1","theme-danger":"_theme-danger_i231o_1"},ee={$style:Z},a=Q(H,[["__cssModules",ee]]);H.__docgenInfo={name:"TraeButton",exportName:"default",displayName:"Button",description:"",tags:{},props:[{name:"variant",required:!1,type:{name:"ButtonVariant"},defaultValue:{func:!1,value:"'base'"}},{name:"theme",required:!1,type:{name:"ButtonTheme"},defaultValue:{func:!1,value:"'default'"}},{name:"size",required:!1,type:{name:"ButtonSize"},defaultValue:{func:!1,value:"'medium'"}},{name:"shape",required:!1,type:{name:"ButtonShape"},defaultValue:{func:!1,value:"'rectangle'"}},{name:"icon",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"iconType",required:!1,type:{name:"ButtonIconType"},defaultValue:{func:!1,value:"'prefixIcon'"}},{name:"loading",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"block",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"click",type:{names:["MouseEvent"]}}],slots:[{name:"prefix"},{name:"default"},{name:"suffix"}],sourceFiles:["/home/runner/work/Starbucks-Design-System/Starbucks-Design-System/Button/Button.vue"]};const ne={title:"通用/按钮 Button",component:a,tags:["autodocs"],parameters:{docs:{description:{component:'<span style="font-size: 14px; color: #666;">Button 组件用于触发具体的业务逻辑或交互行为。</span>'}}},argTypes:{variant:{control:"select",options:["base","outline","dashed","text"],description:"按钮类型"},theme:{control:"select",options:["primary","default","danger"],description:"主题样式"},size:{control:"select",options:["large","medium","small"],description:"尺寸"},shape:{control:"select",options:["rectangle","round","square","circle"],description:"形状"},disabled:{control:"boolean"},loading:{control:"boolean"},block:{control:"boolean"},icon:{control:"boolean"},iconType:{control:"select",options:["prefixIcon","suffixIcon","singleIcon"]}},args:{default:"按钮"}},s={args:{variant:"base",theme:"primary"}},l={render:()=>({components:{TraeButton:a},template:`
      <div style="display: flex; gap: 16px; align-items: center;">
        <TraeButton variant="base">Base</TraeButton>
        <TraeButton variant="outline">Outline</TraeButton>
        <TraeButton variant="dashed">Dashed</TraeButton>
        <TraeButton variant="text">Text</TraeButton>
      </div>
    `})},u={render:()=>({components:{TraeButton:a},template:`
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div style="display: flex; gap: 16px; align-items: center;">
          <TraeButton theme="primary">Primary</TraeButton>
          <TraeButton theme="primary" variant="outline">Primary Outline</TraeButton>
          <TraeButton theme="primary" variant="dashed">Primary Dashed</TraeButton>
          <TraeButton theme="primary" variant="text">Primary Text</TraeButton>
        </div>
        <div style="display: flex; gap: 16px; align-items: center;">
          <TraeButton theme="default">Default</TraeButton>
          <TraeButton theme="default" variant="outline">Default Outline</TraeButton>
          <TraeButton theme="default" variant="dashed">Default Dashed</TraeButton>
          <TraeButton theme="default" variant="text">Default Text</TraeButton>
        </div>
        <div style="display: flex; gap: 16px; align-items: center;">
          <TraeButton theme="danger">Danger</TraeButton>
          <TraeButton theme="danger" variant="outline">Danger Outline</TraeButton>
          <TraeButton theme="danger" variant="dashed">Danger Dashed</TraeButton>
          <TraeButton theme="danger" variant="text">Danger Text</TraeButton>
        </div>
      </div>
    `})},d={render:()=>({components:{TraeButton:a},template:`
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div style="display: flex; gap: 16px; align-items: center;">
          <TraeButton theme="primary">Normal</TraeButton>
          <TraeButton theme="primary" disabled>Disabled</TraeButton>
          <TraeButton theme="primary" loading>Loading</TraeButton>
        </div>
        <div style="display: flex; gap: 16px; align-items: center;">
          <TraeButton theme="default" variant="outline">Normal</TraeButton>
          <TraeButton theme="default" variant="outline" disabled>Disabled</TraeButton>
          <TraeButton theme="default" variant="outline" loading>Loading</TraeButton>
        </div>
      </div>
    `})},p={render:()=>({components:{TraeButton:a},template:`
      <div style="display: flex; gap: 16px; align-items: flex-end;">
        <TraeButton size="small">Small</TraeButton>
        <TraeButton size="medium">Medium</TraeButton>
        <TraeButton size="large">Large</TraeButton>
      </div>
    `})},c={render:()=>({components:{TraeButton:a},template:`
      <div style="display: flex; gap: 16px; align-items: center;">
        <TraeButton shape="rectangle">Rectangle</TraeButton>
        <TraeButton shape="round">Round</TraeButton>
        <TraeButton shape="square" icon iconType="singleIcon">
          <template #default>+</template>
        </TraeButton>
        <TraeButton shape="circle" icon iconType="singleIcon">
          <template #default>+</template>
        </TraeButton>
      </div>
    `})},m={render:()=>({components:{TraeButton:a},template:`
      <div style="display: flex; gap: 16px; align-items: center;">
        <TraeButton icon iconType="prefixIcon">
          <template #prefix><span>🔍</span></template>
          Prefix
        </TraeButton>
        <TraeButton icon iconType="suffixIcon">
          Suffix
          <template #suffix><span>➔</span></template>
        </TraeButton>
        <TraeButton icon iconType="singleIcon" shape="square">
          <template #default><span>✖</span></template>
        </TraeButton>
      </div>
    `})},B={render:()=>({components:{TraeButton:a},template:`
      <div style="width: 300px; padding: 20px; border: 1px dashed #ccc;">
        <TraeButton block theme="primary">Block Button</TraeButton>
        <div style="height: 16px;"></div>
        <TraeButton block theme="default">Block Button</TraeButton>
      </div>
    `})};var h,v,x;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: 'base',
    theme: 'primary'
  }
}`,...(x=(v=s.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var b,k,_;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => ({
    components: {
      TraeButton
    },
    template: \`
      <div style="display: flex; gap: 16px; align-items: center;">
        <TraeButton variant="base">Base</TraeButton>
        <TraeButton variant="outline">Outline</TraeButton>
        <TraeButton variant="dashed">Dashed</TraeButton>
        <TraeButton variant="text">Text</TraeButton>
      </div>
    \`
  })
}`,...(_=(k=l.parameters)==null?void 0:k.docs)==null?void 0:_.source}}};var D,S,z;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => ({
    components: {
      TraeButton
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div style="display: flex; gap: 16px; align-items: center;">
          <TraeButton theme="primary">Primary</TraeButton>
          <TraeButton theme="primary" variant="outline">Primary Outline</TraeButton>
          <TraeButton theme="primary" variant="dashed">Primary Dashed</TraeButton>
          <TraeButton theme="primary" variant="text">Primary Text</TraeButton>
        </div>
        <div style="display: flex; gap: 16px; align-items: center;">
          <TraeButton theme="default">Default</TraeButton>
          <TraeButton theme="default" variant="outline">Default Outline</TraeButton>
          <TraeButton theme="default" variant="dashed">Default Dashed</TraeButton>
          <TraeButton theme="default" variant="text">Default Text</TraeButton>
        </div>
        <div style="display: flex; gap: 16px; align-items: center;">
          <TraeButton theme="danger">Danger</TraeButton>
          <TraeButton theme="danger" variant="outline">Danger Outline</TraeButton>
          <TraeButton theme="danger" variant="dashed">Danger Dashed</TraeButton>
          <TraeButton theme="danger" variant="text">Danger Text</TraeButton>
        </div>
      </div>
    \`
  })
}`,...(z=(S=u.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var $,I,q;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => ({
    components: {
      TraeButton
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div style="display: flex; gap: 16px; align-items: center;">
          <TraeButton theme="primary">Normal</TraeButton>
          <TraeButton theme="primary" disabled>Disabled</TraeButton>
          <TraeButton theme="primary" loading>Loading</TraeButton>
        </div>
        <div style="display: flex; gap: 16px; align-items: center;">
          <TraeButton theme="default" variant="outline">Normal</TraeButton>
          <TraeButton theme="default" variant="outline" disabled>Disabled</TraeButton>
          <TraeButton theme="default" variant="outline" loading>Loading</TraeButton>
        </div>
      </div>
    \`
  })
}`,...(q=(I=d.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};var V,P,w;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => ({
    components: {
      TraeButton
    },
    template: \`
      <div style="display: flex; gap: 16px; align-items: flex-end;">
        <TraeButton size="small">Small</TraeButton>
        <TraeButton size="medium">Medium</TraeButton>
        <TraeButton size="large">Large</TraeButton>
      </div>
    \`
  })
}`,...(w=(P=p.parameters)==null?void 0:P.docs)==null?void 0:w.source}}};var O,C,N;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => ({
    components: {
      TraeButton
    },
    template: \`
      <div style="display: flex; gap: 16px; align-items: center;">
        <TraeButton shape="rectangle">Rectangle</TraeButton>
        <TraeButton shape="round">Round</TraeButton>
        <TraeButton shape="square" icon iconType="singleIcon">
          <template #default>+</template>
        </TraeButton>
        <TraeButton shape="circle" icon iconType="singleIcon">
          <template #default>+</template>
        </TraeButton>
      </div>
    \`
  })
}`,...(N=(C=c.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};var L,M,R;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => ({
    components: {
      TraeButton
    },
    template: \`
      <div style="display: flex; gap: 16px; align-items: center;">
        <TraeButton icon iconType="prefixIcon">
          <template #prefix><span>🔍</span></template>
          Prefix
        </TraeButton>
        <TraeButton icon iconType="suffixIcon">
          Suffix
          <template #suffix><span>➔</span></template>
        </TraeButton>
        <TraeButton icon iconType="singleIcon" shape="square">
          <template #default><span>✖</span></template>
        </TraeButton>
      </div>
    \`
  })
}`,...(R=(M=m.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var E,A,F;B.parameters={...B.parameters,docs:{...(E=B.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => ({
    components: {
      TraeButton
    },
    template: \`
      <div style="width: 300px; padding: 20px; border: 1px dashed #ccc;">
        <TraeButton block theme="primary">Block Button</TraeButton>
        <div style="height: 16px;"></div>
        <TraeButton block theme="default">Block Button</TraeButton>
      </div>
    \`
  })
}`,...(F=(A=B.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};const oe=["Base","Variants","Themes","States","Sizes","Shapes","Icons","Block"];export{s as Base,B as Block,m as Icons,c as Shapes,p as Sizes,d as States,u as Themes,l as Variants,oe as __namedExportsOrder,ne as default};
