      // File: React CSS-in-JS - Factory sederhana
      // Catatan: JSX dieksekusi oleh Babel.

// Pernyataan JavaScript.
const styled = tag => (styles) => (props) => React.createElement(tag, {style: styles(props)}, props.children);
// Pernyataan JavaScript.
const Button = styled('button')(p=>({background:p.primary?'#0d6efd':'#6c757d',color:'#fff',border:'0',padding:'8px 12px',borderRadius:'8px'}));
// Mulai blok render UI (JSX) dari komponen.
function App(){ return (<div><Button primary>Primary</Button> <Button>Sekunder</Button></div>);
{/* Baris JavaScript. */}
}
{/* Membuat root React 18 (entry point render). */}
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
