import{d as A,b as d,n as c,g as b,f as p,e as n,s as K,v as P,x as O,j as G,m as a,o as i}from"./vue.esm-bundler-DsV38QMi.js";import{_ as H}from"./_plugin-vue_export-helper-DlAUqK2U.js";const J={key:0,width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Q={key:0,width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},E=A({name:"TraeSearch",__name:"Search",props:{modelValue:{default:""},placeholder:{default:"请输入内容"},size:{default:"medium"},disabled:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},borderless:{type:Boolean,default:!1},fill:{type:Boolean,default:!1},prefix:{type:Boolean,default:!1},suffix:{type:Boolean,default:!1},multiline:{type:Boolean,default:!1},maxLength:{}},emits:["update:modelValue","change","focus","blur","clear","search"],setup(l,{expose:s,emit:t}){const m=l,o=t,f=a(null),S=a(!1),N=e=>{const r=e.target;o("update:modelValue",r.value),o("change",r.value)},R=e=>{S.value=!0,o("focus",e)},W=e=>{S.value=!1,o("blur",e)},_=()=>{var e;o("update:modelValue",""),o("change",""),o("clear"),(e=f.value)==null||e.focus()},Z=()=>{m.multiline||o("search",m.modelValue)};return s({focus:()=>{var e;return(e=f.value)==null?void 0:e.focus()},blur:()=>{var e;return(e=f.value)==null?void 0:e.blur()}}),(e,r)=>(i(),d("div",{class:c([e.$style.search,e.$style[`size-${l.size}`],{[e.$style["is-disabled"]]:l.disabled,[e.$style["is-focused"]]:S.value,[e.$style["is-borderless"]]:l.borderless,[e.$style["is-filled"]]:l.fill,[e.$style["is-multiline"]]:l.multiline}])},[l.prefix||e.$slots.prefix?(i(),d("span",{key:0,class:c(e.$style["prefix-icon"])},[b(e.$slots,"prefix",{},()=>[l.prefix?(i(),d("svg",J,[...r[1]||(r[1]=[n("path",{d:"M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z",stroke:"currentColor","stroke-width":"1.33333","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),n("path",{d:"M14 14L11.1 11.1",stroke:"currentColor","stroke-width":"1.33333","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)])])):p("",!0)])],2)):p("",!0),n("div",{class:c(e.$style["input-wrapper"])},[(i(),K(O(l.multiline?"textarea":"input"),{ref_key:"inputRef",ref:f,class:c(e.$style["input-core"]),value:l.modelValue,placeholder:l.placeholder,disabled:l.disabled,maxlength:l.maxLength,onInput:N,onFocus:R,onBlur:W,onKeydown:P(Z,["enter"])},null,40,["class","value","placeholder","disabled","maxlength"]))],2),l.clearable&&l.modelValue&&!l.disabled?(i(),d("span",{key:1,class:c(e.$style["clear-icon"]),onClick:_,onMousedown:r[0]||(r[0]=G(()=>{},["prevent"]))},[...r[2]||(r[2]=[n("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[n("path",{d:"M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13Z",fill:"#C5C5C5"}),n("path",{d:"M4.66669 4.66666L9.33335 9.33332M4.66669 9.33332L9.33335 4.66666",stroke:"white","stroke-width":"1.2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)])],34)):p("",!0),l.suffix||e.$slots.suffix?(i(),d("span",{key:2,class:c(e.$style["suffix-icon"])},[b(e.$slots,"suffix",{},()=>[l.suffix?(i(),d("svg",Q,[...r[3]||(r[3]=[n("path",{d:"M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z",stroke:"currentColor","stroke-width":"1.33333","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),n("path",{d:"M14 14L11.1 11.1",stroke:"currentColor","stroke-width":"1.33333","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)])])):p("",!0)])],2)):p("",!0)],2))}}),U="_search_17w46_1",X={search:U,"is-focused":"_is-focused_17w46_1","is-disabled":"_is-disabled_17w46_1","input-core":"_input-core_17w46_1","prefix-icon":"_prefix-icon_17w46_1","suffix-icon":"_suffix-icon_17w46_1","is-borderless":"_is-borderless_17w46_1","is-filled":"_is-filled_17w46_1","size-large":"_size-large_17w46_1","size-medium":"_size-medium_17w46_1","size-small":"_size-small_17w46_1","is-multiline":"_is-multiline_17w46_1","input-wrapper":"_input-wrapper_17w46_1","clear-icon":"_clear-icon_17w46_1"},Y={$style:X},u=H(E,[["__cssModules",Y]]);E.__docgenInfo={name:"TraeSearch",exportName:"default",displayName:"Search",description:"",tags:{},expose:[{name:"focus"},{name:"blur"}],props:[{name:"modelValue",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"placeholder",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'请输入内容'"}},{name:"size",required:!1,type:{name:"SearchSize"},defaultValue:{func:!1,value:"'medium'"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"clearable",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"borderless",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"fill",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"prefix",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"suffix",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"multiline",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"maxLength",required:!1,type:{name:"number"}}],events:[{name:"update:modelValue",type:{names:["string"]}},{name:"change",type:{names:["string"]}},{name:"focus",type:{names:["FocusEvent"]}},{name:"blur",type:{names:["FocusEvent"]}},{name:"clear"},{name:"search",type:{names:["string"]}}],slots:[{name:"prefix"},{name:"suffix"}],sourceFiles:["/home/runner/work/Starbucks-Design-System/Starbucks-Design-System/Search/Search.vue"]};const ae={title:"数据录入/搜索 Search",component:u,tags:["autodocs"],parameters:{docs:{description:{component:'<span style="font-size: 14px; color: #666;">Search 组件用于在大量内容中查找特定信息。</span>'}}},argTypes:{size:{control:"select",options:["large","medium","small"],description:"尺寸"},disabled:{control:"boolean",description:"是否禁用"},clearable:{control:"boolean",description:"是否可清空"},borderless:{control:"boolean",description:"是否无边框"},fill:{control:"boolean",description:"是否填充背景"},prefix:{control:"boolean",description:"是否显示前缀图标"},suffix:{control:"boolean",description:"是否显示后缀图标"},multiline:{control:"boolean",description:"是否为多行搜索框"},modelValue:{control:"text",description:"搜索框的值"},placeholder:{control:"text",description:"占位符"}},args:{placeholder:"请输入内容",size:"medium",prefix:!0}},v={render:l=>({components:{TraeSearch:u},setup(){const s=a("");return{args:l,value:s}},template:`
      <div style="width: 300px;">
        <TraeSearch v-bind="args" v-model="value" />
        <div style="margin-top: 10px; color: #666; font-size: 14px;">Value: {{ value }}</div>
      </div>
    `})},h={render:()=>({components:{TraeSearch:u},setup(){const l=a(""),s=a(""),t=a("");return{val1:l,val2:s,val3:t}},template:`
      <div style="display: flex; flex-direction: column; gap: 20px; width: 300px;">
        <TraeSearch size="small" placeholder="Small size" prefix v-model="val1" />
        <TraeSearch size="medium" placeholder="Medium size" prefix v-model="val2" />
        <TraeSearch size="large" placeholder="Large size" prefix v-model="val3" />
      </div>
    `})},x={render:()=>({components:{TraeSearch:u},setup(){const l=a(""),s=a(""),t=a(""),m=a("");return{val1:l,val2:s,val3:t,val4:m}},template:`
      <div style="display: flex; flex-direction: column; gap: 20px; width: 300px;">
        <TraeSearch placeholder="Borderless" borderless v-model="val1" />
        <TraeSearch placeholder="Filled" fill v-model="val2" />
        <TraeSearch placeholder="With Prefix Icon" prefix v-model="val3" />
        <TraeSearch placeholder="With Suffix Icon" suffix v-model="val4" />
      </div>
    `})},y={render:()=>({components:{TraeSearch:u},setup(){const l=a("Initial value"),s=a(""),t=a("");return{val1:l,val2:s,val3:t}},template:`
      <div style="display: flex; flex-direction: column; gap: 20px; width: 300px;">
        <TraeSearch placeholder="Clearable" clearable v-model="val1" />
        <TraeSearch placeholder="Disabled" disabled v-model="val2" />
        <TraeSearch placeholder="Multiline" multiline v-model="val3" />
      </div>
    `})},g={render:()=>({components:{TraeSearch:u},setup(){return{val:a("")}},template:`
      <div style="width: 300px;">
        <TraeSearch v-model="val">
          <template #prefix>
            <span style="color: #00754A;">★</span>
          </template>
          <template #suffix>
            <span style="font-size: 12px; color: #666;">RMB</span>
          </template>
        </TraeSearch>
      </div>
    `})};var w,T,k;v.parameters={...v.parameters,docs:{...(w=v.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => ({
    components: {
      TraeSearch
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
        <TraeSearch v-bind="args" v-model="value" />
        <div style="margin-top: 10px; color: #666; font-size: 14px;">Value: {{ value }}</div>
      </div>
    \`
  })
}`,...(k=(T=v.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var z,C,V;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => ({
    components: {
      TraeSearch
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
        <TraeSearch size="small" placeholder="Small size" prefix v-model="val1" />
        <TraeSearch size="medium" placeholder="Medium size" prefix v-model="val2" />
        <TraeSearch size="large" placeholder="Large size" prefix v-model="val3" />
      </div>
    \`
  })
}`,...(V=(C=h.parameters)==null?void 0:C.docs)==null?void 0:V.source}}};var B,$,M;x.parameters={...x.parameters,docs:{...(B=x.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => ({
    components: {
      TraeSearch
    },
    setup() {
      const val1 = ref('');
      const val2 = ref('');
      const val3 = ref('');
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
        <TraeSearch placeholder="Borderless" borderless v-model="val1" />
        <TraeSearch placeholder="Filled" fill v-model="val2" />
        <TraeSearch placeholder="With Prefix Icon" prefix v-model="val3" />
        <TraeSearch placeholder="With Suffix Icon" suffix v-model="val4" />
      </div>
    \`
  })
}`,...(M=($=x.parameters)==null?void 0:$.docs)==null?void 0:M.source}}};var q,I,F;y.parameters={...y.parameters,docs:{...(q=y.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => ({
    components: {
      TraeSearch
    },
    setup() {
      const val1 = ref('Initial value');
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
        <TraeSearch placeholder="Clearable" clearable v-model="val1" />
        <TraeSearch placeholder="Disabled" disabled v-model="val2" />
        <TraeSearch placeholder="Multiline" multiline v-model="val3" />
      </div>
    \`
  })
}`,...(F=(I=y.parameters)==null?void 0:I.docs)==null?void 0:F.source}}};var L,j,D;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => ({
    components: {
      TraeSearch
    },
    setup() {
      const val = ref('');
      return {
        val
      };
    },
    template: \`
      <div style="width: 300px;">
        <TraeSearch v-model="val">
          <template #prefix>
            <span style="color: #00754A;">★</span>
          </template>
          <template #suffix>
            <span style="font-size: 12px; color: #666;">RMB</span>
          </template>
        </TraeSearch>
      </div>
    \`
  })
}`,...(D=(j=g.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};const re=["Basic","Sizes","Variants","Features","CustomIcons"];export{v as Basic,g as CustomIcons,y as Features,h as Sizes,x as Variants,re as __namedExportsOrder,ae as default};
