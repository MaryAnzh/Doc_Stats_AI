import{n as e}from"./rolldown-runtime-D_-wTCJc.js";import{B as t,E as n,I as r,O as i,R as a,T as o,Tn as s,Tt as c,V as l,W as u,k as d,kt as f,q as p,xn as m,xt as h}from"./angular-platform-BKCw3s3D.js";import{C as g,T as _,t as v}from"./constants-DYB6ioyk.js";var y;function init_typography(){return(init_typography=e((()=>{y={headingXXL:{size:`59px`,lineHeight:`120%`,letterSpacing:`-2.36px`,weight:800},headingXL:{size:`48px`,lineHeight:`60px`,letterSpacing:`-1.92px;`,weight:800},headingExtra:{size:`35px`,lineHeight:`42px`,letterSpacing:`-1.4px`,weight:800},headingMedium:{size:`40px`,lineHeight:`54px`,letterSpacing:`-1.6px`,weight:500},headingMMedium:{size:`32px`,lineHeight:`38px`,letterSpacing:`-1.28px`,weight:500},headingMRegular:{size:`32px`,lineHeight:`38px`,letterSpacing:`-1.28px`,weight:400},headingSMedium:{size:`22px`,lineHeight:`28px`,letterSpacing:`-0.66px`,weight:500},headingSRegular:{size:`22px`,lineHeight:`28px`,letterSpacing:`-0.66px`,weight:400},bodyMMedium:{size:`18px`,lineHeight:`22px`,letterSpacing:`-0.18px`,weight:500},bodyMRegular:{size:`18px`,lineHeight:`22px`,letterSpacing:`-0.18px`,weight:400},bodyMedium:{size:`16px`,lineHeight:`20px`,letterSpacing:`normal`,weight:500},bodySMedium:{size:`14px`,lineHeight:`20px`,letterSpacing:`normal`,weight:500},bodySRegular:{size:`14px`,lineHeight:`20px`,letterSpacing:`-0.14px`,weight:400},descriptionXSMedium:{size:`12px`,lineHeight:`14px`,letterSpacing:`normal`,weight:500},descriptionXSRegular:{size:`12px`,lineHeight:`14px`,letterSpacing:`normal`,weight:400},descriptionXXSMedium:{size:`10px`,lineHeight:`12px`,letterSpacing:`normal`,weight:500},descriptionXXSRegular:{size:`10px`,lineHeight:`12px`,letterSpacing:`normal`,weight:400},descriptionExtraSmallRegular:{size:`8px`,lineHeight:`10px`,letterSpacing:`normal`,weight:400}}})))()}var b;function init_vite_plugin_angular_raw_RDovZGV2ZWxvcG1lbnQvcHJvamVjdHNfaG9zdGVyL0RvY19TdGF0c19BSS9zcmMvYXBwL3NoYXJlZC91aS9pbnB1dC9pbnB1dC5odG1s(){return(init_vite_plugin_angular_raw_RDovZGV2ZWxvcG1lbnQvcHJvamVjdHNfaG9zdGVyL0RvY19TdGF0c19BSS9zcmMvYXBwL3NoYXJlZC91aS9pbnB1dC9pbnB1dC5odG1s=e((()=>{b=`@let isLeftIcon = iconLeft();
@let isRightIcon = iconRight();

<div class="input-wrap" [class]="\`input--\${size()} \${disabled() ? 'input-disabled' : ''}\`">
  @if (label()) {
    <label class="input-label">{{ label() }}</label>
  }

  <div
    class="input-container"
    [class]="{
      'left-icon': isLeftIcon && !isRightIcon,
      'right-icon': isRightIcon && !isLeftIcon,
      'left-right-icon': isLeftIcon && isRightIcon,
    }"
  >
    @if (iconLeft()) {
      <span class="input-icon">
        <i class="bi" [class]="'bi-' + iconLeft()"></i>
      </span>
    }

    <input
      class="input-field"
      [placeholder]="placeholder()"
      [value]="value()"
      [type]="valueType()"
      (input)="handleChangeValue($event.target.value)"
      (focus)="handleFocus()"
      (blur)="handleBlur()"
    />

    @if (iconRight()) {
      <span class="input-icon">
        <i class="bi" [class]="'bi-' + iconRight()"></i>
      </span>
    }
  </div>

  <div class="errors-wrap" [style]="{ height: 16 * maxErrorCount() + 'px' }">
    @if (showErrors()) {
      @for (err of errors(); track $index) {
        <p
          class="input-error"
          animate.enter="input-enter"
          animate.leave="input-leave"
          appTypography
          variant="descriptionXXSMedium"
        >
          {{ err }}
        </p>
      }
    }
  </div>
</div>
`})))()}var x;function init_input(){return(init_input=e((()=>{x=`:host .input-wrap{flex-direction:column;display:flex}:host .input-wrap .input-label{color:var(--base-90)}:host .input-wrap .input-container{border:1px solid var(--base-40);background:var(--base-10);border-radius:6px;grid-template-rows:max-content;align-items:center;width:100%;display:grid}:host .input-wrap .input-container:focus-within{border-color:var(--accent-80)}:host .input-wrap .input-container .input-field{width:100%;color:var(--base-100);background:0 0;border:none;outline:none}:host .input-wrap .input-container .input-field:focus{border:none;outline:none}:host .input-wrap .input-container .input-icon{color:var(--base-80);justify-content:center;align-items:center;display:flex}:host .input-wrap .left-icon{grid-template-columns:max-content auto}:host .input-wrap .right-icon{grid-template-columns:auto max-content}:host .input-wrap .left-right-icon{grid-template-columns:max-content auto max-content}:host .input-wrap .errors-wrap{width:100%;min-width:16px}:host .input-wrap .errors-wrap .input-error{min-height:16px;color:var(--error-80);align-items:center;display:flex}:host .input-disabled{opacity:.8;pointer-events:none}:host .input--sm{gap:4px}:host .input--sm .input-label{font-size:12px}:host .input--sm .input-container{gap:8px;padding:4px 8px;font-size:14px}:host .input--sm .input-icon i{font-size:12px}:host .input--sm .input-error{font-size:10px}:host .input--md{gap:6px}:host .input--md .input-label{font-size:14px}:host .input--md .input-container{gap:10px;padding:6px 10px;font-size:16px}:host .input--md .input-icon i{font-size:14px}:host .input--md .input-error{font-size:12px}:host .input--lg{gap:8px}:host .input--lg .input-label{font-size:16px}:host .input--lg .input-container{gap:12px;padding:10px 14px;font-size:18px}:host .input--lg .input-icon i{font-size:16px}:host .input--lg .input-error{font-size:14px}@media (width<=768px){:host .input--md{gap:4px}:host .input--md .input-label{font-size:12px}:host .input--md .input-container{gap:8px;padding:4px 8px;font-size:14px}:host .input--md .input-icon i{font-size:12px}:host .input--md .input-error{font-size:10px}:host .input--lg{gap:6px}:host .input--lg .input-label{font-size:14px}:host .input--lg .input-container{gap:10px;padding:6px 10px;font-size:16px}:host .input--lg .input-icon i{font-size:14px}:host .input--lg .input-error{font-size:12px}}:host .input-enter{animation:.3s forwards show-error}:host .input-leave{animation:.3s reverse forwards show-error}@keyframes show-error{0%{opacity:0}to{opacity:1}}`})))()}var S;function init_typography$1(){return(init_typography$1=e((()=>{s(),o(),v(),S=class TypographyDirective{variant=n(`bodySMedium`);el=c(l);constructor(){h(()=>{let e=y[this.variant()];this.el.nativeElement.style.fontSize=e.size,this.el.nativeElement.style.lineHeight=e.lineHeight,this.el.nativeElement.style.letterSpacing=e.letterSpacing,this.el.nativeElement.style.fontWeight=e.weight.toString()})}static ctorParameters=()=>[];static propDecorators={variant:[{type:u,args:[{isSignal:!0,alias:`variant`,required:!1,transform:void 0}]}]}},S=m([t({selector:`[appTypography]`,standalone:!0})],S)})))()}var C;function init_input$1(){return(init_input$1=e((()=>{s(),init_vite_plugin_angular_raw_RDovZGV2ZWxvcG1lbnQvcHJvamVjdHNfaG9zdGVyL0RvY19TdGF0c19BSS9zcmMvYXBwL3NoYXJlZC91aS9pbnB1dC9pbnB1dC5odG1s(),init_input(),o(),v(),init_typography$1(),C=class InputComponent{value=i(``);placeholder=n(``);label=n(null);errors=n(null);iconLeft=n(null);iconRight=n(null);size=n(_);maxErrorCount=n(1);valueType=n(g.TEXT);disabled=n(!1);onFocus=d();onBlur=d();showErrors=f(!1);handleChangeValue(e){this.value.update(()=>e)}handleFocus(){this.showErrors.set(!0),this.onFocus.emit()}handleBlur(){this.showErrors.set(!1),this.onBlur.emit()}static propDecorators={value:[{type:u,args:[{isSignal:!0,alias:`value`,required:!1}]},{type:p,args:[`valueChange`]}],placeholder:[{type:u,args:[{isSignal:!0,alias:`placeholder`,required:!1,transform:void 0}]}],label:[{type:u,args:[{isSignal:!0,alias:`label`,required:!1,transform:void 0}]}],errors:[{type:u,args:[{isSignal:!0,alias:`errors`,required:!1,transform:void 0}]}],iconLeft:[{type:u,args:[{isSignal:!0,alias:`iconLeft`,required:!1,transform:void 0}]}],iconRight:[{type:u,args:[{isSignal:!0,alias:`iconRight`,required:!1,transform:void 0}]}],size:[{type:u,args:[{isSignal:!0,alias:`size`,required:!1,transform:void 0}]}],maxErrorCount:[{type:u,args:[{isSignal:!0,alias:`maxErrorCount`,required:!1,transform:void 0}]}],valueType:[{type:u,args:[{isSignal:!0,alias:`valueType`,required:!1,transform:void 0}]}],disabled:[{type:u,args:[{isSignal:!0,alias:`disabled`,required:!1,transform:void 0}]}],onFocus:[{type:p,args:[`onFocus`]}],onBlur:[{type:p,args:[`onBlur`]}]}},C=m([a({selector:`app-input`,template:b,changeDetection:r.OnPush,imports:[S],styles:[x]})],C)})))()}export{init_input$1 as n,init_typography as r,C as t};