      // File: Props Children - Tipe Anak
      // Catatan: JSX dieksekusi oleh Babel. React 18 menggunakan createRoot.

// Definisi fungsi/komponen 'OnlyString' — huruf besar = komponen React.
function OnlyString({children}){ if(typeof children!=='string') return <div>Harus teks</div>;
// Pernyataan JavaScript.
return <div>{children}</div>;
// Baris JavaScript.
}
// Membuat root React 18 (entry point render).
const root=ReactDOM.createRoot(document.getElementById('root'));
// Pernyataan JavaScript.
root.render(<><OnlyString>OK</OnlyString><OnlyString><b>Salah</b></OnlyString></>);
