import{d as w,b,e as m,n as i,g as q,f as N,k as p,q as B,o as v,l as C,t as M,s as E,v as R,m as f}from"./vue.esm-bundler-CUvtzpDJ.js";import{_ as S}from"./_plugin-vue_export-helper-DlAUqK2U.js";const I=["value","name","disabled","checked"],D=w({name:"TraeRadio",__name:"Radio",props:{value:{type:[String,Number,Boolean]},label:{},disabled:{type:Boolean,default:!1},variant:{},size:{},error:{type:Boolean,default:!1},name:{}},setup(a){const r=a,e=B("RadioGroupContext",null),o=p(()=>e&&e.modelValue?e.modelValue.value===r.value:!1),s=p(()=>r.disabled||(e==null?void 0:e.disabled.value)||!1),l=p(()=>r.name||(e==null?void 0:e.name)),_=()=>{s.value||e&&e.updateValue(r.value)};return(n,J)=>(v(),b("label",{class:i([n.$style["radio-wrapper"],n.$style["radio-basic"],{[n.$style["is-checked"]]:o.value,[n.$style["is-disabled"]]:s.value,[n.$style["is-error"]]:a.error}]),onClick:_},[m("span",{class:i(n.$style["radio-input-wrapper"])},[m("input",{type:"radio",class:i(n.$style["radio-input"]),value:a.value,name:l.value,disabled:s.value,checked:o.value,tabindex:"0"},null,10,I),m("span",{class:i(n.$style["radio-indicator"])},null,2)],2),a.label||n.$slots.default?(v(),b("span",{key:0,class:i(n.$style["radio-label"])},[q(n.$slots,"default",{},()=>[C(M(a.label),1)])],2)):N("",!0)],2))}}),F={"radio-wrapper":"_radio-wrapper_1tbwz_8","is-disabled":"_is-disabled_1tbwz_20","radio-label":"_radio-label_1tbwz_23","radio-input":"_radio-input_1tbwz_27","radio-basic":"_radio-basic_1tbwz_35","radio-indicator":"_radio-indicator_1tbwz_39","is-checked":"_is-checked_1tbwz_72","is-focused":"_is-focused_1tbwz_83","is-error":"_is-error_1tbwz_110","radio-group-vertical":"_radio-group-vertical_1tbwz_122"},j={$style:F},c=S(D,[["__cssModules",j]]);D.__docgenInfo={name:"TraeRadio",exportName:"default",displayName:"Radio",description:"",tags:{},props:[{name:"value",required:!0,type:{name:"RadioValue"}},{name:"label",required:!1,type:{name:"string"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"basic"'},{name:'"button-primary-filled"'},{name:'"button-default-filled"'},{name:'"button-outline"'}]}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"small"'},{name:'"medium"'},{name:'"large"'}]}},{name:"error",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"name",required:!1,type:{name:"string"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/Starbucks-Design-System/Starbucks-Design-System/Radio/Radio.vue"]};const O=w({name:"TraeRadioGroup",__name:"RadioGroup",props:{modelValue:{type:[String,Number,Boolean]},direction:{default:"horizontal"},spacing:{},name:{},disabled:{type:Boolean,default:!1},size:{},variant:{}},emits:["update:modelValue","change"],setup(a,{emit:r}){const e=a,o=r,s=l=>{o("update:modelValue",l),o("change",l)};return E("RadioGroupContext",{name:e.name,modelValue:R(e,"modelValue"),disabled:R(e,"disabled"),updateValue:s}),(l,_)=>(v(),b("div",{class:i(["radio-group",`is-${a.direction}`,{[l.$style["radio-group-vertical"]]:a.direction==="vertical"}]),role:"radiogroup"},[q(l.$slots,"default",{},void 0,!0)],2))}}),L={"radio-wrapper":"_radio-wrapper_akaop_1","is-disabled":"_is-disabled_akaop_1","radio-label":"_radio-label_akaop_1","radio-input":"_radio-input_akaop_1","radio-basic":"_radio-basic_akaop_1","radio-indicator":"_radio-indicator_akaop_1","is-checked":"_is-checked_akaop_1","is-focused":"_is-focused_akaop_1","is-error":"_is-error_akaop_1","radio-group-vertical":"_radio-group-vertical_akaop_1"},H={$style:L},g=S(O,[["__cssModules",H],["__scopeId","data-v-1ce047d4"]]);O.__docgenInfo={name:"TraeRadioGroup",exportName:"default",displayName:"RadioGroup",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"RadioValue"}},{name:"direction",required:!1,type:{name:"union",elements:[{name:'"horizontal"'},{name:'"vertical"'}]},defaultValue:{func:!1,value:"'horizontal'"}},{name:"spacing",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"}]}},{name:"name",required:!1,type:{name:"string"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"small"'},{name:'"medium"'},{name:'"large"'}]}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"basic"'},{name:'"button-primary-filled"'},{name:'"button-default-filled"'},{name:'"button-outline"'}]}}],events:[{name:"update:modelValue",type:{names:["RadioValue"]}},{name:"change",type:{names:["RadioValue"]}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/Starbucks-Design-System/Starbucks-Design-System/Radio/RadioGroup.vue"]};const Q={title:"数据录入/单选框 Radio",component:c,tags:["autodocs"],argTypes:{disabled:{control:"boolean"},error:{control:"boolean"},variant:{control:"select",options:["basic","button-primary-filled","button-default-filled","button-outline"]},size:{control:"select",options:["small","medium","large"]},value:{control:!1}},args:{value:"default",label:"Radio Label"}},d={render:a=>({components:{TraeRadio:c,TraeRadioGroup:g},setup(){const r=f("1"),{value:e,...o}=a;return{radioArgs:o,selected:r}},template:`
      <TraeRadioGroup v-model="selected">
        <TraeRadio value="1" label="Option 1" v-bind="radioArgs" />
        <TraeRadio value="2" label="Option 2" v-bind="radioArgs" />
        <TraeRadio value="3" label="Option 3" v-bind="radioArgs" />
      </TraeRadioGroup>
    `})},t={render:a=>({components:{TraeRadio:c,TraeRadioGroup:g},setup(){const r=f("1"),{value:e,...o}=a;return{radioArgs:o,selected:r}},template:`
      <TraeRadioGroup v-model="selected" disabled>
        <TraeRadio value="1" label="Disabled 1" v-bind="radioArgs" />
        <TraeRadio value="2" label="Disabled 2" v-bind="radioArgs" />
      </TraeRadioGroup>
    `})},u={render:a=>({components:{TraeRadio:c,TraeRadioGroup:g},setup(){const r=f("1"),{value:e,...o}=a;return{radioArgs:o,selected:r}},template:`
      <TraeRadioGroup v-model="selected" direction="vertical">
        <TraeRadio value="1" label="Option 1" v-bind="radioArgs" />
        <TraeRadio value="2" label="Option 2" v-bind="radioArgs" />
        <TraeRadio value="3" label="Option 3" v-bind="radioArgs" />
      </TraeRadioGroup>
    `})};var y,T,k;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => ({
    components: {
      TraeRadio,
      TraeRadioGroup
    },
    setup() {
      const selected = ref('1');
      // Exclude value from args to avoid overriding specific radio values
      const {
        value,
        ...radioArgs
      } = args;
      return {
        radioArgs,
        selected
      };
    },
    template: \`
      <TraeRadioGroup v-model="selected">
        <TraeRadio value="1" label="Option 1" v-bind="radioArgs" />
        <TraeRadio value="2" label="Option 2" v-bind="radioArgs" />
        <TraeRadio value="3" label="Option 3" v-bind="radioArgs" />
      </TraeRadioGroup>
    \`
  })
}`,...(k=(T=d.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var A,G,V;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => ({
    components: {
      TraeRadio,
      TraeRadioGroup
    },
    setup() {
      const selected = ref('1');
      const {
        value,
        ...radioArgs
      } = args;
      return {
        radioArgs,
        selected
      };
    },
    template: \`
      <TraeRadioGroup v-model="selected" disabled>
        <TraeRadio value="1" label="Disabled 1" v-bind="radioArgs" />
        <TraeRadio value="2" label="Disabled 2" v-bind="radioArgs" />
      </TraeRadioGroup>
    \`
  })
}`,...(V=(G=t.parameters)==null?void 0:G.docs)==null?void 0:V.source}}};var h,z,$;u.parameters={...u.parameters,docs:{...(h=u.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => ({
    components: {
      TraeRadio,
      TraeRadioGroup
    },
    setup() {
      const selected = ref('1');
      const {
        value,
        ...radioArgs
      } = args;
      return {
        radioArgs,
        selected
      };
    },
    template: \`
      <TraeRadioGroup v-model="selected" direction="vertical">
        <TraeRadio value="1" label="Option 1" v-bind="radioArgs" />
        <TraeRadio value="2" label="Option 2" v-bind="radioArgs" />
        <TraeRadio value="3" label="Option 3" v-bind="radioArgs" />
      </TraeRadioGroup>
    \`
  })
}`,...($=(z=u.parameters)==null?void 0:z.docs)==null?void 0:$.source}}};const U=["Default","Disabled","VerticalGroup"];export{d as Default,t as Disabled,u as VerticalGroup,U as __namedExportsOrder,Q as default};
