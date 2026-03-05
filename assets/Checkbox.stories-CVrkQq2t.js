import{d as Z,b as i,e as C,n as c,u as m,f as y,g as H,j as J,k as g,o as u,l as K,t as Q,m as $}from"./vue.esm-bundler-CUvtzpDJ.js";const t={"checkbox-wrapper":"_checkbox-wrapper_6u7dx_2","checkbox-box":"_checkbox-box_6u7dx_13","checkbox-icon":"_checkbox-icon_6u7dx_29","checkbox-dash-icon":"_checkbox-dash-icon_6u7dx_56","is-disabled":"_is-disabled_6u7dx_69","is-checked":"_is-checked_6u7dx_75","is-indeterminate":"_is-indeterminate_6u7dx_86"},R=["aria-checked","aria-disabled"],s=Z({__name:"Checkbox",props:{modelValue:{type:[Boolean,Array]},label:{},value:{type:[String,Number,Boolean]},disabled:{type:Boolean},indeterminate:{type:Boolean}},emits:["update:modelValue","change"],setup(e,{emit:l}){const a=e,d=l,r=g(()=>Array.isArray(a.modelValue)?a.modelValue.includes(a.value):!!a.modelValue),j=()=>{if(a.disabled)return;let n;if(Array.isArray(a.modelValue)){const o=[...a.modelValue];if(r.value){const f=o.indexOf(a.value);f>-1&&o.splice(f,1)}else o.push(a.value);n=o}else n=!a.modelValue;d("update:modelValue",n),d("change",n)},F=g(()=>({[t["checkbox-wrapper"]]:!0,[t["is-checked"]]:r.value,[t["is-indeterminate"]]:a.indeterminate,[t["is-disabled"]]:a.disabled}));return(n,o)=>(u(),i("label",{class:c(F.value),onClick:J(j,["prevent"]),role:"checkbox","aria-checked":e.indeterminate?"mixed":r.value,"aria-disabled":e.disabled},[C("span",{class:c(m(t)["checkbox-box"])},[r.value&&!e.indeterminate?(u(),i("svg",{key:0,class:c(m(t)["checkbox-icon"]),width:"10",height:"8",viewBox:"0 0 10 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[...o[0]||(o[0]=[C("path",{d:"M3.66667 7.5L0.5 4.33333L1.66667 3.16667L3.66667 5.16667L8.33333 0.5L9.5 1.66667L3.66667 7.5Z",fill:"currentColor"},null,-1)])],2)):y("",!0),e.indeterminate?(u(),i("span",{key:1,class:c(m(t)["checkbox-dash-icon"])},null,2)):y("",!0)],2),e.label||n.$slots.default?(u(),i("span",{key:0,class:c(m(t)["checkbox-label"])},[H(n.$slots,"default",{},()=>[K(Q(e.label),1)])],2)):y("",!0)],10,R))}});s.__docgenInfo={exportName:"default",displayName:"Checkbox",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"union",elements:[{name:"boolean"},{name:"Array",elements:[{name:"any"}]}]}},{name:"label",required:!1,type:{name:"string"}},{name:"value",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"},{name:"boolean"}]}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"indeterminate",required:!1,type:{name:"boolean"}}],events:[{name:"update:modelValue",type:{names:["union"],elements:[{name:"boolean"},{name:"Array",elements:[{name:"any"}]}]}},{name:"change",type:{names:["union"],elements:[{name:"boolean"},{name:"Array",elements:[{name:"any"}]}]}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/Starbucks-Design-System/Starbucks-Design-System/Checkbox/Checkbox.vue"]};const W={title:"数据录入/复选框 Checkbox",component:s,tags:["autodocs"],argTypes:{modelValue:{control:"boolean"},label:{control:"text"},disabled:{control:"boolean"},indeterminate:{control:"boolean"}}},p={args:{modelValue:!1,label:"Checkbox"},render:e=>({components:{TraeCheckbox:s},setup(){return{args:e}},template:'<TraeCheckbox v-bind="args" v-model="args.modelValue" />'})},b={args:{modelValue:!0,label:"Checked"},render:e=>({components:{TraeCheckbox:s},setup(){return{args:e}},template:'<TraeCheckbox v-bind="args" v-model="args.modelValue" />'})},h={args:{modelValue:!0,label:"Disabled",disabled:!0}},k={args:{modelValue:!1,label:"Indeterminate",indeterminate:!0}},x={render:()=>({components:{TraeCheckbox:s},setup(){return{checkedList:$(["Apple"])}},template:`
      <div style="display: flex; gap: 16px;">
        <TraeCheckbox v-model="checkedList" value="Apple" label="Apple" />
        <TraeCheckbox v-model="checkedList" value="Pear" label="Pear" />
        <TraeCheckbox v-model="checkedList" value="Orange" label="Orange" />
      </div>
      <div style="margin-top: 10px; color: #666;">
        Selected: {{ checkedList }}
      </div>
    `})},v={render:()=>({components:{TraeCheckbox:s},setup(){const e=["选项一","选项二","选项三","选项四"],l=$(["选项一","选项二"]),a=g({get:()=>l.value.length===e.length,set:r=>{l.value=r?[...e]:[]}}),d=g(()=>l.value.length>0&&l.value.length<e.length);return{options:e,checkedList:l,checkAll:a,isIndeterminate:d}},template:`
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <!-- 全选框 -->
        <div style="padding-bottom: 8px; border-bottom: 1px solid #eee;">
          <TraeCheckbox 
            v-model="checkAll" 
            :indeterminate="isIndeterminate"
            label="全部" 
          />
        </div>
        
        <!-- 子选项列表 -->
        <div style="display: flex; gap: 16px;">
          <TraeCheckbox 
            v-for="item in options" 
            :key="item"
            v-model="checkedList" 
            :value="item" 
            :label="item" 
          />
        </div>
        
        <div style="margin-top: 8px; font-size: 12px; color: #666;">
          选中项: {{ checkedList }}
        </div>
      </div>
    `})};var L,V,T;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    modelValue: false,
    label: 'Checkbox'
  },
  render: args => ({
    components: {
      TraeCheckbox
    },
    setup() {
      return {
        args
      };
    },
    template: '<TraeCheckbox v-bind="args" v-model="args.modelValue" />'
  })
}`,...(T=(V=p.parameters)==null?void 0:V.docs)==null?void 0:T.source}}};var A,_,S;b.parameters={...b.parameters,docs:{...(A=b.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    modelValue: true,
    label: 'Checked'
  },
  render: args => ({
    components: {
      TraeCheckbox
    },
    setup() {
      return {
        args
      };
    },
    template: '<TraeCheckbox v-bind="args" v-model="args.modelValue" />'
  })
}`,...(S=(_=b.parameters)==null?void 0:_.docs)==null?void 0:S.source}}};var w,I,D;h.parameters={...h.parameters,docs:{...(w=h.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    modelValue: true,
    label: 'Disabled',
    disabled: true
  }
}`,...(D=(I=h.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};var B,N,O;k.parameters={...k.parameters,docs:{...(B=k.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    modelValue: false,
    label: 'Indeterminate',
    indeterminate: true
  }
}`,...(O=(N=k.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var q,G,P;x.parameters={...x.parameters,docs:{...(q=x.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => ({
    components: {
      TraeCheckbox
    },
    setup() {
      const checkedList = ref(['Apple']);
      return {
        checkedList
      };
    },
    template: \`
      <div style="display: flex; gap: 16px;">
        <TraeCheckbox v-model="checkedList" value="Apple" label="Apple" />
        <TraeCheckbox v-model="checkedList" value="Pear" label="Pear" />
        <TraeCheckbox v-model="checkedList" value="Orange" label="Orange" />
      </div>
      <div style="margin-top: 10px; color: #666;">
        Selected: {{ checkedList }}
      </div>
    \`
  })
}`,...(P=(G=x.parameters)==null?void 0:G.docs)==null?void 0:P.source}}};var z,E,M;v.parameters={...v.parameters,docs:{...(z=v.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => ({
    components: {
      TraeCheckbox
    },
    setup() {
      const options = ['选项一', '选项二', '选项三', '选项四'];
      const checkedList = ref(['选项一', '选项二']);

      // 全选框的 modelValue
      const checkAll = computed({
        get: () => checkedList.value.length === options.length,
        set: (val: boolean) => {
          checkedList.value = val ? [...options] : [];
        }
      });

      // 全选框的 indeterminate 状态
      const isIndeterminate = computed(() => {
        return checkedList.value.length > 0 && checkedList.value.length < options.length;
      });
      return {
        options,
        checkedList,
        checkAll,
        isIndeterminate
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <!-- 全选框 -->
        <div style="padding-bottom: 8px; border-bottom: 1px solid #eee;">
          <TraeCheckbox 
            v-model="checkAll" 
            :indeterminate="isIndeterminate"
            label="全部" 
          />
        </div>
        
        <!-- 子选项列表 -->
        <div style="display: flex; gap: 16px;">
          <TraeCheckbox 
            v-for="item in options" 
            :key="item"
            v-model="checkedList" 
            :value="item" 
            :label="item" 
          />
        </div>
        
        <div style="margin-top: 8px; font-size: 12px; color: #666;">
          选中项: {{ checkedList }}
        </div>
      </div>
    \`
  })
}`,...(M=(E=v.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};const X=["Default","Checked","Disabled","Indeterminate","CheckboxGroup","IndeterminateGroup"];export{x as CheckboxGroup,b as Checked,p as Default,h as Disabled,k as Indeterminate,v as IndeterminateGroup,X as __namedExportsOrder,W as default};
