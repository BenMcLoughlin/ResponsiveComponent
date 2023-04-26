import React from "react"
import "./Responsive.scss"

const Responsive = ({ minWidth, children }) => {
  return (
    <>
      <div className={`min-${minWidth}`}>{children(true)}</div>
      <div className={`max-${minWidth}`}>{children(false)}</div>
    </>
  )
}

export default Responsive
