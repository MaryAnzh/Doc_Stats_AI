import{i as e}from"./preload-helper-NjPQXrHM.js";import{C as t,E as n,F as r,Mn as i,N as a,Nn as o,V as s,W as c,w as l}from"./angular-platform-DF9yawsB.js";import{g as u,t as d}from"./constants-DliGPupS.js";var f,p=e((()=>{f=`<div class="input-wrapper" [class]="\`input--\${size()}\`">
  @if (label()) {
    <label class="input-label">{{ label() }}</label>
  }

  <div class="input-container">
    @if (iconLeft()) {
      <span class="input-icon left">
        <i class="bi" [class]="'bi-' + iconLeft()"></i>
      </span>
    }

    <input
      class="input-field"
      [placeholder]="placeholder()"
      [disabled]="disabled()"
      [value]="value()"
      (input)="onChangeValue($event.target.value)"
    />

    @if (iconRight()) {
      <span class="input-icon right">
        <i class="bi" [class]="'bi-' + iconRight()"></i>
      </span>
    }
  </div>

  @if (error()) {
    <div class="input-error">{{ error() }}</div>
  }
</div>
`})),m,h=e((()=>{m=`:host .input-wrapper{flex-direction:column;gap:6px;display:flex}:host .input-label{color:var(--base-90);font-size:14px}:host .input-container{align-items:center;display:flex;position:relative}:host .input-field{border:1px solid var(--base-40);background:var(--base-10);width:100%;color:var(--base-100);border-radius:6px;transition:border-color .2s}:host .input-field:focus{border-color:var(--accent-80);outline:none}:host .input-field:disabled{background:var(--base-20);cursor:not-allowed}:host .input-icon{color:var(--base-80);justify-content:center;align-items:center;display:flex;position:absolute}:host .input-icon.left{left:10px}:host .input-icon.right{right:10px}:host .input--sm .input-field{padding:4px 32px;font-size:14px}:host .input--sm .input-icon i{font-size:12px}:host .input--md .input-field{padding:6px 36px;font-size:16px}:host .input--md .input-icon i{font-size:14px}:host .input--lg .input-field{padding:10px 40px;font-size:18px}:host .input--lg .input-icon i{font-size:16px}:host .input-error{color:var(--error-80);font-size:13px}`})),g,_=e((()=>{o(),p(),h(),t(),d(),g=class InputComponent{value=n(``);placeholder=l(``);label=l(null);error=l(null);iconLeft=l(null);iconRight=l(null);size=l(u);disabled=l(!1);onChangeValue(e){this.value.update(()=>e)}static propDecorators={value:[{type:s,args:[{isSignal:!0,alias:`value`,required:!1}]},{type:c,args:[`valueChange`]}],placeholder:[{type:s,args:[{isSignal:!0,alias:`placeholder`,required:!1,transform:void 0}]}],label:[{type:s,args:[{isSignal:!0,alias:`label`,required:!1,transform:void 0}]}],error:[{type:s,args:[{isSignal:!0,alias:`error`,required:!1,transform:void 0}]}],iconLeft:[{type:s,args:[{isSignal:!0,alias:`iconLeft`,required:!1,transform:void 0}]}],iconRight:[{type:s,args:[{isSignal:!0,alias:`iconRight`,required:!1,transform:void 0}]}],size:[{type:s,args:[{isSignal:!0,alias:`size`,required:!1,transform:void 0}]}],disabled:[{type:s,args:[{isSignal:!0,alias:`disabled`,required:!1,transform:void 0}]}]}},g=i([r({selector:`app-input`,template:f,changeDetection:a.OnPush,styles:[m]})],g)}));export{_ as n,g as t};