// Using D3
import React, { useRef, useEffect } from 'react';
import * as d3 from "d3";

const CircleD3 = () => {
  // uses a ref to store a reference to our rendered <svg> element
  const ref = useRef()

  // runs d3 code when the Component mounts
  useEffect(() => {
    // uses d3.select() to turn our ref into a d3 selection object
    const svgElement = d3.select(ref.current)
    // uses our d3 selection object to append a <circle> element
    svgElement.append("circle")
      .attr("cx", 150)
      .attr("cy", 70)
      .attr("r", 50)
  }, [])

  return (
    <svg
      ref={ref}
    />
  )
}

export default CircleD3;
