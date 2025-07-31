import React from 'react'
import './Skincare.css'

const skincareCards = [
  { id: 1, label: "Cleanser" },
  { id: 2, label: "Toner" },
  { id: 3, label: "Essence" },
  { id: 4, label: "Serum" },
  { id: 5, label: "Cream" },
  { id: 6, label: "Mask" }
]

function Skincare() {
  return (
    <div className="skincare-wrapper">
      <div className="skincare-grid">
        {skincareCards.map((item) => (
          <div key={item.id} className="card">
            <span>{item.label}</span>
          </div>
        ))}
        <div className="center-text">cent</div>
      </div>
    </div>
  )
}

export default Skincare
