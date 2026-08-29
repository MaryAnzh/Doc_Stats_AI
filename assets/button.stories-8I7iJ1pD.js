import{i as e}from"./preload-helper-NjPQXrHM.js";import{C as t,F as n,Mn as r,N as i,Nn as a,V as o,w as s}from"./angular-platform-DF9yawsB.js";import{_ as c,a as l,b as u,c as d,d as f,f as p,g as m,h,i as g,m as _,n as v,o as y,p as b,r as x,s as S,t as C,u as w,v as T,y as E}from"./constants-DliGPupS.js";var D,O=e((()=>{D=`<button
  class="btn"
  [class]="\`btn--\${size()} btn--\${color()} btn--\${radius()} btn--w-\${width()}\`"
  [disabled]="disabled()"
  (click)="onClick()"
>
  @if (imgSrc()) {
    <img class="btn-img" [src]="imgSrc()" alt="icon" />
  }

  @if (iconLeft()) {
    <i class="bi" [class]="'bi-' + iconLeft()"></i>
  }

  @if (text()) {
    <span class="btn-text">{{ text() }}</span>
  }

  @if (iconRight()) {
    <i class="bi" [class]="'bi-' + iconRight()"></i>
  }
</button>
`})),k,A=e((()=>{k=`.btn{cursor:pointer;border:none;outline:1px solid #0000;justify-content:center;align-items:center;margin:0;padding:0;font-weight:500;transition:all .2s;display:inline-flex}.btn:active,.btn:focus{border:none;outline:1px solid #0000}.btn.btn--sm{border-radius:6px;gap:4px;height:24px;padding:6px 10px;font-size:10px;line-height:12px}.btn.btn--sm .btn-img{width:12px;height:12px}.btn.btn--sm i.bi{font-size:12px}.btn.btn--md{border-radius:8px;gap:6px;height:32px;padding:8px 16px;font-size:12px;line-height:14px}.btn.btn--md .btn-img{width:16px;height:16px}.btn.btn--md i.bi{font-size:16px}.btn.btn--lg{border-radius:12px;gap:6px;height:40px;padding:10px 16px;font-size:14px;line-height:20px}.btn.btn--lg .btn-img{width:20px;height:20px}.btn.btn--lg i.bi{font-size:20px}@media (width<=768px){.btn.btn--lg{border-radius:8px;gap:6px;height:32px;padding:8px 16px;font-size:12px;line-height:14px}.btn.btn--lg .btn-img{width:16px;height:16px}.btn.btn--lg i.bi{font-size:16px}.btn.btn--md{border-radius:6px;gap:4px;height:24px;padding:6px 10px;font-size:10px;line-height:12px}.btn.btn--md .btn-img{width:12px;height:12px}.btn.btn--md i.bi{font-size:12px}}.btn.btn--w-auto{width:auto}.btn.btn--w-full{width:100%}.btn.btn--w-fit{width:fit-content}.btn.btn--circle{border-radius:50%}.btn.btn--base{background:var(--base-90);color:var(--base-10)}.btn.btn--base:hover{background:var(--base-80)}.btn.btn--base:active{background:var(--base-100)}.btn.btn--base:focus{outline-color:var(--base-20)}.btn.btn--secondary{background:var(--base-10);color:var(--base-80)}.btn.btn--secondary:hover{background:var(--base-20)}.btn.btn--secondary:active{background:var(--base-0)}.btn.btn--secondary:focus{outline-color:var(--base-60)}.btn.btn--accent{background:var(--accent-80);color:var(--white)}.btn.btn--accent:hover{background:var(--accent-60)}.btn.btn--accent:active{background:var(--accent-100)}.btn.btn--accent:focus{outline-color:var(--accent-60)}.btn.btn--success{background:var(--success-100);color:var(--black)}.btn.btn--success:hover{background:var(--success-80)}.btn.btn--success:active{background:var(--success-60)}.btn.btn--success:focus{outline-color:var(--success-80)}.btn.btn--danger{background:var(--error-100);color:var(--white)}.btn.btn--danger:hover{background:var(--error-80)}.btn.btn--danger:active{background:var(--error-60)}.btn.btn--danger:focus{outline-color:var(--error-40)}.btn.btn--ghost{color:var(--base-80);border:1px solid var(--base-40);background:0 0;outline:none}.btn.btn--ghost:hover{color:var(--base-100)}.btn.btn--ghost:active{color:var(--base-60)}.btn.btn--ghost:focus{border-color:var(--base-60);outline:none}.btn.btn--image{color:var(--base-90);background:0 0;border:none;outline:none;padding:0}.btn.btn--image:hover{color:var(--base-100)}.btn.btn--image:active{opacity:.6}.btn:disabled{opacity:.5;pointer-events:none}.btn .btn-text{white-space:nowrap}`})),j,M=e((()=>{a(),O(),A(),t(),C(),j=class ButtonComponent{text=s(``);size=s(m);color=s(g);radius=s(c);width=s(x);iconLeft=s(null);iconRight=s(null);imgSrc=s(null);disabled=s(!1);onClick=s(()=>{});static propDecorators={text:[{type:o,args:[{isSignal:!0,alias:`text`,required:!1,transform:void 0}]}],size:[{type:o,args:[{isSignal:!0,alias:`size`,required:!1,transform:void 0}]}],color:[{type:o,args:[{isSignal:!0,alias:`color`,required:!1,transform:void 0}]}],radius:[{type:o,args:[{isSignal:!0,alias:`radius`,required:!1,transform:void 0}]}],width:[{type:o,args:[{isSignal:!0,alias:`width`,required:!1,transform:void 0}]}],iconLeft:[{type:o,args:[{isSignal:!0,alias:`iconLeft`,required:!1,transform:void 0}]}],iconRight:[{type:o,args:[{isSignal:!0,alias:`iconRight`,required:!1,transform:void 0}]}],imgSrc:[{type:o,args:[{isSignal:!0,alias:`imgSrc`,required:!1,transform:void 0}]}],disabled:[{type:o,args:[{isSignal:!0,alias:`disabled`,required:!1,transform:void 0}]}],onClick:[{type:o,args:[{isSignal:!0,alias:`onClick`,required:!1,transform:void 0}]}]}},j=r([n({selector:`app-button`,standalone:!0,template:D,changeDetection:i.OnPush,styles:[k]})],j)})),N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J;e((()=>{M(),C(),{SEARCH:N,SAVE:P,ARROW_DOWN:F,ARROW_RIGHT:I,ARROW_LEFT:L,CALENDAR:R,CLOCK:z}=b,B={title:`UI/Button`,component:j,args:{text:`Button`,size:m,color:g,radius:c,width:x,disabled:!1,iconLeft:null,iconRight:null,imgSrc:null},argTypes:{size:{control:`select`,options:[E,m,h]},color:{control:`select`,options:[g,T,v,u,d,p,_]},radius:{control:`select`,options:[c,l]},width:{control:`select`,options:[x,f,w]},iconLeft:{control:`select`,options:[R,N,L]},iconRight:{control:`select`,options:[N,P,F,I]},imgSrc:{control:`select`,options:[`assets/webP/google.webP`]}}},V=Object.values(y),H={render:e=>({props:e,template:`
      <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: flex-end;
">
        ${V.map(e=>`
          <app-button
            text="Size: ${e.toUpperCase()}"
            size="${e}"
            iconLeft="${z}"
          ></app-button>
        `).join(``)}
      </div>
    `})},U=Object.values(S),W={render:e=>({props:e,template:`
      <div style="display: flex; gap: 16px; flex-wrap: wrap;">
        ${U.map(e=>`
          <app-button
            text="${e.toUpperCase()}"
            color="${e}"
            size="${MD}"
            ${e===IMAGE?`imgSrc="assets/webP/google.webp"`:``}
          ></app-button>
        `).join(``)}
      </div>
    `})},G={args:{iconLeft:N}},K={args:{iconRight:I}},q={args:{disabled:!0}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: args => ({
    props: args,
    template: \`
      <div style="display: flex; gap: 16px; flex-wrap: wrap;">
        \${colors.map(color => \`
          <app-button
            text="\${color.toUpperCase()}"
            color="\${color}"
            size="\${MD}"
            \${color === IMAGE ? \`imgSrc="assets/webP/google.webp"\` : ''}
          ></app-button>
        \`).join('')}
      </div>
    \`
  })
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    iconLeft: SEARCH
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    iconRight: ARROW_RIGHT
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...q.parameters?.docs?.source}}},J=[`Sizes`,`Colors`,`WithIconLeft`,`WithIconRight`,`Disabled`]}))();export{W as Colors,q as Disabled,H as Sizes,G as WithIconLeft,K as WithIconRight,J as __namedExportsOrder,B as default};