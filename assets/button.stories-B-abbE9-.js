import{n as e}from"./rolldown-runtime-D_-wTCJc.js";import{a as t,n,o as r,r as i,s as a,t as o}from"./_router_module-chunk-1qM82n3v.js";import{D as s,E as c,O as l,S as u,T as d,_ as f,b as p,d as m,f as h,g,h as _,k as v,m as y,p as b,t as x,w as S,x as C,y as w}from"./constants-DyGZzeIv.js";import{t as T}from"./iconsPicker-2iTjJOHW.js";import{n as E,t as D}from"./button-BL_ThAod.js";var O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W;function init_button_stories(){return(init_button_stories=e((()=>{r(),t(),n(),x(),E(),{SEARCH:O,SAVE:k,ARROW_DOWN:A,ARROW_RIGHT:j,ARROW_LEFT:M,CALENDAR:N,CLOCK:P}=T,F={title:`UI/Button`,component:D,args:{text:`Button`,size:d,color:b,radius:c,width:h,disabled:!1,iconLeft:null,iconRight:null,imgSrc:null},argTypes:{size:{control:`select`,options:[l,d,S]},color:{control:`select`,options:[b,s,m,v,f,C,u]},radius:{control:`select`,options:[c,y]},width:{control:`select`,options:[h,p,w]},iconLeft:{control:`select`,options:[N,O,M]},iconRight:{control:`select`,options:[O,k,A,j]},imgSrc:{control:`select`,options:[`assets/webP/google.webP`]}},decorators:[a({providers:[{provide:o,useValue:()=>{}},{provide:i,useValue:{}}]})]},I={args:{text:`Default`,color:b,size:d,iconLeft:O}},L=Object.values(_),R={render:e=>({props:e,template:`
      <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: flex-end;
">
        ${L.map(e=>`
          <app-button
            text="Size: ${e.toUpperCase()}"
            size="${e}"
            iconLeft="${P}"
          ></app-button>
        `).join(``)}
      </div>
    `})},z=Object.values(g),B={render:e=>({props:e,template:`
      <div style="display: flex; gap: 16px; flex-wrap: wrap;">
        ${z.map(e=>`
          <app-button
            text="${e.toUpperCase()}"
            color="${e}"
            size="${d}"
            ${e===u?`imgSrc="assets/webP/google.webp"`:``}
          ></app-button>
        `).join(``)}
      </div>
    `})},V={render:e=>({props:e,template:`
      <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: flex-end;
">
        ${L.map(e=>`
          <app-button
            text="With left icon"
            size="${e}"
            iconLeft="plus"
          ></app-button>
        `).join(``)}
      </div>
    `})},H={args:{iconRight:j}},U={args:{disabled:!0}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Default',
    color: C.BASE,
    size: C.MD,
    iconLeft: SEARCH
  }
}`,...I.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: args => ({
    props: args,
    template: \`
      <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: flex-end;
">
        \${sizes.map(size => \`
          <app-button
            text="Size: \${size.toUpperCase()}"
            size="\${size}"
            iconLeft="\${CLOCK}"
          ></app-button>
        \`).join('')}
      </div>
    \`
  })
}`,...R.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: args => ({
    props: args,
    template: \`
      <div style="display: flex; gap: 16px; flex-wrap: wrap;">
        \${colors.map(color => \`
          <app-button
            text="\${color.toUpperCase()}"
            color="\${color}"
            size="\${C.MD}"
            \${color === C.IMAGE ? \`imgSrc="assets/webP/google.webp"\` : ''}
          ></app-button>
        \`).join('')}
      </div>
    \`
  })
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: args => ({
    props: args,
    template: \`
      <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: flex-end;
">
        \${sizes.map(size => \`
          <app-button
            text="With left icon"
            size="\${size}"
            iconLeft="plus"
          ></app-button>
        \`).join('')}
      </div>
    \`
  })
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    iconRight: ARROW_RIGHT
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...U.parameters?.docs?.source}}},W=[`Default`,`Sizes`,`Colors`,`WithIconLeft`,`WithIconRight`,`Disabled`]})))()}init_button_stories();export{B as Colors,I as Default,U as Disabled,R as Sizes,V as WithIconLeft,H as WithIconRight,W as __namedExportsOrder,F as default};