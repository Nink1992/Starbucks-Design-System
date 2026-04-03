import{e as ce,r as m,w as me,f as o,n,g as s,k,j as f,F as w,y as P,C as ve,l as j,G as fe,c as ge,o as l,p as A,t as M,I as ye}from"./vue.esm-bundler-DEFMfx8h.js";import{_ as he}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{B as _}from"./Button-CuUkRbmm.js";const ke=["src","alt"],we={key:2},Le=["onClick"],be=["onClick"],xe=["src","alt"],Ue={key:0,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"spin-icon"},$e={key:1,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},Ce=["onClick"],Be=["onClick"],ze=["name","multiple","accept","disabled"],_e=["src"],oe=ce({__name:"Upload",props:{name:{default:"file"},action:{},headers:{},multiple:{type:Boolean,default:!1},accept:{},disabled:{type:Boolean,default:!1},drag:{type:Boolean,default:!1},maxCount:{},fileList:{},defaultFileList:{default:()=>[]},listType:{default:"text"},showUploadList:{type:Boolean,default:!0},customRequest:{},beforeUpload:{}},emits:["update:fileList","change","remove","preview","drop"],setup(a,{emit:u}){const r=a,v=u,L=m(null),p=m([...r.fileList||r.defaultFileList]),b=m(!1),F=m(!1),T=m(""),D=ge(()=>[...p.value].sort((e,i)=>e.status==="success"&&i.status!=="success"?1:e.status!=="success"&&i.status==="success"?-1:0));me(()=>r.fileList,e=>{e&&(p.value=e)},{deep:!0});const q=()=>{var e;r.disabled||(e=L.value)==null||e.click()},re=e=>{const t=e.target.files;t&&(I(Array.from(t)),L.value&&(L.value.value=""))},I=async e=>{for(const i of e){if(r.maxCount&&p.value.length>=r.maxCount)break;let t=!0;if(r.beforeUpload)try{t=await r.beforeUpload(i,e)}catch{t=!1}if(t===!1)continue;const d=t instanceof File?t:i,c={uid:Date.now()+"-"+Math.random().toString(36).substring(2,9),name:d.name,size:d.size,status:"uploading",percent:0,originFileObj:d};if((r.listType==="picture"||r.listType==="picture-card")&&d.type.startsWith("image/")&&(c.url=URL.createObjectURL(d)),r.fileList===void 0)p.value.push(c);else{const g=[...p.value,c];v("update:fileList",g)}v("change",{file:c,fileList:p.value}),r.customRequest?r.customRequest({file:d,onProgress:g=>h(c.uid,{percent:g.percent}),onSuccess:g=>h(c.uid,{status:"success"}),onError:g=>h(c.uid,{status:"error",error:g})}):(r.action,V(c))}},V=e=>{let i=0;const t=setInterval(()=>{i+=20,h(e.uid,{percent:i}),i>=100&&(clearInterval(t),h(e.uid,{status:"success"}))},200)},h=(e,i)=>{const t=p.value.findIndex(d=>d.uid===e);if(t!==-1){const d={...p.value[t],...i};if(r.fileList===void 0)p.value[t]=d;else{const c=[...p.value];c[t]=d,v("update:fileList",c)}v("change",{file:d,fileList:p.value})}},H=e=>{if(r.disabled)return;const i=p.value.filter(d=>d.uid!==e.uid);r.fileList===void 0?p.value=i:v("update:fileList",i);const t={...e,status:"removed"};v("remove",t),v("change",{file:t,fileList:i})},R=e=>{!e.url&&!e.preview||(T.value=e.url||e.preview||"",F.value=!0,v("preview",e))},S=()=>{F.value=!1,setTimeout(()=>{T.value=""},300)},de=e=>{e.preventDefault(),r.disabled||(b.value=!0)},pe=e=>{e.preventDefault(),b.value=!1},ue=e=>{var t;if(e.preventDefault(),b.value=!1,r.disabled)return;v("drop",e);const i=(t=e.dataTransfer)==null?void 0:t.files;i&&i.length&&I(Array.from(i))};return(e,i)=>(l(),o("div",{class:n(e.$style["upload-wrapper"])},[a.drag?(l(),o("div",{key:0,class:n([e.$style["upload-drag"],{[e.$style["is-dragover"]]:b.value,[e.$style["is-disabled"]]:a.disabled}]),onClick:q,onDragover:de,onDragleave:pe,onDrop:ue},[s("div",{class:n(e.$style["drag-container"])},[k(e.$slots,"drag-icon",{},()=>[s("span",{class:n(e.$style["drag-icon"])},[...i[1]||(i[1]=[s("svg",{width:"48",height:"48",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[s("path",{d:"M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15M17 8L12 3M12 3L7 8M12 3V15",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)])],2)]),k(e.$slots,"drag-text",{},()=>[s("p",{class:n(e.$style["drag-text"])},"点击或将文件拖拽到这里 Upload",2)]),k(e.$slots,"drag-hint")],2)],34)):a.listType!=="picture-card"?(l(),o("div",{key:1,class:n([e.$style["upload-select"],{[e.$style["is-disabled"]]:a.disabled}]),onClick:q},[k(e.$slots,"default")],2)):f("",!0),a.showUploadList&&a.listType==="picture-card"?(l(),o("div",{key:2,class:n(e.$style["upload-list-picture-card"])},[(l(!0),o(w,null,P(D.value,t=>(l(),o("div",{key:t.uid,class:n([e.$style["upload-list-item"],e.$style[`is-${t.status}`]])},[t.url?(l(),o("img",{key:0,src:t.url,alt:t.name,class:n(e.$style["item-thumbnail"])},null,10,ke)):(l(),o("div",{key:1,class:n(e.$style["item-info"])},[t.status==="uploading"?(l(),o(w,{key:0},[s("div",{class:n(e.$style["uploading-text"])},"文件上传中",2),s("div",{class:n(e.$style["item-progress"])},[s("div",{class:n(e.$style["item-progress-bar"]),style:A({width:(t.percent||0)+"%"})},null,6)],2)],64)):t.status==="error"?(l(),o(w,{key:1},[(l(),o("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:n(e.$style["error-icon"])},[...i[2]||(i[2]=[s("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"},null,-1),s("circle",{cx:"8.5",cy:"8.5",r:"1.5"},null,-1),s("polyline",{points:"21 15 16 10 5 21"},null,-1)])],2)),s("div",{class:n(e.$style["error-name"])},M(t.name),3)],64)):(l(),o("span",we,M(t.name),1))],2)),s("div",{class:n(e.$style["item-actions"])},[t.url?(l(),o("span",{key:0,class:n(e.$style["action-icon"]),onClick:j(d=>R(t),["stop"])},[...i[3]||(i[3]=[s("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[s("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),s("circle",{cx:"12",cy:"12",r:"3"})],-1)])],10,Le)):f("",!0),s("span",{class:n(e.$style["action-icon"]),onClick:j(d=>H(t),["stop"])},[...i[4]||(i[4]=[s("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[s("polyline",{points:"3 6 5 6 21 6"}),s("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})],-1)])],10,be)],2)],2))),128)),!a.maxCount||p.value.length<a.maxCount?(l(),o("div",{key:0,class:n([e.$style["upload-select-picture-card"],{[e.$style["is-disabled"]]:a.disabled}]),onClick:q},[k(e.$slots,"default",{},()=>[i[5]||(i[5]=s("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[s("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),s("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1)),i[6]||(i[6]=s("div",{style:{"margin-top":"8px"}},"Upload",-1))])],2)):f("",!0)],2)):f("",!0),a.showUploadList&&a.listType!=="picture-card"?(l(),o("div",{key:3,class:n(e.$style[`upload-list-${a.listType}`])},[(l(!0),o(w,null,P(D.value,t=>(l(),o("div",{key:t.uid,class:n([e.$style["upload-list-item"],e.$style[`is-${t.status}`]])},[s("div",{class:n(e.$style["item-content-row"])},[a.listType==="picture"?(l(),o(w,{key:0},[t.url?(l(),o("img",{key:0,src:t.url,alt:t.name,class:n(e.$style["item-thumbnail"])},null,10,xe)):(l(),o("div",{key:1,class:n(e.$style["item-icon"])},[...i[7]||(i[7]=[s("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[s("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),s("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),s("polyline",{points:"21 15 16 10 5 21"})],-1)])],2))],64)):f("",!0),a.listType==="text"?(l(),o("div",{key:1,class:n(e.$style["item-icon"])},[t.status==="uploading"?(l(),o("svg",Ue,[...i[8]||(i[8]=[ye('<line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>',8)])])):(l(),o("svg",$e,[...i[9]||(i[9]=[s("path",{d:"M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"},null,-1)])]))],2)):f("",!0),s("span",{class:n(e.$style["item-name"]),onClick:d=>R(t)},M(t.name),11,Ce),s("span",{class:n(e.$style["item-actions"]),onClick:d=>H(t)},[...i[10]||(i[10]=[s("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[s("polyline",{points:"3 6 5 6 21 6"}),s("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})],-1)])],10,Be)],2),t.status==="uploading"?(l(),o("div",{key:0,class:n(e.$style["item-progress"])},[s("div",{class:n(e.$style["item-progress-bar"]),style:A({width:(t.percent||0)+"%"})},null,6)],2)):f("",!0)],2))),128))],2)):f("",!0),s("input",{ref_key:"fileInputRef",ref:L,type:"file",name:a.name,multiple:a.multiple,accept:a.accept,disabled:a.disabled,style:{display:"none"},class:n(e.$style["upload-input"]),onChange:re},null,42,ze),(l(),ve(fe,{to:"body"},[F.value?(l(),o("div",{key:0,class:n(e.$style["preview-modal"])},[s("div",{class:n(e.$style["preview-mask"]),onClick:S},null,2),s("div",{class:n(e.$style["preview-wrap"]),onClick:S},[s("div",{class:n(e.$style["preview-content"]),onClick:i[0]||(i[0]=j(()=>{},["stop"]))},[s("span",{class:n(e.$style["preview-close"]),onClick:S},[...i[11]||(i[11]=[s("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[s("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),s("line",{x1:"6",y1:"6",x2:"18",y2:"18"})],-1)])],2),s("img",{src:T.value,alt:"Preview",class:n(e.$style["preview-img"])},null,10,_e)],2)],2)],2)):f("",!0)]))],2))}}),Fe="_spin_tz8pc_227",Te={"upload-wrapper":"_upload-wrapper_tz8pc_2","upload-select":"_upload-select_tz8pc_9","is-disabled":"_is-disabled_tz8pc_13","upload-input":"_upload-input_tz8pc_17","upload-drag":"_upload-drag_tz8pc_22","is-dragover":"_is-dragover_tz8pc_38","drag-container":"_drag-container_tz8pc_47","drag-icon":"_drag-icon_tz8pc_56","drag-text":"_drag-text_tz8pc_60","drag-hint":"_drag-hint_tz8pc_65","upload-list-text":"_upload-list-text_tz8pc_72","upload-list-item":"_upload-list-item_tz8pc_78","item-content-row":"_item-content-row_tz8pc_90","item-progress":"_item-progress_tz8pc_95","item-progress-bar":"_item-progress-bar_tz8pc_103","item-icon":"_item-icon_tz8pc_108","item-name":"_item-name_tz8pc_114","item-actions":"_item-actions_tz8pc_126","is-error":"_is-error_tz8pc_143","is-uploading":"_is-uploading_tz8pc_149","preview-modal":"_preview-modal_tz8pc_158","preview-mask":"_preview-mask_tz8pc_170","preview-wrap":"_preview-wrap_tz8pc_179","preview-content":"_preview-content_tz8pc_189","preview-close":"_preview-close_tz8pc_199","preview-img":"_preview-img_tz8pc_219",spin:Fe,"upload-list-picture-card":"_upload-list-picture-card_tz8pc_240","upload-select-picture-card":"_upload-select-picture-card_tz8pc_245","item-thumbnail":"_item-thumbnail_tz8pc_276","item-info":"_item-info_tz8pc_281","uploading-text":"_uploading-text_tz8pc_295","error-icon":"_error-icon_tz8pc_313","error-name":"_error-name_tz8pc_317","action-icon":"_action-icon_tz8pc_339","upload-list-picture":"_upload-list-picture_tz8pc_240"},qe={$style:Te},y=he(oe,[["__cssModules",qe]]);oe.__docgenInfo={exportName:"default",displayName:"Upload",description:"",tags:{},props:[{name:"name",description:"发到后台的文件参数名",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'file'"}},{name:"action",description:"上传的地址",required:!1,type:{name:"string"}},{name:"headers",description:"设置上传的请求头部",required:!1,type:{name:"Record",elements:[{name:"string"},{name:"string"}]}},{name:"multiple",description:"是否支持多选文件",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"accept",description:"接受上传的文件类型",required:!1,type:{name:"string"}},{name:"disabled",description:"是否禁用",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"drag",description:"是否支持拖拽上传",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"maxCount",description:"限制上传数量",required:!1,type:{name:"number"}},{name:"fileList",description:"文件列表",required:!1,type:{name:"Array",elements:[{name:"UploadFile"}]}},{name:"defaultFileList",description:"默认已经上传的文件列表",required:!1,type:{name:"Array",elements:[{name:"UploadFile"}]},defaultValue:{func:!1,value:"() => []"}},{name:"listType",description:"上传列表的内建样式",required:!1,type:{name:"union",elements:[{name:'"text"'},{name:'"picture"'},{name:'"picture-card"'}]},defaultValue:{func:!1,value:"'text'"}},{name:"showUploadList",description:"是否展示文件列表",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"customRequest",description:"自定义上传行为，如果返回 false 则停止默认上传",required:!1,type:{name:"TSFunctionType"}},{name:"beforeUpload",description:"上传文件之前的钩子，参数为上传的文件，若返回 false 则停止上传。支持返回 Promise",required:!1,type:{name:"TSFunctionType"}}],events:[{name:"update:fileList",type:{names:["Array"],elements:[{name:"UploadFile"}]}},{name:"change",type:{names:[`{
    file: UploadFile;
    fileList: UploadFile[];
    event?: any;
}`]}},{name:"remove",type:{names:["UploadFile"]}},{name:"preview",type:{names:["UploadFile"]}},{name:"drop",type:{names:["DragEvent"]}}],slots:[{name:"drag-icon"},{name:"drag-text"},{name:"drag-hint"},{name:"default"}],sourceFiles:["/home/runner/work/Starbucks-Design-System/Starbucks-Design-System/Upload/Upload.vue"]};const De={title:"数据录入/上传 Upload",component:y,tags:["autodocs"],argTypes:{listType:{control:"select",options:["text","picture","picture-card"],description:"上传列表的内建样式"},multiple:{control:"boolean",description:"是否支持多选文件"},disabled:{control:"boolean",description:"是否禁用"},drag:{control:"boolean",description:"是否开启拖拽上传"},maxCount:{control:"number",description:"限制上传数量"}},args:{listType:"text",multiple:!1,disabled:!1,drag:!1,showUploadList:!0}},x={render:a=>({components:{Upload:y,Button:_},setup(){const u=m([]);return{args:a,fileList:u}},template:`
      <div>
        <Upload v-bind="args" v-model:fileList="fileList">
          <Button variant="outline" theme="default" :icon="true" iconType="prefixIcon">
            <template #prefix>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
            </template>
            Upload
          </Button>
        </Upload>
      </div>
    `})},U={render:a=>({components:{Upload:y,Button:_},setup(){const u=m([{uid:"-1",name:"xxx.png",status:"uploading",percent:50},{uid:"-2",name:"yyy.png",status:"success"},{uid:"-3",name:"zzz.png",status:"error"}]);return{args:a,fileList:u}},template:`
      <div>
        <Upload v-bind="args" v-model:fileList="fileList">
          <Button variant="outline" theme="default" :icon="true" iconType="prefixIcon">
            <template #prefix>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
            </template>
            Upload
          </Button>
        </Upload>
      </div>
    `})},$={render:a=>({components:{Upload:y},setup(){const u=m([{uid:"-1",name:"image.png",status:"uploading",percent:50},{uid:"-2",name:"image.png",status:"error"},{uid:"-3",name:"starbucks-frappuccino.png",status:"success",url:"https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=400&q=80"}]);return{args:a,fileList:u}},template:`
      <div>
        <Upload 
          v-bind="args" 
          list-type="picture-card" 
          v-model:fileList="fileList"
        />
      </div>
    `})},C={render:a=>({components:{Upload:y,Button:_},setup(){const u=m([{uid:"-1",name:"uploading-image.png",status:"uploading",percent:50},{uid:"-2",name:"starbucks-frappuccino.png",status:"success",url:"https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=400&q=80"},{uid:"-3",name:"image2.png",status:"error"}]);return{args:a,fileList:u}},template:`
      <div>
        <Upload 
          v-bind="args" 
          list-type="picture" 
          v-model:fileList="fileList"
        >
          <Button variant="outline" theme="default" :icon="true" iconType="prefixIcon">
            <template #prefix>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
            </template>
            Upload
          </Button>
        </Upload>
      </div>
    `})},B={render:a=>({components:{Upload:y},setup(){const u=m([]);return{args:a,fileList:u}},template:`
      <div style="height: 200px">
        <Upload 
          v-bind="args" 
          drag 
          multiple
          v-model:fileList="fileList"
        />
      </div>
    `})},z={render:a=>({components:{Upload:y,Button:_},setup(){const u=m([]);return{args:a,fileList:u}},template:`
      <div>
        <Upload 
          v-bind="args" 
          disabled
          v-model:fileList="fileList"
        >
          <Button variant="outline" theme="default" :icon="true" iconType="prefixIcon" disabled>
            <template #prefix>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
            </template>
            Upload
          </Button>
        </Upload>
      </div>
    `})};var N,E,O;x.parameters={...x.parameters,docs:{...(N=x.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      Upload,
      Button
    },
    setup() {
      const fileList = ref<UploadFile[]>([]);
      return {
        args,
        fileList
      };
    },
    template: \`
      <div>
        <Upload v-bind="args" v-model:fileList="fileList">
          <Button variant="outline" theme="default" :icon="true" iconType="prefixIcon">
            <template #prefix>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
            </template>
            Upload
          </Button>
        </Upload>
      </div>
    \`
  })
}`,...(O=(E=x.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var G,W,J;U.parameters={...U.parameters,docs:{...(G=U.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      Upload,
      Button
    },
    setup() {
      const fileList = ref<UploadFile[]>([{
        uid: '-1',
        name: 'xxx.png',
        status: 'uploading',
        percent: 50
      }, {
        uid: '-2',
        name: 'yyy.png',
        status: 'success'
      }, {
        uid: '-3',
        name: 'zzz.png',
        status: 'error'
      }]);
      return {
        args,
        fileList
      };
    },
    template: \`
      <div>
        <Upload v-bind="args" v-model:fileList="fileList">
          <Button variant="outline" theme="default" :icon="true" iconType="prefixIcon">
            <template #prefix>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
            </template>
            Upload
          </Button>
        </Upload>
      </div>
    \`
  })
}`,...(J=(W=U.parameters)==null?void 0:W.docs)==null?void 0:J.source}}};var K,Q,X;$.parameters={...$.parameters,docs:{...(K=$.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      Upload
    },
    setup() {
      const fileList = ref<UploadFile[]>([{
        uid: '-1',
        name: 'image.png',
        status: 'uploading',
        percent: 50
      }, {
        uid: '-2',
        name: 'image.png',
        status: 'error'
      }, {
        uid: '-3',
        name: 'starbucks-frappuccino.png',
        status: 'success',
        // A classic Starbucks Frappuccino with the iconic green siren logo
        url: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=400&q=80'
      }]);
      return {
        args,
        fileList
      };
    },
    template: \`
      <div>
        <Upload 
          v-bind="args" 
          list-type="picture-card" 
          v-model:fileList="fileList"
        />
      </div>
    \`
  })
}`,...(X=(Q=$.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;C.parameters={...C.parameters,docs:{...(Y=C.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      Upload,
      Button
    },
    setup() {
      const fileList = ref<UploadFile[]>([{
        uid: '-1',
        name: 'uploading-image.png',
        status: 'uploading',
        percent: 50
      }, {
        uid: '-2',
        name: 'starbucks-frappuccino.png',
        status: 'success',
        url: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=400&q=80'
      }, {
        uid: '-3',
        name: 'image2.png',
        status: 'error'
      }]);
      return {
        args,
        fileList
      };
    },
    template: \`
      <div>
        <Upload 
          v-bind="args" 
          list-type="picture" 
          v-model:fileList="fileList"
        >
          <Button variant="outline" theme="default" :icon="true" iconType="prefixIcon">
            <template #prefix>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
            </template>
            Upload
          </Button>
        </Upload>
      </div>
    \`
  })
}`,...(ee=(Z=C.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ie,se;B.parameters={...B.parameters,docs:{...(te=B.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      Upload
    },
    setup() {
      const fileList = ref<UploadFile[]>([]);
      return {
        args,
        fileList
      };
    },
    template: \`
      <div style="height: 200px">
        <Upload 
          v-bind="args" 
          drag 
          multiple
          v-model:fileList="fileList"
        />
      </div>
    \`
  })
}`,...(se=(ie=B.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};var ne,ae,le;z.parameters={...z.parameters,docs:{...(ne=z.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      Upload,
      Button
    },
    setup() {
      const fileList = ref<UploadFile[]>([]);
      return {
        args,
        fileList
      };
    },
    template: \`
      <div>
        <Upload 
          v-bind="args" 
          disabled
          v-model:fileList="fileList"
        >
          <Button variant="outline" theme="default" :icon="true" iconType="prefixIcon" disabled>
            <template #prefix>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
            </template>
            Upload
          </Button>
        </Upload>
      </div>
    \`
  })
}`,...(le=(ae=z.parameters)==null?void 0:ae.docs)==null?void 0:le.source}}};const Ie=["Basic","AllStates","PictureCard","PictureList","Drag","Disabled"];export{U as AllStates,x as Basic,z as Disabled,B as Drag,$ as PictureCard,C as PictureList,Ie as __namedExportsOrder,De as default};
