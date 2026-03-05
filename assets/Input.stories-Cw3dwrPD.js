import{d as U,m as I,o as s,b as t,g as C,l as S,t as o,f as u,e as p,n as X}from"./vue.esm-bundler-CcV-gy6z.js";const J=U({name:"Input",props:{modelValue:{type:String,default:""},type:{type:String,default:"text"},size:{type:String,default:"medium"},placeholder:{type:String,default:"请输入内容"},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},allowClear:{type:Boolean,default:!1},showCount:{type:Boolean,default:!1},maxLength:{type:Number},prefix:{type:String},suffix:{type:String},status:{type:String,default:"normal"}},emits:["update:modelValue","input","change","clear"],setup(e,{emit:a}){const n=I(!1),l=I(!1);return{isFocused:n,isHovered:l,handleInput:r=>{const Q=r.target;a("update:modelValue",Q.value),a("input",r)},handleClear:()=>{a("update:modelValue",""),a("clear")}}}}),Y=(e,a)=>{const n=e.__vccOpts||e;for(const[l,v]of a)n[l]=v;return n},Z={key:0,class:"input-prefix"},_=["type","value","placeholder","disabled","readonly","maxlength"],ee={key:1,class:"input-suffix"},ae={key:1,class:"input-count"};function re(e,a,n,l,v,K){return s(),t("div",{class:X(["input-wrapper",`input-size-${e.size}`,{"is-disabled":e.disabled,"is-readonly":e.readonly,"is-error":e.status==="error"}]),onMouseenter:a[4]||(a[4]=r=>e.isHovered=!0),onMouseleave:a[5]||(a[5]=r=>e.isHovered=!1)},[e.prefix?(s(),t("span",Z,[C(e.$slots,"prefix",{},()=>[S(o(e.prefix),1)],!0)])):u("",!0),p("input",{type:e.type,value:e.modelValue,placeholder:e.placeholder,disabled:e.disabled,readonly:e.readonly,maxlength:e.maxLength,class:"input-core",onInput:a[0]||(a[0]=(...r)=>e.handleInput&&e.handleInput(...r)),onFocus:a[1]||(a[1]=r=>e.isFocused=!0),onBlur:a[2]||(a[2]=r=>e.isFocused=!1)},null,40,_),e.suffix||e.allowClear||e.showCount?(s(),t("span",ee,[C(e.$slots,"suffix",{},()=>[S(o(e.suffix),1)],!0),e.allowClear&&e.modelValue&&e.isHovered?(s(),t("span",{key:0,onClick:a[3]||(a[3]=(...r)=>e.handleClear&&e.handleClear(...r)),class:"input-clear-icon"},[...a[6]||(a[6]=[p("svg",{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},[p("path",{fill:"currentColor",d:"M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"}),p("path",{fill:"currentColor",d:"M545.6 512l137.6-137.6a22.4 22.4 0 1 0-31.2-32L512 480.8 374.4 343.2a22.4 22.4 0 1 0-32 31.2L480.8 512 343.2 649.6a22.4 22.4 0 0 0 32 31.2L512 543.2l137.6 137.6a22.4 22.4 0 1 0 31.2-32L545.6 512z"})],-1)])])):u("",!0),e.showCount?(s(),t("span",ae,o(e.modelValue.length)+"/"+o(e.maxLength),1)):u("",!0)])):u("",!0)],34)}const ne=Y(J,[["render",re],["__scopeId","data-v-8daf1d12"]]);J.__docgenInfo={displayName:"Input",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"type",type:{name:"string"},defaultValue:{func:!1,value:"'text'"}},{name:"size",type:{name:"InputSize"},defaultValue:{func:!1,value:"'medium'"}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:"'请输入内容'"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"readonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"allowClear",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"showCount",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"maxLength",type:{name:"number"}},{name:"prefix",type:{name:"string"}},{name:"suffix",type:{name:"string"}},{name:"status",type:{name:"InputStatus"},defaultValue:{func:!1,value:"'normal'"}}],events:[{name:"update:modelValue"},{name:"input"},{name:"change"},{name:"clear"}],slots:[{name:"prefix"},{name:"suffix"}],sourceFiles:["/home/runner/work/Starbucks-Design-System/Starbucks-Design-System/Input/Input.vue"]};const se=e=>(e.install=a=>{a.component(e.name,e)},e),te=se(ne),oe={title:"输入框 Input",component:te,tags:["autodocs"],argTypes:{size:{control:"select",options:["large","medium","small"]},status:{control:"select",options:["normal","error"]}}},d={args:{placeholder:"Default Input"}},i={args:{prefix:"$",placeholder:"Amount"}},m={args:{suffix:"RMB",placeholder:"Price"}},c={args:{allowClear:!0,placeholder:"Clearable Input",modelValue:"Some text to clear"}},f={args:{showCount:!0,maxLength:20,placeholder:"Input with character count"}},g={args:{disabled:!0,placeholder:"Disabled Input"}},h={args:{readonly:!0,placeholder:"Readonly Input",modelValue:"This is a readonly input"}},y={args:{status:"error",placeholder:"Error Input"}};var b,V,w;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    placeholder: 'Default Input'
  }
}`,...(w=(V=d.parameters)==null?void 0:V.docs)==null?void 0:w.source}}};var $,k,B;i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    prefix: '$',
    placeholder: 'Amount'
  }
}`,...(B=(k=i.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var D,x,z;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    suffix: 'RMB',
    placeholder: 'Price'
  }
}`,...(z=(x=m.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};var L,E,M;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    allowClear: true,
    placeholder: 'Clearable Input',
    modelValue: 'Some text to clear'
  }
}`,...(M=(E=c.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var N,R,W;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    showCount: true,
    maxLength: 20,
    placeholder: 'Input with character count'
  }
}`,...(W=(R=f.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var F,T,H;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    disabled: true,
    placeholder: 'Disabled Input'
  }
}`,...(H=(T=g.parameters)==null?void 0:T.docs)==null?void 0:H.source}}};var P,A,O;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    readonly: true,
    placeholder: 'Readonly Input',
    modelValue: 'This is a readonly input'
  }
}`,...(O=(A=h.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};var j,q,G;y.parameters={...y.parameters,docs:{...(j=y.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    status: 'error',
    placeholder: 'Error Input'
  }
}`,...(G=(q=y.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};const ue=["Default","WithPrefix","WithSuffix","Clearable","WithCount","Disabled","Readonly","Error"];export{c as Clearable,d as Default,g as Disabled,y as Error,h as Readonly,f as WithCount,i as WithPrefix,m as WithSuffix,ue as __namedExportsOrder,oe as default};
