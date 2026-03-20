import{d as pe,w as ue,b as n,e as i,n as s,g as v,f as p,p as ie,j as M,t as m,F as ce,m as t,k as me,q as fe,o as r,l as q}from"./vue.esm-bundler-5vuPSkAG.js";import{_ as ve}from"./_plugin-vue_export-helper-DlAUqK2U.js";const ye=["value","placeholder","disabled","readonly","maxlength"],he=["type","value","placeholder","disabled","readonly","maxlength"],xe={key:0,width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},ge={key:1,width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},ne=pe({name:"TraeInput",__name:"Input",props:{modelValue:{default:""},type:{default:"text"},placeholder:{default:"请输入内容"},size:{default:"medium"},status:{default:"default"},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},showCount:{type:Boolean,default:!1},maxLength:{},autosize:{type:[Boolean,Object],default:!1},prefixIcon:{type:Boolean,default:!1},suffixIcon:{type:Boolean,default:!1},filled:{type:Boolean,default:!1},tips:{},prepend:{default:""},append:{default:""}},emits:["update:modelValue","change","focus","blur","clear","input"],setup(e,{emit:o}){const d=e,u=o,C=t(null),k=t(null),z=t(!1),f=t(!1),se=me(()=>d.type==="password"?f.value?"text":"password":d.type),re=t({}),$=a=>{const l=a.target;u("update:modelValue",l.value),u("input",a),d.type==="textarea"&&d.autosize&&B()},V=a=>{const l=a.target;u("change",l.value)},S=a=>{z.value=!0,u("focus",a)},L=a=>{z.value=!1,u("blur",a)},oe=()=>{var a,l;u("update:modelValue",""),u("change",""),u("clear"),(a=C.value)==null||a.focus(),(l=k.value)==null||l.focus()},de=()=>{var a;f.value=!f.value,(a=C.value)==null||a.focus()},B=()=>{const a=k.value;a&&(a.style.height="auto",a.style.height=`${a.scrollHeight}px`)};return ue(()=>d.modelValue,()=>{d.type==="textarea"&&d.autosize&&fe(B)}),(a,l)=>(r(),n(ce,null,[i("div",{class:s([a.$style["input-container"],{[a.$style["has-prepend"]]:a.$slots.prepend||e.prepend,[a.$style["has-append"]]:a.$slots.append||e.append}])},[a.$slots.prepend||e.prepend?(r(),n("div",{key:0,class:s(a.$style["input-prepend"])},[v(a.$slots,"prepend",{},()=>[q(m(e.prepend),1)])],2)):p("",!0),i("div",{class:s([a.$style["input-wrapper"],a.$style[`size-${e.size}`],a.$style[`status-${e.status}`],{[a.$style["is-disabled"]]:e.disabled,[a.$style["is-readonly"]]:e.readonly,[a.$style["is-focused"]]:z.value,[a.$style["is-filled"]]:e.filled,[a.$style["is-textarea"]]:e.type==="textarea"}])},[a.$slots.prefix||e.prefixIcon?(r(),n("span",{key:0,class:s(a.$style.prefix)},[v(a.$slots,"prefix")],2)):p("",!0),i("div",{class:s(a.$style["input-content"])},[e.type==="textarea"?(r(),n("textarea",{key:0,ref_key:"textareaRef",ref:k,class:s(a.$style["input-core"]),value:e.modelValue,placeholder:e.placeholder,disabled:e.disabled,readonly:e.readonly,maxlength:e.maxLength,onInput:$,onFocus:S,onBlur:L,onChange:V,style:ie(re.value)},null,46,ye)):(r(),n("input",{key:1,ref_key:"inputRef",ref:C,type:se.value,class:s(a.$style["input-core"]),value:e.modelValue,placeholder:e.placeholder,disabled:e.disabled,readonly:e.readonly,maxlength:e.maxLength,onInput:$,onFocus:S,onBlur:L,onChange:V},null,42,he))],2),e.type!=="textarea"?(r(),n("span",{key:1,class:s(a.$style["suffix-group"])},[e.clearable&&e.modelValue&&!e.disabled&&!e.readonly?(r(),n("span",{key:0,class:s(a.$style["clear-icon"]),onClick:oe,onMousedown:l[0]||(l[0]=M(()=>{},["prevent"]))},[...l[2]||(l[2]=[i("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[i("path",{d:"M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13Z",fill:"#C5C5C5"}),i("path",{d:"M4.66669 4.66666L9.33335 9.33332M4.66669 9.33332L9.33335 4.66666",stroke:"white","stroke-width":"1.2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)])],34)):p("",!0),e.type==="password"&&!e.disabled?(r(),n("span",{key:1,class:s(a.$style["password-icon"]),onClick:de,onMousedown:l[1]||(l[1]=M(()=>{},["prevent"]))},[f.value?(r(),n("svg",xe,[...l[3]||(l[3]=[i("path",{d:"M1 8C1 8 3.5 3 8 3C12.5 3 15 8 15 8C15 8 12.5 13 8 13C3.5 13 1 8 1 8Z",stroke:"currentColor","stroke-width":"1.33","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),i("path",{d:"M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z",stroke:"currentColor","stroke-width":"1.33","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)])])):(r(),n("svg",ge,[...l[4]||(l[4]=[i("path",{d:"M11.9 11.9L14.65 14.65M1.35 1.35L4.1 4.1M4.1 4.1C2.85 5.15 1.85 6.5 1 8C1 8 3.5 13 8 13C10.05 13 11.85 12.25 13.25 11.1M4.1 4.1L6.6 6.6M6.6 6.6C6.15 6.95 5.95 7.5 6.05 8.05C6.15 8.6 6.55 9 7.1 9.1C7.65 9.2 8.2 9 8.55 8.55L9.4 9.4M9.4 9.4C9 9.8 8.5 10 8 10C6.9 10 6 9.1 6 8M9.4 9.4L11.9 11.9M11.9 11.9C10.75 12.65 9.4 13 8 13",stroke:"currentColor","stroke-width":"1.33","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),i("path",{d:"M8 3C10.25 3 12.25 3.8 13.75 5.15",stroke:"currentColor","stroke-width":"1.33","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)])]))],34)):p("",!0),e.showCount&&e.maxLength?(r(),n("span",{key:2,class:s(a.$style.count)},m(String(e.modelValue).length)+"/"+m(e.maxLength),3)):p("",!0),a.$slots.suffix||e.suffixIcon?(r(),n("span",{key:3,class:s(a.$style.suffix)},[v(a.$slots,"suffix")],2)):p("",!0)],2)):p("",!0),e.type==="textarea"?(r(),n("div",{key:2,class:s(a.$style["suffix-group"])},[e.showCount&&e.maxLength?(r(),n("span",{key:0,class:s(a.$style.count)},m(String(e.modelValue).length)+"/"+m(e.maxLength),3)):p("",!0)],2)):p("",!0)],2),a.$slots.append||e.append?(r(),n("div",{key:1,class:s(a.$style["input-append"])},[v(a.$slots,"append",{},()=>[q(m(e.append),1)])],2)):p("",!0)],2),e.tips?(r(),n("div",{key:0,class:s(a.$style.tips)},m(e.tips),3)):p("",!0)],64))}}),be="_prefix_1by5a_1",we="_count_1by5a_1",Ie="_tips_1by5a_1",Te={"input-container":"_input-container_1by5a_1","has-prepend":"_has-prepend_1by5a_1","input-wrapper":"_input-wrapper_1by5a_1","has-append":"_has-append_1by5a_1","input-prepend":"_input-prepend_1by5a_1","input-append":"_input-append_1by5a_1","is-disabled":"_is-disabled_1by5a_1","is-readonly":"_is-readonly_1by5a_1","is-focused":"_is-focused_1by5a_1","input-core":"_input-core_1by5a_1",prefix:be,"suffix-group":"_suffix-group_1by5a_1","status-error":"_status-error_1by5a_1","status-warning":"_status-warning_1by5a_1","is-filled":"_is-filled_1by5a_1","size-large":"_size-large_1by5a_1","size-medium":"_size-medium_1by5a_1","size-small":"_size-small_1by5a_1","is-textarea":"_is-textarea_1by5a_1","input-content":"_input-content_1by5a_1","clear-icon":"_clear-icon_1by5a_1","password-icon":"_password-icon_1by5a_1",count:we,tips:Ie},Ce={$style:Te},c=ve(ne,[["__cssModules",Ce]]);ne.__docgenInfo={name:"TraeInput",exportName:"default",displayName:"Input",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"}]},defaultValue:{func:!1,value:"''"}},{name:"type",required:!1,type:{name:"InputType"},defaultValue:{func:!1,value:"'text'"}},{name:"placeholder",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'请输入内容'"}},{name:"size",required:!1,type:{name:"InputSize"},defaultValue:{func:!1,value:"'medium'"}},{name:"status",required:!1,type:{name:"InputStatus"},defaultValue:{func:!1,value:"'default'"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"readonly",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"clearable",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"showCount",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"maxLength",required:!1,type:{name:"number"}},{name:"autosize",required:!1,type:{name:"union",elements:[{name:"boolean"},{name:`{
    minRows?: number;
    maxRows?: number;
}`}]},defaultValue:{func:!1,value:"false"}},{name:"prefixIcon",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"suffixIcon",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"filled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"tips",required:!1,type:{name:"string"}},{name:"prepend",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"append",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}}],events:[{name:"update:modelValue",type:{names:["string"]}},{name:"change",type:{names:["string"]}},{name:"focus",type:{names:["FocusEvent"]}},{name:"blur",type:{names:["FocusEvent"]}},{name:"clear"},{name:"input",type:{names:["Event"]}}],slots:[{name:"prepend"},{name:"prefix"},{name:"suffix"},{name:"append"}],sourceFiles:["/home/runner/work/Starbucks-Design-System/Starbucks-Design-System/Input/Input.vue"]};const $e={title:"数据录入/输入框 Input",component:c,tags:["autodocs"],parameters:{docs:{description:{component:'<span style="font-size: 14px; color: #666;">Input 组件用于用户输入文本信息。</span>'}}},argTypes:{size:{control:"select",options:["large","medium","small"],description:"尺寸"},status:{control:"select",options:["default","error","warning"],description:"状态"},type:{control:"select",options:["text","password","textarea"],description:"输入类型"},disabled:{control:"boolean",description:"是否禁用"},readonly:{control:"boolean",description:"是否只读"},clearable:{control:"boolean",description:"是否可清空"},filled:{control:"boolean",description:"是否填充背景"},prefixIcon:{control:"boolean",description:"是否显示前缀图标"},suffixIcon:{control:"boolean",description:"是否显示后缀图标"},showCount:{control:"boolean",description:"是否显示字数统计"},autosize:{control:"boolean",description:"是否自适应高度（仅textarea）"},maxLength:{control:"number",description:"最大字符数"},tips:{control:"text",description:"提示信息"},modelValue:{control:"text",description:"输入框的值"},placeholder:{control:"text",description:"占位符"}},args:{placeholder:"请输入内容",size:"medium"}},y={render:e=>({components:{TraeInput:c},setup(){const o=t("");return{args:e,value:o}},template:`
      <div style="width: 300px;">
        <TraeInput v-bind="args" v-model="value" />
        <div style="margin-top: 10px; color: #666; font-size: 14px;">Value: {{ value }}</div>
      </div>
    `})},h={render:()=>({components:{TraeInput:c},setup(){const e=t(""),o=t(""),d=t("");return{val1:e,val2:o,val3:d}},template:`
      <div style="display: flex; flex-direction: column; gap: 20px; width: 300px;">
        <TraeInput size="small" placeholder="Small size" v-model="val1" />
        <TraeInput size="medium" placeholder="Medium size" v-model="val2" />
        <TraeInput size="large" placeholder="Large size" v-model="val3" />
      </div>
    `})},x={render:()=>({components:{TraeInput:c},setup(){const e=t(""),o=t("");return{val1:e,val2:o}},template:`
      <div style="display: flex; flex-direction: column; gap: 20px; width: 300px;">
        <TraeInput status="error" placeholder="Error status" v-model="val1" />
        <TraeInput status="warning" placeholder="Warning status" v-model="val2" />
      </div>
    `})},g={render:()=>({components:{TraeInput:c},setup(){const e=t("Initial value"),o=t(""),d=t("123456"),u=t("");return{val1:e,val2:o,val3:d,val4:u}},template:`
      <div style="display: flex; flex-direction: column; gap: 20px; width: 300px;">
        <TraeInput placeholder="Clearable" clearable v-model="val1" />
        <TraeInput placeholder="Filled" filled v-model="val2" />
        <TraeInput placeholder="Password" type="password" v-model="val3" />
        <TraeInput placeholder="With Tips" tips="这是一个提示信息" v-model="val4" />
      </div>
    `})},b={render:()=>({components:{TraeInput:c},setup(){return{val:t("")}},template:`
      <div style="width: 300px;">
        <TraeInput showCount :maxLength="10" placeholder="Max length is 10" v-model="val" />
      </div>
    `})},w={render:()=>({components:{TraeInput:c},setup(){const e=t(""),o=t("");return{val1:e,val2:o}},template:`
      <div style="display: flex; flex-direction: column; gap: 20px; width: 300px;">
        <TraeInput type="textarea" placeholder="Basic Textarea" v-model="val1" />
        <TraeInput type="textarea" autosize placeholder="Autosize Textarea" v-model="val2" />
      </div>
    `})},I={render:()=>({components:{TraeInput:c},setup(){const e=t(""),o=t("");return{val1:e,val2:o}},template:`
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
    `})},T={render:()=>({components:{TraeInput:c},setup(){const e=t(""),o=t(""),d=t("");return{val1:e,val2:o,val3:d}},template:`
      <div style="display: flex; flex-direction: column; gap: 20px; width: 300px;">
        <TraeInput placeholder="Prepend Label" prepend="http://" v-model="val1" />
        <TraeInput placeholder="Append Label" append=".com" v-model="val2" />
        <TraeInput placeholder="Both Labels" prepend="http://" append=".com" v-model="val3" />
      </div>
    `})};var F,j,A;y.parameters={...y.parameters,docs:{...(F=y.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(A=(j=y.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};var R,E,P;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => ({
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
}`,...(P=(E=h.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};var N,W,D;x.parameters={...x.parameters,docs:{...(N=x.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => ({
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
}`,...(D=(W=x.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};var Z,H,O;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => ({
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
}`,...(O=(H=g.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};var G,J,K;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(K=(J=b.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,X;w.parameters={...w.parameters,docs:{...(Q=w.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => ({
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
}`,...(X=(U=w.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,_,ee;I.parameters={...I.parameters,docs:{...(Y=I.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => ({
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
}`,...(ee=(_=I.parameters)==null?void 0:_.docs)==null?void 0:ee.source}}};var ae,te,le;T.parameters={...T.parameters,docs:{...(ae=T.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => ({
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
}`,...(le=(te=T.parameters)==null?void 0:te.docs)==null?void 0:le.source}}};const Ve=["Basic","Sizes","Status","Features","CharacterCount","Textarea","Icons","Adornments"];export{T as Adornments,y as Basic,b as CharacterCount,g as Features,I as Icons,h as Sizes,x as Status,w as Textarea,Ve as __namedExportsOrder,$e as default};
