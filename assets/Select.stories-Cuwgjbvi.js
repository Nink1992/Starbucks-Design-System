import{r as l}from"./vue.esm-bundler-DEFMfx8h.js";import{S as o}from"./Select-CD-F-EVH.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const B={title:"数据录入/选择器 Select",component:o,tags:["autodocs"],parameters:{docs:{description:{component:"是一种用于从预设选项中进行选择的输入组件，支持单选、多选及分组选择等形式。"}}},argTypes:{modelValue:{control:"text",description:"绑定值"},options:{control:"object",description:"选项数据"},placeholder:{control:"text",description:"占位符"},size:{control:"select",options:["small","medium","large"],description:"选择器尺寸"},disabled:{control:"boolean",description:"是否禁用"},multiple:{control:"boolean",description:"是否多选"},clearable:{control:"boolean",description:"是否可以清空选项"},filled:{control:"boolean",description:"是否为填充样式"},prefixIcon:{control:"boolean",description:"是否显示前置图标"},"onUpdate:modelValue":{action:"update:modelValue"},onChange:{action:"change"},onClear:{action:"clear"}}},a=[{label:"选项一",value:"1"},{label:"选项二",value:"2"},{label:"选项三",value:"3"},{label:"选项四 (禁用)",value:"4",disabled:!0},{label:"选项五",value:"5"}],U=[{label:"分组名称",options:[{label:"选择器选项",value:"g1-1"},{label:"选择器选项",value:"g1-2"}]},{label:"分组名称",options:[{label:"选择器选项",value:"g2-1"},{label:"选择器选项",value:"g2-2"},{label:"选择器选项",value:"g2-3"}]}],n={render:e=>({components:{Select:o},setup(){const t=l("");return{args:e,value:t,defaultOptions:a}},template:`
      <div style="width: 240px;">
        <Select v-bind="args" v-model="value" :options="defaultOptions" />
      </div>
    `})},s={render:e=>({components:{Select:o},setup(){const t=l(["1","2"]);return{args:e,value:t,defaultOptions:a}},template:`
      <div style="width: 300px;">
        <Select v-bind="args" v-model="value" :options="defaultOptions" multiple />
      </div>
    `})},r={render:e=>({components:{Select:o},setup(){const t=l("1");return{args:e,value:t,defaultOptions:a}},template:`
      <div style="width: 240px;">
        <Select v-bind="args" v-model="value" :options="defaultOptions" clearable />
      </div>
    `})},d={render:e=>({components:{Select:o},setup(){const t=l(""),v=l(""),T=l("");return{args:e,value1:t,value2:v,value3:T,defaultOptions:a}},template:`
      <div style="display: flex; flex-direction: column; gap: 16px; width: 240px;">
        <Select v-model="value1" :options="defaultOptions" size="large" placeholder="大尺寸 (Large)" />
        <Select v-model="value2" :options="defaultOptions" size="medium" placeholder="中尺寸 (Medium)" />
        <Select v-model="value3" :options="defaultOptions" size="small" placeholder="小尺寸 (Small)" />
      </div>
    `})},i={name:"Filled",render:e=>({components:{Select:o},setup(){const t=l("");return{args:e,value:t,defaultOptions:a}},template:`
      <div style="width: 240px;">
        <Select v-bind="args" v-model="value" :options="defaultOptions" filled placeholder="填充背景样式" />
      </div>
    `})},p={render:e=>({components:{Select:o},setup(){const t=l(""),v=l("1");return{args:e,value1:t,value2:v,defaultOptions:a}},template:`
      <div style="display: flex; flex-direction: column; gap: 16px; width: 240px;">
        <Select v-model="value1" :options="defaultOptions" disabled placeholder="禁用选择器" />
        <Select v-model="value2" :options="defaultOptions" disabled />
      </div>
    `})},c={name:"With Prefix Icon",render:e=>({components:{Select:o},setup(){const t=l("");return{args:e,value:t,defaultOptions:a}},template:`
      <div style="width: 240px;">
        <Select v-bind="args" v-model="value" :options="defaultOptions" prefixIcon placeholder="选择选项" />
      </div>
    `})},u={render:e=>({components:{Select:o},setup(){const t=l("");return{args:e,value:t,groupOptions:U}},template:`
      <div style="width: 280px;">
        <Select v-bind="args" v-model="value" :options="groupOptions" placeholder="请选择内容" />
      </div>
    `})};var m,f,g;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      Select
    },
    setup() {
      const value = ref('');
      return {
        args,
        value,
        defaultOptions
      };
    },
    template: \`
      <div style="width: 240px;">
        <Select v-bind="args" v-model="value" :options="defaultOptions" />
      </div>
    \`
  })
}`,...(g=(f=n.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var S,b,x;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      Select
    },
    setup() {
      const value = ref(['1', '2']);
      return {
        args,
        value,
        defaultOptions
      };
    },
    template: \`
      <div style="width: 300px;">
        <Select v-bind="args" v-model="value" :options="defaultOptions" multiple />
      </div>
    \`
  })
}`,...(x=(b=s.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var h,O,y;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      Select
    },
    setup() {
      const value = ref('1');
      return {
        args,
        value,
        defaultOptions
      };
    },
    template: \`
      <div style="width: 240px;">
        <Select v-bind="args" v-model="value" :options="defaultOptions" clearable />
      </div>
    \`
  })
}`,...(y=(O=r.parameters)==null?void 0:O.docs)==null?void 0:y.source}}};var w,z,I;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Select
    },
    setup() {
      const value1 = ref('');
      const value2 = ref('');
      const value3 = ref('');
      return {
        args,
        value1,
        value2,
        value3,
        defaultOptions
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 16px; width: 240px;">
        <Select v-model="value1" :options="defaultOptions" size="large" placeholder="大尺寸 (Large)" />
        <Select v-model="value2" :options="defaultOptions" size="medium" placeholder="中尺寸 (Medium)" />
        <Select v-model="value3" :options="defaultOptions" size="small" placeholder="小尺寸 (Small)" />
      </div>
    \`
  })
}`,...(I=(z=d.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};var C,D,F;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Filled',
  render: (args: any) => ({
    components: {
      Select
    },
    setup() {
      const value = ref('');
      return {
        args,
        value,
        defaultOptions
      };
    },
    template: \`
      <div style="width: 240px;">
        <Select v-bind="args" v-model="value" :options="defaultOptions" filled placeholder="填充背景样式" />
      </div>
    \`
  })
}`,...(F=(D=i.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var M,P,V;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      Select
    },
    setup() {
      const value1 = ref('');
      const value2 = ref('1');
      return {
        args,
        value1,
        value2,
        defaultOptions
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 16px; width: 240px;">
        <Select v-model="value1" :options="defaultOptions" disabled placeholder="禁用选择器" />
        <Select v-model="value2" :options="defaultOptions" disabled />
      </div>
    \`
  })
}`,...(V=(P=p.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};var G,L,W;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'With Prefix Icon',
  render: (args: any) => ({
    components: {
      Select
    },
    setup() {
      const value = ref('');
      return {
        args,
        value,
        defaultOptions
      };
    },
    template: \`
      <div style="width: 240px;">
        <Select v-bind="args" v-model="value" :options="defaultOptions" prefixIcon placeholder="选择选项" />
      </div>
    \`
  })
}`,...(W=(L=c.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var _,j,E;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      Select
    },
    setup() {
      const value = ref('');
      return {
        args,
        value,
        groupOptions
      };
    },
    template: \`
      <div style="width: 280px;">
        <Select v-bind="args" v-model="value" :options="groupOptions" placeholder="请选择内容" />
      </div>
    \`
  })
}`,...(E=(j=u.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};const H=["Default","Multiple","Clearable","Sizes","Filled","Disabled","PrefixIcon","Group"];export{r as Clearable,n as Default,p as Disabled,i as Filled,u as Group,s as Multiple,c as PrefixIcon,d as Sizes,H as __namedExportsOrder,B as default};
