import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./index-D4lIrffr.js";import{B as I}from"./Board-CoBXG4EH.js";import{w as j,u as s,e as S}from"./index-CIfn4WAl.js";import"./Square-Ctoxv2JR.js";function T(){const[a,n]=p.useState([Array(9).fill(null)]),[e,c]=p.useState(0),o=e%2===0,W=a[e];function N(i){const r=[...a.slice(0,e+1),i];n(r),c(r.length-1)}function C(i){c(i)}const R=a.map((i,r)=>{const D=r>0?"Go to move #"+r:"Go to game start";return t.jsx("li",{children:t.jsx("button",{onClick:()=>C(r),children:D})},r)});return t.jsxs("div",{className:"game",children:[t.jsx("div",{className:"game-board",children:t.jsx(I,{xIsNext:o,squares:W,onPlay:N})}),t.jsx("div",{className:"game-info",children:t.jsx("ol",{children:R})})]})}T.__docgenInfo={description:"",methods:[],displayName:"Game"};const _={title:"Components/Game",component:T,parameters:{layout:"centered"}},l={args:{}},u={args:{},decorators:[a=>t.jsx("div",{style:{padding:"2rem",backgroundColor:"#f5f5f5",borderRadius:"8px"},children:t.jsx(a,{})})]},m={args:{},play:async({canvasElement:a})=>{const n=j(a),e=n.getAllByRole("button").filter(o=>o.className==="square");await s.click(e[0]),await s.click(e[3]),await s.click(e[1]),await s.click(e[4]),await s.click(e[2]);const c=n.getByText(/Winner: X/i);S(c).toBeInTheDocument()}},d={args:{},play:async({canvasElement:a})=>{const n=j(a),e=n.getAllByRole("button").filter(o=>o.className==="square");await s.click(e[0]),await s.click(e[4]),await s.click(e[5]),await s.click(e[2]),await s.click(e[7]),await s.click(e[6]);const c=n.getByText(/Winner: O/i);S(c).toBeInTheDocument()}};var y,v,g;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {}
}`,...(g=(v=l.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var E,w,x;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {},
  decorators: [Story => <div style={{
    padding: '2rem',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px'
  }}>
        <Story />
      </div>]
}`,...(x=(w=u.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var k,f,q;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {},
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const squares = canvas.getAllByRole('button').filter((button: HTMLElement) => button.className === 'square');

    // 横一列を完成させるためのクリックシーケンス（Xが勝利）
    await userEvent.click(squares[0]);
    await userEvent.click(squares[3]);
    await userEvent.click(squares[1]);
    await userEvent.click(squares[4]);
    await userEvent.click(squares[2]);
    const statusElement = canvas.getByText(/Winner: X/i);
    expect(statusElement).toBeInTheDocument();
  }
}`,...(q=(f=m.parameters)==null?void 0:f.docs)==null?void 0:q.source}}};var h,b,B;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {},
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const squares = canvas.getAllByRole('button').filter((button: HTMLElement) => button.className === 'square');

    // 斜めを完成させるためのクリックシーケンス（Oが勝利）
    await userEvent.click(squares[0]);
    await userEvent.click(squares[4]);
    await userEvent.click(squares[5]);
    await userEvent.click(squares[2]);
    await userEvent.click(squares[7]);
    await userEvent.click(squares[6]);
    const statusElement = canvas.getByText(/Winner: O/i);
    expect(statusElement).toBeInTheDocument();
  }
}`,...(B=(b=d.parameters)==null?void 0:b.docs)==null?void 0:B.source}}};const H=["Default","WithCustomStyle","XPlayerWins","OPlayerWins"];export{l as Default,d as OPlayerWins,u as WithCustomStyle,m as XPlayerWins,H as __namedExportsOrder,_ as default};
