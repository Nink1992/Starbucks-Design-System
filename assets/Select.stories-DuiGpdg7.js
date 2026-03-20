import{d as ge,w as ye,y as he,z as we,b as r,e as i,n as s,g as be,f,F as b,A,t as y,j as x,v as E,s as je,B as Se,C as ke,T as xe,D as Ve,m as u,k as $e,q as Oe,o as n,l as Ce,p as ze}from"./vue.esm-bundler-5vuPSkAG.js";import{_ as _e}from"./_plugin-vue_export-helper-DlAUqK2U.js";const Le=["onKeydown"],Be={key:0,width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Te=["onClick"],Me=["onClick"],Ae=["onClick"],pe=ge({name:"TraeSelect",__name:"Select",props:{modelValue:{default:""},options:{default:()=>[]},placeholder:{default:"请选择内容"},size:{default:"medium"},disabled:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},searchable:{type:Boolean,default:!1},filled:{type:Boolean,default:!1},prefixIcon:{type:Boolean,default:!1}},emits:["update:modelValue","change","clear","focus","blur"],setup(l,{emit:d}){const a=l,c=d,p=u(!1),h=u(null),T=u(null),I=u({}),j=()=>{if(!h.value||!p.value)return;const e=h.value.getBoundingClientRect();I.value={position:"fixed",top:`${e.bottom+4}px`,left:`${e.left}px`,width:`${e.width}px`,zIndex:9999}},q=()=>{p.value&&j()};ye(p,async e=>{e?(await Oe(),j(),window.addEventListener("resize",j),window.addEventListener("scroll",q,!0)):(window.removeEventListener("resize",j),window.removeEventListener("scroll",q,!0))});const me=$e(()=>a.multiple?Array.isArray(a.modelValue)&&a.modelValue.length>0:a.modelValue!==void 0&&a.modelValue!==""),D=e=>{for(const t of a.options)if("options"in t){const o=t.options.find(w=>w.value===e);if(o)return o.label}else if(t.value===e)return t.label;return e},S=e=>a.multiple&&Array.isArray(a.modelValue)?a.modelValue.includes(e):a.modelValue===e,M=()=>{a.disabled||(p.value=!p.value,p.value?c("focus",new FocusEvent("focus")):c("blur",new FocusEvent("blur")))},k=()=>{p.value=!1,c("blur",new FocusEvent("blur"))},F=e=>{if(!e.disabled)if(a.multiple){const t=Array.isArray(a.modelValue)?[...a.modelValue]:[],o=t.indexOf(e.value);o>-1?t.splice(o,1):t.push(e.value),c("update:modelValue",t),c("change",t)}else c("update:modelValue",e.value),c("change",e.value),k()},ve=e=>{if(a.disabled||!a.multiple)return;const t=Array.isArray(a.modelValue)?[...a.modelValue]:[],o=t.indexOf(e);o>-1&&(t.splice(o,1),c("update:modelValue",t),c("change",t))},fe=()=>{if(a.disabled)return;const e=a.multiple?[]:"";c("update:modelValue",e),c("change",e),c("clear"),k()},P=e=>{if(p.value){const t=h.value&&h.value.contains(e.target),o=T.value&&T.value.contains(e.target);!t&&!o&&k()}};return he(()=>{document.addEventListener("click",P)}),we(()=>{document.removeEventListener("click",P)}),(e,t)=>(n(),r("div",{class:s([e.$style["select-container"],e.$style[`size-${l.size}`],{[e.$style["is-expanded"]]:p.value,[e.$style["is-disabled"]]:l.disabled,[e.$style["is-filled"]]:l.filled,[e.$style["has-prefix"]]:e.$slots.prefix||l.prefixIcon}]),ref_key:"selectRef",ref:h,onKeydown:E(k,["esc"])},[i("div",{class:s([e.$style["select-trigger"],{[e.$style["is-focused"]]:p.value}]),tabindex:"0",onClick:M,onKeydown:[E(x(M,["prevent"]),["enter"]),E(x(M,["prevent"]),["space"])]},[e.$slots.prefix||l.prefixIcon?(n(),r("span",{key:0,class:s(e.$style.prefix)},[be(e.$slots,"prefix",{},()=>[l.prefixIcon?(n(),r("svg",Be,[...t[0]||(t[0]=[i("circle",{cx:"8",cy:"8",r:"6",stroke:"currentColor","stroke-width":"1.5"},null,-1)])])):f("",!0)])],2)):f("",!0),i("div",{class:s(e.$style["select-value"])},[l.multiple&&Array.isArray(l.modelValue)&&l.modelValue.length?(n(),r("div",{key:0,class:s(e.$style.tags)},[(n(!0),r(b,null,A(l.modelValue,o=>(n(),r("span",{key:o,class:s(e.$style.tag),onClick:x(w=>ve(o),["stop"])},[Ce(y(D(o))+" ",1),(n(),r("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:s(e.$style["tag-close"])},[...t[1]||(t[1]=[i("path",{d:"M9 3L3 9M3 3L9 9",stroke:"currentColor","stroke-width":"1.2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)])],2))],10,Te))),128))],2)):!l.multiple&&l.modelValue!==void 0&&l.modelValue!==""?(n(),r("span",{key:1,class:s(e.$style["single-value"])},y(D(l.modelValue)),3)):(n(),r("span",{key:2,class:s(e.$style.placeholder)},y(l.placeholder),3))],2),i("div",{class:s(e.$style["suffix-group"])},[l.clearable&&me.value&&!l.disabled?(n(),r("span",{key:0,class:s(e.$style["clear-icon"]),onClick:x(fe,["stop"])},[...t[2]||(t[2]=[i("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[i("path",{d:"M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13Z",fill:"#C5C5C5"}),i("path",{d:"M4.66669 4.66666L9.33335 9.33332M4.66669 9.33332L9.33335 4.66666",stroke:"white","stroke-width":"1.2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)])],2)):f("",!0),i("span",{class:s([e.$style["arrow-icon"],{[e.$style["is-reverse"]]:p.value}])},[...t[3]||(t[3]=[i("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[i("path",{d:"M4 6L8 10L12 6",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})],-1)])],2)],2)],42,Le),(n(),je(Ve,{to:"body"},[Se(xe,{name:"fade-down"},{default:ke(()=>[p.value?(n(),r("div",{key:0,ref_key:"dropdownRef",ref:T,class:s(e.$style["select-dropdown"]),style:ze(I.value)},[i("ul",{class:s(e.$style["select-menu"])},[l.options&&l.options.length?(n(!0),r(b,{key:0},A(l.options,(o,w)=>(n(),r(b,{key:w},["options"in o?(n(),r(b,{key:0},[i("li",{class:s(e.$style["select-group-title"])},y(o.label),3),(n(!0),r(b,null,A(o.options,v=>(n(),r("li",{key:v.value,class:s([e.$style["select-option"],{[e.$style["is-selected"]]:S(v.value),[e.$style["is-disabled"]]:v.disabled}]),onClick:Re=>F(v)},[i("div",{class:s(e.$style["option-content"])},[i("span",{class:s(e.$style["option-label"])},y(v.label),3),l.multiple&&S(v.value)?(n(),r("span",{key:0,class:s(e.$style["check-icon"])},[...t[4]||(t[4]=[i("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[i("path",{d:"M3.33334 8L6.66668 11.3333L13.3333 4.66667",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})],-1)])],2)):f("",!0)],2)],10,Me))),128)),w<l.options.length-1?(n(),r("li",{key:0,class:s(e.$style["select-group-divider"])},null,2)):f("",!0)],64)):(n(),r("li",{key:1,class:s([e.$style["select-option"],{[e.$style["is-selected"]]:S(o.value),[e.$style["is-disabled"]]:o.disabled}]),onClick:v=>F(o)},[i("div",{class:s(e.$style["option-content"])},[i("span",{class:s(e.$style["option-label"])},y(o.label),3),l.multiple&&S(o.value)?(n(),r("span",{key:0,class:s(e.$style["check-icon"])},[...t[5]||(t[5]=[i("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[i("path",{d:"M3.33334 8L6.66668 11.3333L13.3333 4.66667",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})],-1)])],2)):f("",!0)],2)],10,Ae))],64))),128)):(n(),r("li",{key:1,class:s(e.$style["select-empty"])},"无数据",2))],2)],6)):f("",!0)]),_:1})]))],34))}}),Ee="_placeholder_1jjco_1",Ie="_prefix_1jjco_1",qe="_tags_1jjco_1",De="_tag_1jjco_1",Fe={"select-container":"_select-container_1jjco_1","is-expanded":"_is-expanded_1jjco_1","select-trigger":"_select-trigger_1jjco_1","is-focused":"_is-focused_1jjco_1","select-value":"_select-value_1jjco_1","single-value":"_single-value_1jjco_1",placeholder:Ee,prefix:Ie,"suffix-group":"_suffix-group_1jjco_1","arrow-icon":"_arrow-icon_1jjco_1","is-reverse":"_is-reverse_1jjco_1","clear-icon":"_clear-icon_1jjco_1","size-large":"_size-large_1jjco_1","size-medium":"_size-medium_1jjco_1","size-small":"_size-small_1jjco_1","is-filled":"_is-filled_1jjco_1","is-disabled":"_is-disabled_1jjco_1",tags:qe,tag:De,"tag-close":"_tag-close_1jjco_1","select-dropdown":"_select-dropdown_1jjco_1","select-menu":"_select-menu_1jjco_1","select-group-title":"_select-group-title_1jjco_1","select-group-divider":"_select-group-divider_1jjco_1","select-option":"_select-option_1jjco_1","is-selected":"_is-selected_1jjco_1","option-content":"_option-content_1jjco_1","option-label":"_option-label_1jjco_1","check-icon":"_check-icon_1jjco_1","select-empty":"_select-empty_1jjco_1"},Pe={$style:Fe},m=_e(pe,[["__cssModules",Pe]]);pe.__docgenInfo={name:"TraeSelect",exportName:"default",displayName:"Select",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"},{name:"Array",elements:[{name:"TSParenthesizedType"}]}]},defaultValue:{func:!1,value:"''"}},{name:"options",required:!1,type:{name:"Array",elements:[{name:"TSParenthesizedType"}]},defaultValue:{func:!1,value:"() => []"}},{name:"placeholder",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'请选择内容'"}},{name:"size",required:!1,type:{name:"SelectSize"},defaultValue:{func:!1,value:"'medium'"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"multiple",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"clearable",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"searchable",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"filled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"prefixIcon",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue",type:{names:["union"],elements:[{name:"string"},{name:"number"},{name:"Array",elements:[{name:"TSParenthesizedType"}]}]}},{name:"change",type:{names:["union"],elements:[{name:"string"},{name:"number"},{name:"Array",elements:[{name:"TSParenthesizedType"}]}]}},{name:"clear"},{name:"focus",type:{names:["FocusEvent"]}},{name:"blur",type:{names:["FocusEvent"]}}],slots:[{name:"prefix"}],sourceFiles:["/home/runner/work/Starbucks-Design-System/Starbucks-Design-System/Select/Select.vue"]};const Ue={title:"数据录入/选择器 Select",component:m,tags:["autodocs"],parameters:{docs:{description:{component:"是一种用于从预设选项中进行选择的输入组件，支持单选、多选及分组选择等形式。"}}},argTypes:{modelValue:{control:"text",description:"绑定值"},options:{control:"object",description:"选项数据"},placeholder:{control:"text",description:"占位符"},size:{control:"select",options:["small","medium","large"],description:"选择器尺寸"},disabled:{control:"boolean",description:"是否禁用"},multiple:{control:"boolean",description:"是否多选"},clearable:{control:"boolean",description:"是否可以清空选项"},filled:{control:"boolean",description:"是否为填充样式"},prefixIcon:{control:"boolean",description:"是否显示前置图标"},"onUpdate:modelValue":{action:"update:modelValue"},onChange:{action:"change"},onClear:{action:"clear"}}},g=[{label:"选项一",value:"1"},{label:"选项二",value:"2"},{label:"选项三",value:"3"},{label:"选项四 (禁用)",value:"4",disabled:!0},{label:"选项五",value:"5"}],Ne=[{label:"分组名称",options:[{label:"选择器选项",value:"g1-1"},{label:"选择器选项",value:"g1-2"}]},{label:"分组名称",options:[{label:"选择器选项",value:"g2-1"},{label:"选择器选项",value:"g2-2"},{label:"选择器选项",value:"g2-3"}]}],V={name:"默认选择器",render:l=>({components:{Select:m},setup(){const d=u("");return{args:l,value:d,defaultOptions:g}},template:`
      <div style="width: 240px;">
        <Select v-bind="args" v-model="value" :options="defaultOptions" />
      </div>
    `})},$={name:"多选选择器",render:l=>({components:{Select:m},setup(){const d=u(["1","2"]);return{args:l,value:d,defaultOptions:g}},template:`
      <div style="width: 300px;">
        <Select v-bind="args" v-model="value" :options="defaultOptions" multiple />
      </div>
    `})},O={name:"可清空选择器",render:l=>({components:{Select:m},setup(){const d=u("1");return{args:l,value:d,defaultOptions:g}},template:`
      <div style="width: 240px;">
        <Select v-bind="args" v-model="value" :options="defaultOptions" clearable />
      </div>
    `})},C={name:"不同尺寸",render:l=>({components:{Select:m},setup(){const d=u(""),a=u(""),c=u("");return{args:l,value1:d,value2:a,value3:c,defaultOptions:g}},template:`
      <div style="display: flex; flex-direction: column; gap: 16px; width: 240px;">
        <Select v-model="value1" :options="defaultOptions" size="large" placeholder="大尺寸 (Large)" />
        <Select v-model="value2" :options="defaultOptions" size="medium" placeholder="中尺寸 (Medium)" />
        <Select v-model="value3" :options="defaultOptions" size="small" placeholder="小尺寸 (Small)" />
      </div>
    `})},z={name:"填充样式",render:l=>({components:{Select:m},setup(){const d=u("");return{args:l,value:d,defaultOptions:g}},template:`
      <div style="width: 240px;">
        <Select v-bind="args" v-model="value" :options="defaultOptions" filled placeholder="填充背景样式" />
      </div>
    `})},_={name:"禁用状态",render:l=>({components:{Select:m},setup(){const d=u(""),a=u("1");return{args:l,value1:d,value2:a,defaultOptions:g}},template:`
      <div style="display: flex; flex-direction: column; gap: 16px; width: 240px;">
        <Select v-model="value1" :options="defaultOptions" disabled placeholder="禁用选择器" />
        <Select v-model="value2" :options="defaultOptions" disabled />
      </div>
    `})},L={name:"带前置图标",render:l=>({components:{Select:m},setup(){const d=u("");return{args:l,value:d,defaultOptions:g}},template:`
      <div style="width: 240px;">
        <Select v-bind="args" v-model="value" :options="defaultOptions" prefixIcon placeholder="选择选项" />
      </div>
    `})},B={name:"分组选择器",render:l=>({components:{Select:m},setup(){const d=u("");return{args:l,value:d,groupOptions:Ne}},template:`
      <div style="width: 280px;">
        <Select v-bind="args" v-model="value" :options="groupOptions" placeholder="请选择内容" />
      </div>
    `})};var N,R,K;V.parameters={...V.parameters,docs:{...(N=V.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: '默认选择器',
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
}`,...(K=(R=V.parameters)==null?void 0:R.docs)==null?void 0:K.source}}};var G,U,Z;$.parameters={...$.parameters,docs:{...(G=$.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: '多选选择器',
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
}`,...(Z=(U=$.parameters)==null?void 0:U.docs)==null?void 0:Z.source}}};var H,J,Q;O.parameters={...O.parameters,docs:{...(H=O.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: '可清空选择器',
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
}`,...(Q=(J=O.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var W,X,Y;C.parameters={...C.parameters,docs:{...(W=C.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: '不同尺寸',
  render: (args: any) => ({
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
}`,...(Y=(X=C.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var ee,le,te;z.parameters={...z.parameters,docs:{...(ee=z.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: '填充样式',
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
}`,...(te=(le=z.parameters)==null?void 0:le.docs)==null?void 0:te.source}}};var se,ae,oe;_.parameters={..._.parameters,docs:{...(se=_.parameters)==null?void 0:se.docs,source:{originalSource:`{
  name: '禁用状态',
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
}`,...(oe=(ae=_.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var ne,re,ie;L.parameters={...L.parameters,docs:{...(ne=L.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  name: '带前置图标',
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
}`,...(ie=(re=L.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var de,ue,ce;B.parameters={...B.parameters,docs:{...(de=B.parameters)==null?void 0:de.docs,source:{originalSource:`{
  name: '分组选择器',
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
}`,...(ce=(ue=B.parameters)==null?void 0:ue.docs)==null?void 0:ce.source}}};const Ze=["Default","Multiple","Clearable","Sizes","Filled","Disabled","PrefixIcon","Group"];export{O as Clearable,V as Default,_ as Disabled,z as Filled,B as Group,$ as Multiple,L as PrefixIcon,C as Sizes,Ze as __namedExportsOrder,Ue as default};
