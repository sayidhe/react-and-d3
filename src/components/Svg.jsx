import React from 'react'

const Svg = () => {
  return (
    <svg style={{
      border: "10px solid black"
    }} viewBox="0 0 100 20">
      <text
        style={{
          fontSize:"10",
          fontWeight:"bold",
          fill:"black"
        }}
        x="2" y="13"
      >React and D3
      </text>
    </svg>
  )
}

export default Svg;
