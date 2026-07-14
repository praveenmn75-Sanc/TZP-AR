// Copyright (c) 2022 8th Wall, Inc.
import './index.css'

// Register a fallback component to ensure the Webpack bundler passes without breaking
AFRAME.registerComponent('tap-place', {
  init: function () {
    console.log("Tap place initialized ready for wildlife scene interactions.");
  }
})
