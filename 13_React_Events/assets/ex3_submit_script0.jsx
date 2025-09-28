      // File: React Events - onSubmit
      // Catatan: JSX dieksekusi oleh Babel. React 18 menggunakan createRoot.

// Definisi fungsi/komponen 'App' — huruf besar = komponen React.
function App(){ function submit(e){ e.preventDefault();
// Pernyataan JavaScript.
alert('Form disubmit');
// Pernyataan JavaScript.
} return <form onSubmit={submit}><button type="submit">Kirim</button></form>;
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<App/>);
