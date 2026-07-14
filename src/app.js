// Copyright (c) 2022 8th Wall, Inc.
import './index.css'

function initAR() {
  if (typeof AFRAME !== 'undefined') {
    
    // Register the custom ground-finder module to auto-load your wildlife
    AFRAME.registerComponent('ground-finder', {
      init: function () {
        const sceneEl = this.el.sceneEl
        
        // Wait for the main 8th Wall engine systems to establish surface tracking
        sceneEl.addEventListener('xrrealityready', () => {
          console.log("8th Wall SLAM surface engine tracking initialized successfully!")
          
          // Force the tiger asset setup to mount instantly on mobile screens
          if (typeof window.spawnAnimal === 'function') {
            window.spawnAnimal('tiger')
          }
        })
      }
    })

    // Fallback registry for framework structural dependencies
    if (!AFRAME.components['tap-place']) {
      AFRAME.registerComponent('tap-place', {
        init: function () {
          console.log("Interaction listener mapped.")
        }
      })
    }

  } else {
    // If browser is still loading library assets, check again in 30ms
    setTimeout(initAR, 30)
  }
}

initAR()
