import{B as i}from"./Board-CoBXG4EH.js";import"./jsx-runtime-D_zvdyIk.js";import"./Square-Ctoxv2JR.js";const f={title:"Components/Board",component:i,argTypes:{onPlay:{action:"played"}},parameters:{screenshot:{delay:200,viewport:"1024x768"}}},e={args:{xIsNext:!0,squares:Array(9).fill(null)}},r={args:{xIsNext:!1,squares:["X","X","X","O","O",null,null,null,null]}},s={args:{xIsNext:!1,squares:["△","△","△","△","△","△","△","△","△"]}};var a,n,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    xIsNext: true,
    squares: Array(9).fill(null)
  }
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var t,l,u;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    xIsNext: false,
    squares: ['X', 'X', 'X', 'O', 'O', null, null, null, null]
  }
}`,...(u=(l=r.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var c,p,m;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    xIsNext: false,
    squares: ['△', '△', '△', '△', '△', '△', '△', '△', '△']
  }
}`,...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const X=["Default","WinnerX","Triangle"];export{e as Default,s as Triangle,r as WinnerX,X as __namedExportsOrder,f as default};
