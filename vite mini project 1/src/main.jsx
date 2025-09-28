// Impor React & ReactDOM untuk membuat aplikasi  // komentar: impor library inti
import React from 'react'                         // Impor React
import { createRoot } from 'react-dom/client'     // Impor API createRoot dari react-dom/client
import { BrowserRouter } from 'react-router-dom'  // Impor router berbasis History API
import App from './App.jsx'                       // Impor komponen utama App

// Temukan elemen root di index.html             // Cari node untuk mount
const rootEl = document.getElementById('root')    // Ambil elemen dengan id 'root'
const root = createRoot(rootEl)                   // Buat root React 18

// Render aplikasi di dalam BrowserRouter         // Bungkus App dengan router
root.render(                                      // Mulai proses render
  <React.StrictMode>                              {/* Mode ketat untuk pengecekan dev */}
    <BrowserRouter>                               {/* Router untuk navigasi */}
      <App />                                     {/* Komponen App */}
    </BrowserRouter>                              {/* Tutup router */}
  </React.StrictMode>                             /* Tutup StrictMode */
)                                                 // Selesai render