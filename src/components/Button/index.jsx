import React from 'react'

function Button(props) {
  return (
    <>
      <button className="border p-5 text-[1.1rem] font-semibold rounded-[10px] bg-cyan-900 text-white ">{props.btn} <i className="fa-solid fa-circle-right px-2"></i></button>

    </>
  )
}

export default Button
