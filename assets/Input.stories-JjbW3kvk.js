import{I as r}from"./Input-DGlE0fSJ.js";import{r as e}from"./vue.esm-bundler-DEFMfx8h.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const D={title:"数据录入/输入框 Input",component:r,tags:["autodocs"],parameters:{docs:{description:{component:'<span style="font-size: 14px; color: #666;">Input 组件用于用户输入文本信息。</span>'}}},argTypes:{size:{control:"select",options:["large","medium","small"],description:"尺寸"},status:{control:"select",options:["default","error","warning"],description:"状态"},type:{control:"select",options:["text","password","textarea"],description:"输入类型"},disabled:{control:"boolean",description:"是否禁用"},readonly:{control:"boolean",description:"是否只读"},clearable:{control:"boolean",description:"是否可清空"},filled:{control:"boolean",description:"是否填充背景"},prefixIcon:{control:"boolean",description:"是否显示前缀图标"},suffixIcon:{control:"boolean",description:"是否显示后缀图标"},showCount:{control:"boolean",description:"是否显示字数统计"},autosize:{control:"boolean",description:"是否自适应高度（仅textarea）"},maxLength:{control:"number",description:"最大字符数"},tips:{control:"text",description:"提示信息"},modelValue:{control:"text",description:"输入框的值"},placeholder:{control:"text",description:"占位符"}},args:{placeholder:"请输入内容",size:"medium"}},n={render:l=>({components:{TraeInput:r},setup(){const a=e("");return{args:l,value:a}},template:`
      <div style="width: 300px;">
        <TraeInput v-bind="args" v-model="value" />
        <div style="margin-top: 10px; color: #666; font-size: 14px;">Value: {{ value }}</div>
      </div>
    `})},s={render:l=>({components:{TraeInput:r},setup(){const a=e(""),t=e(""),o=e("");return{val1:a,val2:t,val3:o}},template:`
      <div style="display: flex; flex-direction: column; gap: 20px; width: 300px;">
        <TraeInput size="small" placeholder="Small size" v-model="val1" />
        <TraeInput size="medium" placeholder="Medium size" v-model="val2" />
        <TraeInput size="large" placeholder="Large size" v-model="val3" />
      </div>
    `})},p={render:l=>({components:{TraeInput:r},setup(){const a=e(""),t=e("");return{val1:a,val2:t}},template:`
      <div style="display: flex; flex-direction: column; gap: 20px; width: 300px;">
        <TraeInput status="error" placeholder="Error status" v-model="val1" />
        <TraeInput status="warning" placeholder="Warning status" v-model="val2" />
      </div>
    `})},d={render:l=>({components:{TraeInput:r},setup(){const a=e("Initial value"),t=e(""),o=e("123456"),O=e("");return{val1:a,val2:t,val3:o,val4:O}},template:`
      <div style="display: flex; flex-direction: column; gap: 20px; width: 300px;">
        <TraeInput placeholder="Clearable" clearable v-model="val1" />
        <TraeInput placeholder="Filled" filled v-model="val2" />
        <TraeInput placeholder="Password" type="password" v-model="val3" />
        <TraeInput placeholder="With Tips" tips="这是一个提示信息" v-model="val4" />
      </div>
    `})},c={render:()=>({components:{TraeInput:r},setup(){return{val:e("")}},template:`
      <div style="width: 300px;">
        <TraeInput showCount :maxLength="10" placeholder="Max length is 10" v-model="val" />
      </div>
    `})},i={name:"Textarea",render:l=>({components:{TraeInput:r},setup(){const a=e(""),t=e("");return{val1:a,val2:t}},template:`
      <div style="display: flex; flex-direction: column; gap: 20px; width: 300px;">
        <TraeInput type="textarea" placeholder="Basic Textarea" v-model="val1" />
        <TraeInput type="textarea" autosize placeholder="Autosize Textarea" v-model="val2" />
      </div>
    `})},u={name:"With Icons",render:l=>({components:{TraeInput:r},setup(){const a=e(""),t=e("");return{val1:a,val2:t}},template:`
      <div style="display: flex; flex-direction: column; gap: 20px; width: 300px;">
        <TraeInput placeholder="Prefix Slot" v-model="val1">
          <template #prefix>
            <span style="color: #00754A;">★</span>
          </template>
        </TraeInput>
        <TraeInput placeholder="Suffix Slot" v-model="val2">
          <template #suffix>
            <span style="font-size: 12px; color: #666;">RMB</span>
          </template>
        </TraeInput>
      </div>
    `})},v={name:"With Addons",render:l=>({components:{TraeInput:r},setup(){const a=e(""),t=e(""),o=e("");return{val1:a,val2:t,val3:o}},template:`
      <div style="display: flex; flex-direction: column; gap: 20px; width: 300px;">
        <TraeInput placeholder="Prepend Label" prepend="http://" v-model="val1" />
        <TraeInput placeholder="Append Label" append=".com" v-model="val2" />
        <TraeInput placeholder="Both Labels" prepend="http://" append=".com" v-model="val3" />
      </div>
    `})};var m,x,h;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => ({
    components: {
      TraeInput
    },
    setup() {
      const value = ref('');
      return {
        args,
        value
      };
    },
    template: \`
      <div style="width: 300px;">
        <TraeInput v-bind="args" v-model="value" />
        <div style="margin-top: 10px; color: #666; font-size: 14px;">Value: {{ value }}</div>
      </div>
    \`
  })
}`,...(h=(x=n.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var f,I,T;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => ({
    components: {
      TraeInput
    },
    setup() {
      const val1 = ref('');
      const val2 = ref('');
      const val3 = ref('');
      return {
        val1,
        val2,
        val3
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 20px; width: 300px;">
        <TraeInput size="small" placeholder="Small size" v-model="val1" />
        <TraeInput size="medium" placeholder="Medium size" v-model="val2" />
        <TraeInput size="large" placeholder="Large size" v-model="val3" />
      </div>
    \`
  })
}`,...(T=(I=s.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var g,y,w;p.parameters={...p.parameters,docs:{...(g=p.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => ({
    components: {
      TraeInput
    },
    setup() {
      const val1 = ref('');
      const val2 = ref('');
      return {
        val1,
        val2
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 20px; width: 300px;">
        <TraeInput status="error" placeholder="Error status" v-model="val1" />
        <TraeInput status="warning" placeholder="Warning status" v-model="val2" />
      </div>
    \`
  })
}`,...(w=(y=p.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var z,b,S;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => ({
    components: {
      TraeInput
    },
    setup() {
      const val1 = ref('Initial value');
      const val2 = ref('');
      const val3 = ref('123456');
      const val4 = ref('');
      return {
        val1,
        val2,
        val3,
        val4
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 20px; width: 300px;">
        <TraeInput placeholder="Clearable" clearable v-model="val1" />
        <TraeInput placeholder="Filled" filled v-model="val2" />
        <TraeInput placeholder="Password" type="password" v-model="val3" />
        <TraeInput placeholder="With Tips" tips="这是一个提示信息" v-model="val4" />
      </div>
    \`
  })
}`,...(S=(b=d.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var C,L,A;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => ({
    components: {
      TraeInput
    },
    setup() {
      const val = ref('');
      return {
        val
      };
    },
    template: \`
      <div style="width: 300px;">
        <TraeInput showCount :maxLength="10" placeholder="Max length is 10" v-model="val" />
      </div>
    \`
  })
}`,...(A=(L=c.parameters)==null?void 0:L.docs)==null?void 0:A.source}}};var B,W,M;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Textarea',
  render: args => ({
    components: {
      TraeInput
    },
    setup() {
      const val1 = ref('');
      const val2 = ref('');
      return {
        val1,
        val2
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 20px; width: 300px;">
        <TraeInput type="textarea" placeholder="Basic Textarea" v-model="val1" />
        <TraeInput type="textarea" autosize placeholder="Autosize Textarea" v-model="val2" />
      </div>
    \`
  })
}`,...(M=(W=i.parameters)==null?void 0:W.docs)==null?void 0:M.source}}};var P,F,E;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'With Icons',
  render: args => ({
    components: {
      TraeInput
    },
    setup() {
      const val1 = ref('');
      const val2 = ref('');
      return {
        val1,
        val2
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 20px; width: 300px;">
        <TraeInput placeholder="Prefix Slot" v-model="val1">
          <template #prefix>
            <span style="color: #00754A;">★</span>
          </template>
        </TraeInput>
        <TraeInput placeholder="Suffix Slot" v-model="val2">
          <template #suffix>
            <span style="font-size: 12px; color: #666;">RMB</span>
          </template>
        </TraeInput>
      </div>
    \`
  })
}`,...(E=(F=u.parameters)==null?void 0:F.docs)==null?void 0:E.source}}};var V,R,_;v.parameters={...v.parameters,docs:{...(V=v.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'With Addons',
  render: args => ({
    components: {
      TraeInput
    },
    setup() {
      const val1 = ref('');
      const val2 = ref('');
      const val3 = ref('');
      return {
        val1,
        val2,
        val3
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 20px; width: 300px;">
        <TraeInput placeholder="Prepend Label" prepend="http://" v-model="val1" />
        <TraeInput placeholder="Append Label" append=".com" v-model="val2" />
        <TraeInput placeholder="Both Labels" prepend="http://" append=".com" v-model="val3" />
      </div>
    \`
  })
}`,...(_=(R=v.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};const G=["Basic","Sizes","Status","Features","CharacterCount","Textarea","CustomIcons","Adornments"];export{v as Adornments,n as Basic,c as CharacterCount,u as CustomIcons,d as Features,s as Sizes,p as Status,i as Textarea,G as __namedExportsOrder,D as default};
