// Impor React dan komponen router               // Untuk routing antar-halaman
import React from 'react'                         // React
import { Routes, Route, Link, NavLink } from 'react-router-dom' // API routing

// Impor halaman mini-project                    // Empat mini proyek
import Todo from './pages/Todo.jsx'               // Halaman Todo
import Users from './pages/Users.jsx'             // Halaman Users
import Wizard from './pages/Wizard.jsx'           // Halaman Wizard
import Quiz from './pages/Quiz.jsx'               // Halaman Quiz

// Gaya sederhana inline                         // CSS minimal via objek JS
const navStyle = {                                // Objek style untuk navbar
  display: 'flex', gap: '10px', padding: '12px', // Properti flex dan spasi
  borderBottom: '1px solid #ddd'                 // Garis bawah
}                                                 // Tutup objek

export default function App(){                    // Deklarasi komponen App
  return (                                        // Kembalikan elemen JSX
    <div>                                         {/* Pembungkus utama */}
      <nav style={navStyle}>                      {/* Navigasi atas */}
        <b>React Practice (JS)</b>                {/* Judul aplikasi */}
        <NavLink to="/" end>Home</NavLink>        {/* Link ke Home */}
        <NavLink to="/todo">Todo</NavLink>        {/* Link ke Todo */}
        <NavLink to="/users">Users</NavLink>      {/* Link ke Users */}
        <NavLink to="/wizard">Wizard</NavLink>    {/* Link ke Wizard */}
        <NavLink to="/quiz">Quiz</NavLink>        {/* Link ke Quiz */}
      </nav>                                      {/* Tutup nav */}

      <div style={{padding: '16px'}}>             {/* Konten halaman */}
        <Routes>                                  {/* Definisi rute */}
          <Route index element={<Home/>} />       {/* Route default (/) */}
          <Route path="todo" element={<Todo/>} /> {/* Route /todo */}
          <Route path="users" element={<Users/>} /> {/* Route /users */}
          <Route path="wizard" element={<Wizard/>} /> {/* Route /wizard */}
          <Route path="quiz" element={<Quiz/>} /> {/* Route /quiz */}
          <Route path="*" element={<NotFound/>} /> {/* 404 */}
        </Routes>                                 {/* Tutup Routes */}
      </div>                                      {/* Tutup konten */}
    </div>                                        /* Tutup pembungkus */
  )                                               // Tutup return
}                                                 // Tutup App

function Home(){                                  // Komponen Home sederhana
  return (                                        // Kembalikan JSX
    <div>                                         {/* Kontainer */}
      <h1>Selamat datang!</h1>                    {/* Judul */}
      <p>Pilih salah satu mini project di navbar.</p> {/* Instruksi */}
    </div>                                        /* Tutup kontainer */
  )                                               // Tutup return
}                                                 // Tutup Home

function NotFound(){                              // Komponen 404
  return <div>Halaman tidak ditemukan.</div>      // Teks sederhana
}                                                 // Tutup NotFound