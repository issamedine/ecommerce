import React from 'react'

function ProductLayout({children}) {
  return (
    <div>
        <div>Nav</div>
      {children}
    </div>
  )
}

export default ProductLayout
