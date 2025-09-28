import React from 'react'                              // Impor React
import { createPortal } from 'react-dom'               // Impor portal

export default function Modal({open, onClose, children}){ // Komponen Modal
  if(!open) return null                                // Jika tidak terbuka, tidak render
  const root = document.getElementById('portal-root')  // Target portal
  return createPortal(                                 // Render ke portal root
    <div onClick={onClose} style={{position:'fixed', inset:0, background:'rgba(0,0,0,.35)'}}> {/* Overlay */}
      <div onClick={e=>e.stopPropagation()} className="card" style={{maxWidth:420, margin:'10% auto', background:'#fff'}}> {/* Konten */}
        {children}                                     {/* Isi modal */}
        <div className="row" style={{justifyContent:'end'}}>
          <button className="btn ghost" onClick={onClose}>Tutup</button> {/* Tombol tutup */}
        </div>                                         {/* Tutup row */}
      </div>                                           {/* Tutup konten */}
    </div>,                                            // Tutup overlay
    root                                               // Node tujuan
  )                                                    // Tutup createPortal
}                                                      // Tutup Modal