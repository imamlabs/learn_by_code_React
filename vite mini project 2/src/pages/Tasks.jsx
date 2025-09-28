import React from 'react'                                   // Impor React
import Modal from '../components/Modal.jsx'                 // Komponen modal (portal)
import { useLocalStorage } from '../lib/hooks.js'           // Hook localStorage

// Context + reducer untuk tasks                              // State global halaman ini
const TasksCtx = React.createContext(null)                  // Buat context tasks

function reducer(state, action){                             // Reducer untuk operasi CRUD
  switch(action.type){                                       // Cek tipe action
    case 'add': return [...state, {id:Date.now(), text:action.text, done:false}] // Tambah
    case 'toggle': return state.map(t=> t.id===action.id? {...t, done:!t.done} : t) // Toggle
    case 'remove': return state.filter(t=> t.id!==action.id) // Hapus
    default: return state                                    // Default
  }                                                          // Tutup switch
}                                                            // Tutup reducer

export default function Tasks(){                             // Halaman Tasks
  const [persist, setPersist] = useLocalStorage('tasks', []) // Array tasks tersimpan
  const [state, dispatch] = React.useReducer(reducer, persist) // Reducer dari persist
  const [text, setText] = React.useState('')                 // Input teks
  const [open, setOpen] = React.useState(false)              // Modal tambah

  React.useEffect(()=> setPersist(state), [state])           // Sinkronkan ke localStorage

  const left = state.filter(t=>!t.done).length               // Hitung sisa aktif

  function add(){                                            // Tambah task
    const v = text.trim()                                    // Bersihkan spasi
    if(!v) return                                            // Kosong? batal
    dispatch({type:'add', text:v})                           // Dispatch add
    setText('')                                              // Reset input
    setOpen(false)                                           // Tutup modal
  }                                                          // Tutup add

  return (                                                   // UI
    <TasksCtx.Provider value={dispatch}>                     {/* Sediakan dispatch */}
      <div className="card">                                 {/* Kartu */}
        <div className="row" style={{justifyContent:'space-between'}}> {/* Baris header */}
          <h2>Tasks</h2>                                     {/* Judul */}
          <div className="row">                              {/* Aksi */}
            <span className="badge">{left} aktif</span>      {/* Lencana */}
            <button className="btn" onClick={()=>setOpen(true)}>Tambah</button> {/* Buka modal */}
          </div>                                             {/* Tutup aksi */}
        </div>                                               {/* Tutup baris */}
        <table>                                              {/* Tabel */}
          <thead><tr><th>Status</th><th>Judul</th><th>Aksi</th></tr></thead> {/* Header */}
          <tbody>                                            {/* Body */}
            {state.map(item => <Row key={item.id} item={item} />)} {/* Baris */}
          </tbody>                                           {/* Tutup body */}
        </table>                                             {/* Tutup tabel */}
      </div>                                                 {/* Tutup kartu */}

      <Modal open={open} onClose={()=>setOpen(false)}>       {/* Modal tambah */}
        <h3>Tambah Task</h3>                                 {/* Judul modal */}
        <div className="row">                                {/* Input */}
          <input value={text} onChange={e=>setText(e.target.value)} placeholder="nama tugas" /> {/* Input */}
          <button className="btn" onClick={add}>Simpan</button> {/* Simpan */}
        </div>                                               {/* Tutup row */}
      </Modal>                                               {/* Tutup modal */}
    </TasksCtx.Provider>                                     /* Tutup provider */
  )                                                          // Tutup return
}                                                            // Tutup Tasks

function Row({item}){                                        // Komponen baris tabel
  const dispatch = React.useContext(TasksCtx)                // Ambil dispatch
  return (                                                   // Kembalikan tr
    <tr>                                                     {/* Baris tabel */}
      <td><input type="checkbox" checked={item.done} onChange={()=>dispatch({type:'toggle', id:item.id})}/></td> {/* Checkbox */}
      <td style={{textDecoration: item.done?'line-through':'none'}}>{item.text}</td> {/* Judul */}
      <td><button className="btn danger" onClick={()=>dispatch({type:'remove', id:item.id})}>Hapus</button></td> {/* Hapus */}
    </tr>                                                    /* Tutup tr */
  )                                                          // Tutup return
}                                                            // Tutup Row