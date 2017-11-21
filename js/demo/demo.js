/*
 * blueimp Gallery Demo JS
 * https://github.com/blueimp/Gallery
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

/* global blueimp, $ */

$(function () {

   // Initialize the Gallery as image carousel:
   blueimp.Gallery([
        {href: 'img/result_2.jpg', title: 'Demo'},
        {href: 'img/brain_0.jpg', title: 'Demo'},
        {href: 'img/overall_real.jpg', title: 'Real-shot scene'},
    ], {
      container: '#blueimp-image-carousel',
      carousel: true
    })
  
  // Initialize the Gallery as video carousel:
  blueimp.Gallery([
    {
      title: 'Calcium imaging in awake mouse brains (Thy1-GCaMP)',
      href: 'video/media10.mp4',
      type: 'video/mp4',
      poster: 'video/media10.jpg'
    },
    {
      title: 'In-vivo imaging of leukocyte trafficking in mouse brain (CX3CR1)',
      href: 'video/media3.mp4',
      type: 'video/mp4',
      poster: 'video/media3.jpg'
    },
    {
      title: 'In-vitro calcium imaging of mouse cardiac cells',
      href: 'video/media11.mp4',
      type: 'video/mp4',
      poster: 'video/media11.jpg'
    },
    {      
      title: 'In-vivo vascular imaging in mouse brains',
      href: 'video/media12.mp4',
      type: 'video/mp4',
      poster: 'video/media12.jpg'
    },

  ], {
    container: '#blueimp-video-carousel',
    carousel: true
  })
})
