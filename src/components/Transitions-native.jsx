import React, { useRef, useEffect, useState } from 'react';
import {useSpring, animated} from 'react-spring';
import useInterval from '@use-it/interval';

const AnimatedCirclesNative = () => {

  const allCircles = [0, 1, 2, 3, 4, 5]

  const generateCircles = () => (
    Array.from(Array(Math.floor(Math.random() * 6)).keys())
  )

  const [visibleCircles, setVisibleCircles] = useState(
    generateCircles()
  )

  // allCircles.map(d => (console.log(d)))
  console.log(generateCircles())
  console.log(visibleCircles)
  console.log(visibleCircles.includes(1))

  useInterval(() => {
    setVisibleCircles(generateCircles())
  }, 2000)

  return (
    <svg viewBox="0 0 100 20">
      {allCircles.map(d => (
        <AnimatedCircle
          key={d}
          index={d}
          isShowing={visibleCircles.includes(d)}
        />
      ))}
    </svg>
  )
}

const AnimatedCircle = ({ index, isShowing }) => {
  const wasShowing = useRef(false)

  useEffect(() => {
    wasShowing.current = isShowing
  }, [isShowing])

  const style = useSpring({
    config: {
      duration: 1200,
    },
    r: isShowing ? 6 : 0,
    opacity: isShowing ? 1 : 0,
  })

  return (
    <animated.circle {...style}
      cx={index * 15 + 10}
      cy="10"
      fill={
        !isShowing          ? "tomato" :
        !wasShowing.current ? "cornflowerblue" :
                              "lightgrey"
      }
    />
  )
}

export default AnimatedCirclesNative
