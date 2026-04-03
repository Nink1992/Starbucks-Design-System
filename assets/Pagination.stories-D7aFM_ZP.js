import{e as ve,r as l,w as Q,f as d,n as r,t as P,j as w,g as i,D as L,B as W,u as T,F as O,y as he,c as E,o as p}from"./vue.esm-bundler-DEFMfx8h.js";import{I as F}from"./Input-DGlE0fSJ.js";import{S as fe}from"./Select-CD-F-EVH.js";import{_ as ye}from"./_plugin-vue_export-helper-DlAUqK2U.js";const we={key:1},ze=["onClick"],de=ve({__name:"Pagination",props:{current:{default:1},total:{default:0},pageSize:{default:10},size:{default:"medium"},theme:{default:"default"},showTotal:{type:Boolean,default:!1},showSizeChanger:{type:Boolean,default:!1},showQuickJumper:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},pageSizeOptions:{default:()=>[10,20,30,40,50]}},emits:["update:current","update:pageSize","change"],setup(a,{emit:u}){const o=a,f=u,s=l(o.current),z=l(o.pageSize);Q(()=>o.current,e=>{s.value=e}),Q(()=>o.pageSize,e=>{z.value=e});const m=E(()=>Math.max(1,Math.ceil(o.total/z.value))),g=e=>{o.disabled||(e<1&&(e=1),e>m.value&&(e=m.value),s.value!==e&&(s.value=e,f("update:current",e),f("change",e,z.value)))},pe=e=>{if(o.disabled)return;const n=Number(e);if(isNaN(n))return;z.value=n,f("update:pageSize",n);const t=Math.max(1,Math.ceil(o.total/n));let v=s.value;v>t&&(v=t),s.value=v,f("update:current",v),f("change",v,n)},J=E(()=>{const e=s.value,n=m.value,t=7,v=Math.floor(t/2);let k=!1,x=!1;n>t&&(e>t-v&&(k=!0),e<n-v&&(x=!0));const $=[];if(k&&!x){const c=n-(t-2);for(let y=c;y<n;y++)$.push(y)}else if(!k&&x)for(let c=2;c<t;c++)$.push(c);else if(k&&x){const c=Math.floor(t/2)-1;for(let y=e-c;y<=e+c;y++)$.push(y)}else for(let c=2;c<n;c++)$.push(c);return{pages:$,showPrevMore:k,showNextMore:x}}),S=l(""),me=e=>{const n=e.target;let t=n.value;t=t.replace(/[^\d]/g,""),n.value!==t&&(S.value=t)},I=()=>{const e=Number(S.value);e&&!isNaN(e)&&g(e),S.value=""},b=l(String(s.value));Q(()=>s.value,e=>{b.value=String(e)});const ge=e=>{const n=e.target;let t=n.value;t=t.replace(/[^\d]/g,""),n.value!==t&&(b.value=t)},D=()=>{let e=Number(b.value);e&&!isNaN(e)?g(e):b.value=String(s.value)};return(e,n)=>(p(),d("div",{class:r([e.$style.pagination,e.$style[`theme-${a.theme}`],e.$style[`size-${a.size}`],{[e.$style["is-disabled"]]:a.disabled}])},[a.showTotal?(p(),d("span",{key:0,class:r(e.$style["pagination-total"])}," 共 "+P(a.total)+" 条 ",3)):w("",!0),a.theme==="simple"?(p(),d("ul",we,[i("li",{class:r([e.$style["page-item"],e.$style["page-nav"],{[e.$style["is-disabled"]]:s.value===1||a.disabled}]),onClick:n[0]||(n[0]=t=>g(s.value-1))},[...n[9]||(n[9]=[i("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[i("path",{d:"M10 4L6 8L10 12",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})],-1)])],2),i("li",{class:r(e.$style["simple-jumper"])},[L(T(F),{modelValue:b.value,"onUpdate:modelValue":n[1]||(n[1]=t=>b.value=t),class:r(e.$style["simple-input-wrapper"]),size:a.size,disabled:a.disabled,onInput:ge,onBlur:D,onKeydown:W(D,["enter"])},null,8,["modelValue","class","size","disabled"]),i("span",{class:r(e.$style["changer-text"])},"/"+P(m.value),3)],2),i("li",{class:r([e.$style["page-item"],e.$style["page-nav"],{[e.$style["is-disabled"]]:s.value===m.value||a.disabled}]),onClick:n[2]||(n[2]=t=>g(s.value+1))},[...n[10]||(n[10]=[i("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[i("path",{d:"M6 4L10 8L6 12",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})],-1)])],2)])):(p(),d(O,{key:2},[i("ul",null,[i("li",{class:r([e.$style["page-item"],e.$style["page-nav"],{[e.$style["is-disabled"]]:s.value===1||a.disabled}]),onClick:n[3]||(n[3]=t=>g(s.value-1))},[...n[11]||(n[11]=[i("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[i("path",{d:"M10 4L6 8L10 12",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})],-1)])],2),i("li",{class:r([e.$style["page-item"],{[e.$style["is-active"]]:s.value===1}]),onClick:n[4]||(n[4]=t=>g(1))}," 1 ",2),J.value.showPrevMore?(p(),d("li",{key:0,class:r([e.$style["page-item"],e.$style["is-ellipsis"]])}," ... ",2)):w("",!0),(p(!0),d(O,null,he(J.value.pages,t=>(p(),d("li",{key:t,class:r([e.$style["page-item"],{[e.$style["is-active"]]:s.value===t}]),onClick:v=>g(t)},P(t),11,ze))),128)),J.value.showNextMore?(p(),d("li",{key:1,class:r([e.$style["page-item"],e.$style["is-ellipsis"]])}," ... ",2)):w("",!0),m.value>1?(p(),d("li",{key:2,class:r([e.$style["page-item"],{[e.$style["is-active"]]:s.value===m.value}]),onClick:n[5]||(n[5]=t=>g(m.value))},P(m.value),3)):w("",!0),i("li",{class:r([e.$style["page-item"],e.$style["page-nav"],{[e.$style["is-disabled"]]:s.value===m.value||a.disabled}]),onClick:n[6]||(n[6]=t=>g(s.value+1))},[...n[12]||(n[12]=[i("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[i("path",{d:"M6 4L10 8L6 12",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})],-1)])],2)]),a.showSizeChanger||a.showQuickJumper?(p(),d("div",{key:0,class:r(e.$style["pagination-options"])},[a.showSizeChanger?(p(),d("div",{key:0,class:r(e.$style["size-changer"])},[i("span",{class:r(e.$style["changer-text"])},"每页",2),L(T(fe),{disabled:a.disabled,modelValue:z.value,"onUpdate:modelValue":n[7]||(n[7]=t=>z.value=t),options:a.pageSizeOptions.map(t=>({label:String(t),value:t})),size:a.size,class:r(e.$style["changer-select-wrapper"]),onChange:pe},null,8,["disabled","modelValue","options","size","class"]),i("span",{class:r(e.$style["changer-text"])},"条",2)],2)):w("",!0),a.showQuickJumper?(p(),d("div",{key:1,class:r(e.$style["quick-jumper"])},[i("span",{class:r(e.$style["changer-text"])},"前往",2),L(T(F),{modelValue:S.value,"onUpdate:modelValue":n[8]||(n[8]=t=>S.value=t),class:r(e.$style["jumper-input-wrapper"]),size:a.size,disabled:a.disabled,placeholder:"",onInput:me,onBlur:I,onKeydown:W(I,["enter"])},null,8,["modelValue","class","size","disabled"]),i("span",{class:r(e.$style["changer-text"])},"/"+P(m.value)+" 页",3)],2)):w("",!0)],2)):w("",!0)],64))],2))}}),be="_pagination_1rsic_3",Se={pagination:be,"is-disabled":"_is-disabled_1rsic_18","page-item":"_page-item_1rsic_24","is-active":"_is-active_1rsic_46","is-ellipsis":"_is-ellipsis_1rsic_46","page-nav":"_page-nav_1rsic_71","pagination-total":"_pagination-total_1rsic_88","pagination-options":"_pagination-options_1rsic_95","size-changer":"_size-changer_1rsic_104","quick-jumper":"_quick-jumper_1rsic_104","changer-select-wrapper":"_changer-select-wrapper_1rsic_110","changer-text":"_changer-text_1rsic_119","jumper-input-wrapper":"_jumper-input-wrapper_1rsic_123","size-small":"_size-small_1rsic_138","simple-input-wrapper":"_simple-input-wrapper_1rsic_163","theme-simple":"_theme-simple_1rsic_177","simple-jumper":"_simple-jumper_1rsic_177"},ke={$style:Se},h=ye(de,[["__cssModules",ke]]);de.__docgenInfo={exportName:"default",displayName:"Pagination",description:"",tags:{},props:[{name:"current",description:"当前页数",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"total",description:"数据总条数",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"pageSize",description:"每页展示条数",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"10"}},{name:"size",description:"分页器尺寸",required:!1,type:{name:"union",elements:[{name:'"small"'},{name:'"medium"'}]},defaultValue:{func:!1,value:"'medium'"}},{name:"theme",description:"分页器风格",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"simple"'}]},defaultValue:{func:!1,value:"'default'"}},{name:"showTotal",description:"是否展示数据总量",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"showSizeChanger",description:"是否展示页面展示数量选择 (Page Size Changer)",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"showQuickJumper",description:"是否展示快速跳转 (Quick Jumper)",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",description:"是否禁用",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"pageSizeOptions",description:"每页展示条数配置选项",required:!1,type:{name:"Array",elements:[{name:"number"}]},defaultValue:{func:!1,value:"() => [10, 20, 30, 40, 50]"}}],events:[{name:"update:current",type:{names:["number"]}},{name:"update:pageSize",type:{names:["number"]}},{name:"change",type:{names:["number"]}}],sourceFiles:["/home/runner/work/Starbucks-Design-System/Starbucks-Design-System/Pagination/Pagination.vue"]};const Ve={title:"导航/分页 Pagination",component:h,tags:["autodocs"],parameters:{docs:{description:{component:"将大体量数据划分成多个页面，帮助用户进行页面跳转，并定位当前位置。"}}},argTypes:{current:{control:"number",description:"当前页数"},total:{control:"number",description:"数据总条数"},pageSize:{control:"number",description:"每页展示条数"},size:{control:"select",options:["medium","small"],description:"分页器尺寸"},theme:{control:"select",options:["default","simple"],description:"分页器风格"},showTotal:{control:"boolean",description:"是否展示数据总量"},showSizeChanger:{control:"boolean",description:"是否展示页面展示数量选择"},showQuickJumper:{control:"boolean",description:"是否展示快速跳转"},disabled:{control:"boolean",description:"是否禁用"}},args:{current:1,total:480,pageSize:10,size:"medium",theme:"default",showTotal:!1,showSizeChanger:!1,showQuickJumper:!1,disabled:!1}},C={render:a=>({components:{Pagination:h},setup(){const u=l(1),o=l(1),f=l(20);return{args:a,current1:u,current2:o,pageSize:f}},template:`
      <div style="display: flex; flex-direction: column; gap: 40px;">
        <div>
          <h3 style="margin: 0 0 16px 0; font-size: 14px; font-weight: normal; color: var(--text-secondary);">带快速跳转的分页</h3>
          <Pagination 
            v-bind="args" 
            v-model:current="current1" 
            v-model:pageSize="pageSize" 
            show-size-changer 
            show-quick-jumper 
            show-total 
            :total="480"
          />
        </div>
        <div>
          <h3 style="margin: 0 0 16px 0; font-size: 14px; font-weight: normal; color: var(--text-secondary);">极简版分页</h3>
          <Pagination 
            v-bind="args" 
            v-model:current="current2" 
            theme="simple" 
            show-total 
            :total="480"
          />
        </div>
      </div>
    `})},V={render:a=>({components:{Pagination:h},setup(){const u=l(1);return{args:a,current:u}},template:`
      <div>
        <h3 style="margin: 0 0 16px 0; font-size: 14px; font-weight: normal; color: var(--text-secondary);">带数据总量显示的分页</h3>
        <Pagination v-bind="args" v-model:current="current" show-total />
      </div>
    `})},j={render:a=>({components:{Pagination:h},setup(){const u=l(1),o=l(20);return{args:a,current:u,pageSize:o}},template:`
      <div>
        <h3 style="margin: 0 0 16px 0; font-size: 14px; font-weight: normal; color: var(--text-secondary);">带页面展示数量选择的分页</h3>
        <Pagination v-bind="args" v-model:current="current" v-model:pageSize="pageSize" show-size-changer />
      </div>
    `})},q={render:a=>({components:{Pagination:h},setup(){const u=l(1),o=l(20);return{args:a,current:u,pageSize:o}},template:`
      <div>
        <h3 style="margin: 0 0 16px 0; font-size: 14px; font-weight: normal; color: var(--text-secondary);">带快速跳转的分页</h3>
        <Pagination 
          v-bind="args" 
          v-model:current="current" 
          v-model:pageSize="pageSize" 
          show-size-changer 
          show-quick-jumper 
        />
      </div>
    `})},B={render:a=>({components:{Pagination:h},setup(){const u=l(1);return{args:a,current:u}},template:`
      <div>
        <h3 style="margin: 0 0 16px 0; font-size: 14px; font-weight: normal; color: var(--text-secondary);">极简版分页</h3>
        <Pagination 
          v-bind="args" 
          v-model:current="current" 
          theme="simple" 
          show-total 
        />
      </div>
    `})},M={render:a=>({components:{Pagination:h},setup(){const u=l(1);return{args:a,current:u}},template:`
      <div>
        <h3 style="margin: 0 0 16px 0; font-size: 14px; font-weight: normal; color: var(--text-secondary);">禁用状态</h3>
        <Pagination 
          v-bind="args" 
          v-model:current="current" 
          show-total 
          show-size-changer 
          show-quick-jumper 
          disabled 
        />
      </div>
    `})},N={render:a=>({components:{Pagination:h},setup(){const u=l(1),o=l(1);return{args:a,current1:u,current2:o}},template:`
      <div style="display: flex; flex-direction: column; gap: 40px;">
        <div>
          <h3 style="margin: 0 0 16px 0; font-size: 14px; font-weight: normal; color: var(--text-secondary);">小尺寸带快速跳转的分页</h3>
          <Pagination 
            v-bind="args" 
            v-model:current="current1" 
            size="small"
            show-total 
            show-size-changer 
            show-quick-jumper 
          />
        </div>
        <div>
          <h3 style="margin: 0 0 16px 0; font-size: 14px; font-weight: normal; color: var(--text-secondary);">小尺寸极简版分页</h3>
          <Pagination 
            v-bind="args" 
            v-model:current="current2" 
            size="small"
            theme="simple"
            show-total 
          />
        </div>
      </div>
    `})};var K,U,A;C.parameters={...C.parameters,docs:{...(K=C.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      Pagination
    },
    setup() {
      const current1 = ref(1); // Set default selected page back to 1
      const current2 = ref(1);
      const pageSize = ref(20);
      return {
        args,
        current1,
        current2,
        pageSize
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 40px;">
        <div>
          <h3 style="margin: 0 0 16px 0; font-size: 14px; font-weight: normal; color: var(--text-secondary);">带快速跳转的分页</h3>
          <Pagination 
            v-bind="args" 
            v-model:current="current1" 
            v-model:pageSize="pageSize" 
            show-size-changer 
            show-quick-jumper 
            show-total 
            :total="480"
          />
        </div>
        <div>
          <h3 style="margin: 0 0 16px 0; font-size: 14px; font-weight: normal; color: var(--text-secondary);">极简版分页</h3>
          <Pagination 
            v-bind="args" 
            v-model:current="current2" 
            theme="simple" 
            show-total 
            :total="480"
          />
        </div>
      </div>
    \`
  })
}`,...(A=(U=C.parameters)==null?void 0:U.docs)==null?void 0:A.source}}};var G,H,R;V.parameters={...V.parameters,docs:{...(G=V.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      Pagination
    },
    setup() {
      const current = ref(1);
      return {
        args,
        current
      };
    },
    template: \`
      <div>
        <h3 style="margin: 0 0 16px 0; font-size: 14px; font-weight: normal; color: var(--text-secondary);">带数据总量显示的分页</h3>
        <Pagination v-bind="args" v-model:current="current" show-total />
      </div>
    \`
  })
}`,...(R=(H=V.parameters)==null?void 0:H.docs)==null?void 0:R.source}}};var X,Y,Z;j.parameters={...j.parameters,docs:{...(X=j.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      Pagination
    },
    setup() {
      const current = ref(1);
      const pageSize = ref(20);
      return {
        args,
        current,
        pageSize
      };
    },
    template: \`
      <div>
        <h3 style="margin: 0 0 16px 0; font-size: 14px; font-weight: normal; color: var(--text-secondary);">带页面展示数量选择的分页</h3>
        <Pagination v-bind="args" v-model:current="current" v-model:pageSize="pageSize" show-size-changer />
      </div>
    \`
  })
}`,...(Z=(Y=j.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var _,ee,ne;q.parameters={...q.parameters,docs:{...(_=q.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      Pagination
    },
    setup() {
      const current = ref(1);
      const pageSize = ref(20);
      return {
        args,
        current,
        pageSize
      };
    },
    template: \`
      <div>
        <h3 style="margin: 0 0 16px 0; font-size: 14px; font-weight: normal; color: var(--text-secondary);">带快速跳转的分页</h3>
        <Pagination 
          v-bind="args" 
          v-model:current="current" 
          v-model:pageSize="pageSize" 
          show-size-changer 
          show-quick-jumper 
        />
      </div>
    \`
  })
}`,...(ne=(ee=q.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var te,ae,re;B.parameters={...B.parameters,docs:{...(te=B.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      Pagination
    },
    setup() {
      const current = ref(1);
      return {
        args,
        current
      };
    },
    template: \`
      <div>
        <h3 style="margin: 0 0 16px 0; font-size: 14px; font-weight: normal; color: var(--text-secondary);">极简版分页</h3>
        <Pagination 
          v-bind="args" 
          v-model:current="current" 
          theme="simple" 
          show-total 
        />
      </div>
    \`
  })
}`,...(re=(ae=B.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var se,ie,oe;M.parameters={...M.parameters,docs:{...(se=M.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      Pagination
    },
    setup() {
      const current = ref(1);
      return {
        args,
        current
      };
    },
    template: \`
      <div>
        <h3 style="margin: 0 0 16px 0; font-size: 14px; font-weight: normal; color: var(--text-secondary);">禁用状态</h3>
        <Pagination 
          v-bind="args" 
          v-model:current="current" 
          show-total 
          show-size-changer 
          show-quick-jumper 
          disabled 
        />
      </div>
    \`
  })
}`,...(oe=(ie=M.parameters)==null?void 0:ie.docs)==null?void 0:oe.source}}};var le,ue,ce;N.parameters={...N.parameters,docs:{...(le=N.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      Pagination
    },
    setup() {
      const current1 = ref(1);
      const current2 = ref(1);
      return {
        args,
        current1,
        current2
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 40px;">
        <div>
          <h3 style="margin: 0 0 16px 0; font-size: 14px; font-weight: normal; color: var(--text-secondary);">小尺寸带快速跳转的分页</h3>
          <Pagination 
            v-bind="args" 
            v-model:current="current1" 
            size="small"
            show-total 
            show-size-changer 
            show-quick-jumper 
          />
        </div>
        <div>
          <h3 style="margin: 0 0 16px 0; font-size: 14px; font-weight: normal; color: var(--text-secondary);">小尺寸极简版分页</h3>
          <Pagination 
            v-bind="args" 
            v-model:current="current2" 
            size="small"
            theme="simple"
            show-total 
          />
        </div>
      </div>
    \`
  })
}`,...(ce=(ue=N.parameters)==null?void 0:ue.docs)==null?void 0:ce.source}}};const je=["Basic","WithTotal","WithSizeChanger","WithQuickJumper","Simple","Disabled","SmallSize"];export{C as Basic,M as Disabled,B as Simple,N as SmallSize,q as WithQuickJumper,j as WithSizeChanger,V as WithTotal,je as __namedExportsOrder,Ve as default};
