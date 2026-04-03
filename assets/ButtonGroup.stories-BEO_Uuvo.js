import{e as L,f as k,k as A,n as w,c as v,L as H,o as B,m as J,t as K,M as Q,u,F as U,y as X,C as Y,N as Z,b as ee,r as o}from"./vue.esm-bundler-DEFMfx8h.js";import{_ as E}from"./_plugin-vue_export-helper-DlAUqK2U.js";const te=["disabled"],P=L({name:"TraeButtonGroupItem",__name:"ButtonGroupItem",props:{label:{},value:{},disabled:{type:Boolean,default:!1}},setup(a){const t=a,e=H("ButtonGroupContext",null),l=v(()=>e?e.modelValue===t.value:!1),r=v(()=>t.disabled||(e==null?void 0:e.disabled)||!1),G=v(()=>(e==null?void 0:e.variant)||"outline"),d=v(()=>(e==null?void 0:e.size)||"medium"),p=()=>{r.value||e&&e.updateValue(t.value)};return(n,m)=>(B(),k("button",{type:"button",class:w([n.$style["button-group-item"],n.$style[`variant-${G.value}`],n.$style[`size-${d.value}`],{[n.$style["is-selected"]]:l.value,[n.$style["is-disabled"]]:r.value}]),disabled:r.value,onClick:p},[A(n.$slots,"default",{},()=>[J(K(a.label),1)])],10,te))}}),ae={"button-group":"_button-group_hekrk_1","variant-primary-filled":"_variant-primary-filled_hekrk_1","button-group-item":"_button-group-item_hekrk_1","is-disabled":"_is-disabled_hekrk_1","size-large":"_size-large_hekrk_1","size-medium":"_size-medium_hekrk_1","size-small":"_size-small_hekrk_1","variant-outline":"_variant-outline_hekrk_1","is-selected":"_is-selected_hekrk_1","variant-default-filled":"_variant-default-filled_hekrk_1"},oe={$style:ae},W=E(P,[["__cssModules",oe]]);P.__docgenInfo={name:"TraeButtonGroupItem",exportName:"default",displayName:"ButtonGroupItem",description:"",tags:{},props:[{name:"label",required:!1,type:{name:"string"}},{name:"value",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"}]}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/Starbucks-Design-System/Starbucks-Design-System/ButtonGroup/ButtonGroupItem.vue"]};const j=L({name:"TraeButtonGroup",__name:"ButtonGroup",props:{modelValue:{default:void 0},options:{default:()=>[]},variant:{default:"outline"},size:{default:"medium"},disabled:{type:Boolean,default:!1}},emits:["update:modelValue","change"],setup(a,{emit:t}){const e=a,l=t,r=s=>{e.disabled||(l("update:modelValue",s),l("change",s))},{modelValue:G,variant:d,size:p,disabled:n,options:m}=Q(e),R=ee({modelValue:G,updateValue:r,variant:d,size:p,disabled:n});return Z("ButtonGroupContext",R),(s,re)=>(B(),k("div",{class:w([s.$style["button-group"],s.$style[`size-${u(p)}`],s.$style[`variant-${u(d)}`]]),role:"group"},[u(m)&&u(m).length>0?(B(!0),k(U,{key:0},X(u(m),c=>(B(),Y(W,{key:c.value,value:c.value,label:c.label,disabled:c.disabled},null,8,["value","label","disabled"]))),128)):A(s.$slots,"default",{key:1})],2))}}),le={"button-group":"_button-group_hekrk_1","variant-primary-filled":"_variant-primary-filled_hekrk_1","button-group-item":"_button-group-item_hekrk_1","is-disabled":"_is-disabled_hekrk_1","size-large":"_size-large_hekrk_1","size-medium":"_size-medium_hekrk_1","size-small":"_size-small_hekrk_1","variant-outline":"_variant-outline_hekrk_1","is-selected":"_is-selected_hekrk_1","variant-default-filled":"_variant-default-filled_hekrk_1"},ne={$style:le},i=E(j,[["__cssModules",ne]]);j.__docgenInfo={name:"TraeButtonGroup",exportName:"default",displayName:"ButtonGroup",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"}]},defaultValue:{func:!1,value:"undefined"}},{name:"options",required:!1,type:{name:"Array",elements:[{name:"ButtonGroupOption"}]},defaultValue:{func:!1,value:"() => []"}},{name:"variant",required:!1,type:{name:"ButtonGroupVariant"},defaultValue:{func:!1,value:"'outline'"}},{name:"size",required:!1,type:{name:"ButtonGroupSize"},defaultValue:{func:!1,value:"'medium'"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue",type:{names:["union"],elements:[{name:"string"},{name:"number"}]}},{name:"change",type:{names:["union"],elements:[{name:"string"},{name:"number"}]}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/Starbucks-Design-System/Starbucks-Design-System/ButtonGroup/ButtonGroup.vue"]};const ue={title:"数据录入/按钮组 ButtonGroup",component:i,tags:["autodocs"],parameters:{docs:{description:{component:'<span style="font-size: 14px; color: #666;">ButtonGroup 组件用于展示一组互斥选项，支持不同的视觉层级。</span>'}}},argTypes:{variant:{control:"select",options:["outline","primary-filled","default-filled"],description:"按钮组类型"},size:{control:"select",options:["large","medium","small"],description:"尺寸"},disabled:{control:"boolean",description:"是否禁用"},modelValue:{control:"text",description:"当前选中的值"}},args:{options:[{label:"Option 1",value:1},{label:"Option 2",value:2},{label:"Option 3",value:3}],variant:"outline",size:"medium"}},f={render:a=>({components:{TraeButtonGroup:i},setup(){const t=o(1);return{args:a,selected:t}},template:`
      <div>
        <TraeButtonGroup v-bind="args" v-model="selected" />
        <div style="margin-top: 10px; color: #666; font-size: 14px;">Selected Value: {{ selected }}</div>
      </div>
    `})},b={render:a=>({components:{TraeButtonGroup:i},setup(){const t=o(1),e=o(1),l=o(1);return{outlineVal:t,primaryFilledVal:e,defaultFilledVal:l,options:[{label:"Option 1",value:1},{label:"Option 2",value:2},{label:"Option 3",value:3}]}},template:`
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div>
          <h4 style="margin-bottom: 12px;">Outline (描边型)</h4>
          <TraeButtonGroup variant="outline" :options="options" v-model="outlineVal" />
        </div>
        <div>
          <h4 style="margin-bottom: 12px;">Primary Filled (品牌填充)</h4>
          <TraeButtonGroup variant="primary-filled" :options="options" v-model="primaryFilledVal" />
        </div>
        <div>
          <h4 style="margin-bottom: 12px;">Default Filled (默认填充)</h4>
          <TraeButtonGroup variant="default-filled" :options="options" v-model="defaultFilledVal" />
        </div>
      </div>
    `})},y={render:a=>({components:{TraeButtonGroup:i},setup(){const t=o(1),e=o(1),l=o(1);return{val1:t,val2:e,val3:l,options:[{label:"Small",value:1},{label:"Medium",value:2},{label:"Large",value:3}]}},template:`
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <TraeButtonGroup size="small" :options="options" v-model="val1" />
        <TraeButtonGroup size="medium" :options="options" v-model="val2" />
        <TraeButtonGroup size="large" :options="options" v-model="val3" />
      </div>
    `})},_={render:a=>({components:{TraeButtonGroup:i,TraeButtonGroupItem:W},setup(){return{selected:o("b")}},template:`
      <div>
        <TraeButtonGroup v-model="selected" variant="outline">
          <TraeButtonGroupItem value="a">Apple</TraeButtonGroupItem>
          <TraeButtonGroupItem value="b">Banana</TraeButtonGroupItem>
          <TraeButtonGroupItem value="c" disabled>Cherry (Disabled)</TraeButtonGroupItem>
        </TraeButtonGroup>
        <div style="margin-top: 10px; color: #666; font-size: 14px;">Selected Value: {{ selected }}</div>
      </div>
    `})},g={render:a=>({components:{TraeButtonGroup:i},setup(){return{val:o(1),options:[{label:"Option 1",value:1},{label:"Option 2",value:2},{label:"Option 3",value:3}]}},template:`
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <TraeButtonGroup disabled :options="options" v-model="val" />
      </div>
    `})};var h,T,V;f.parameters={...f.parameters,docs:{...(h=f.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => ({
    components: {
      TraeButtonGroup
    },
    setup() {
      const selected = ref(1);
      return {
        args,
        selected
      };
    },
    template: \`
      <div>
        <TraeButtonGroup v-bind="args" v-model="selected" />
        <div style="margin-top: 10px; color: #666; font-size: 14px;">Selected Value: {{ selected }}</div>
      </div>
    \`
  })
}`,...(V=(T=f.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};var z,x,S;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => ({
    components: {
      TraeButtonGroup
    },
    setup() {
      const outlineVal = ref(1);
      const primaryFilledVal = ref(1);
      const defaultFilledVal = ref(1);
      const options = [{
        label: 'Option 1',
        value: 1
      }, {
        label: 'Option 2',
        value: 2
      }, {
        label: 'Option 3',
        value: 3
      }];
      return {
        outlineVal,
        primaryFilledVal,
        defaultFilledVal,
        options
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div>
          <h4 style="margin-bottom: 12px;">Outline (描边型)</h4>
          <TraeButtonGroup variant="outline" :options="options" v-model="outlineVal" />
        </div>
        <div>
          <h4 style="margin-bottom: 12px;">Primary Filled (品牌填充)</h4>
          <TraeButtonGroup variant="primary-filled" :options="options" v-model="primaryFilledVal" />
        </div>
        <div>
          <h4 style="margin-bottom: 12px;">Default Filled (默认填充)</h4>
          <TraeButtonGroup variant="default-filled" :options="options" v-model="defaultFilledVal" />
        </div>
      </div>
    \`
  })
}`,...(S=(x=b.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var I,O,$;y.parameters={...y.parameters,docs:{...(I=y.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => ({
    components: {
      TraeButtonGroup
    },
    setup() {
      const val1 = ref(1);
      const val2 = ref(1);
      const val3 = ref(1);
      const options = [{
        label: 'Small',
        value: 1
      }, {
        label: 'Medium',
        value: 2
      }, {
        label: 'Large',
        value: 3
      }];
      return {
        val1,
        val2,
        val3,
        options
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <TraeButtonGroup size="small" :options="options" v-model="val1" />
        <TraeButtonGroup size="medium" :options="options" v-model="val2" />
        <TraeButtonGroup size="large" :options="options" v-model="val3" />
      </div>
    \`
  })
}`,...($=(O=y.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};var F,D,q;_.parameters={..._.parameters,docs:{...(F=_.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => ({
    components: {
      TraeButtonGroup,
      TraeButtonGroupItem
    },
    setup() {
      const selected = ref('b');
      return {
        selected
      };
    },
    template: \`
      <div>
        <TraeButtonGroup v-model="selected" variant="outline">
          <TraeButtonGroupItem value="a">Apple</TraeButtonGroupItem>
          <TraeButtonGroupItem value="b">Banana</TraeButtonGroupItem>
          <TraeButtonGroupItem value="c" disabled>Cherry (Disabled)</TraeButtonGroupItem>
        </TraeButtonGroup>
        <div style="margin-top: 10px; color: #666; font-size: 14px;">Selected Value: {{ selected }}</div>
      </div>
    \`
  })
}`,...(q=(D=_.parameters)==null?void 0:D.docs)==null?void 0:q.source}}};var M,N,C;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: args => ({
    components: {
      TraeButtonGroup
    },
    setup() {
      const val = ref(1);
      const options = [{
        label: 'Option 1',
        value: 1
      }, {
        label: 'Option 2',
        value: 2
      }, {
        label: 'Option 3',
        value: 3
      }];
      return {
        val,
        options
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <TraeButtonGroup disabled :options="options" v-model="val" />
      </div>
    \`
  })
}`,...(C=(N=g.parameters)==null?void 0:N.docs)==null?void 0:C.source}}};const de=["Basic","Variants","Sizes","WithSlot","Status"];export{f as Basic,y as Sizes,g as Status,b as Variants,_ as WithSlot,de as __namedExportsOrder,ue as default};
