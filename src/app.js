// Copyright (c) 2022 8th Wall, Inc.
import './index.css'

function initAR() {
  if (typeof AFRAME !== 'undefined') {
    AFRAME.registerComponent('tap-place', {
      init: function () {
        console.log("Tap place initialized ready for wildlife scene interactions.");
      }
    });
  } else {
    // If scripts are still loading, check again in 50ms
    setTimeout(initAR, 50);
  }
}

initAR();
