import{d as C,b as k,g as L,n as w,k as v,y as H,o as g,l as J,t as K,z as Q,u,F as U,A as X,s as Y,B as Z,r as ee,m as o}from"./vue.esm-bundler-DsV38QMi.js";import{_ as E}from"./_plugin-vue_export-helper-DlAUqK2U.js";const te=["disabled"],P=C({name:"TraeButtonGroupItem",__name:"ButtonGroupItem",props:{label:{},value:{},disabled:{type:Boolean,default:!1}},setup(t){const a=t,e=H("ButtonGroupContext",null),r=v(()=>e?e.modelValue===a.value:!1),i=v(()=>a.disabled||(e==null?void 0:e.disabled)||!1),G=v(()=>(e==null?void 0:e.variant)||"outline"),d=v(()=>(e==null?void 0:e.size)||"medium"),p=()=>{i.value||e&&e.updateValue(a.value)};return(l,m)=>(g(),k("button",{type:"button",class:w([l.$style["button-group-item"],l.$style[`variant-${G.value}`],l.$style[`size-${d.value}`],{[l.$style["is-selected"]]:r.value,[l.$style["is-disabled"]]:i.value}]),disabled:i.value,onClick:p},[L(l.$slots,"default",{},()=>[J(K(t.label),1)])],10,te))}}),ae={"button-group":"_button-group_hekrk_1","variant-primary-filled":"_variant-primary-filled_hekrk_1","button-group-item":"_button-group-item_hekrk_1","is-disabled":"_is-disabled_hekrk_1","size-large":"_size-large_hekrk_1","size-medium":"_size-medium_hekrk_1","size-small":"_size-small_hekrk_1","variant-outline":"_variant-outline_hekrk_1","is-selected":"_is-selected_hekrk_1","variant-default-filled":"_variant-default-filled_hekrk_1"},oe={$style:ae},W=E(P,[["__cssModules",oe]]);P.__docgenInfo={name:"TraeButtonGroupItem",exportName:"default",displayName:"ButtonGroupItem",description:"",tags:{},props:[{name:"label",required:!1,type:{name:"string"}},{name:"value",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"}]}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/Starbucks-Design-System/Starbucks-Design-System/ButtonGroup/ButtonGroupItem.vue"]};const j=C({name:"TraeButtonGroup",__name:"ButtonGroup",props:{modelValue:{default:void 0},options:{default:()=>[]},variant:{default:"outline"},size:{default:"medium"},disabled:{type:Boolean,default:!1}},emits:["update:modelValue","change"],setup(t,{emit:a}){const e=t,r=a,i=n=>{e.disabled||(r("update:modelValue",n),r("change",n))},{modelValue:G,variant:d,size:p,disabled:l,options:m}=Q(e),R=ee({modelValue:G,updateValue:i,variant:d,size:p,disabled:l});return Z("ButtonGroupContext",R),(n,re)=>(g(),k("div",{class:w([n.$style["button-group"],n.$style[`size-${u(p)}`],n.$style[`variant-${u(d)}`]]),role:"group"},[u(m)&&u(m).length>0?(g(!0),k(U,{key:0},X(u(m),c=>(g(),Y(W,{key:c.value,value:c.value,label:c.label,disabled:c.disabled},null,8,["value","label","disabled"]))),128)):L(n.$slots,"default",{key:1})],2))}}),le={"button-group":"_button-group_hekrk_1","variant-primary-filled":"_variant-primary-filled_hekrk_1","button-group-item":"_button-group-item_hekrk_1","is-disabled":"_is-disabled_hekrk_1","size-large":"_size-large_hekrk_1","size-medium":"_size-medium_hekrk_1","size-small":"_size-small_hekrk_1","variant-outline":"_variant-outline_hekrk_1","is-selected":"_is-selected_hekrk_1","variant-default-filled":"_variant-default-filled_hekrk_1"},ne={$style:le},s=E(j,[["__cssModules",ne]]);j.__docgenInfo={name:"TraeButtonGroup",exportName:"default",displayName:"ButtonGroup",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"}]},defaultValue:{func:!1,value:"undefined"}},{name:"options",required:!1,type:{name:"Array",elements:[{name:"ButtonGroupOption"}]},defaultValue:{func:!1,value:"() => []"}},{name:"variant",required:!1,type:{name:"ButtonGroupVariant"},defaultValue:{func:!1,value:"'outline'"}},{name:"size",required:!1,type:{name:"ButtonGroupSize"},defaultValue:{func:!1,value:"'medium'"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue",type:{names:["union"],elements:[{name:"string"},{name:"number"}]}},{name:"change",type:{names:["union"],elements:[{name:"string"},{name:"number"}]}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/Starbucks-Design-System/Starbucks-Design-System/ButtonGroup/ButtonGroup.vue"]};const ue={title:"数据录入/按钮组 ButtonGroup",component:s,tags:["autodocs"],parameters:{docs:{description:{component:'<span style="font-size: 14px; color: #666;">ButtonGroup 组件用于展示一组互斥选项，支持不同的视觉层级。</span>'}}},argTypes:{variant:{control:"select",options:["outline","primary-filled","default-filled"],description:"按钮组类型"},size:{control:"select",options:["large","medium","small"],description:"尺寸"},disabled:{control:"boolean",description:"是否禁用"},modelValue:{control:"text",description:"当前选中的值"}},args:{options:[{label:"Option 1",value:1},{label:"Option 2",value:2},{label:"Option 3",value:3}],variant:"outline",size:"medium"}},f={render:t=>({components:{TraeButtonGroup:s},setup(){const a=o(1);return{args:t,selected:a}},template:`
      <div>
        <TraeButtonGroup v-bind="args" v-model="selected" />
        <div style="margin-top: 10px; color: #666; font-size: 14px;">Selected Value: {{ selected }}</div>
      </div>
    `})},b={render:()=>({components:{TraeButtonGroup:s},setup(){const t=o(1),a=o(1),e=o(1);return{outlineVal:t,primaryFilledVal:a,defaultFilledVal:e,options:[{label:"Option 1",value:1},{label:"Option 2",value:2},{label:"Option 3",value:3}]}},template:`
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
    `})},y={render:()=>({components:{TraeButtonGroup:s},setup(){const t=o(1),a=o(1),e=o(1);return{val1:t,val2:a,val3:e,options:[{label:"Small",value:1},{label:"Medium",value:2},{label:"Large",value:3}]}},template:`
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <TraeButtonGroup size="small" :options="options" v-model="val1" />
        <TraeButtonGroup size="medium" :options="options" v-model="val2" />
        <TraeButtonGroup size="large" :options="options" v-model="val3" />
      </div>
    `})},_={render:()=>({components:{TraeButtonGroup:s,TraeButtonGroupItem:W},setup(){return{selected:o("b")}},template:`
      <div>
        <TraeButtonGroup v-model="selected" variant="outline">
          <TraeButtonGroupItem value="a">Apple</TraeButtonGroupItem>
          <TraeButtonGroupItem value="b">Banana</TraeButtonGroupItem>
          <TraeButtonGroupItem value="c" disabled>Cherry (Disabled)</TraeButtonGroupItem>
        </TraeButtonGroup>
        <div style="margin-top: 10px; color: #666; font-size: 14px;">Selected Value: {{ selected }}</div>
      </div>
    `})},B={render:()=>({components:{TraeButtonGroup:s},setup(){return{val:o(1),options:[{label:"Option 1",value:1},{label:"Option 2",value:2},{label:"Option 3",value:3}]}},template:`
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
  render: () => ({
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
  render: () => ({
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
  render: () => ({
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
}`,...(q=(D=_.parameters)==null?void 0:D.docs)==null?void 0:q.source}}};var M,N,A;B.parameters={...B.parameters,docs:{...(M=B.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => ({
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
}`,...(A=(N=B.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};const de=["Basic","Variants","Sizes","WithSlot","Disabled"];export{f as Basic,B as Disabled,y as Sizes,b as Variants,_ as WithSlot,de as __namedExportsOrder,ue as default};
