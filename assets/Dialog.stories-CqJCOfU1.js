import{e as te,w as oe,C as E,D as V,E as $,T as N,G as ae,s as ie,o,f as i,l as W,p as j,n as c,j as r,z as re,g as f,B as se,k as B,m as q,t as C,q as L,J as de,r as h,c as g,K as I}from"./vue.esm-bundler-DEFMfx8h.js";import{B as w}from"./Button-CuUkRbmm.js";import{_ as ce}from"./_plugin-vue_export-helper-DlAUqK2U.js";const ue={key:0,width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor"},fe={key:1,width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor"},me={key:2,width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor"},ve={key:3,width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor"},ge={key:0},he={key:1,width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor"},Z=te({name:"TraeDialog",__name:"Dialog",props:{visible:{type:Boolean,default:!1},attach:{default:"body"},body:{},cancelBtn:{type:[String,Object,null,Boolean],default:"取消"},closeBtn:{type:[Boolean,String],default:!0},closeOnEscKeydown:{type:Boolean,default:!0},closeOnOverlayClick:{type:Boolean,default:!0},confirmBtn:{type:[String,Object,null,Boolean],default:"确认"},destroyOnClose:{type:Boolean,default:!1},footer:{type:Boolean,default:!0},header:{type:[String,Boolean],default:!0},mode:{default:"modal"},placement:{default:"top"},preventScrollThrough:{type:Boolean,default:!0},showOverlay:{type:Boolean,default:!0},theme:{default:"default"},top:{},width:{},zIndex:{default:2500},id:{},onConfirm:{},onCancel:{},onClose:{},onClosed:{},onOpened:{}},emits:["update:visible","cancel","confirm","close","closed","opened"],setup(e,{emit:a}){const l=e,s=a,p=h(null),y=g(()=>{if(l.width)return typeof l.width=="number"?`${l.width}px`:l.width}),u=g(()=>{if(!(l.placement!=="top"||!l.top))return typeof l.top=="number"?`${l.top}px`:l.top}),S=g(()=>typeof l.cancelBtn=="string"?l.cancelBtn:typeof l.cancelBtn=="object"&&l.cancelBtn!==null&&l.cancelBtn.default||"取消"),P=g(()=>{const n={theme:"default",variant:"outline",size:"medium"};return typeof l.cancelBtn=="object"&&l.cancelBtn!==null?{...n,...l.cancelBtn}:n}),T=g(()=>typeof l.confirmBtn=="string"?l.confirmBtn:typeof l.confirmBtn=="object"&&l.confirmBtn!==null&&l.confirmBtn.default||"确认"),b=g(()=>{const n={theme:"primary",variant:"base",size:"medium"};return typeof l.confirmBtn=="object"&&l.confirmBtn!==null?{...n,...l.confirmBtn}:n}),m=(n,t)=>{s("update:visible",!1),s("close",{e:n,trigger:t})},_=n=>{m(n,"close-btn")},d=n=>{s("cancel",{e:n}),m(n,"cancel")},ee=n=>{s("confirm",{e:n}),m(n,"confirm")},A=n=>{l.closeOnOverlayClick&&m(n,"overlay")},ne=n=>{l.closeOnEscKeydown&&m(n,"esc")},le=()=>{s("closed")};return oe(()=>l.visible,n=>{n?(ie(()=>{var t;(t=p.value)==null||t.focus(),s("opened")}),l.preventScrollThrough&&typeof document<"u"&&(document.body.style.overflow="hidden")):l.preventScrollThrough&&typeof document<"u"&&(document.body.style.overflow="")},{immediate:!0}),(n,t)=>(o(),E(ae,{to:e.attach,disabled:!e.attach},[V(N,{name:n.$style["dialog-fade"]},{default:$(()=>[e.visible?(o(),i("div",{key:0,class:c([n.$style["dialog-wrap"],n.$style[`is-${e.placement}`]]),style:j({zIndex:e.zIndex}),onClick:W(A,["self"])},[e.showOverlay?(o(),i("div",{key:0,class:c(n.$style["dialog-overlay"]),onClick:W(A,["self"])},null,2)):r("",!0)],6)):r("",!0)]),_:1},8,["name"]),V(N,{name:n.$style[`dialog-scale-${e.placement}`],onAfterLeave:le,appear:""},{default:$(()=>[re(f("div",{class:c([n.$style["dialog-container"],{[n.$style["is-fullscreen"]]:e.mode==="full-screen"},n.$style["is-fixed"],n.$style[`is-${e.placement}`]]),style:j({width:y.value,top:u.value,zIndex:e.zIndex+1}),role:"dialog","aria-modal":"true",onKeydown:se(ne,["esc"]),tabindex:"0",ref_key:"dialogRef",ref:p},[e.header!==!1?(o(),i("div",{key:0,class:c([n.$style["dialog-header"],{[n.$style["has-bg"]]:e.theme==="default"}])},[e.theme!=="default"?(o(),i("span",{key:0,class:c([n.$style["header-icon"],n.$style[`theme-${e.theme}`]])},[e.theme==="info"?(o(),i("svg",ue,[...t[0]||(t[0]=[f("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"},null,-1)])])):r("",!0),e.theme==="success"?(o(),i("svg",fe,[...t[1]||(t[1]=[f("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"},null,-1)])])):r("",!0),e.theme==="warning"?(o(),i("svg",me,[...t[2]||(t[2]=[f("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"},null,-1)])])):r("",!0),e.theme==="danger"?(o(),i("svg",ve,[...t[3]||(t[3]=[f("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"},null,-1)])])):r("",!0)],2)):r("",!0),f("div",{class:c(n.$style["title-content"])},[B(n.$slots,"header",{},()=>[q(C(e.header),1)])],2),e.closeBtn!==!1?(o(),i("div",{key:1,class:c(n.$style["close-btn"]),onClick:_},[B(n.$slots,"closeBtn",{},()=>[typeof e.closeBtn=="string"?(o(),i("span",ge,C(e.closeBtn),1)):(o(),i("svg",he,[...t[4]||(t[4]=[f("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"},null,-1)])]))])],2)):r("",!0)],2)):r("",!0),f("div",{class:c(n.$style["dialog-body"])},[B(n.$slots,"body",{},()=>[B(n.$slots,"default",{},()=>[q(C(e.body),1)])])],2),e.footer!==!1?(o(),i("div",{key:1,class:c([n.$style["dialog-footer"],{[n.$style["has-bg"]]:e.theme==="default"}])},[B(n.$slots,"footer",{},()=>[e.cancelBtn!==!1&&e.cancelBtn!==null?(o(),E(w,L({key:0},P.value,{onClick:d}),{default:$(()=>[q(C(S.value),1)]),_:1},16)):r("",!0),e.confirmBtn!==!1&&e.confirmBtn!==null?(o(),E(w,L({key:1},b.value,{onClick:ee}),{default:$(()=>[q(C(T.value),1)]),_:1},16)):r("",!0)])],2)):r("",!0)],38),[[de,e.visible]])]),_:3},8,["name"])],8,["to","disabled"]))}}),pe={"dialog-wrap":"_dialog-wrap_7ld2f_1","is-top":"_is-top_7ld2f_1","is-center":"_is-center_7ld2f_1","dialog-overlay":"_dialog-overlay_7ld2f_1","dialog-container":"_dialog-container_7ld2f_1","is-fullscreen":"_is-fullscreen_7ld2f_1","is-fixed":"_is-fixed_7ld2f_1","dialog-header":"_dialog-header_7ld2f_1","has-bg":"_has-bg_7ld2f_1","header-icon":"_header-icon_7ld2f_1","theme-info":"_theme-info_7ld2f_1","theme-success":"_theme-success_7ld2f_1","theme-warning":"_theme-warning_7ld2f_1","theme-danger":"_theme-danger_7ld2f_1","title-content":"_title-content_7ld2f_1","close-btn":"_close-btn_7ld2f_1","dialog-body":"_dialog-body_7ld2f_1","dialog-footer":"_dialog-footer_7ld2f_1","dialog-fade-enter-active":"_dialog-fade-enter-active_7ld2f_1","dialog-fade-leave-active":"_dialog-fade-leave-active_7ld2f_1","dialog-fade-enter-from":"_dialog-fade-enter-from_7ld2f_1","dialog-fade-leave-to":"_dialog-fade-leave-to_7ld2f_1","dialog-scale-center-enter-active":"_dialog-scale-center-enter-active_7ld2f_1","dialog-scale-center-leave-active":"_dialog-scale-center-leave-active_7ld2f_1","dialog-scale-center-enter-from":"_dialog-scale-center-enter-from_7ld2f_1","dialog-scale-center-leave-to":"_dialog-scale-center-leave-to_7ld2f_1","dialog-scale-top-enter-active":"_dialog-scale-top-enter-active_7ld2f_1","dialog-scale-top-leave-active":"_dialog-scale-top-leave-active_7ld2f_1","dialog-scale-top-enter-from":"_dialog-scale-top-enter-from_7ld2f_1","dialog-scale-top-leave-to":"_dialog-scale-top-leave-to_7ld2f_1"},ye={$style:pe},D=ce(Z,[["__cssModules",ye]]);Z.__docgenInfo={name:"TraeDialog",exportName:"default",displayName:"Dialog",description:"",tags:{},props:[{name:"visible",description:"是否显示对话框（支持 v-model）",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"attach",description:"对话框挂载的节点，默认挂载到 body",required:!1,type:{name:"union",elements:[{name:"string"},{name:"HTMLElement"}]},defaultValue:{func:!1,value:"'body'"}},{name:"body",description:"对话框内容",required:!1,type:{name:"string"}},{name:"cancelBtn",description:"取消按钮，可配置为文字或按钮属性，设为 null 或 false 则不显示",required:!1,type:{name:"union",elements:[{name:"string"},{name:"ButtonProps"},{name:"null"},{name:"false"}]},defaultValue:{func:!1,value:"'取消'"}},{name:"closeBtn",description:"是否显示右上角关闭按钮，可自定义文字",required:!1,type:{name:"union",elements:[{name:"boolean"},{name:"string"}]},defaultValue:{func:!1,value:"true"}},{name:"closeOnEscKeydown",description:"按下 ESC 键时是否关闭对话框",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"closeOnOverlayClick",description:"点击遮罩层时是否关闭对话框",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"confirmBtn",description:"确认按钮，可配置为文字或按钮属性，设为 null 或 false 则不显示",required:!1,type:{name:"union",elements:[{name:"string"},{name:"ButtonProps"},{name:"null"},{name:"false"}]},defaultValue:{func:!1,value:"'确认'"}},{name:"destroyOnClose",description:"关闭对话框时是否销毁 DOM 节点",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"footer",description:"对话框底部内容，设为 false 则不显示底部",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"header",description:"对话框标题",required:!1,type:{name:"union",elements:[{name:"string"},{name:"boolean"}]},defaultValue:{func:!1,value:"true"}},{name:"mode",description:"模态、非模态或全屏对话框",required:!1,type:{name:"DialogMode"},defaultValue:{func:!1,value:"'modal'"}},{name:"placement",description:"垂直弹出位置",required:!1,type:{name:"DialogPlacement"},defaultValue:{func:!1,value:"'top'"}},{name:"preventScrollThrough",description:"防止滚动穿透",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"showOverlay",description:"是否显示遮罩层",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"theme",description:"对话框主题",required:!1,type:{name:"DialogTheme"},defaultValue:{func:!1,value:"'default'"}},{name:"top",description:"自定义距离顶部的位置，仅在 placement=top 时有效",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"}]}},{name:"width",description:"对话框宽度",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"}]}},{name:"zIndex",description:"z-index 层级",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"2500"}},{name:"id",description:"唯一标识",required:!1,type:{name:"string"}},{name:"onConfirm",description:"点击确认回调",required:!1,type:{name:"TSFunctionType"}},{name:"onCancel",description:"点击取消回调",required:!1,type:{name:"TSFunctionType"}},{name:"onClose",description:"关闭回调",required:!1,type:{name:"TSFunctionType"}},{name:"onClosed",description:"完全关闭后回调",required:!1,type:{name:"TSFunctionType"}},{name:"onOpened",description:"完全打开后回调",required:!1,type:{name:"TSFunctionType"}}],events:[{name:"update:visible",type:{names:["boolean"]}},{name:"cancel",type:{names:["{ e: Event }"]}},{name:"confirm",type:{names:["{ e: Event }"]}},{name:"close",type:{names:["{ e: Event; trigger: DialogCloseTrigger }"]}},{name:"closed"},{name:"opened"}],slots:[{name:"header"},{name:"closeBtn"},{name:"body"},{name:"default"},{name:"footer"}],sourceFiles:["/home/runner/work/Starbucks-Design-System/Starbucks-Design-System/Dialog/Dialog.vue"]};let v=null;const M=e=>{const a=document.createElement("div");document.body.appendChild(a);let l=!1;const s=()=>{l||(l=!0,I(null,a),a.parentNode&&a.parentNode.removeChild(a))},p=()=>{e.destroyOnClose!==!1&&s()},y=b=>{if(l)return;const m={...e,...b,onClose:d=>{e.onClose&&e.onClose(d),u()},onCancel:d=>{e.onCancel?e.onCancel(d):u()},onConfirm:d=>{e.onConfirm?e.onConfirm(d):u()},"onUpdate:visible":d=>{d||u()},onClosed:p},_=V(D,m);_.appContext=(v==null?void 0:v._context)||null,I(_,a)},u=()=>{l||y({visible:!1})},S=()=>{l||y({visible:!0})},P={...e,visible:!1},T=V(D,{...P,"onUpdate:visible":b=>{b||u()},onClosed:p});return T.appContext=(v==null?void 0:v._context)||null,I(T,a),setTimeout(()=>{S()},10),{show:S,hide:u,destroy:s,update:y}},k=e=>M(e);k.confirm=e=>M({...e,theme:"default"});k.alert=e=>M({cancelBtn:null,...e,theme:"info"});k.install=e=>{v=e,e.config.globalProperties.$dialog=k};const F=k,we={title:"消息提醒/对话框 Dialog",component:D,tags:["autodocs"],argTypes:{visible:{control:"boolean",description:"控制对话框显示隐藏"},header:{control:"text",description:"对话框标题"},body:{control:"text",description:"对话框内容"},theme:{control:"select",options:["default","info","warning","danger","success"],description:"对话框主题"},placement:{control:"select",options:["top","center"],description:"弹出位置"},mode:{control:"select",options:["modal","modeless","full-screen"],description:"模式：模态、非模态或全屏"},width:{control:"text",description:"对话框宽度，默认 480px"},closeBtn:{control:"boolean",description:"是否显示关闭按钮"}},parameters:{docs:{description:{component:"对话框组件，用于全局展示重要通知及操作反馈。支持函数式和插件式调用。"}}}},z={name:"Basic",render:e=>({components:{Dialog:D,Button:w},setup(){const a=h(!1);return{args:e,visible:a}},template:`
      <div>
        <Button theme="primary" @click="visible = true">打开对话框</Button>
        <Dialog v-bind="args" v-model:visible="visible" header="这里是标题" body="详情内容区域详情内容区域详情内容区域。" />
      </div>
    `})},O={name:"Themes",render:()=>({components:{Dialog:D,Button:w},setup(){const e=h(!1),a=h(!1),l=h(!1),s=h(!1);return{visibleInfo:e,visibleSuccess:a,visibleWarning:l,visibleDanger:s}},template:`
      <div style="display: flex; gap: 16px; flex-wrap: wrap;">
        <Button theme="default" variant="outline" @click="visibleInfo = true" style="color: var(--information5-color-normal); border-color: var(--information5-color-normal);">信息 Dialog</Button>
        <Button theme="default" variant="outline" @click="visibleSuccess = true" style="color: var(--success5-color-normal); border-color: var(--success5-color-normal);">成功 Dialog</Button>
        <Button theme="default" variant="outline" @click="visibleWarning = true" style="color: var(--warning5-color-normal); border-color: var(--warning5-color-normal);">警示 Dialog</Button>
        <Button theme="default" variant="outline" @click="visibleDanger = true" style="color: var(--error5-color-normal); border-color: var(--error5-color-normal);">错误 Dialog</Button>

        <Dialog v-model:visible="visibleInfo" theme="info" header="系统提示" body="这是一个信息提示对话框。" />
        <Dialog v-model:visible="visibleSuccess" theme="success" header="操作成功" body="您的操作已顺利完成。" />
        <Dialog v-model:visible="visibleWarning" theme="warning" header="警示操作" body="这可能会带来一些不确定的后果。" />
        <Dialog v-model:visible="visibleDanger" theme="danger" header="危险操作" body="您正在执行不可逆的删除操作！" :confirmBtn="{ theme: 'danger', variant: 'base', default: '确认删除' }" />
      </div>
    `})},x={name:"PluginUsage",render:()=>({components:{Button:w},setup(){return{showConfirm:()=>{const l=F.confirm({header:"确认提交",body:"您确认要提交这份数据吗？提交后不可修改。",onConfirm:()=>{console.log("确认"),l.hide()},onCancel:()=>{console.log("取消"),l.hide()}})},showAlert:()=>{const l=F.alert({header:"温馨提示",body:"您的账号在异地登录，请注意安全！",onConfirm:()=>{l.hide()}})}}},template:`
      <div style="display: flex; gap: 16px;">
        <Button theme="primary" variant="outline" @click="showConfirm">DialogPlugin.confirm</Button>
        <Button theme="default" variant="outline" @click="showAlert">DialogPlugin.alert</Button>
      </div>
    `})};var K,U,R;z.parameters={...z.parameters,docs:{...(K=z.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'Basic',
  render: args => ({
    components: {
      Dialog,
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
        <Button theme="primary" @click="visible = true">打开对话框</Button>
        <Dialog v-bind="args" v-model:visible="visible" header="这里是标题" body="详情内容区域详情内容区域详情内容区域。" />
      </div>
    \`
  })
}`,...(R=(U=z.parameters)==null?void 0:U.docs)==null?void 0:R.source}}};var G,H,J;O.parameters={...O.parameters,docs:{...(G=O.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'Themes',
  render: () => ({
    components: {
      Dialog,
      Button
    },
    setup() {
      const visibleInfo = ref(false);
      const visibleSuccess = ref(false);
      const visibleWarning = ref(false);
      const visibleDanger = ref(false);
      return {
        visibleInfo,
        visibleSuccess,
        visibleWarning,
        visibleDanger
      };
    },
    template: \`
      <div style="display: flex; gap: 16px; flex-wrap: wrap;">
        <Button theme="default" variant="outline" @click="visibleInfo = true" style="color: var(--information5-color-normal); border-color: var(--information5-color-normal);">信息 Dialog</Button>
        <Button theme="default" variant="outline" @click="visibleSuccess = true" style="color: var(--success5-color-normal); border-color: var(--success5-color-normal);">成功 Dialog</Button>
        <Button theme="default" variant="outline" @click="visibleWarning = true" style="color: var(--warning5-color-normal); border-color: var(--warning5-color-normal);">警示 Dialog</Button>
        <Button theme="default" variant="outline" @click="visibleDanger = true" style="color: var(--error5-color-normal); border-color: var(--error5-color-normal);">错误 Dialog</Button>

        <Dialog v-model:visible="visibleInfo" theme="info" header="系统提示" body="这是一个信息提示对话框。" />
        <Dialog v-model:visible="visibleSuccess" theme="success" header="操作成功" body="您的操作已顺利完成。" />
        <Dialog v-model:visible="visibleWarning" theme="warning" header="警示操作" body="这可能会带来一些不确定的后果。" />
        <Dialog v-model:visible="visibleDanger" theme="danger" header="危险操作" body="您正在执行不可逆的删除操作！" :confirmBtn="{ theme: 'danger', variant: 'base', default: '确认删除' }" />
      </div>
    \`
  })
}`,...(J=(H=O.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var Q,X,Y;x.parameters={...x.parameters,docs:{...(Q=x.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'PluginUsage',
  render: () => ({
    components: {
      Button
    },
    setup() {
      const showConfirm = () => {
        const instance = DialogPlugin.confirm({
          header: '确认提交',
          body: '您确认要提交这份数据吗？提交后不可修改。',
          onConfirm: () => {
            console.log('确认');
            instance.hide();
          },
          onCancel: () => {
            console.log('取消');
            instance.hide();
          }
        });
      };
      const showAlert = () => {
        const instance = DialogPlugin.alert({
          header: '温馨提示',
          body: '您的账号在异地登录，请注意安全！',
          onConfirm: () => {
            instance.hide();
          }
        });
      };
      return {
        showConfirm,
        showAlert
      };
    },
    template: \`
      <div style="display: flex; gap: 16px;">
        <Button theme="primary" variant="outline" @click="showConfirm">DialogPlugin.confirm</Button>
        <Button theme="default" variant="outline" @click="showAlert">DialogPlugin.alert</Button>
      </div>
    \`
  })
}`,...(Y=(X=x.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const De=["Basic","Themes","PluginUsage"];export{z as Basic,x as PluginUsage,O as Themes,De as __namedExportsOrder,we as default};
