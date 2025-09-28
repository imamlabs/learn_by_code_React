// Impor React & router                                        // Untuk navigasi halaman
import React from 'react'                                      // React
import { Routes, Route, NavLink } from 'react-router-dom'      // API routing

// Impor provider context & halaman                             // Struktur aplikasi
import { ThemeProvider } from './context/ThemeContext.jsx'     // Provider tema (Context + useReducer)
import Dashboard from './pages/Dashboard.jsx'                  // Halaman Dashboard
const Tasks = React.lazy(()=> import('./pages/Tasks.jsx'))     // Lazy import halaman Tasks (Suspense)
const Students = React.lazy(()=> import('./pages/Students.jsx')) // Lazy import halaman Students
const EnrollWizard = React.lazy(()=> import('./pages/EnrollWizard.jsx')) // Lazy import Wizard

export default function App(){                                 // Komponen App
  return (                                                      // Kembalikan elemen
    <ThemeProvider>                                            {/* Bungkus dengan ThemeProvider */}
      <header>                                                 {/* Header tetap */}
        <b>Complex Mini Project</b>                            {/* Judul */}
        <nav>                                                  {/* Navigasi */}
          <NavLink to="/" end>Dashboard</NavLink>              {/* Link ke dashboard */}
          <NavLink to="/tasks">Tasks</NavLink>                 {/* Link tasks */}
          <NavLink to="/students">Students</NavLink>           {/* Link students */}
          <NavLink to="/enroll">Enroll</NavLink>               {/* Link wizard */}
        </nav>                                                 {/* Tutup nav */}
      </header>                                                {/* Tutup header */}
      <main>                                                   {/* Area konten */}
        <React.Suspense fallback={<div className="card">Memuat…</div>}> {/* Fallback lazy */}
          <Routes>                                             {/* Definisi rute */}
            <Route index element={<Dashboard/>} />             {/* / */}
            <Route path="tasks" element={<Tasks/>} />          {/* /tasks */}
            <Route path="students" element={<Students/>} />    {/* /students */}
            <Route path="enroll" element={<EnrollWizard/>} />  {/* /enroll */}
            <Route path="*" element={<div className="card">404</div>} /> {/* 404 */}
          </Routes>                                            {/* Tutup Routes */}
        </React.Suspense>                                      {/* Tutup Suspense */}
      </main>                                                  {/* Tutup main */}
    </ThemeProvider>                                           /* Tutup provider */
  )                                                            // Tutup return
}                                                              // Tutup App