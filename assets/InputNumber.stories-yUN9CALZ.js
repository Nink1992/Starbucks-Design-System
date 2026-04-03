import{e as Z,r as u,w as _,f as S,F as E,g as t,n as o,B as v,l as x,c as M,o as B}from"./vue.esm-bundler-DEFMfx8h.js";import{_ as ee}from"./_plugin-vue_export-helper-DlAUqK2U.js";const ne=["disabled"],le=["value","disabled","readonly","placeholder","onKeydown"],ae=["disabled"],se=["value","disabled","readonly","placeholder","onKeydown"],te=["disabled"],ie=["disabled"],Y=Z({__name:"InputNumber",props:{modelValue:{default:null},theme:{default:"row"},size:{default:"medium"},status:{default:"normal"},disabled:{type:Boolean,default:!1},filled:{type:Boolean,default:!1},min:{default:-1/0},max:{default:1/0},step:{default:1},precision:{default:0},placeholder:{default:"请输入"},readonly:{type:Boolean,default:!1}},emits:["update:modelValue","change","focus","blur"],setup(n,{emit:r}){const a=n,m=r,d=u(null),f=u(!1),s=u(a.modelValue??null);_(()=>a.modelValue,e=>{s.value=e});const y=M(()=>s.value===null||s.value===void 0?"":a.precision>0?s.value.toFixed(a.precision):s.value.toString()),c=M(()=>s.value!==null&&s.value<=a.min),b=M(()=>s.value!==null&&s.value>=a.max),z=e=>{if(e.trim()===""){if(s.value!==null){const i=s.value;s.value=null,m("update:modelValue",null),m("change",null,i)}return}let l=Number(e);if(isNaN(l)){d.value&&(d.value.value=y.value);return}if(l<a.min&&(l=a.min),l>a.max&&(l=a.max),a.precision>0?l=Number(l.toFixed(a.precision)):l=Math.round(l),l!==s.value){const i=s.value;s.value=l,m("update:modelValue",l),m("change",l,i)}else d.value&&(d.value.value=y.value)},F=e=>{a.disabled||a.readonly||(f.value=!0,m("focus",e))},q=e=>{if(f.value=!1,d.value){const l=d.value.value;z(l)}m("blur",e)},C=e=>{const l=e.target;let i=l.value;if(a.precision===0)i=i.replace(/[^\d-]/g,"");else{i=i.replace(/[^\d.-]/g,"");const V=i.split(".");V.length>2&&(i=V[0]+"."+V.slice(1).join(""))}l.value!==i&&(l.value=i)},j=()=>{d.value&&d.value.blur()},g=()=>{if(a.disabled||a.readonly||b.value)return;const e=s.value===null?0:s.value;z((e+a.step).toString())},h=()=>{if(a.disabled||a.readonly||c.value)return;const e=s.value===null?0:s.value;z((e-a.step).toString())};return(e,l)=>(B(),S("div",{class:o([e.$style["input-number"],e.$style[`theme-${n.theme}`],e.$style[`size-${n.size}`],{[e.$style["is-disabled"]]:n.disabled,[e.$style["is-filled"]]:n.filled,[e.$style["is-focused"]]:f.value,[e.$style[`status-${n.status}`]]:n.status!=="normal"}])},[n.theme==="row"?(B(),S(E,{key:0},[t("button",{class:o([e.$style["row-btn"],e.$style["decrease-btn"],{[e.$style["is-disabled"]]:n.disabled||c.value}]),disabled:n.disabled||c.value,onClick:h,type:"button"},[...l[0]||(l[0]=[t("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M4 8H12",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})],-1)])],10,ne),t("div",{class:o([e.$style["input-wrapper"],{[e.$style["is-disabled"]]:n.disabled,[e.$style["is-readonly"]]:n.readonly,[e.$style["is-focused"]]:f.value,[e.$style[`status-${n.status}`]]:n.status!=="normal"}])},[t("input",{ref_key:"inputRef",ref:d,class:o(e.$style["input-core"]),value:y.value,disabled:n.disabled,readonly:n.readonly,placeholder:n.placeholder,onInput:C,onFocus:F,onBlur:q,onKeydown:[v(j,["enter"]),v(x(g,["prevent"]),["up"]),v(x(h,["prevent"]),["down"])]},null,42,le)],2),t("button",{class:o([e.$style["row-btn"],e.$style["increase-btn"],{[e.$style["is-disabled"]]:n.disabled||b.value}]),disabled:n.disabled||b.value,onClick:g,type:"button"},[...l[1]||(l[1]=[t("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M8 4V12M4 8H12",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})],-1)])],10,ae)],64)):(B(),S(E,{key:1},[t("input",{ref_key:"inputRef",ref:d,class:o(e.$style["input-core"]),value:y.value,disabled:n.disabled,readonly:n.readonly,placeholder:n.placeholder,onInput:C,onFocus:F,onBlur:q,onKeydown:[v(j,["enter"]),v(x(g,["prevent"]),["up"]),v(x(h,["prevent"]),["down"])]},null,42,se),t("div",{class:o(e.$style["column-actions"])},[t("button",{class:o([e.$style["column-btn"],e.$style["increase-btn"],{[e.$style["is-disabled"]]:n.disabled||b.value}]),disabled:n.disabled||b.value,onClick:g,type:"button"},[...l[2]||(l[2]=[t("svg",{viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M2.5 7.5L6 3.5L9.5 7.5",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})],-1)])],10,te),t("button",{class:o([e.$style["column-btn"],e.$style["decrease-btn"],{[e.$style["is-disabled"]]:n.disabled||c.value}]),disabled:n.disabled||c.value,onClick:h,type:"button"},[...l[3]||(l[3]=[t("svg",{viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M2.5 4.5L6 8.5L9.5 4.5",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})],-1)])],10,ie)],2)],64))],2))}}),re={"input-number":"_input-number_1yb1k_3","is-disabled":"_is-disabled_1yb1k_9","theme-row":"_theme-row_1yb1k_14","row-btn":"_row-btn_1yb1k_17","input-wrapper":"_input-wrapper_1yb1k_51","is-readonly":"_is-readonly_1yb1k_63","is-focused":"_is-focused_1yb1k_63","status-error":"_status-error_1yb1k_76","is-filled":"_is-filled_1yb1k_82","size-large":"_size-large_1yb1k_101","input-core":"_input-core_1yb1k_113","size-medium":"_size-medium_1yb1k_116","size-small":"_size-small_1yb1k_132","theme-column":"_theme-column_1yb1k_149","column-actions":"_column-actions_1yb1k_199","column-btn":"_column-btn_1yb1k_224"},de={$style:re},p=ee(Y,[["__cssModules",de]]);Y.__docgenInfo={exportName:"default",displayName:"InputNumber",description:"",tags:{},props:[{name:"modelValue",description:"绑定值",required:!1,type:{name:"union",elements:[{name:"number"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"theme",description:"主题样式 (双侧调整 | 右侧调整)",required:!1,type:{name:"union",elements:[{name:'"row"'},{name:'"column"'}]},defaultValue:{func:!1,value:"'row'"}},{name:"size",description:"尺寸",required:!1,type:{name:"union",elements:[{name:'"large"'},{name:'"medium"'},{name:'"small"'}]},defaultValue:{func:!1,value:"'medium'"}},{name:"status",description:"状态",required:!1,type:{name:"union",elements:[{name:'"normal"'},{name:'"error"'},{name:'"warning"'}]},defaultValue:{func:!1,value:"'normal'"}},{name:"disabled",description:"是否禁用",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"filled",description:"是否为填充模式",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"min",description:"最小值",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"-Infinity"}},{name:"max",description:"最大值",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"Infinity"}},{name:"step",description:"步长",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"precision",description:"精度",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"placeholder",description:"占位提示",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'请输入'"}},{name:"readonly",description:"只读",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue",type:{names:["union"],elements:[{name:"number"},{name:"null"}]}},{name:"change",type:{names:["union"],elements:[{name:"number"},{name:"null"}]}},{name:"focus",type:{names:["FocusEvent"]}},{name:"blur",type:{names:["FocusEvent"]}}],sourceFiles:["/home/runner/work/Starbucks-Design-System/Starbucks-Design-System/InputNumber/InputNumber.vue"]};const me={title:"数据录入/计数器 Input_number",component:p,tags:["autodocs"],argTypes:{theme:{control:"select",options:["row","column"],description:"主题样式 (双侧调整 | 右侧调整)"},size:{control:"select",options:["large","medium","small"],description:"尺寸"},status:{control:"select",options:["normal","error","warning"],description:"状态"},disabled:{control:"boolean",description:"是否禁用"},filled:{control:"boolean",description:"是否为填充模式"},min:{control:"number",description:"最小值"},max:{control:"number",description:"最大值"},step:{control:"number",description:"步长"},precision:{control:"number",description:"数值精度"}},args:{theme:"row",size:"medium",disabled:!1,filled:!1,status:"normal",placeholder:"请输入"}},I={render:n=>({components:{InputNumber:p},setup(){const r=u(null),a=u(8888);return{args:n,value1:r,value2:a}},template:`
      <div style="display: flex; gap: 24px; flex-direction: column;">
        <div>
          <div style="margin-bottom: 8px; color: #666;">双侧调整数字输入框 (Theme: row)</div>
          <div style="display: flex; gap: 16px; align-items: center;">
            <InputNumber v-bind="args" v-model="value1" />
            <InputNumber v-bind="args" v-model="value2" filled />
          </div>
        </div>
        <div>
          <div style="margin-bottom: 8px; color: #666;">右侧调整数字输入框 (Theme: column)</div>
          <div style="display: flex; gap: 16px; align-items: center;">
            <InputNumber v-bind="args" v-model="value1" theme="column" />
            <InputNumber v-bind="args" v-model="value2" theme="column" filled />
          </div>
        </div>
      </div>
    `})},N={render:n=>({components:{InputNumber:p},setup(){const r=u(8888);return{args:n,val:r}},template:`
      <div style="display: flex; gap: 24px; flex-direction: column;">
        <div>
          <div style="margin-bottom: 8px; color: #666;">Normal / Hover / Focus (Simulated via Status prop)</div>
          <div style="display: flex; gap: 16px; align-items: center;">
            <InputNumber v-bind="args" v-model="val" filled />
            <InputNumber v-bind="args" v-model="val" filled status="warning" />
            <InputNumber v-bind="args" v-model="val" filled status="error" />
          </div>
        </div>
        <div>
          <div style="margin-bottom: 8px; color: #666;">Disabled</div>
          <div style="display: flex; gap: 16px; align-items: center;">
            <InputNumber v-bind="args" v-model="val" disabled />
            <InputNumber v-bind="args" v-model="val" disabled filled />
            <InputNumber v-bind="args" v-model="val" disabled theme="column" />
            <InputNumber v-bind="args" v-model="val" disabled theme="column" filled />
          </div>
        </div>
      </div>
    `})},w={render:n=>({components:{InputNumber:p},setup(){const r=u(100);return{args:n,val:r}},template:`
      <div style="display: flex; gap: 24px; flex-direction: column;">
        <div style="display: flex; gap: 16px; align-items: center;">
          <InputNumber v-bind="args" v-model="val" size="large" />
          <InputNumber v-bind="args" v-model="val" size="medium" />
          <InputNumber v-bind="args" v-model="val" size="small" />
        </div>
        <div style="display: flex; gap: 16px; align-items: center;">
          <InputNumber v-bind="args" v-model="val" size="large" theme="column" />
          <InputNumber v-bind="args" v-model="val" size="medium" theme="column" />
          <InputNumber v-bind="args" v-model="val" size="small" theme="column" />
        </div>
      </div>
    `})},k={render:n=>({components:{InputNumber:p},setup(){const r=u(0);return{args:n,val:r}},template:`
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div style="color: #666;">Min: 0, Max: 10, Step: 2</div>
        <InputNumber v-bind="args" v-model="val" :min="0" :max="10" :step="2" />
      </div>
    `})},$={render:n=>({components:{InputNumber:p},setup(){const r=u(1.5);return{args:n,val:r}},template:`
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div style="color: #666;">Precision: 2 (e.g. 1.50)</div>
        <InputNumber v-bind="args" v-model="val" :precision="2" :step="0.1" />
      </div>
    `})};var K,T,D;I.parameters={...I.parameters,docs:{...(K=I.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      InputNumber
    },
    setup() {
      const value1 = ref(null);
      const value2 = ref(8888);
      return {
        args,
        value1,
        value2
      };
    },
    template: \`
      <div style="display: flex; gap: 24px; flex-direction: column;">
        <div>
          <div style="margin-bottom: 8px; color: #666;">双侧调整数字输入框 (Theme: row)</div>
          <div style="display: flex; gap: 16px; align-items: center;">
            <InputNumber v-bind="args" v-model="value1" />
            <InputNumber v-bind="args" v-model="value2" filled />
          </div>
        </div>
        <div>
          <div style="margin-bottom: 8px; color: #666;">右侧调整数字输入框 (Theme: column)</div>
          <div style="display: flex; gap: 16px; align-items: center;">
            <InputNumber v-bind="args" v-model="value1" theme="column" />
            <InputNumber v-bind="args" v-model="value2" theme="column" filled />
          </div>
        </div>
      </div>
    \`
  })
}`,...(D=(T=I.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var H,L,P;N.parameters={...N.parameters,docs:{...(H=N.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      InputNumber
    },
    setup() {
      const val = ref(8888);
      return {
        args,
        val
      };
    },
    template: \`
      <div style="display: flex; gap: 24px; flex-direction: column;">
        <div>
          <div style="margin-bottom: 8px; color: #666;">Normal / Hover / Focus (Simulated via Status prop)</div>
          <div style="display: flex; gap: 16px; align-items: center;">
            <InputNumber v-bind="args" v-model="val" filled />
            <InputNumber v-bind="args" v-model="val" filled status="warning" />
            <InputNumber v-bind="args" v-model="val" filled status="error" />
          </div>
        </div>
        <div>
          <div style="margin-bottom: 8px; color: #666;">Disabled</div>
          <div style="display: flex; gap: 16px; align-items: center;">
            <InputNumber v-bind="args" v-model="val" disabled />
            <InputNumber v-bind="args" v-model="val" disabled filled />
            <InputNumber v-bind="args" v-model="val" disabled theme="column" />
            <InputNumber v-bind="args" v-model="val" disabled theme="column" filled />
          </div>
        </div>
      </div>
    \`
  })
}`,...(P=(L=N.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var R,O,A;w.parameters={...w.parameters,docs:{...(R=w.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      InputNumber
    },
    setup() {
      const val = ref(100);
      return {
        args,
        val
      };
    },
    template: \`
      <div style="display: flex; gap: 24px; flex-direction: column;">
        <div style="display: flex; gap: 16px; align-items: center;">
          <InputNumber v-bind="args" v-model="val" size="large" />
          <InputNumber v-bind="args" v-model="val" size="medium" />
          <InputNumber v-bind="args" v-model="val" size="small" />
        </div>
        <div style="display: flex; gap: 16px; align-items: center;">
          <InputNumber v-bind="args" v-model="val" size="large" theme="column" />
          <InputNumber v-bind="args" v-model="val" size="medium" theme="column" />
          <InputNumber v-bind="args" v-model="val" size="small" theme="column" />
        </div>
      </div>
    \`
  })
}`,...(A=(O=w.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};var G,J,Q;k.parameters={...k.parameters,docs:{...(G=k.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      InputNumber
    },
    setup() {
      const val = ref(0);
      return {
        args,
        val
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div style="color: #666;">Min: 0, Max: 10, Step: 2</div>
        <InputNumber v-bind="args" v-model="val" :min="0" :max="10" :step="2" />
      </div>
    \`
  })
}`,...(Q=(J=k.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var U,W,X;$.parameters={...$.parameters,docs:{...(U=$.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      InputNumber
    },
    setup() {
      const val = ref(1.5);
      return {
        args,
        val
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div style="color: #666;">Precision: 2 (e.g. 1.50)</div>
        <InputNumber v-bind="args" v-model="val" :precision="2" :step="0.1" />
      </div>
    \`
  })
}`,...(X=(W=$.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};const ve=["Basic","Status","Sizes","MinMaxStep","Precision"];export{I as Basic,k as MinMaxStep,$ as Precision,w as Sizes,N as Status,ve as __namedExportsOrder,me as default};
