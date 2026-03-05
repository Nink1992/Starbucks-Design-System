import{d as I,o as g,b as h,e as O,n as m,u as b,f as $,p as j,k as u}from"./vue.esm-bundler-CUvtzpDJ.js";const o={"switch-wrapper":"_switch-wrapper_19dkh_2","switch-thumb":"_switch-thumb_19dkh_13","is-checked":"_is-checked_19dkh_23","is-disabled":"_is-disabled_19dkh_29","is-loading":"_is-loading_19dkh_36","switch-loading":"_switch-loading_19dkh_1","size-medium":"_size-medium_19dkh_56","size-large":"_size-large_19dkh_72"},A=["aria-checked","aria-disabled"],t=I({__name:"Switch",props:{modelValue:{type:Boolean},disabled:{type:Boolean},loading:{type:Boolean},size:{},activeColor:{},inactiveColor:{}},emits:["update:modelValue","change"],setup(a,{emit:L}){const e=a,p=L,s=u(()=>e.modelValue===!0),N=()=>{if(e.disabled||e.loading)return;const r=!s.value;p("update:modelValue",r),p("change",r)},E=u(()=>({[o["switch-wrapper"]]:!0,[o["is-checked"]]:s.value,[o["is-disabled"]]:e.disabled,[o["is-loading"]]:e.loading,[o[`size-${e.size||"medium"}`]]:!0})),F=u(()=>{const r={};return e.activeColor&&s.value&&(r.backgroundColor=e.activeColor),e.inactiveColor&&!s.value&&(r.backgroundColor=e.inactiveColor),r});return(r,G)=>(g(),h("div",{class:m(E.value),style:j(F.value),onClick:N,role:"switch","aria-checked":s.value,"aria-disabled":a.disabled},[O("span",{class:m(b(o)["switch-thumb"])},[a.loading?(g(),h("span",{key:0,class:m(b(o)["switch-loading-icon"])},null,2)):$("",!0)],2)],14,A))}});t.__docgenInfo={exportName:"default",displayName:"Switch",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"boolean"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"loading",required:!1,type:{name:"boolean"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"medium"'},{name:'"large"'}]}},{name:"activeColor",required:!1,type:{name:"string"}},{name:"inactiveColor",required:!1,type:{name:"string"}}],events:[{name:"update:modelValue",type:{names:["boolean"]}},{name:"change",type:{names:["boolean"]}}],sourceFiles:["/home/runner/work/Starbucks-Design-System/Starbucks-Design-System/Switch/Switch.vue"]};const J={title:"数据录入/开关 Switch",component:t,tags:["autodocs"],argTypes:{modelValue:{control:"boolean"},disabled:{control:"boolean"},loading:{control:"boolean"},size:{control:"select",options:["medium","large"],description:"Size of the switch"},activeColor:{control:"color"},inactiveColor:{control:"color"}}},l={args:{modelValue:!1,size:"medium"},render:a=>({components:{TraeSwitch:t},setup(){return{args:a}},template:'<TraeSwitch v-bind="args" v-model="args.modelValue" />'})},n={args:{modelValue:!0,size:"large"},render:a=>({components:{TraeSwitch:t},setup(){return{args:a}},template:'<TraeSwitch v-bind="args" v-model="args.modelValue" />'})},i={args:{modelValue:!0,disabled:!0}},d={args:{modelValue:!0,loading:!0}},c={args:{modelValue:!0,activeColor:"#ff4d4f",inactiveColor:"#13c2c2"},render:a=>({components:{TraeSwitch:t},setup(){return{args:a}},template:'<TraeSwitch v-bind="args" v-model="args.modelValue" />'})};var v,w,_;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    modelValue: false,
    size: 'medium'
  },
  render: args => ({
    components: {
      TraeSwitch
    },
    setup() {
      return {
        args
      };
    },
    template: '<TraeSwitch v-bind="args" v-model="args.modelValue" />'
  })
}`,...(_=(w=l.parameters)==null?void 0:w.docs)==null?void 0:_.source}}};var S,f,C;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    modelValue: true,
    size: 'large'
  },
  render: args => ({
    components: {
      TraeSwitch
    },
    setup() {
      return {
        args
      };
    },
    template: '<TraeSwitch v-bind="args" v-model="args.modelValue" />'
  })
}`,...(C=(f=n.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var V,k,y;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    modelValue: true,
    disabled: true
  }
}`,...(y=(k=i.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var z,T,q;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    modelValue: true,
    loading: true
  }
}`,...(q=(T=d.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var B,D,x;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    modelValue: true,
    activeColor: '#ff4d4f',
    inactiveColor: '#13c2c2'
  },
  render: args => ({
    components: {
      TraeSwitch
    },
    setup() {
      return {
        args
      };
    },
    template: '<TraeSwitch v-bind="args" v-model="args.modelValue" />'
  })
}`,...(x=(D=c.parameters)==null?void 0:D.docs)==null?void 0:x.source}}};const K=["Default","Large","Disabled","Loading","CustomColor"];export{c as CustomColor,l as Default,i as Disabled,n as Large,d as Loading,K as __namedExportsOrder,J as default};
