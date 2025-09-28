// Kumpulan custom hooks                            // File utilitas hook kustom
import React from 'react'                           // Impor React

// useLocalStorage: state tersinkron dengan localStorage
export function useLocalStorage(key, initial){      // Terima key & nilai awal
  const [value, setValue] = React.useState(()=> {   // Inisialisasi lazy
    const raw = localStorage.getItem(key)           // Baca dari storage
    return raw ? JSON.parse(raw) : initial          // Parse atau pakai initial
  })                                                // Tutup useState
  React.useEffect(()=>{                              // Simpan perubahan
    localStorage.setItem(key, JSON.stringify(value))// Tulis ke storage
  }, [key, value])                                   // Depend key & value
  return [value, setValue]                           // Kembalikan pasangan
}                                                   // Tutup hook

// useEventListener: pasang pelepas event otomatis
export function useEventListener(target, type, handler){ // Pasang listener
  React.useEffect(()=>{                           // Saat mount / handler berubah
    if(!target?.addEventListener) return          // Guard
    target.addEventListener(type, handler)        // Tambah listener
    return ()=> target.removeEventListener(type, handler) // Cleanup
  }, [target, type, handler])                      // Dependensi
}                                                 // Tutup hook