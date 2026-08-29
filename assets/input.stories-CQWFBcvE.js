import{i as e}from"./preload-helper-NjPQXrHM.js";import{g as t,h as n,p as r,t as i,y as a}from"./constants-DliGPupS.js";import{n as o,t as s}from"./input-nVgRPsFS.js";var c,l,u,d,f,p,m,h,g,_,v;e((()=>{o(),i(),{SEARCH:c,SAVE:l,PLUS:u,CLOCK:d,CALENDAR:f}=r,p={title:`UI/Input`,component:s,argTypes:{value:{control:`text`},placeholder:{control:`text`},label:{control:`text`},error:{control:`text`},iconLeft:{control:`select`,options:[c,u]},iconRight:{control:`select`,options:[l,d,f]},size:{control:`select`,options:[a,t,n]},disabled:{control:`boolean`}}},m={args:{label:`Email`,placeholder:`Enter email`,value:``,size:t}},h={args:{label:`Search`,placeholder:`Search...`,iconLeft:c,iconRight:l,size:t}},g={args:{label:`Email`,placeholder:`Enter email`,error:`Invalid email format`,size:t}},_={args:{label:`Full Name`,placeholder:`Alice`,size:n}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    placeholder: 'Enter email',
    value: '',
    size: MD
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Search',
    placeholder: 'Search...',
    iconLeft: SEARCH,
    iconRight: SAVE,
    size: MD
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    placeholder: 'Enter email',
    error: 'Invalid email format',
    size: MD
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Full Name',
    placeholder: 'Alice',
    size: LG
  }
}`,..._.parameters?.docs?.source}}},v=[`Default`,`WithIcons`,`WithError`,`Large`]}))();export{m as Default,_ as Large,g as WithError,h as WithIcons,v as __namedExportsOrder,p as default};