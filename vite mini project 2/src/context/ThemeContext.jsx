import React from 'react'                                       // Impor React

// Buat context untuk tema                                      // Menyimpan state 'theme'
export const ThemeCtx = React.createContext()                    // Context kosong

// Reducer tema: toggling light/dark                            // Pola useReducer
function reducer(state, action){                                 // Terima state & action
  switch(action.type){                                           // Cek tipe
    case 'toggle': return state==='light'?'dark':'light'         // Toggle nilai
    case 'set': return action.value || 'light'                   // Set langsung
    default: return state                                        // Default
  }                                                              // Tutup switch
}                                                                // Tutup reducer

export function ThemeProvider({children}){                       // Komponen Provider
  const [theme, dispatch] = React.useReducer(reducer, 'light')   // State tema
  const value = React.useMemo(()=> ({theme, dispatch}), [theme]) // Memo agar referensi stabil
  React.useEffect(()=>{ document.body.dataset.theme = theme }, [theme]) // Terapkan ke body (atribut data-theme)
  return <ThemeCtx.Provider value={value}>{children}</ThemeCtx.Provider> // Kirim via provider
}                                                                // Tutup ThemeProvider

export function useTheme(){ return React.useContext(ThemeCtx) }  // Hook pembungkus untuk akses cepat