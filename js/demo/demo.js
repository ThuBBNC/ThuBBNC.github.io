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
      title: 'demo video',
      href: 'video/media4.mp4',
      type: 'video/mp4',
      poster: 'video/media4.jpg'
    },
    
    {
      title: 'demo video',
      href: 'video/media5.mp4',
      type: 'video/mp4',
      poster: 'video/media5.jpg'
    },
    
    {
      title: 'test video',
      href: 'video/media1.mp4',
      type: 'video/mp4',
      poster: 'video/media1.jpg'
    },
    {
      title: 'test video',
      href: 'video/media2.mp4',
      type: 'video/mp4',
      poster: 'video/media2.jpg'
    },

    {
      title: 'test video',
      href: 'video/media6.mp4',
      type: 'video/mp4',
      poster: 'video/media6.jpg'
    },


  ], {
    container: '#blueimp-video-carousel',
    carousel: true
  })
})
