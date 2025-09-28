import React from 'react'                          // Impor React

// Buat context untuk distribusi dispatch          // Agar child bisa mengakses dispatch
const TodoCtx = React.createContext(null)          // Context untuk dispatch

// Reducer state todo                              // Aturan perubahan state
function reducer(state, action){                   // Terima state & action
  switch(action.type){                             // Cek tipe action
    case 'add':                                    // Tambah item
      return [...state, {id: Date.now(), text: action.text, done: false}] // Kembalikan array baru
    case 'toggle':                                 // Toggle selesai
      return state.map(t => t.id===action.id ? {...t, done: !t.done} : t) // Toggle by id
    case 'remove':                                 // Hapus item
      return state.filter(t => t.id!==action.id)   // Saring selain id
    case 'load':                                   // Muat awal
      return action.payload                        // Gunakan payload
    default:                                       // Default
      return state                                 // Tanpa perubahan
  }                                                // Tutup switch
}                                                  // Tutup reducer

// Hook kustom untuk persist ke localStorage       // Simpan & baca otomatis
function usePersistedTodos(key){                   // Terima key storage
  const [state, dispatch] = React.useReducer(reducer, []) // Reducer kosong
  React.useEffect(()=>{                            // Saat mount
    const saved = JSON.parse(localStorage.getItem(key) || '[]') // Ambil data tersimpan
    dispatch({type: 'load', payload: saved})       // Dispatch muat awal
  }, [key])                                        // Hanya saat key berubah
  React.useEffect(()=>{                            // Simpan tiap perubahan
    localStorage.setItem(key, JSON.stringify(state)) // Tulis ke storage
  }, [key, state])                                 // Depend key & state
  return [state, dispatch]                         // Kembalikan pasangan
}                                                  // Tutup hook

export default function Todo(){                    // Komponen halaman Todo
  const [todos, dispatch] = usePersistedTodos('todos') // State persisten
  const [text, setText] = React.useState('')       // State input teks
  const [filter, setFilter] = React.useState('all')// State filter
  const left = todos.filter(t=>!t.done).length     // Hitung sisa aktif

  function add(){                                  // Tambah item baru
    const v = text.trim()                          // Trim spasi
    if(!v) return                                  // Jika kosong, batal
    dispatch({type: 'add', text: v})               // Dispatch add
    setText('')                                    // Kosongkan input
  }                                                // Tutup add

  const shown = todos.filter(t =>                  // Tentukan mana yg ditampilkan
    filter==='all' ? true : filter==='active' ? !t.done : t.done // Logika filter
  )                                                // Tutup filter

  return (                                         // Kembalikan UI
    <TodoCtx.Provider value={dispatch}>            {/* Bagikan dispatch */}
      <div className="card">                       {/* Kartu */}
        <div style={{display:'flex', gap:8}}>      {/* Baris input */}
          <input value={text} onChange={e=>setText(e.target.value)} placeholder="tugas..." /> {/* Input */}
          <button onClick={add}>Tambah</button>    {/* Tombol tambah */}
          <span style={{background:'#f2f2f2', padding:'2px 8px', borderRadius:999}}>{left} aktif</span> {/* Badge */}
        </div>                                     {/* Tutup baris */}

        <div style={{marginTop:8, display:'flex', gap:8}}> {/* Baris filter */}
          <label>Filter</label>                    {/* Label */}
          <select value={filter} onChange={e=>setFilter(e.target.value)}> {/* Select */}
            <option value="all">Semua</option>     {/* Opsi */}
            <option value="active">Aktif</option>  {/* Opsi */}
            <option value="done">Selesai</option>  {/* Opsi */}
          </select>                                 {/* Tutup select */}
        </div>                                      {/* Tutup baris filter */}

        <ul>                                        {/* Daftar todo */}
          {shown.map(t => <Item key={t.id} todo={t} />)} {/* Render item */}
        </ul>                                       {/* Tutup daftar */}
      </div>                                        {/* Tutup kartu */}
    </TodoCtx.Provider>                             /* Tutup provider */
  )                                                 // Tutup return
}                                                   // Tutup Todo

function Item({todo}){                              // Komponen item
  const dispatch = React.useContext(TodoCtx)        // Ambil dispatch dari context
  return (                                          // Kembalikan JSX
    <li style={{display:'flex', alignItems:'center', gap:8}}> {/* Satu baris */}
      <label style={{display:'flex', alignItems:'center', gap:6, flex:1}}> {/* Label */}
        <input type="checkbox" checked={todo.done} onChange={()=>dispatch({type:'toggle', id:todo.id})} /> {/* Toggle */}
        <span style={{textDecoration: todo.done?'line-through':'none'}}>{todo.text}</span> {/* Teks */}
      </label>                                      {/* Tutup label */}
      <button onClick={()=>dispatch({type:'remove', id:todo.id})}>Hapus</button> {/* Hapus */}
    </li>                                           /* Tutup li */
  )                                                 // Tutup return
}                                                   // Tutup Item