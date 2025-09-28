import React from 'react'                                      // Impor React

export default function ChartLike({values}){                   // Komponen chart sederhana
  const max = Math.max(1, ...values)                           // Cari nilai maksimum
  return (                                                      // Kembalikan SVG
    <svg width="100%" height="100" viewBox="0 0 100 30" style={{background:'#f8f9fb', borderRadius:8}}> {/* SVG */}
      {values.map((v,i)=>{                                     // Map tiap nilai
        const h = (v/max)*28                                   // Skala tinggi
        const x = i*(100/values.length)                        // Posisi x
        const w = (100/values.length)-2                        // Lebar bar
        return <rect key={i} x={x+1} y={30-h} width={w} height={h} fill="#0d6efd" rx="1" /> // Satu bar
      })}                                                       {/* Tutup map */}
    </svg>                                                      /* Tutup SVG */
  )                                                             // Tutup return
}                                                               // Tutup ChartLike