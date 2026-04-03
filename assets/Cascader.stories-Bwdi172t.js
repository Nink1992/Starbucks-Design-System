import{e as Fe,w as te,v as He,x as Ke,f as c,g,n as d,F as O,y as M,t as z,j as x,z as Ue,A as Ge,l as V,B as Z,C as se,D as re,E as Qe,T as Ze,G as We,r as h,c as _,s as Xe,o as u,m as ie,p as Ye}from"./vue.esm-bundler-DEFMfx8h.js";import{_ as oe}from"./Checkbox-B_86Cwyt.js";import{_ as Ie}from"./_plugin-vue_export-helper-DlAUqK2U.js";const ea=["onKeydown"],aa=["onClick"],na={key:1},la=["placeholder"],ta=["onClick"],sa=["onClick","onMouseenter"],ra=["onClick"],Ne=Fe({name:"TraeCascader",__name:"Cascader",props:{modelValue:{default:()=>[]},options:{default:()=>[]},multiple:{type:Boolean,default:!1},maxTagCount:{},filterable:{type:Boolean,default:!1},placeholder:{default:"Please select"},disabled:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},size:{default:"medium"},expandTrigger:{default:"click"},checkStrictly:{type:Boolean,default:!1},showAllLevels:{type:Boolean,default:!0},separator:{default:" / "},displayRender:{}},emits:["update:modelValue","change"],setup(i,{emit:p}){const r=i,m=p,y=h(!1),T=h(null),F=h(null),W=h({}),b=h(""),f=h([]),k=h([]),o=h([]);te(()=>r.modelValue,e=>{r.multiple?o.value=Array.isArray(e)&&Array.isArray(e[0])?[...e]:[]:(k.value=e?[...e]:[],f.value=[...k.value])},{immediate:!0,deep:!0});const H=_(()=>r.multiple?o.value.length>0:k.value.length>0),Me=_(()=>r.maxTagCount?o.value.slice(0,r.maxTagCount):o.value),X=_(()=>r.maxTagCount?Math.max(0,o.value.length-r.maxTagCount):0),S=e=>{const n=[];let a=r.options;for(const t of e){if(!a)break;const l=a.find(s=>s.value===t);if(l)n.push(l),a=l.children||[];else break}return n},Y=e=>{const n=S(e),a=n.map(t=>t.label);return r.displayRender?r.displayRender(a,n):!r.showAllLevels&&a.length>0?a[a.length-1]:a.join(r.separator)},I=_(()=>k.value.length===0?"":Y(k.value)),ee=_(()=>{if(!r.options||r.options.length===0)return[];const e=[r.options];let n=r.options;for(let a=0;a<f.value.length;a++){const t=f.value[a],l=n.find(s=>s.value===t);if(l&&l.children&&l.children.length>0)e.push(l.children),n=l.children;else break}return e}),Je=(e,n)=>f.value[n]===e.value,P=e=>r.multiple?o.value.some(n=>JSON.stringify(n)===JSON.stringify(e)):JSON.stringify(k.value)===JSON.stringify(e),K=(e,n)=>{if(!e.children||e.children.length===0)return[n];let a=[];for(const t of e.children)a=a.concat(K(t,[...n,t.value]));return a},U=(e,n)=>{const a=[...f.value.slice(0,n),e.value];if(r.checkStrictly||!e.children||e.children.length===0)return{isChecked:P(a),isIndeterminate:!1};const t=K(e,a),l=t.filter(w=>P(w)),s=l.length>0&&l.length===t.length,v=l.length>0&&l.length<t.length;return{isChecked:s,isIndeterminate:v}},je=(e,n)=>{if(e.disabled)return;const a=[...f.value.slice(0,n),e.value];f.value=a;const t=!e.children||e.children.length===0;if(r.multiple){if(t||r.checkStrictly){const l=o.value.some(v=>JSON.stringify(v)===JSON.stringify(a));let s;l?s=o.value.filter(v=>JSON.stringify(v)!==JSON.stringify(a)):s=[...o.value,a],o.value=s,m("update:modelValue",s),m("change",s,s.map(v=>S(v)))}}else t?(G(a),L()):r.checkStrictly&&G(a)},Be=(e,n)=>{if(e.disabled)return;const a=[...f.value.slice(0,n),e.value];if(r.checkStrictly||!e.children||e.children.length===0){const t=o.value.some(s=>JSON.stringify(s)===JSON.stringify(a));let l;t?l=o.value.filter(s=>JSON.stringify(s)!==JSON.stringify(a)):l=[...o.value,a],o.value=l,m("update:modelValue",l),m("change",l,l.map(s=>S(s)))}else{const t=K(e,a),{isChecked:l}=U(e,n);let s=[...o.value];if(l)s=s.filter(v=>!t.some(w=>JSON.stringify(w)===JSON.stringify(v)));else for(const v of t)s.some(w=>JSON.stringify(w)===JSON.stringify(v))||s.push(v);o.value=s,m("update:modelValue",s),m("change",s,s.map(v=>S(v)))}},Ae=(e,n)=>{r.expandTrigger==="hover"&&!e.disabled&&e.children&&e.children.length>0&&(f.value=[...f.value.slice(0,n),e.value])},G=e=>{k.value=[...e];const n=S(e);m("update:modelValue",e),m("change",e,n)},qe=e=>{if(r.disabled)return;const n=o.value.filter(a=>JSON.stringify(a)!==JSON.stringify(e));o.value=n,m("update:modelValue",n),m("change",n,n.map(a=>S(a)))},De=()=>{r.disabled||(b.value="",r.multiple?(o.value=[],f.value=[],m("update:modelValue",[]),m("change",[],[])):(k.value=[],f.value=[],m("update:modelValue",[]),m("change",[],[])))},Ee=_(()=>{const e=(n,a=[],t=[])=>{let l=[];for(const s of n){const v=[...a,s.value],w=[...t,s.label];!s.children||s.children.length===0?l.push({valuePath:v,labelPath:w,option:s}):(r.checkStrictly&&l.push({valuePath:v,labelPath:w,option:s}),l=l.concat(e(s.children,v,w)))}return l};return e(r.options||[])}),ae=_(()=>b.value?Ee.value.filter(e=>e.labelPath.join(r.separator).toLowerCase().includes(b.value.toLowerCase())):[]),Re=e=>{if(!e.option.disabled)if(r.multiple){const n=o.value.some(t=>JSON.stringify(t)===JSON.stringify(e.valuePath));let a;n?a=o.value.filter(t=>JSON.stringify(t)!==JSON.stringify(e.valuePath)):a=[...o.value,e.valuePath],o.value=a,m("update:modelValue",a),m("change",a,a.map(t=>S(t)))}else G(e.valuePath),L(),b.value=""},ne=()=>{if(!T.value||!y.value)return;const e=T.value.getBoundingClientRect();W.value={position:"fixed",top:`${e.bottom+4}px`,left:`${e.left}px`,zIndex:9999}},Q=()=>{r.disabled||(y.value?L():(r.multiple||(f.value=[...k.value]),y.value=!0))},L=()=>{y.value=!1,b.value=""},le=e=>{T.value&&!T.value.contains(e.target)&&F.value&&!F.value.contains(e.target)&&L()},N=()=>{y.value&&ne()};return te(y,async e=>{e&&(await Xe(),ne())}),He(()=>{document.addEventListener("click",le),window.addEventListener("scroll",N,!0),window.addEventListener("resize",N)}),Ke(()=>{document.removeEventListener("click",le),window.removeEventListener("scroll",N,!0),window.removeEventListener("resize",N)}),(e,n)=>(u(),c("div",{class:d([e.$style["cascader-container"],e.$style[`size-${i.size}`],{[e.$style["is-expanded"]]:y.value,[e.$style["is-disabled"]]:i.disabled}]),ref_key:"cascaderRef",ref:T,onKeydown:Z(L,["esc"])},[g("div",{class:d([e.$style["cascader-trigger"],{[e.$style["is-focused"]]:y.value,[e.$style["is-disabled"]]:i.disabled}]),tabindex:"0",onClick:Q,onKeydown:[Z(V(Q,["prevent"]),["enter"]),Z(V(Q,["prevent"]),["space"])]},[g("div",{class:d(e.$style["cascader-value"])},[i.multiple?(u(),c(O,{key:0},[o.value.length>0?(u(),c("div",{key:0,class:d(e.$style.tags)},[(u(!0),c(O,null,M(Me.value,(a,t)=>(u(),c("span",{key:t,class:d(e.$style.tag)},[ie(z(Y(a))+" ",1),(u(),c("svg",{onClick:V(l=>qe(a),["stop"]),width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:d(e.$style["tag-close"])},[...n[2]||(n[2]=[g("path",{d:"M9 3L3 9M3 3L9 9",stroke:"currentColor","stroke-width":"1.2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)])],10,aa))],2))),128)),X.value>0?(u(),c("span",{key:0,class:d(e.$style.tag)},"+"+z(X.value),3)):x("",!0)],2)):x("",!0)],64)):I.value&&!b.value?(u(),c("span",na,z(I.value),1)):x("",!0),i.filterable?Ue((u(),c("input",{key:2,"onUpdate:modelValue":n[0]||(n[0]=a=>b.value=a),class:d(e.$style["search-input"]),placeholder:!H.value||i.multiple&&o.value.length===0?i.placeholder:"",onFocus:n[1]||(n[1]=a=>y.value=!0)},null,42,la)),[[Ge,b.value]]):(!H.value||i.multiple&&o.value.length===0)&&!b.value?(u(),c("span",{key:3,class:d(e.$style.placeholder)},z(i.placeholder),3)):x("",!0)],2),g("div",{class:d(e.$style["suffix-group"])},[i.clearable&&H.value&&!i.disabled?(u(),c("span",{key:0,class:d(e.$style["clear-icon"]),onClick:V(De,["stop"])},[...n[3]||(n[3]=[g("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[g("path",{d:"M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13Z",fill:"#C5C5C5"}),g("path",{d:"M4.66669 4.66666L9.33335 9.33332M4.66669 9.33332L9.33335 4.66666",stroke:"white","stroke-width":"1.2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)])],2)):x("",!0),g("span",{class:d([e.$style["arrow-icon"],{[e.$style["is-reverse"]]:y.value}])},[...n[4]||(n[4]=[g("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[g("path",{d:"M4 6L8 10L12 6",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})],-1)])],2)],2)],42,ea),(u(),se(We,{to:"body"},[re(Ze,{name:"fade-down"},{default:Qe(()=>[y.value?(u(),c("div",{key:0,ref_key:"dropdownRef",ref:F,class:d(e.$style["cascader-dropdown"]),style:Ye(W.value)},[b.value?(u(),c("ul",{key:0,class:d(e.$style["cascader-menu-flat"])},[(u(!0),c(O,null,M(ae.value,(a,t)=>(u(),c("li",{key:t,class:d([e.$style["flat-option"],{[e.$style["is-active"]]:P(a.valuePath)}]),onClick:l=>Re(a)},[i.multiple?(u(),se(oe,{key:0,"model-value":P(a.valuePath),class:d(e.$style.checkbox)},null,8,["model-value","class"])):x("",!0),ie(" "+z(a.labelPath.join(i.separator)),1)],10,ta))),128)),ae.value.length===0?(u(),c("li",{key:0,class:d(e.$style["cascader-menu-empty"])},"无匹配数据",2)):x("",!0)],2)):ee.value.length?(u(!0),c(O,{key:1},M(ee.value,(a,t)=>(u(),c("ul",{key:t,class:d(e.$style["cascader-menu"])},[(u(!0),c(O,null,M(a,l=>(u(),c("li",{key:l.value,class:d([e.$style["cascader-option"],{[e.$style["is-active"]]:Je(l,t),[e.$style["is-disabled"]]:l.disabled}]),onClick:s=>je(l,t),onMouseenter:s=>Ae(l,t)},[g("div",{class:d(e.$style["option-content"])},[g("div",{class:d(e.$style["option-content-inner"])},[i.multiple?(u(),c("div",{key:0,onClick:V(s=>Be(l,t),["stop"]),style:{display:"flex"}},[re(oe,{"model-value":U(l,t).isChecked,indeterminate:U(l,t).isIndeterminate,class:d(e.$style.checkbox)},null,8,["model-value","indeterminate","class"])],8,ra)):x("",!0),g("span",{class:d(e.$style["option-label"])},z(l.label),3)],2),!l.isLeaf&&(l.children&&l.children.length>0||l.isLeaf===!1)?(u(),c("span",{key:0,class:d(e.$style["expand-icon"])},[...n[5]||(n[5]=[g("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[g("path",{d:"M6 4L10 8L6 12",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})],-1)])],2)):x("",!0)],2)],42,sa))),128))],2))),128)):(u(),c("div",{key:2,class:d(e.$style["cascader-menu-empty"])}," 无匹配数据 ",2))],6)):x("",!0)]),_:1})]))],34))}}),ia="_tags_po40w_54",oa="_tag_po40w_54",da="_placeholder_po40w_96",ua="_checkbox_po40w_240",ca={"cascader-container":"_cascader-container_po40w_2","is-expanded":"_is-expanded_po40w_8","cascader-trigger":"_cascader-trigger_po40w_12","is-focused":"_is-focused_po40w_28","is-disabled":"_is-disabled_po40w_33","cascader-value":"_cascader-value_po40w_43",tags:ia,tag:oa,"tag-close":"_tag-close_po40w_73","search-input":"_search-input_po40w_81",placeholder:da,"suffix-group":"_suffix-group_po40w_100","arrow-icon":"_arrow-icon_po40w_108","is-reverse":"_is-reverse_po40w_112","clear-icon":"_clear-icon_po40w_116","size-large":"_size-large_po40w_125","size-medium":"_size-medium_po40w_131","size-small":"_size-small_po40w_137","cascader-dropdown":"_cascader-dropdown_po40w_144","cascader-menu":"_cascader-menu_po40w_157","cascader-menu-empty":"_cascader-menu-empty_po40w_171","cascader-option":"_cascader-option_po40w_178","is-active":"_is-active_po40w_197","option-content":"_option-content_po40w_211","option-label":"_option-label_po40w_219","expand-icon":"_expand-icon_po40w_226",checkbox:ua,"option-content-inner":"_option-content-inner_po40w_244","cascader-menu-flat":"_cascader-menu-flat_po40w_252","flat-option":"_flat-option_po40w_263","fade-down-enter-active":"_fade-down-enter-active_po40w_285","fade-down-leave-active":"_fade-down-leave-active_po40w_286","fade-down-enter-from":"_fade-down-enter-from_po40w_290","fade-down-leave-to":"_fade-down-leave-to_po40w_291"},va={$style:ca},C=Ie(Ne,[["__cssModules",va]]);Ne.__docgenInfo={name:"TraeCascader",exportName:"default",displayName:"Cascader",description:"",tags:{},props:[{name:"modelValue",description:"指定选中项 (单选为数组，多选为二维数组)",required:!1,type:{name:"union",elements:[{name:"Array",elements:[{name:"TSParenthesizedType"}]},{name:"Array",elements:[{name:"Array",elements:[{name:"TSParenthesizedType"}]}]}]},defaultValue:{func:!1,value:"() => []"}},{name:"options",description:"可选项数据源",required:!1,type:{name:"Array",elements:[{name:"CascaderOption"}]},defaultValue:{func:!1,value:"() => []"}},{name:"multiple",description:"是否多选",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"maxTagCount",description:"多选时最多显示多少个 tag，超出部分折叠",required:!1,type:{name:"number"}},{name:"filterable",description:"是否可搜索过滤",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"placeholder",description:"输入框占位文本",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Please select'"}},{name:"disabled",description:"禁用",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"clearable",description:"支持清除",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",description:"输入框大小",required:!1,type:{name:"union",elements:[{name:'"small"'},{name:'"medium"'},{name:'"large"'}]},defaultValue:{func:!1,value:"'medium'"}},{name:"expandTrigger",description:"次级菜单的展开方式，可选 'click' 和 'hover'",required:!1,type:{name:"union",elements:[{name:'"click"'},{name:'"hover"'}]},defaultValue:{func:!1,value:"'click'"}},{name:"checkStrictly",description:"单选时生效，点选每级菜单选项值都会发生变化 (类似 checkStrictly 选择任意一项)",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"showAllLevels",description:"输入框中是否显示选中值的完整路径，只显示最后一级时设为 false",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"separator",description:"分隔符",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"' / '"}},{name:"displayRender",description:"选择后展示的渲染函数",required:!1,type:{name:"TSFunctionType"}}],events:[{name:"update:modelValue",type:{names:["any"]}},{name:"change",type:{names:["any"]}}],sourceFiles:["/home/runner/work/Starbucks-Design-System/Starbucks-Design-System/Cascader/Cascader.vue"]};const $=[{value:"beijing",label:"北京市",children:[{value:"beijingshi",label:"北京市",children:[{value:"dongcheng",label:"东城区"},{value:"xicheng",label:"西城区"},{value:"chaoyang",label:"朝阳区"},{value:"haidian",label:"海淀区"}]}]},{value:"shanghai",label:"上海市",children:[{value:"shanghaishi",label:"上海市",children:[{value:"huangpu",label:"黄浦区"},{value:"xuhui",label:"徐汇区"},{value:"changning",label:"长宁区"},{value:"jingan",label:"静安区"}]}]},{value:"guangdong",label:"广东省",children:[{value:"guangzhou",label:"广州市",children:[{value:"tianhe",label:"天河区"},{value:"yuexiu",label:"越秀区"},{value:"haizhu",label:"海珠区"}]},{value:"shenzhen",label:"深圳市",children:[{value:"nanshan",label:"南山区"},{value:"futian",label:"福田区"},{value:"luohu",label:"罗湖区"}]}]}],ga={title:"数据录入/级联选择 Cascader",component:C,tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium","large"],description:"输入框大小"},disabled:{control:"boolean",description:"是否禁用"},clearable:{control:"boolean",description:"是否支持清除"},multiple:{control:"boolean",description:"是否多选"},maxTagCount:{control:"number",description:"多选时最多显示的标签数量（可折叠）"},filterable:{control:"boolean",description:"是否可搜索过滤"},expandTrigger:{control:"select",options:["click","hover"],description:"次级菜单的展开方式"},checkStrictly:{control:"boolean",description:"是否允许选择任意一级的选项"},showAllLevels:{control:"boolean",description:"输入框中是否显示选中值的完整路径"},separator:{control:"text",description:"选项分隔符"}},args:{options:$,placeholder:"Please select",size:"medium",disabled:!1,clearable:!0,multiple:!1,filterable:!1,expandTrigger:"click",checkStrictly:!1,showAllLevels:!0,separator:" / "}},J={render:i=>({components:{Cascader:C},setup(){const p=h([]);return{args:i,value:p}},template:`
      <div>
        <h3 style="margin: 0 0 16px 0; font-size: 14px; font-weight: normal; color: var(--text-secondary);">单选级联选择器</h3>
        <div style="width: 300px;">
          <Cascader v-bind="args" v-model="value" />
        </div>
      </div>
    `})},j={args:{expandTrigger:"hover",options:$},render:i=>({components:{Cascader:C},setup(){const p=h([]);return{args:i,value:p}},template:`
      <div>
        <h3 style="margin: 0 0 16px 0; font-size: 14px; font-weight: normal; color: var(--text-secondary);">Hover 触发</h3>
        <div style="width: 300px;">
          <Cascader v-bind="args" v-model="value" />
        </div>
      </div>
    `})},B={args:{checkStrictly:!0,options:$},render:i=>({components:{Cascader:C},setup(){const p=h([]);return{args:i,value:p}},template:`
      <div>
        <h3 style="margin: 0 0 16px 0; font-size: 14px; font-weight: normal; color: var(--text-secondary);">选择任意一项的级联选择器</h3>
        <div style="width: 300px;">
          <Cascader v-bind="args" v-model="value" />
        </div>
      </div>
    `})},A={name:"Show Last Level",args:{showAllLevels:!1,options:$},render:i=>({components:{Cascader:C},setup(){const p=h([]);return{args:i,value:p}},template:`
      <div>
        <h3 style="margin: 0 0 16px 0; font-size: 14px; font-weight: normal; color: var(--text-secondary);">只显示最后一级的级联选择器</h3>
        <div style="width: 300px;">
          <Cascader v-bind="args" v-model="value" />
        </div>
      </div>
    `})},q={name:"Multiple",args:{multiple:!0,options:$},render:i=>({components:{Cascader:C},setup(){const p=h([]);return{args:i,value:p}},template:`
      <div>
        <h3 style="margin: 0 0 16px 0; font-size: 14px; font-weight: normal; color: var(--text-secondary);">多选级联选择器</h3>
        <div style="width: 300px;">
          <Cascader v-bind="args" v-model="value" />
        </div>
      </div>
    `})},D={name:"Max Tag Count",args:{multiple:!0,maxTagCount:1,options:$},render:i=>({components:{Cascader:C},setup(){const p=h([["beijing","beijingshi","chaoyang"],["guangdong","shenzhen","nanshan"]]);return{args:i,value:p}},template:`
      <div>
        <h3 style="margin: 0 0 16px 0; font-size: 14px; font-weight: normal; color: var(--text-secondary);">可折叠选项多选选择器</h3>
        <div style="width: 300px;">
          <Cascader v-bind="args" v-model="value" />
        </div>
      </div>
    `})},E={name:"Searchable",args:{filterable:!0,options:$},render:i=>({components:{Cascader:C},setup(){const p=h([]);return{args:i,value:p}},template:`
      <div>
        <h3 style="margin: 0 0 16px 0; font-size: 14px; font-weight: normal; color: var(--text-secondary);">可过滤的级联选择器</h3>
        <div style="width: 300px;">
          <Cascader v-bind="args" v-model="value" />
        </div>
      </div>
    `})},R={name:"Disabled",args:{options:[{value:"beijing",label:"北京市",children:[{value:"beijingshi",label:"北京市",children:[{value:"dongcheng",label:"东城区"},{value:"xicheng",label:"西城区"},{value:"chaoyang",label:"朝阳区"},{value:"haidian",label:"海淀区"}]}]},{value:"shanghai",label:"上海市",disabled:!0,children:[{value:"shanghaishi",label:"上海市",children:[{value:"huangpu",label:"黄浦区"},{value:"xuhui",label:"徐汇区"},{value:"changning",label:"长宁区"},{value:"jingan",label:"静安区"}]}]}]},render:i=>({components:{Cascader:C},setup(){const p=h([]);return{args:i,value:p}},template:`
      <div>
        <h3 style="margin: 0 0 16px 0; font-size: 14px; font-weight: normal; color: var(--text-secondary);">禁用的级联选择器</h3>
        <div style="width: 300px;">
          <Cascader v-bind="args" v-model="value" />
        </div>
      </div>
    `})};var de,ue,ce;J.parameters={...J.parameters,docs:{...(de=J.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      Cascader
    },
    setup() {
      const value = ref<(string | number)[]>([]);
      return {
        args,
        value
      };
    },
    template: \`
      <div>
        <h3 style="margin: 0 0 16px 0; font-size: 14px; font-weight: normal; color: var(--text-secondary);">单选级联选择器</h3>
        <div style="width: 300px;">
          <Cascader v-bind="args" v-model="value" />
        </div>
      </div>
    \`
  })
}`,...(ce=(ue=J.parameters)==null?void 0:ue.docs)==null?void 0:ce.source}}};var ve,pe,me;j.parameters={...j.parameters,docs:{...(ve=j.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    expandTrigger: 'hover',
    options
  },
  render: (args: any) => ({
    components: {
      Cascader
    },
    setup() {
      const value = ref<(string | number)[]>([]);
      return {
        args,
        value
      };
    },
    template: \`
      <div>
        <h3 style="margin: 0 0 16px 0; font-size: 14px; font-weight: normal; color: var(--text-secondary);">Hover 触发</h3>
        <div style="width: 300px;">
          <Cascader v-bind="args" v-model="value" />
        </div>
      </div>
    \`
  })
}`,...(me=(pe=j.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var he,ge,fe;B.parameters={...B.parameters,docs:{...(he=B.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    checkStrictly: true,
    options
  },
  render: (args: any) => ({
    components: {
      Cascader
    },
    setup() {
      const value = ref<(string | number)[]>([]);
      return {
        args,
        value
      };
    },
    template: \`
      <div>
        <h3 style="margin: 0 0 16px 0; font-size: 14px; font-weight: normal; color: var(--text-secondary);">选择任意一项的级联选择器</h3>
        <div style="width: 300px;">
          <Cascader v-bind="args" v-model="value" />
        </div>
      </div>
    \`
  })
}`,...(fe=(ge=B.parameters)==null?void 0:ge.docs)==null?void 0:fe.source}}};var ye,be,we;A.parameters={...A.parameters,docs:{...(ye=A.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  name: 'Show Last Level',
  args: {
    showAllLevels: false,
    options
  },
  render: (args: any) => ({
    components: {
      Cascader
    },
    setup() {
      const value = ref<(string | number)[]>([]);
      return {
        args,
        value
      };
    },
    template: \`
      <div>
        <h3 style="margin: 0 0 16px 0; font-size: 14px; font-weight: normal; color: var(--text-secondary);">只显示最后一级的级联选择器</h3>
        <div style="width: 300px;">
          <Cascader v-bind="args" v-model="value" />
        </div>
      </div>
    \`
  })
}`,...(we=(be=A.parameters)==null?void 0:be.docs)==null?void 0:we.source}}};var xe,ke,Ce;q.parameters={...q.parameters,docs:{...(xe=q.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  name: 'Multiple',
  args: {
    multiple: true,
    options
  },
  render: (args: any) => ({
    components: {
      Cascader
    },
    setup() {
      const value = ref<(string | number)[][]>([]);
      return {
        args,
        value
      };
    },
    template: \`
      <div>
        <h3 style="margin: 0 0 16px 0; font-size: 14px; font-weight: normal; color: var(--text-secondary);">多选级联选择器</h3>
        <div style="width: 300px;">
          <Cascader v-bind="args" v-model="value" />
        </div>
      </div>
    \`
  })
}`,...(Ce=(ke=q.parameters)==null?void 0:ke.docs)==null?void 0:Ce.source}}};var Se,_e,$e;D.parameters={...D.parameters,docs:{...(Se=D.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  name: 'Max Tag Count',
  args: {
    multiple: true,
    maxTagCount: 1,
    options
  },
  render: (args: any) => ({
    components: {
      Cascader
    },
    setup() {
      const value = ref<(string | number)[][]>([['beijing', 'beijingshi', 'chaoyang'], ['guangdong', 'shenzhen', 'nanshan']]);
      return {
        args,
        value
      };
    },
    template: \`
      <div>
        <h3 style="margin: 0 0 16px 0; font-size: 14px; font-weight: normal; color: var(--text-secondary);">可折叠选项多选选择器</h3>
        <div style="width: 300px;">
          <Cascader v-bind="args" v-model="value" />
        </div>
      </div>
    \`
  })
}`,...($e=(_e=D.parameters)==null?void 0:_e.docs)==null?void 0:$e.source}}};var ze,Te,Le;E.parameters={...E.parameters,docs:{...(ze=E.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  name: 'Searchable',
  args: {
    filterable: true,
    options
  },
  render: (args: any) => ({
    components: {
      Cascader
    },
    setup() {
      const value = ref<(string | number)[]>([]);
      return {
        args,
        value
      };
    },
    template: \`
      <div>
        <h3 style="margin: 0 0 16px 0; font-size: 14px; font-weight: normal; color: var(--text-secondary);">可过滤的级联选择器</h3>
        <div style="width: 300px;">
          <Cascader v-bind="args" v-model="value" />
        </div>
      </div>
    \`
  })
}`,...(Le=(Te=E.parameters)==null?void 0:Te.docs)==null?void 0:Le.source}}};var Oe,Ve,Pe;R.parameters={...R.parameters,docs:{...(Oe=R.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  name: 'Disabled',
  args: {
    options: [{
      value: 'beijing',
      label: '北京市',
      children: [{
        value: 'beijingshi',
        label: '北京市',
        children: [{
          value: 'dongcheng',
          label: '东城区'
        }, {
          value: 'xicheng',
          label: '西城区'
        }, {
          value: 'chaoyang',
          label: '朝阳区'
        }, {
          value: 'haidian',
          label: '海淀区'
        }]
      }]
    }, {
      value: 'shanghai',
      label: '上海市',
      disabled: true,
      children: [{
        value: 'shanghaishi',
        label: '上海市',
        children: [{
          value: 'huangpu',
          label: '黄浦区'
        }, {
          value: 'xuhui',
          label: '徐汇区'
        }, {
          value: 'changning',
          label: '长宁区'
        }, {
          value: 'jingan',
          label: '静安区'
        }]
      }]
    }]
  },
  render: (args: any) => ({
    components: {
      Cascader
    },
    setup() {
      const value = ref<(string | number)[]>([]);
      return {
        args,
        value
      };
    },
    template: \`
      <div>
        <h3 style="margin: 0 0 16px 0; font-size: 14px; font-weight: normal; color: var(--text-secondary);">禁用的级联选择器</h3>
        <div style="width: 300px;">
          <Cascader v-bind="args" v-model="value" />
        </div>
      </div>
    \`
  })
}`,...(Pe=(Ve=R.parameters)==null?void 0:Ve.docs)==null?void 0:Pe.source}}};const fa=["Basic","Hover","CheckStrictly","ShowLastLevel","Multiple","MaxTagCount","Searchable","Disabled"];export{J as Basic,B as CheckStrictly,R as Disabled,j as Hover,D as MaxTagCount,q as Multiple,E as Searchable,A as ShowLastLevel,fa as __namedExportsOrder,ga as default};
