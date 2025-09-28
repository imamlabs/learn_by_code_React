// Impor modul React & ReactDOM            // Baris ini memuat library inti React
import React from 'react'                  // Impor React
import { createRoot } from 'react-dom/client' // Impor API createRoot untuk React 18
import { BrowserRouter } from 'react-router-dom' // Impor router
import App from './App.jsx'                // Impor komponen utama App

// Ambil elemen root dari index.html        // Cari tempat mounting
const rootEl = document.getElementById('root') // Referensi DOM
const root = createRoot(rootEl)            // Buat root React

// Render aplikasi                          // Mulai render ke halaman
root.render(                               // Panggil render
  <React.StrictMode>                       {/* Mode ketat untuk dev check */}
    <BrowserRouter>                        {/* Sediakan context routing */}
      <App />                              {/* Render komponen App */}
    </BrowserRouter>                       {/* Tutup router */}
  </React.StrictMode>                      /* Tutup StrictMode */
)                                          // Selesai render