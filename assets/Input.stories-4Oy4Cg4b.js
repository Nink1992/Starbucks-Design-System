import{d as U,m as I,o as s,b as n,g as C,l as v,t,f as l,e as o,n as X}from"./vue.esm-bundler-CUvtzpDJ.js";import{_ as Y}from"./_plugin-vue_export-helper-DlAUqK2U.js";const G=U({name:"Input",props:{modelValue:{type:String,default:""},type:{type:String,default:"text"},size:{type:String,default:"medium"},placeholder:{type:String,default:"请输入内容"},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},allowClear:{type:Boolean,default:!1},showCount:{type:Boolean,default:!1},maxLength:{type:Number},prefix:{type:String},suffix:{type:String},status:{type:String,default:"normal"}},emits:["update:modelValue","input","change","clear"],setup(e,{emit:a}){const h=I(!1),y=I(!1);return{isFocused:h,isHovered:y,handleInput:r=>{const Q=r.target;a("update:modelValue",Q.value),a("input",r)},handleClear:()=>{a("update:modelValue",""),a("clear")}}}}),Z={key:0,class:"input-prefix"},_=["type","value","placeholder","disabled","readonly","maxlength"],ee={key:1,class:"input-suffix"},ae={key:1,class:"input-count"};function re(e,a,h,y,J,K){return s(),n("div",{class:X(["input-wrapper",`input-size-${e.size}`,{"is-disabled":e.disabled,"is-readonly":e.readonly,"is-error":e.status==="error"}]),onMouseenter:a[4]||(a[4]=r=>e.isHovered=!0),onMouseleave:a[5]||(a[5]=r=>e.isHovered=!1)},[e.prefix?(s(),n("span",Z,[C(e.$slots,"prefix",{},()=>[v(t(e.prefix),1)],!0)])):l("",!0),o("input",{type:e.type,value:e.modelValue,placeholder:e.placeholder,disabled:e.disabled,readonly:e.readonly,maxlength:e.maxLength,class:"input-core",onInput:a[0]||(a[0]=(...r)=>e.handleInput&&e.handleInput(...r)),onFocus:a[1]||(a[1]=r=>e.isFocused=!0),onBlur:a[2]||(a[2]=r=>e.isFocused=!1)},null,40,_),e.suffix||e.allowClear||e.showCount?(s(),n("span",ee,[C(e.$slots,"suffix",{},()=>[v(t(e.suffix),1)],!0),e.allowClear&&e.modelValue&&e.isHovered?(s(),n("span",{key:0,onClick:a[3]||(a[3]=(...r)=>e.handleClear&&e.handleClear(...r)),class:"input-clear-icon"},[...a[6]||(a[6]=[o("svg",{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},[o("path",{fill:"currentColor",d:"M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"}),o("path",{fill:"currentColor",d:"M545.6 512l137.6-137.6a22.4 22.4 0 1 0-31.2-32L512 480.8 374.4 343.2a22.4 22.4 0 1 0-32 31.2L480.8 512 343.2 649.6a22.4 22.4 0 0 0 32 31.2L512 543.2l137.6 137.6a22.4 22.4 0 1 0 31.2-32L545.6 512z"})],-1)])])):l("",!0),e.showCount?(s(),n("span",ae,t(e.modelValue.length)+"/"+t(e.maxLength),1)):l("",!0)])):l("",!0)],34)}const se=Y(G,[["render",re],["__scopeId","data-v-8daf1d12"]]);G.__docgenInfo={displayName:"Input",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"type",type:{name:"string"},defaultValue:{func:!1,value:"'text'"}},{name:"size",type:{name:"InputSize"},defaultValue:{func:!1,value:"'medium'"}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:"'请输入内容'"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"readonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"allowClear",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"showCount",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"maxLength",type:{name:"number"}},{name:"prefix",type:{name:"string"}},{name:"suffix",type:{name:"string"}},{name:"status",type:{name:"InputStatus"},defaultValue:{func:!1,value:"'normal'"}}],events:[{name:"update:modelValue"},{name:"input"},{name:"change"},{name:"clear"}],slots:[{name:"prefix"},{name:"suffix"}],sourceFiles:["/home/runner/work/Starbucks-Design-System/Starbucks-Design-System/Input/Input.vue"]};const ne=e=>(e.install=a=>{a.component(e.name,e)},e),te=ne(se),ue={title:"数据录入/输入框 Input",component:te,tags:["autodocs"],parameters:{docs:{description:{component:'<span style="font-size: 14px; color: #666;">Input 组件是表单系统的核心元素，用于承载用户的文本数据输入。它通过标准化的视觉反馈和功能扩展，引导用户高效、准确地完成信息录入。</span>'}}},argTypes:{size:{control:"select",options:["large","medium","small"]},status:{control:"select",options:["normal","error"]}}},u={args:{placeholder:"Default Input"}},p={args:{prefix:"$",placeholder:"Amount"}},d={args:{suffix:"RMB",placeholder:"Price"}},i={args:{allowClear:!0,placeholder:"Clearable Input",modelValue:"Some text to clear"}},m={args:{showCount:!0,maxLength:20,placeholder:"Input with character count"}},f={args:{disabled:!0,placeholder:"Disabled Input"}},c={args:{readonly:!0,placeholder:"Readonly Input",modelValue:"This is a readonly input"}},g={args:{status:"error",placeholder:"Error Input"}};var S,b,V;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    placeholder: 'Default Input'
  }
}`,...(V=(b=u.parameters)==null?void 0:b.docs)==null?void 0:V.source}}};var w,$,x;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    prefix: '$',
    placeholder: 'Amount'
  }
}`,...(x=($=p.parameters)==null?void 0:$.docs)==null?void 0:x.source}}};var z,B,D;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    suffix: 'RMB',
    placeholder: 'Price'
  }
}`,...(D=(B=d.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var k,L,E;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    allowClear: true,
    placeholder: 'Clearable Input',
    modelValue: 'Some text to clear'
  }
}`,...(E=(L=i.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};var M,N,R;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    showCount: true,
    maxLength: 20,
    placeholder: 'Input with character count'
  }
}`,...(R=(N=m.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var W,F,T;f.parameters={...f.parameters,docs:{...(W=f.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    disabled: true,
    placeholder: 'Disabled Input'
  }
}`,...(T=(F=f.parameters)==null?void 0:F.docs)==null?void 0:T.source}}};var H,P,A;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    readonly: true,
    placeholder: 'Readonly Input',
    modelValue: 'This is a readonly input'
  }
}`,...(A=(P=c.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var O,j,q;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    status: 'error',
    placeholder: 'Error Input'
  }
}`,...(q=(j=g.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};const pe=["Default","WithPrefix","WithSuffix","Clearable","WithCount","Disabled","Readonly","Error"];export{i as Clearable,u as Default,f as Disabled,g as Error,c as Readonly,m as WithCount,p as WithPrefix,d as WithSuffix,pe as __namedExportsOrder,ue as default};
