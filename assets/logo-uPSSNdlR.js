import{i as e}from"./preload-helper-NjPQXrHM.js";import{D as t,M as n,T as r,b as i,gn as a,hn as o,x as s}from"./angular-platform-Bm_Kq8cw.js";var c,l=e((()=>{c={LIGHT:`light`,DARK:`dark`}})),u,d=e((()=>{u={DEFAULT:`DEFAULT`,SM:`SM`,MD:`MD`,LG:`LG`}})),f=e((()=>{l(),d()})),p,m=e((()=>{p=`<div [class]="logoSizeClass">
  <img src="assets/logo.webp" alt="DS AI Logo" class="logo-img" />
  @if (showText()) {
  <span class="logo-text">
    <span class="ds ds_desktop">Document Statistics</span>
    <span class="ds ds_mobile">DS</span>
    <span class="ai">AI</span>
  </span>
  }
</div>
`})),h,g=e((()=>{h=`:host .logo{align-items:flex-end;gap:10px;display:flex}:host .logo--small .logo-img{width:32px}:host .logo--small .logo-text .ds,:host .logo--small .logo-text .ai{font-size:18px}:host .logo-img{object-fit:contain;width:48px;height:auto}:host .logo-text{align-items:flex-end;gap:4px;display:flex}:host .logo-text .ds{color:var(--base-90);letter-spacing:.5px;font-size:24px;font-weight:300}:host .logo-text .ai{color:var(--accent-80);letter-spacing:.5px;font-size:24px;font-weight:700}:host .logo-text .ds_desktop{display:none}@media (width>=768px){:host .logo-text .ds_desktop{display:flex}}:host .logo-text .ds_mobile{display:flex}@media (width>=768px){:host .logo-text .ds_mobile{display:none}}`})),_,v,y,b=e((()=>{a(),m(),g(),i(),f(),{DEFAULT:_,SM:v}=u,y=class LogoComponent{showText=s(!0);size=s(_);logoSizeClass=this.size()===v?`logo logo--small`:`logo`;static propDecorators={showText:[{type:n,args:[{isSignal:!0,alias:`showText`,required:!1,transform:void 0}]}],size:[{type:n,args:[{isSignal:!0,alias:`size`,required:!1,transform:void 0}]}]}},y=o([t({selector:`app-logo`,imports:[],template:p,changeDetection:r.Eager,styles:[h]})],y)}));export{d as a,u as i,b as n,c as o,f as r,l as s,y as t};