import React from 'react'
import { useStyletron } from 'baseui'

export default function({setModalOpen}) {
  const [useCSS] = useStyletron()

  return (
    <div onClick={() => setModalOpen(true)} className={useCSS({
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      height: '80%',
      overflow: 'hidden',
      'z-index': -100})}>
        <div className={useCSS({
          background: 'rgba(255, 255, 255, 0.8)',
          position: 'absolute',
          bottom: '0',
          width: '100%',
          padding: '10px',
          'z-index': 1,
          color: '#7cad67'
        })}>
          <marquee scrollamount="20">
            <h1>Wow! You can do everything! How to Hike! How to pour Milk! How to eat ice cream! How to drive trains! How to scientist! We'll teach you everything!</h1></marquee>
        </div>
        <div className={useCSS({
          position: 'absolute',
          top: '0',
          height: '100vh',
          width: '100%',
          pointerEvents: 'none',
        })}>
          <iframe frameborder="0"
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/HOz34_2Z-mw?autoplay=1&controls=0&mute=1&loop=1&list=PLmUBwxvdqHq-2La24tH5J55DwBdUwZno" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </div>
    </div>
  )
}
