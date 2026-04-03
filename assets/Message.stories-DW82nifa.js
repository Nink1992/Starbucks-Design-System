import{e as J,v as K,x as U,z as G,J as R,o as l,f as r,n as w,k,C as T,H as L,g as m,j as b,m as E,t as j,F as X,p as Y,r as Z,c as q,D as ee,K as A}from"./vue.esm-bundler-DEFMfx8h.js";import{_ as oe}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{B as S}from"./Button-CuUkRbmm.js";const te={key:1,width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},ne={key:2,width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},se={key:3,width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},ae={key:4,width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},le={key:5,width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},ie={key:6,width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},re={key:2,width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},H=J({name:"TraeMessage",__name:"Message",props:{theme:{default:"info"},content:{default:""},duration:{default:3e3},closeBtn:{type:[Boolean,String,Function],default:!1},icon:{type:[Boolean,Function],default:!0},zIndex:{default:6e3},id:{},onCloseBtnClick:{},onDurationEnd:{}},emits:["closeBtnClick","durationEnd"],setup(e,{expose:o,emit:t}){const d=e,i=t,f=Z(!0);let c=null;const h=q(()=>d.icon!==!1),p=q(()=>d.closeBtn!==!1),_=()=>{d.duration>0&&!c&&(c=setTimeout(()=>{z(),i("durationEnd")},d.duration))},C=()=>{c&&(clearTimeout(c),c=null)},z=()=>{f.value=!1,C()},O=u=>{i("closeBtnClick",{e:u}),z()};return K(()=>{_()}),U(()=>{C()}),o({close:z}),(u,s)=>G((l(),r("div",{class:w([u.$style.message,u.$style[`theme-${e.theme}`]]),style:Y({zIndex:e.zIndex}),onMouseenter:C,onMouseleave:_},[h.value?(l(),r("div",{key:0,class:w(u.$style["message-icon"])},[k(u.$slots,"icon",{},()=>[typeof e.icon=="function"?(l(),T(L(e.icon),{key:0})):e.theme==="info"?(l(),r("svg",te,[...s[0]||(s[0]=[m("path",{d:"M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zM8 12.5c-.69 0-1.25-.56-1.25-1.25S7.31 10 8 10s1.25.56 1.25 1.25S8.69 12.5 8 12.5zm1.5-4c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5V4.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v4z",fill:"currentColor"},null,-1)])])):e.theme==="success"?(l(),r("svg",ne,[...s[1]||(s[1]=[m("path",{d:"M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm3.5 6.5l-4.5 4.5c-.29.29-.77.29-1.06 0L3.5 8.5c-.29-.29-.29-.77 0-1.06.29-.29.77-.29 1.06 0l1.94 1.94 3.94-3.94c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06z",fill:"currentColor"},null,-1)])])):e.theme==="warning"?(l(),r("svg",se,[...s[2]||(s[2]=[m("path",{d:"M15.42 12.18L8.85 1.23c-.39-.65-1.32-.65-1.71 0L.58 12.18c-.4.66.08 1.5.85 1.5h13.14c.77 0 1.25-.84.85-1.5zM8 12.5c-.69 0-1.25-.56-1.25-1.25S7.31 10 8 10s1.25.56 1.25 1.25S8.69 12.5 8 12.5zm1-3.5H7v-4h2v4z",fill:"currentColor"},null,-1)])])):e.theme==="error"?(l(),r("svg",ae,[...s[3]||(s[3]=[m("path",{d:"M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm3.5 10.09c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22s-.38-.07-.53-.22L8 8.71l-2.44 2.44c-.15.15-.34.22-.53.22s-.38-.07-.53-.22c-.29-.29-.29-.77 0-1.06L6.94 8 4.5 5.56c-.29-.29-.29-.77 0-1.06.29-.29.77-.29 1.06 0L8 6.94l2.44-2.44c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06L9.06 8l2.44 2.44z",fill:"currentColor"},null,-1)])])):e.theme==="question"?(l(),r("svg",le,[...s[4]||(s[4]=[m("path",{d:"M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 13c-.69 0-1.25-.56-1.25-1.25S7.31 10.5 8 10.5s1.25.56 1.25 1.25S8.69 13 8 13zm1.6-5.83c-.34.27-.6.64-.6 1.08v.5H7v-.5c0-1.07.57-1.8 1.13-2.25.43-.34.87-.69.87-1.5 0-1.1-.9-2-2-2s-2 .9-2 2h-2c0-2.21 1.79-4 4-4s4 1.79 4 4c0 1.34-.78 2.08-1.4 2.67z",fill:"currentColor"},null,-1)])])):e.theme==="loading"?(l(),r("svg",ie,[...s[5]||(s[5]=[m("path",{d:"M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z",fill:"var(--gray-3)"},null,-1),m("path",{d:"M8 0a8 8 0 018 8h-1.5a6.5 6.5 0 00-6.5-6.5V0z",fill:"currentColor"},null,-1)])])):b("",!0)])],2)):b("",!0),m("div",{class:w(u.$style["message-content"])},[k(u.$slots,"default",{},()=>[E(j(e.content),1)])],2),p.value?(l(),r("div",{key:1,class:w(u.$style["message-close"]),onClick:O},[k(u.$slots,"closeBtn",{},()=>[typeof e.closeBtn=="string"?(l(),r(X,{key:0},[E(j(e.closeBtn),1)],64)):typeof e.closeBtn=="function"?(l(),T(L(e.closeBtn),{key:1})):(l(),r("svg",re,[...s[6]||(s[6]=[m("path",{d:"M12.5 3.5L3.5 12.5M3.5 3.5L12.5 12.5",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)])]))])],2)):b("",!0)],38)),[[R,f.value]])}}),ce="_message_1wphj_3",ue="_spin_1wphj_1",me={message:ce,"message-icon":"_message-icon_1wphj_22","theme-info":"_theme-info_1wphj_32","theme-success":"_theme-success_1wphj_36","theme-warning":"_theme-warning_1wphj_40","theme-error":"_theme-error_1wphj_44","theme-question":"_theme-question_1wphj_48","theme-loading":"_theme-loading_1wphj_52",spin:ue,"message-content":"_message-content_1wphj_66","message-close":"_message-close_1wphj_71","message-fade-enter-active":"_message-fade-enter-active_1wphj_87","message-fade-leave-active":"_message-fade-leave-active_1wphj_88","message-fade-enter-from":"_message-fade-enter-from_1wphj_92","message-fade-leave-to":"_message-fade-leave-to_1wphj_97","message-list":"_message-list_1wphj_103"},de={$style:me},x=oe(H,[["__cssModules",de]]);H.__docgenInfo={name:"TraeMessage",exportName:"default",displayName:"Message",description:"",tags:{},expose:[{name:"close"}],props:[{name:"theme",description:"消息主题类型",required:!1,type:{name:"MessageTheme"},defaultValue:{func:!1,value:"'info'"}},{name:"content",description:"消息内容",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"duration",description:"持续时间，0 表示不自动关闭。单位毫秒",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"3000"}},{name:"closeBtn",description:"是否显示关闭按钮",required:!1,type:{name:"union",elements:[{name:"boolean"},{name:"string"},{name:"TSParenthesizedType"}]},defaultValue:{func:!1,value:"false"}},{name:"icon",description:"图标，可以自定义或者根据 theme 自动提供",required:!1,type:{name:"union",elements:[{name:"boolean"},{name:"TSParenthesizedType"}]},defaultValue:{func:!1,value:"true"}},{name:"zIndex",description:"z-index 层级",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"6000"}},{name:"id",description:"唯一标识，用于关闭指定消息",required:!1,type:{name:"string"}},{name:"onCloseBtnClick",description:"关闭时的回调",required:!1,type:{name:"TSFunctionType"}},{name:"onDurationEnd",description:"倒计时结束时的回调",required:!1,type:{name:"TSFunctionType"}}],events:[{name:"closeBtnClick"},{name:"durationEnd"}],slots:[{name:"icon"},{name:"default"},{name:"closeBtn"}],sourceFiles:["/home/runner/work/Starbucks-Design-System/Starbucks-Design-System/Message/Message.vue"]};const g=new Map;let he=0,a=null;const ge=()=>(a||(a=document.createElement("div"),a.className="message-list-container",a.style.position="fixed",a.style.top="24px",a.style.left="0",a.style.right="0",a.style.display="flex",a.style.flexDirection="column",a.style.alignItems="center",a.style.pointerEvents="none",a.style.zIndex="6000",document.body.appendChild(a)),a),n=Object.assign(e=>new Promise(o=>{const t=e.id||`message_${he++}`,d=ge(),i=document.createElement("div");i.style.marginBottom="12px",i.style.pointerEvents="auto",d.appendChild(i);const f={...e,id:t,onDurationEnd:()=>{e.onDurationEnd&&e.onDurationEnd(),M(t,i)},onCloseBtnClick:h=>{e.onCloseBtnClick&&e.onCloseBtnClick(h),M(t,i)}},c=ee(x,f);c.appContext=n._context||null,A(c,i),g.set(t,c),o({close:()=>{var h,p;(p=(h=c.component)==null?void 0:h.exposed)==null||p.close(),M(t,i)}})}),{_context:null,info:(e,o)=>n({...typeof e=="string"?{content:e,duration:o}:e,theme:"info"}),success:(e,o)=>n({...typeof e=="string"?{content:e,duration:o}:e,theme:"success"}),warning:(e,o)=>n({...typeof e=="string"?{content:e,duration:o}:e,theme:"warning"}),error:(e,o)=>n({...typeof e=="string"?{content:e,duration:o}:e,theme:"error"}),loading:(e,o)=>n({...typeof e=="string"?{content:e,duration:o??0}:e,theme:"loading"}),question:(e,o)=>n({...typeof e=="string"?{content:e,duration:o}:e,theme:"question"}),close:e=>{var t;const o=g.get(e);o&&o.component&&((t=o.component.exposed)==null||t.close())},closeAll:()=>{g.forEach((e,o)=>{var t;e.component&&((t=e.component.exposed)==null||t.close())})}});function M(e,o){setTimeout(()=>{var t;g.has(e)&&(A(null,o),(t=o.parentNode)==null||t.removeChild(o),g.delete(e))},300)}Object.assign(x,{install:e=>{e.component(x.name||"TraeMessage",x),e.config.globalProperties.$message=n,n._context=e._context}});const ve={title:"消息提醒/全局提示 Message",tags:["autodocs"],argTypes:{theme:{control:"select",options:["info","success","warning","error","loading","question"],description:"消息主题类型"},content:{control:"text",description:"消息内容"},duration:{control:"number",description:"持续时间（毫秒），0 表示不自动关闭",defaultValue:3e3},closeBtn:{control:"boolean",description:"是否显示关闭按钮，支持 boolean 或 string (自定义文字)",defaultValue:!1},zIndex:{control:"number",description:"层级控制",defaultValue:6e3}},parameters:{docs:{description:{component:"全局提示，用于全局展示重要通知及操作反馈。支持函数式和插件式调用。"}}}},v={name:"Basic",render:()=>({components:{Button:S},setup(){return{showInfo:()=>n.info("用于表示普通操作信息提示"),showSuccess:()=>n.success("用于表示操作顺利达成"),showWarning:()=>n.warning("用于表示操作引起一定后果"),showError:()=>n.error("用于表示操作引起严重的后果"),showQuestion:()=>n.question("用于帮助用户操作的信息提示")}},template:`
      <div>
        <h3 style="margin: 0 0 16px 0; font-size: 14px; font-weight: normal; color: var(--text-secondary);">普通全局提示：使用简洁文字描述操作反馈。常规全局提示包含：普通信息、成功信息、警示信息、错误信息、帮助信息和加载中。</h3>
        <div style="display: flex; gap: 16px; flex-wrap: wrap;">
          <Button theme="default" variant="outline" size="medium" @click="showInfo" style="color: var(--information5-color-normal); border-color: var(--information5-color-normal);">信息</Button>
          <Button theme="default" variant="outline" size="medium" @click="showSuccess" style="color: var(--success5-color-normal); border-color: var(--success5-color-normal);">成功</Button>
          <Button theme="default" variant="outline" size="medium" @click="showWarning" style="color: var(--warning5-color-normal); border-color: var(--warning5-color-normal);">警示</Button>
          <Button theme="default" variant="outline" size="medium" @click="showError" style="color: var(--error5-color-normal); border-color: var(--error5-color-normal);">错误</Button>
          <Button theme="default" variant="outline" size="medium" @click="showQuestion">帮助</Button>
        </div>
      </div>
    `})},y={name:"Loading",render:()=>({components:{Button:S},setup(){return{showLoading:()=>{n.loading({content:"用于表示操作正在生效的过程中",duration:0}),setTimeout(()=>{n.closeAll()},3e3)},showLoadingSuccess:()=>{n.loading("正在加载中...(10s)",1e4)}}},template:`
      <div>
        <h3 style="margin: 0 0 16px 0; font-size: 14px; font-weight: normal; color: var(--text-secondary);">加载中信息提示</h3>
        <div style="display: flex; gap: 16px;">
          <Button theme="default" variant="outline" size="medium" @click="showLoading">加载中 (3s后手动关闭)</Button>
          <Button theme="default" variant="outline" size="medium" @click="showLoadingSuccess">加载中 (10s)</Button>
        </div>
      </div>
    `})},B={name:"Closable",render:()=>({components:{Button:S},setup(){return{showClosable:()=>{n.info({content:"带关闭按钮的全局提示",closeBtn:!0,duration:0})},showClosableText:()=>{n.info({content:"自定义关闭按钮（文字）",closeBtn:"关闭",duration:0})}}},template:`
      <div>
        <h3 style="margin: 0 0 16px 0; font-size: 14px; font-weight: normal; color: var(--text-secondary);">关闭全局提示：如果不希望通过计时关闭，也可以配置关闭按钮。</h3>
        <div style="display: flex; gap: 16px;">
          <Button theme="default" variant="outline" size="medium" @click="showClosable">默认关闭按钮</Button>
          <Button theme="default" variant="outline" size="medium" @click="showClosableText">文字关闭按钮</Button>
        </div>
      </div>
    `})};var I,V,P;v.parameters={...v.parameters,docs:{...(I=v.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Basic',
  render: () => ({
    components: {
      Button
    },
    setup() {
      const showInfo = () => MessagePlugin.info('用于表示普通操作信息提示');
      const showSuccess = () => MessagePlugin.success('用于表示操作顺利达成');
      const showWarning = () => MessagePlugin.warning('用于表示操作引起一定后果');
      const showError = () => MessagePlugin.error('用于表示操作引起严重的后果');
      const showQuestion = () => MessagePlugin.question('用于帮助用户操作的信息提示');
      return {
        showInfo,
        showSuccess,
        showWarning,
        showError,
        showQuestion
      };
    },
    template: \`
      <div>
        <h3 style="margin: 0 0 16px 0; font-size: 14px; font-weight: normal; color: var(--text-secondary);">普通全局提示：使用简洁文字描述操作反馈。常规全局提示包含：普通信息、成功信息、警示信息、错误信息、帮助信息和加载中。</h3>
        <div style="display: flex; gap: 16px; flex-wrap: wrap;">
          <Button theme="default" variant="outline" size="medium" @click="showInfo" style="color: var(--information5-color-normal); border-color: var(--information5-color-normal);">信息</Button>
          <Button theme="default" variant="outline" size="medium" @click="showSuccess" style="color: var(--success5-color-normal); border-color: var(--success5-color-normal);">成功</Button>
          <Button theme="default" variant="outline" size="medium" @click="showWarning" style="color: var(--warning5-color-normal); border-color: var(--warning5-color-normal);">警示</Button>
          <Button theme="default" variant="outline" size="medium" @click="showError" style="color: var(--error5-color-normal); border-color: var(--error5-color-normal);">错误</Button>
          <Button theme="default" variant="outline" size="medium" @click="showQuestion">帮助</Button>
        </div>
      </div>
    \`
  })
}`,...(P=(V=v.parameters)==null?void 0:V.docs)==null?void 0:P.source}}};var D,$,N;y.parameters={...y.parameters,docs:{...(D=y.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Loading',
  render: () => ({
    components: {
      Button
    },
    setup() {
      const showLoading = () => {
        // duration 0 means it won't auto close
        const msg = MessagePlugin.loading({
          content: '用于表示操作正在生效的过程中',
          duration: 0
        });
        // Simulate close after 3s
        setTimeout(() => {
          MessagePlugin.closeAll();
        }, 3000);
      };
      const showLoadingSuccess = () => {
        const msg = MessagePlugin.loading('正在加载中...(10s)', 10000);
      };
      return {
        showLoading,
        showLoadingSuccess
      };
    },
    template: \`
      <div>
        <h3 style="margin: 0 0 16px 0; font-size: 14px; font-weight: normal; color: var(--text-secondary);">加载中信息提示</h3>
        <div style="display: flex; gap: 16px;">
          <Button theme="default" variant="outline" size="medium" @click="showLoading">加载中 (3s后手动关闭)</Button>
          <Button theme="default" variant="outline" size="medium" @click="showLoadingSuccess">加载中 (10s)</Button>
        </div>
      </div>
    \`
  })
}`,...(N=($=y.parameters)==null?void 0:$.docs)==null?void 0:N.source}}};var F,Q,W;B.parameters={...B.parameters,docs:{...(F=B.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Closable',
  render: () => ({
    components: {
      Button
    },
    setup() {
      const showClosable = () => {
        MessagePlugin.info({
          content: '带关闭按钮的全局提示',
          closeBtn: true,
          duration: 0
        });
      };
      const showClosableText = () => {
        MessagePlugin.info({
          content: '自定义关闭按钮（文字）',
          closeBtn: '关闭',
          duration: 0
        });
      };
      return {
        showClosable,
        showClosableText
      };
    },
    template: \`
      <div>
        <h3 style="margin: 0 0 16px 0; font-size: 14px; font-weight: normal; color: var(--text-secondary);">关闭全局提示：如果不希望通过计时关闭，也可以配置关闭按钮。</h3>
        <div style="display: flex; gap: 16px;">
          <Button theme="default" variant="outline" size="medium" @click="showClosable">默认关闭按钮</Button>
          <Button theme="default" variant="outline" size="medium" @click="showClosableText">文字关闭按钮</Button>
        </div>
      </div>
    \`
  })
}`,...(W=(Q=B.parameters)==null?void 0:Q.docs)==null?void 0:W.source}}};const ye=["Basic","Loading","Closable"];export{v as Basic,B as Closable,y as Loading,ye as __namedExportsOrder,ve as default};
