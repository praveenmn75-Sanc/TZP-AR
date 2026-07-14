// Copyright (c) 2022 8th Wall, Inc.
import './index.css'

function initAR() {
  if (typeof AFRAME !== 'undefined') {
    
    // Register structural connection helper
    AFRAME.registerComponent('component-listener', {
      init: function () {
        console.log("A-Frame wrapper active. Awaiting engine callback structure...")
      }
    })

    // Register the custom ground-finder module to map tracking loops
    AFRAME.registerComponent('ground-finder', {
      init: function () {
        const sceneEl = this.el.sceneEl
        
        // Ensure the active model entity exists in the tracking loop immediately
        const forceLoadModel = () => {
          const entity = document.getElementById('active-wildlife')
          if (entity) {
            entity.setAttribute('gltf-model', '#tiger-model')
            console.log("3D Bengal Tiger model mounted successfully inside tracking tree.")
          }
        }

        // Fire instantly if scene has loaded, otherwise hook onto scene load listener
        if (sceneEl.hasLoaded) {
          forceLoadModel()
        } else {
          sceneEl.addEventListener('render-target-loaded', forceLoadModel)
        }

        // Fire 8th Wall streaming permissions call
        sceneEl.addEventListener('xrrealityready', () => {
          console.log("8th Wall SLAM surface engine tracking initialized successfully!")
        })
      }
    })

    // Fallback registry for template dependencies
    if (!AFRAME.components['tap-place']) {
      AFRAME.registerComponent('tap-place', {
        init: function () {
          console.log("Interaction component listening active.")
        }
      })
    }

  } else {
    // Retry connection loop if scripts are still compiling
    setTimeout(initAR, 20)
  }
}

initAR()
