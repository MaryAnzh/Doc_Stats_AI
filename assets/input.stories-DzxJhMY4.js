import{n as e}from"./rolldown-runtime-D_-wTCJc.js";import{C as t,O as n,T as r,h as i,t as a,w as o}from"./constants-DYB6ioyk.js";import{n as s,t as c}from"./input-Q8_ftLoi.js";import{t as l}from"./iconsPicker-2iTjJOHW.js";var u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T;function init_input_stories(){return(init_input_stories=e((()=>{s(),a(),{SEARCH:u,SAVE:d,PLUS:f,CLOCK:p,CALENDAR:m}=l,{TEXT:h,EMAIL:g,PASSWORD:_}=t,v={title:`UI/Input`,component:c,argTypes:{value:{control:`text`},placeholder:{control:`text`},label:{control:`text`},errors:{control:`object`},iconLeft:{control:`select`,options:[u,f]},iconRight:{control:`select`,options:[d,p,m]},size:{control:`select`,options:[n,r,o]},disabled:{control:`boolean`},maxErrorCount:{control:`number`},valueType:{control:`select`,options:[h,g,_]}}},y={args:{label:`Email`,placeholder:`Enter email`,value:``,size:r,valueType:g,maxErrorCount:1}},b=Object.values(i),x={render:e=>({props:e,template:`
      <div style="display: flex; gap: 16px; flex-direction: column;">
        ${b.map(e=>`
          <app-input
          size="${e}"
          label="${`size-${e}`}"
          placeholder="${e.toUpperCase()}"
          iconLeft="${u}"
          ></app-input>
        `).join(``)}
      </div>
    `})},S={args:{label:`Search`,placeholder:`Search...`,iconLeft:u,iconRight:d,size:r,valueType:h,maxErrorCount:1}},C={args:{label:`Email (Focus on input to see error)`,placeholder:`Email`,errors:[`Invalid email format`],size:r,valueType:g,maxErrorCount:1}},w={args:{label:`Password (Focus on input to see error)`,placeholder:`Enter password`,errors:[`Minimum 8 characters`,`Must contain a digit`,`Must contain a special symbol`],size:r,valueType:_,maxErrorCount:4}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    placeholder: 'Enter email',
    value: '',
    size: MD,
    valueType: EMAIL,
    maxErrorCount: 1
  }
}`,...y.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => ({
    props: args,
    template: \`
      <div style="display: flex; gap: 16px; flex-direction: column;">
        \${sizes.map(size => \`
          <app-input
          size="\${size}"
          label="\${\`size-\${size}\`}"
          placeholder="\${size.toUpperCase()}"
          iconLeft="\${SEARCH}"
          ></app-input>
        \`).join('')}
      </div>
    \`
  })
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Search',
    placeholder: 'Search...',
    iconLeft: SEARCH,
    iconRight: SAVE,
    size: MD,
    valueType: TEXT,
    maxErrorCount: 1
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email (Focus on input to see error)',
    placeholder: 'Email',
    errors: ['Invalid email format'],
    size: MD,
    valueType: EMAIL,
    maxErrorCount: 1
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Password (Focus on input to see error)',
    placeholder: 'Enter password',
    errors: ['Minimum 8 characters', 'Must contain a digit', 'Must contain a special symbol'],
    size: MD,
    valueType: PASSWORD,
    maxErrorCount: 4
  }
}`,...w.parameters?.docs?.source}}},T=[`Default`,`Sizes`,`WithIcons`,`WithError`,`MultipleErrors`]})))()}init_input_stories();export{y as Default,w as MultipleErrors,x as Sizes,C as WithError,S as WithIcons,T as __namedExportsOrder,v as default};