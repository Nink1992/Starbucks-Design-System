import{B as e}from"./Button-CuUkRbmm.js";import"./vue.esm-bundler-DEFMfx8h.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const V={title:"通用/按钮 Button",component:e,tags:["autodocs"],parameters:{docs:{description:{component:'<span style="font-size: 14px; color: #666;">Button 组件用于触发具体的业务逻辑或交互行为。</span>'}}},argTypes:{variant:{control:"select",options:["base","outline","dashed","text"],description:"按钮类型"},theme:{control:"select",options:["primary","default","danger"],description:"主题样式"},size:{control:"select",options:["large","medium","small"],description:"尺寸"},shape:{control:"select",options:["rectangle","round","square","circle"],description:"形状"},disabled:{control:"boolean"},loading:{control:"boolean"},block:{control:"boolean"},icon:{control:"boolean"},iconType:{control:"select",options:["prefixIcon","suffixIcon","singleIcon"]}},args:{default:"按钮"}},t={args:{variant:"base",theme:"primary"}},a={render:()=>({components:{TraeButton:e},template:`
      <div style="display: flex; gap: 16px; align-items: center;">
        <TraeButton variant="base">Base</TraeButton>
        <TraeButton variant="outline">Outline</TraeButton>
        <TraeButton variant="dashed">Dashed</TraeButton>
        <TraeButton variant="text">Text</TraeButton>
      </div>
    `})},n={render:()=>({components:{TraeButton:e},template:`
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
    `})},r={render:()=>({components:{TraeButton:e},template:`
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
    `})},o={render:()=>({components:{TraeButton:e},template:`
      <div style="display: flex; gap: 16px; align-items: flex-end;">
        <TraeButton size="small">Small</TraeButton>
        <TraeButton size="medium">Medium</TraeButton>
        <TraeButton size="large">Large</TraeButton>
      </div>
    `})},i={render:()=>({components:{TraeButton:e},template:`
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
    `})},s={render:()=>({components:{TraeButton:e},template:`
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
    `})},l={render:()=>({components:{TraeButton:e},template:`
      <div style="width: 300px; padding: 20px; border: 1px dashed #ccc;">
        <TraeButton block theme="primary">Block Button</TraeButton>
        <div style="height: 16px;"></div>
        <TraeButton block theme="default">Block Button</TraeButton>
      </div>
    `})};var u,p,d;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: 'base',
    theme: 'primary'
  }
}`,...(d=(p=t.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var m,c,T;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(T=(c=a.parameters)==null?void 0:c.docs)==null?void 0:T.source}}};var B,g,x;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(x=(g=n.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var y,v,f;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(f=(v=r.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var h,D,b;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(b=(D=o.parameters)==null?void 0:D.docs)==null?void 0:b.source}}};var S,I,k;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(k=(I=i.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};var z,P,O;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(O=(P=s.parameters)==null?void 0:P.docs)==null?void 0:O.source}}};var L,q,N;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(N=(q=l.parameters)==null?void 0:q.docs)==null?void 0:N.source}}};const _=["Base","Variants","Themes","States","Sizes","Shapes","Icons","Block"];export{t as Base,l as Block,s as Icons,i as Shapes,o as Sizes,r as States,n as Themes,a as Variants,_ as __namedExportsOrder,V as default};
