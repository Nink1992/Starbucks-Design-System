import{e as ce,w as ue,C as M,D as V,E as D,T as j,G as me,s as fe,o as c,f as g,l as F,p as K,n as u,j as m,z as ve,g as B,B as pe,k,m as S,t as T,q as U,J as be,r as i,c as b,K as E}from"./vue.esm-bundler-DEFMfx8h.js";import{B as v}from"./Button-CuUkRbmm.js";import{_ as ye}from"./_plugin-vue_export-helper-DlAUqK2U.js";const le=ce({name:"TraeDrawer",__name:"Drawer",props:{visible:{type:Boolean,default:!1},attach:{default:"body"},body:{},header:{type:[String,Boolean],default:!0},footer:{type:Boolean,default:!0},showOverlay:{type:Boolean,default:!0},closeOnOverlayClick:{type:Boolean,default:!0},closeOnEscKeydown:{type:Boolean,default:!0},closeBtn:{type:Boolean,default:!0},destroyOnClose:{type:Boolean,default:!1},placement:{default:"right"},size:{default:"medium"},zIndex:{default:2e3},preventScrollThrough:{type:Boolean,default:!0},cancelBtn:{type:[String,Object,null,Boolean],default:"取消"},confirmBtn:{type:[String,Object,null,Boolean],default:"确认"},onConfirm:{},onCancel:{},onClose:{},onClosed:{},onOpened:{}},emits:["update:visible","cancel","confirm","close","closed","opened"],setup(t,{emit:r}){const a=t,l=r,y=i(null),w=e=>typeof e=="number"?`${e}px`:{small:"300px",medium:"500px",large:"800px"}[e]||e,s=b(()=>{const e=w(a.size),n={zIndex:a.zIndex+1};return a.placement==="left"?(n.width=e,n.left=0,n.top=0):a.placement==="right"?(n.width=e,n.right=0,n.top=0):a.placement==="top"?(n.height=e,n.top=0,n.left=0):a.placement==="bottom"&&(n.height=e,n.bottom=0,n.left=0),n}),_=b(()=>a.placement==="left"),L=b(()=>typeof a.cancelBtn=="string"?a.cancelBtn:typeof a.cancelBtn=="object"&&a.cancelBtn!==null&&a.cancelBtn.default||"取消"),C=b(()=>{const e={theme:"default",variant:"outline",size:"medium"};return typeof a.cancelBtn=="object"&&a.cancelBtn!==null?{...e,...a.cancelBtn}:e}),h=b(()=>typeof a.confirmBtn=="string"?a.confirmBtn:typeof a.confirmBtn=="object"&&a.confirmBtn!==null&&a.confirmBtn.default||"确认"),P=b(()=>{const e={theme:"primary",variant:"base",size:"medium"};return typeof a.confirmBtn=="object"&&a.confirmBtn!==null?{...e,...a.confirmBtn}:e}),d=(e,n)=>{l("update:visible",!1),l("close",{e,trigger:n})},o=e=>{d(e,"close-btn")},ie=e=>{l("cancel",{e}),d(e,"cancel")},oe=e=>{l("confirm",{e}),d(e,"confirm")},R=e=>{a.closeOnOverlayClick&&d(e,"overlay")},se=e=>{a.closeOnEscKeydown&&d(e,"esc")},de=()=>{l("closed")};return ue(()=>a.visible,e=>{e?(fe(()=>{var n;(n=y.value)==null||n.focus(),l("opened")}),a.preventScrollThrough&&typeof document<"u"&&(document.body.style.overflow="hidden")):a.preventScrollThrough&&typeof document<"u"&&(document.body.style.overflow="")},{immediate:!0}),(e,n)=>(c(),M(me,{to:t.attach,disabled:!t.attach},[V(j,{name:e.$style["drawer-fade"]},{default:D(()=>[t.visible?(c(),g("div",{key:0,class:u([e.$style["drawer-wrap"],e.$style[`is-${t.placement}`]]),style:K({zIndex:t.zIndex}),onClick:F(R,["self"])},[t.showOverlay?(c(),g("div",{key:0,class:u(e.$style["drawer-overlay"]),onClick:F(R,["self"])},null,2)):m("",!0)],6)):m("",!0)]),_:1},8,["name"]),V(j,{name:e.$style[`drawer-slide-${t.placement}`],onAfterLeave:de,appear:""},{default:D(()=>[ve(B("div",{class:u([e.$style["drawer-container"],e.$style[`is-${t.placement}`],e.$style["is-fixed"]]),style:K(s.value),role:"dialog","aria-modal":"true",onKeydown:pe(se,["esc"]),tabindex:"0",ref_key:"drawerRef",ref:y},[t.header!==!1?(c(),g("div",{key:0,class:u(e.$style["drawer-header"])},[B("div",{class:u(e.$style["title-content"])},[k(e.$slots,"header",{},()=>[S(T(t.header),1)])],2),t.closeBtn!==!1?(c(),g("div",{key:0,class:u(e.$style["close-btn"]),onClick:o},[k(e.$slots,"closeBtn",{},()=>[n[0]||(n[0]=B("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor"},[B("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})],-1))])],2)):m("",!0)],2)):m("",!0),B("div",{class:u(e.$style["drawer-body"])},[k(e.$slots,"body",{},()=>[k(e.$slots,"default",{},()=>[S(T(t.body),1)])])],2),t.footer!==!1?(c(),g("div",{key:1,class:u([e.$style["drawer-footer"],{[e.$style["is-right-aligned"]]:_.value}])},[k(e.$slots,"footer",{},()=>[t.cancelBtn!==!1&&t.cancelBtn!==null?(c(),M(v,U({key:0},C.value,{onClick:ie}),{default:D(()=>[S(T(L.value),1)]),_:1},16)):m("",!0),t.confirmBtn!==!1&&t.confirmBtn!==null?(c(),M(v,U({key:1},P.value,{onClick:oe}),{default:D(()=>[S(T(h.value),1)]),_:1},16)):m("",!0)])],2)):m("",!0)],38),[[be,t.visible]])]),_:3},8,["name"])],8,["to","disabled"]))}}),we={"drawer-wrap":"_drawer-wrap_oicak_1","is-right":"_is-right_oicak_1","is-left":"_is-left_oicak_1","is-top":"_is-top_oicak_1","is-bottom":"_is-bottom_oicak_1","drawer-overlay":"_drawer-overlay_oicak_1","drawer-container":"_drawer-container_oicak_1","is-fixed":"_is-fixed_oicak_1","drawer-header":"_drawer-header_oicak_1","title-content":"_title-content_oicak_1","close-btn":"_close-btn_oicak_1","drawer-body":"_drawer-body_oicak_1","drawer-footer":"_drawer-footer_oicak_1","is-right-aligned":"_is-right-aligned_oicak_1","drawer-fade-enter-active":"_drawer-fade-enter-active_oicak_1","drawer-fade-leave-active":"_drawer-fade-leave-active_oicak_1","drawer-fade-enter-from":"_drawer-fade-enter-from_oicak_1","drawer-fade-leave-to":"_drawer-fade-leave-to_oicak_1","drawer-slide-right-enter-active":"_drawer-slide-right-enter-active_oicak_1","drawer-slide-right-leave-active":"_drawer-slide-right-leave-active_oicak_1","drawer-slide-right-enter-from":"_drawer-slide-right-enter-from_oicak_1","drawer-slide-right-leave-to":"_drawer-slide-right-leave-to_oicak_1","drawer-slide-left-enter-active":"_drawer-slide-left-enter-active_oicak_1","drawer-slide-left-leave-active":"_drawer-slide-left-leave-active_oicak_1","drawer-slide-left-enter-from":"_drawer-slide-left-enter-from_oicak_1","drawer-slide-left-leave-to":"_drawer-slide-left-leave-to_oicak_1","drawer-slide-top-enter-active":"_drawer-slide-top-enter-active_oicak_1","drawer-slide-top-leave-active":"_drawer-slide-top-leave-active_oicak_1","drawer-slide-top-enter-from":"_drawer-slide-top-enter-from_oicak_1","drawer-slide-top-leave-to":"_drawer-slide-top-leave-to_oicak_1","drawer-slide-bottom-enter-active":"_drawer-slide-bottom-enter-active_oicak_1","drawer-slide-bottom-leave-active":"_drawer-slide-bottom-leave-active_oicak_1","drawer-slide-bottom-enter-from":"_drawer-slide-bottom-enter-from_oicak_1","drawer-slide-bottom-leave-to":"_drawer-slide-bottom-leave-to_oicak_1"},he={$style:we},p=ye(le,[["__cssModules",he]]);le.__docgenInfo={name:"TraeDrawer",exportName:"default",displayName:"Drawer",description:"",tags:{},props:[{name:"visible",description:"控制抽屉显示隐藏",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"attach",description:"抽屉挂载节点，默认 document.body",required:!1,type:{name:"union",elements:[{name:"string"},{name:"HTMLElement"}]},defaultValue:{func:!1,value:"'body'"}},{name:"body",description:"抽屉内容",required:!1,type:{name:"string"}},{name:"header",description:"抽屉标题",required:!1,type:{name:"union",elements:[{name:"string"},{name:"boolean"}]},defaultValue:{func:!1,value:"true"}},{name:"footer",description:"抽屉底部内容",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"showOverlay",description:"是否显示遮罩层",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"closeOnOverlayClick",description:"点击遮罩层是否关闭抽屉",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"closeOnEscKeydown",description:"按下 ESC 键是否关闭抽屉",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"closeBtn",description:"是否显示右上角关闭按钮",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"destroyOnClose",description:"关闭时是否销毁 DOM 节点",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"placement",description:"抽屉弹出方向",required:!1,type:{name:"DrawerPlacement"},defaultValue:{func:!1,value:"'right'"}},{name:"size",description:`抽屉尺寸：控制抽屉展现宽度/高度
small=300px, medium=500px, large=800px (或者传入特定数值)`,required:!1,type:{name:"DrawerSize"},defaultValue:{func:!1,value:"'medium'"}},{name:"zIndex",description:"层级 z-index",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"2000"}},{name:"preventScrollThrough",description:"防止滚动穿透",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"cancelBtn",description:"底部取消按钮配置",required:!1,type:{name:"union",elements:[{name:"string"},{name:"Record",elements:[{name:"string"},{name:"any"}]},{name:"null"},{name:"false"}]},defaultValue:{func:!1,value:"'取消'"}},{name:"confirmBtn",description:"底部确认按钮配置",required:!1,type:{name:"union",elements:[{name:"string"},{name:"Record",elements:[{name:"string"},{name:"any"}]},{name:"null"},{name:"false"}]},defaultValue:{func:!1,value:"'确认'"}},{name:"onConfirm",required:!1,type:{name:"TSFunctionType"}},{name:"onCancel",required:!1,type:{name:"TSFunctionType"}},{name:"onClose",required:!1,type:{name:"TSFunctionType"}},{name:"onClosed",required:!1,type:{name:"TSFunctionType"}},{name:"onOpened",required:!1,type:{name:"TSFunctionType"}}],events:[{name:"update:visible",type:{names:["boolean"]}},{name:"cancel",type:{names:["{ e: Event }"]}},{name:"confirm",type:{names:["{ e: Event }"]}},{name:"close",type:{names:["{ e: Event; trigger: DrawerCloseTrigger }"]}},{name:"closed"},{name:"opened"}],slots:[{name:"header"},{name:"closeBtn"},{name:"body"},{name:"default"},{name:"footer"}],sourceFiles:["/home/runner/work/Starbucks-Design-System/Starbucks-Design-System/Drawer/Drawer.vue"]};let f=null;const ge=t=>{const r=document.createElement("div");document.body.appendChild(r);let a=!1;const l=()=>{a||(a=!0,E(null,r),r.parentNode&&r.parentNode.removeChild(r))},y=()=>{t.destroyOnClose!==!1&&l()},w=h=>{if(a)return;const P={...t,...h,onClose:o=>{t.onClose&&t.onClose(o),s()},onCancel:o=>{t.onCancel?t.onCancel(o):s()},onConfirm:o=>{t.onConfirm?t.onConfirm(o):s()},"onUpdate:visible":o=>{o||s()},onClosed:y},d=V(p,P);d.appContext=(f==null?void 0:f._context)||null,E(d,r)},s=()=>{a||w({visible:!1})},_=()=>{a||w({visible:!0})},L={...t,visible:!1},C=V(p,{...L,"onUpdate:visible":h=>{h||s()},onClosed:y});return C.appContext=(f==null?void 0:f._context)||null,E(C,r),setTimeout(()=>{_()},10),{show:_,hide:s,destroy:l,update:w}},N=t=>ge(t);N.install=t=>{f=t,t.config.globalProperties.$drawer=N};const Be=N,De={title:"消息提醒/抽屉 Drawer",component:p,tags:["autodocs"],argTypes:{visible:{control:"boolean",description:"控制抽屉显示隐藏"},header:{control:"text",description:"抽屉标题"},body:{control:"text",description:"抽屉内容"},placement:{control:"select",options:["left","right","top","bottom"],description:"弹出位置"},size:{control:"select",options:["small","medium","large"],description:"抽屉尺寸"},showOverlay:{control:"boolean",description:"是否显示遮罩层"},closeBtn:{control:"boolean",description:"是否显示关闭按钮"}},parameters:{docs:{description:{component:"抽屉组件，在当前页面从屏幕边缘滑出的面板，用于展示或操作信息。"}}}},x={name:"Basic",render:t=>({components:{Drawer:p,Button:v},setup(){const r=i(!1);return{args:t,visible:r}},template:`
      <div>
        <Button theme="primary" @click="visible = true">打开抽屉</Button>
        <Drawer v-bind="args" v-model:visible="visible" header="这里是标题" body="详情内容区域详情内容区域详情内容区域。" />
      </div>
    `})},O={name:"Placements",render:()=>({components:{Drawer:p,Button:v},setup(){const t=i(!1),r=i(!1),a=i(!1),l=i(!1);return{visibleRight:t,visibleLeft:r,visibleTop:a,visibleBottom:l}},template:`
      <div style="display: flex; gap: 16px; flex-wrap: wrap;">
        <Button theme="default" variant="outline" @click="visibleLeft = true">左侧抽屉</Button>
        <Button theme="default" variant="outline" @click="visibleRight = true">右侧抽屉</Button>
        <Button theme="default" variant="outline" @click="visibleTop = true">上方抽屉</Button>
        <Button theme="default" variant="outline" @click="visibleBottom = true">下方抽屉</Button>

        <Drawer v-model:visible="visibleLeft" placement="left" header="左侧抽屉" body="这里是从左侧弹出的抽屉内容。" />
        <Drawer v-model:visible="visibleRight" placement="right" header="右侧抽屉" body="这里是从右侧弹出的抽屉内容。" />
        <Drawer v-model:visible="visibleTop" placement="top" header="上方抽屉" body="这里是从上方弹出的抽屉内容。" />
        <Drawer v-model:visible="visibleBottom" placement="bottom" header="下方抽屉" body="这里是从下方弹出的抽屉内容。" />
      </div>
    `})},z={name:"NoOverlay",render:()=>({components:{Drawer:p,Button:v},setup(){return{visible:i(!1)}},template:`
      <div>
        <Button theme="default" variant="outline" @click="visible = true">无蒙层抽屉</Button>
        <Drawer v-model:visible="visible" :showOverlay="false" header="不带蒙层抽屉" body="这通常用于不阻断用户查看背后信息的场景。" />
      </div>
    `})},$={name:"Sizes",render:()=>({components:{Drawer:p,Button:v},setup(){const t=i(!1),r=i(!1),a=i(!1);return{visibleSmall:t,visibleMedium:r,visibleLarge:a}},template:`
      <div style="display: flex; gap: 16px;">
        <Button theme="default" variant="outline" @click="visibleSmall = true">小尺寸 (300px)</Button>
        <Button theme="default" variant="outline" @click="visibleMedium = true">中尺寸 (500px)</Button>
        <Button theme="default" variant="outline" @click="visibleLarge = true">大尺寸 (800px)</Button>

        <Drawer v-model:visible="visibleSmall" size="small" header="小尺寸抽屉" body="适合放置较少内容的抽屉。" />
        <Drawer v-model:visible="visibleMedium" size="medium" header="中尺寸抽屉" body="默认标准尺寸的抽屉。" />
        <Drawer v-model:visible="visibleLarge" size="large" header="大尺寸抽屉" body="适合放置复杂表单或大量图文的抽屉。" />
      </div>
    `})},q={name:"PluginUsage",render:()=>({components:{Button:v},setup(){return{showDrawer:()=>{const r=Be({header:"插件调用的抽屉",body:"您可以通过函数调用的方式快速唤起抽屉，无需在模板中挂载节点。",onConfirm:()=>{console.log("确认操作"),r.hide()}})}}},template:`
      <div>
        <Button theme="primary" variant="outline" @click="showDrawer">DrawerPlugin()</Button>
      </div>
    `})};var I,A,G;x.parameters={...x.parameters,docs:{...(I=x.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Basic',
  render: args => ({
    components: {
      Drawer,
      Button
    },
    setup() {
      const visible = ref(false);
      return {
        args,
        visible
      };
    },
    template: \`
      <div>
        <Button theme="primary" @click="visible = true">打开抽屉</Button>
        <Drawer v-bind="args" v-model:visible="visible" header="这里是标题" body="详情内容区域详情内容区域详情内容区域。" />
      </div>
    \`
  })
}`,...(G=(A=x.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};var H,J,Q;O.parameters={...O.parameters,docs:{...(H=O.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Placements',
  render: () => ({
    components: {
      Drawer,
      Button
    },
    setup() {
      const visibleRight = ref(false);
      const visibleLeft = ref(false);
      const visibleTop = ref(false);
      const visibleBottom = ref(false);
      return {
        visibleRight,
        visibleLeft,
        visibleTop,
        visibleBottom
      };
    },
    template: \`
      <div style="display: flex; gap: 16px; flex-wrap: wrap;">
        <Button theme="default" variant="outline" @click="visibleLeft = true">左侧抽屉</Button>
        <Button theme="default" variant="outline" @click="visibleRight = true">右侧抽屉</Button>
        <Button theme="default" variant="outline" @click="visibleTop = true">上方抽屉</Button>
        <Button theme="default" variant="outline" @click="visibleBottom = true">下方抽屉</Button>

        <Drawer v-model:visible="visibleLeft" placement="left" header="左侧抽屉" body="这里是从左侧弹出的抽屉内容。" />
        <Drawer v-model:visible="visibleRight" placement="right" header="右侧抽屉" body="这里是从右侧弹出的抽屉内容。" />
        <Drawer v-model:visible="visibleTop" placement="top" header="上方抽屉" body="这里是从上方弹出的抽屉内容。" />
        <Drawer v-model:visible="visibleBottom" placement="bottom" header="下方抽屉" body="这里是从下方弹出的抽屉内容。" />
      </div>
    \`
  })
}`,...(Q=(J=O.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var W,X,Y;z.parameters={...z.parameters,docs:{...(W=z.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'NoOverlay',
  render: () => ({
    components: {
      Drawer,
      Button
    },
    setup() {
      const visible = ref(false);
      return {
        visible
      };
    },
    template: \`
      <div>
        <Button theme="default" variant="outline" @click="visible = true">无蒙层抽屉</Button>
        <Drawer v-model:visible="visible" :showOverlay="false" header="不带蒙层抽屉" body="这通常用于不阻断用户查看背后信息的场景。" />
      </div>
    \`
  })
}`,...(Y=(X=z.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,te;$.parameters={...$.parameters,docs:{...(Z=$.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => ({
    components: {
      Drawer,
      Button
    },
    setup() {
      const visibleSmall = ref(false);
      const visibleMedium = ref(false);
      const visibleLarge = ref(false);
      return {
        visibleSmall,
        visibleMedium,
        visibleLarge
      };
    },
    template: \`
      <div style="display: flex; gap: 16px;">
        <Button theme="default" variant="outline" @click="visibleSmall = true">小尺寸 (300px)</Button>
        <Button theme="default" variant="outline" @click="visibleMedium = true">中尺寸 (500px)</Button>
        <Button theme="default" variant="outline" @click="visibleLarge = true">大尺寸 (800px)</Button>

        <Drawer v-model:visible="visibleSmall" size="small" header="小尺寸抽屉" body="适合放置较少内容的抽屉。" />
        <Drawer v-model:visible="visibleMedium" size="medium" header="中尺寸抽屉" body="默认标准尺寸的抽屉。" />
        <Drawer v-model:visible="visibleLarge" size="large" header="大尺寸抽屉" body="适合放置复杂表单或大量图文的抽屉。" />
      </div>
    \`
  })
}`,...(te=(ee=$.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ae,ne,re;q.parameters={...q.parameters,docs:{...(ae=q.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: 'PluginUsage',
  render: () => ({
    components: {
      Button
    },
    setup() {
      const showDrawer = () => {
        const instance = DrawerPlugin({
          header: '插件调用的抽屉',
          body: '您可以通过函数调用的方式快速唤起抽屉，无需在模板中挂载节点。',
          onConfirm: () => {
            console.log('确认操作');
            instance.hide();
          }
        });
      };
      return {
        showDrawer
      };
    },
    template: \`
      <div>
        <Button theme="primary" variant="outline" @click="showDrawer">DrawerPlugin()</Button>
      </div>
    \`
  })
}`,...(re=(ne=q.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};const Se=["Basic","Placements","NoOverlay","Sizes","PluginUsage"];export{x as Basic,z as NoOverlay,O as Placements,q as PluginUsage,$ as Sizes,Se as __namedExportsOrder,De as default};
