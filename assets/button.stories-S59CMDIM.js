import{n as e}from"./rolldown-runtime-D_-wTCJc.js";import{D as t,E as n,O as r,S as i,T as a,_ as o,b as s,d as c,f as l,g as u,h as d,k as f,m as p,p as m,t as h,w as g,x as _,y as v}from"./constants-DYB6ioyk.js";import{t as y}from"./iconsPicker-2iTjJOHW.js";import{n as b,t as x}from"./button-CF-TRCE2.js";var S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L;function init_button_stories(){return(init_button_stories=e((()=>{b(),h(),{SEARCH:S,SAVE:C,ARROW_DOWN:w,ARROW_RIGHT:T,ARROW_LEFT:E,CALENDAR:D,CLOCK:O}=y,k={title:`UI/Button`,component:x,args:{text:`Button`,size:a,color:m,radius:n,width:l,disabled:!1,iconLeft:null,iconRight:null,imgSrc:null},argTypes:{size:{control:`select`,options:[r,a,g]},color:{control:`select`,options:[m,t,c,f,o,_,i]},radius:{control:`select`,options:[n,p]},width:{control:`select`,options:[l,s,v]},iconLeft:{control:`select`,options:[D,S,E]},iconRight:{control:`select`,options:[S,C,w,T]},imgSrc:{control:`select`,options:[`assets/webP/google.webP`]}}},A=Object.values(d),j={render:e=>({props:e,template:`
      <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: flex-end;
">
        ${A.map(e=>`
          <app-button
            text="Size: ${e.toUpperCase()}"
            size="${e}"
            iconLeft="${O}"
          ></app-button>
        `).join(``)}
      </div>
    `})},M=Object.values(u),N={render:e=>({props:e,template:`
      <div style="display: flex; gap: 16px; flex-wrap: wrap;">
        ${M.map(e=>`
          <app-button
            text="${e.toUpperCase()}"
            color="${e}"
            size="${a}"
            ${e===i?`imgSrc="assets/webP/google.webp"`:``}
          ></app-button>
        `).join(``)}
      </div>
    `})},P={render:e=>({props:e,template:`
      <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: flex-end;
">
        ${A.map(e=>`
          <app-button
            text="With left icon"
            size="${e}"
            iconLeft="plus"
          ></app-button>
        `).join(``)}
      </div>
    `})},F={args:{iconRight:T}},I={args:{disabled:!0}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    iconRight: ARROW_RIGHT
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...I.parameters?.docs?.source}}},L=[`Sizes`,`Colors`,`WithIconLeft`,`WithIconRight`,`Disabled`]})))()}init_button_stories();export{N as Colors,I as Disabled,j as Sizes,P as WithIconLeft,F as WithIconRight,L as __namedExportsOrder,k as default};