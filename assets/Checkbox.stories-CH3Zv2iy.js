import{_ as t}from"./Checkbox-B_86Cwyt.js";import{r as D,c as d}from"./vue.esm-bundler-DEFMfx8h.js";const z={title:"数据录入/复选框 Checkbox",component:t,tags:["autodocs"],parameters:{docs:{description:{component:'<span style="font-size: 14px; color: #666;">复选框用于在一组可选项中进行多项选择。</span>'}}},argTypes:{modelValue:{control:"boolean"},label:{control:"text"},disabled:{control:"boolean"},indeterminate:{control:"boolean"}}},r={name:"Basic Checkbox",args:{modelValue:!1,label:"Checkbox"},render:e=>({components:{TraeCheckbox:t},setup(){return{args:e}},template:'<TraeCheckbox v-bind="args" v-model="args.modelValue" />'})},o={args:{modelValue:!0,label:"Checked"},render:e=>({components:{TraeCheckbox:t},setup(){return{args:e}},template:'<TraeCheckbox v-bind="args" v-model="args.modelValue" />'})},l={name:"Disabled",args:{modelValue:!0,label:"Disabled",disabled:!0}},s={args:{modelValue:!1,label:"Indeterminate",indeterminate:!0}},c={name:"Checkbox Group",render:()=>({components:{TraeCheckbox:t},setup(){return{checkedList:D(["Apple"])}},template:`
      <div style="display: flex; gap: 16px;">
        <TraeCheckbox v-model="checkedList" value="Apple" label="Apple" />
        <TraeCheckbox v-model="checkedList" value="Pear" label="Pear" />
        <TraeCheckbox v-model="checkedList" value="Orange" label="Orange" />
      </div>
      <div style="margin-top: 10px; color: #666;">
        Selected: {{ checkedList }}
      </div>
    `})},n={render:()=>({components:{TraeCheckbox:t},setup(){const e=["选项一","选项二","选项三","选项四"],a=D(["选项一","选项二"]),S=d({get:()=>a.value.length===e.length,set:O=>{a.value=O?[...e]:[]}}),G=d(()=>a.value.length>0&&a.value.length<e.length);return{options:e,checkedList:a,checkAll:S,isIndeterminate:G}},template:`
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <!-- 全选框 -->
        <div style="padding-bottom: 8px; border-bottom: 1px solid #eee;">
          <TraeCheckbox 
            v-model="checkAll" 
            :indeterminate="isIndeterminate"
            label="全部" 
          />
        </div>
        
        <!-- 子选项列表 -->
        <div style="display: flex; gap: 16px;">
          <TraeCheckbox 
            v-for="item in options" 
            :key="item"
            v-model="checkedList" 
            :value="item" 
            :label="item" 
          />
        </div>
        
        <div style="margin-top: 8px; font-size: 12px; color: #666;">
          选中项: {{ checkedList }}
        </div>
      </div>
    `})};var i,p,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'Basic Checkbox',
  args: {
    modelValue: false,
    label: 'Checkbox'
  },
  render: args => ({
    components: {
      TraeCheckbox
    },
    setup() {
      return {
        args
      };
    },
    template: '<TraeCheckbox v-bind="args" v-model="args.modelValue" />'
  })
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,b,h;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    modelValue: true,
    label: 'Checked'
  },
  render: args => ({
    components: {
      TraeCheckbox
    },
    setup() {
      return {
        args
      };
    },
    template: '<TraeCheckbox v-bind="args" v-model="args.modelValue" />'
  })
}`,...(h=(b=o.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var k,v,x;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Disabled',
  args: {
    modelValue: true,
    label: 'Disabled',
    disabled: true
  }
}`,...(x=(v=l.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var g,C,f;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    modelValue: false,
    label: 'Indeterminate',
    indeterminate: true
  }
}`,...(f=(C=s.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};var L,T,y;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Checkbox Group',
  render: () => ({
    components: {
      TraeCheckbox
    },
    setup() {
      const checkedList = ref(['Apple']);
      return {
        checkedList
      };
    },
    template: \`
      <div style="display: flex; gap: 16px;">
        <TraeCheckbox v-model="checkedList" value="Apple" label="Apple" />
        <TraeCheckbox v-model="checkedList" value="Pear" label="Pear" />
        <TraeCheckbox v-model="checkedList" value="Orange" label="Orange" />
      </div>
      <div style="margin-top: 10px; color: #666;">
        Selected: {{ checkedList }}
      </div>
    \`
  })
}`,...(y=(T=c.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};var V,A,I;n.parameters={...n.parameters,docs:{...(V=n.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => ({
    components: {
      TraeCheckbox
    },
    setup() {
      const options = ['选项一', '选项二', '选项三', '选项四'];
      const checkedList = ref(['选项一', '选项二']);

      // 全选框的 modelValue
      const checkAll = computed({
        get: () => checkedList.value.length === options.length,
        set: (val: boolean) => {
          checkedList.value = val ? [...options] : [];
        }
      });

      // 全选框的 indeterminate 状态
      const isIndeterminate = computed(() => {
        return checkedList.value.length > 0 && checkedList.value.length < options.length;
      });
      return {
        options,
        checkedList,
        checkAll,
        isIndeterminate
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <!-- 全选框 -->
        <div style="padding-bottom: 8px; border-bottom: 1px solid #eee;">
          <TraeCheckbox 
            v-model="checkAll" 
            :indeterminate="isIndeterminate"
            label="全部" 
          />
        </div>
        
        <!-- 子选项列表 -->
        <div style="display: flex; gap: 16px;">
          <TraeCheckbox 
            v-for="item in options" 
            :key="item"
            v-model="checkedList" 
            :value="item" 
            :label="item" 
          />
        </div>
        
        <div style="margin-top: 8px; font-size: 12px; color: #666;">
          选中项: {{ checkedList }}
        </div>
      </div>
    \`
  })
}`,...(I=(A=n.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};const B=["Default","Checked","Disabled","Indeterminate","CheckboxGroup","IndeterminateGroup"];export{c as CheckboxGroup,o as Checked,r as Default,l as Disabled,s as Indeterminate,n as IndeterminateGroup,B as __namedExportsOrder,z as default};
