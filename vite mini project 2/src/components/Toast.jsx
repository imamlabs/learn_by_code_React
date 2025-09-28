import React from 'react'                              // Impor React
import { createPortal } from 'react-dom'               // Impor portal

export default function Toast({message}){              // Komponen Toast
  const root = document.getElementById('portal-root')  // Ambil root portal
  return createPortal(                                 // Render ke portal
    <div style={{position:'fixed', right:12, bottom:12}}>
      <div className="card" style={{background:'#0d6efd', color:'#fff'}}>{message}</div> {/* Kartu toast */}
    </div>,
    root
  )
}