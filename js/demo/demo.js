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
      title: 'test video 1',
      href: 'http://media.au.tsinghua.edu.cn/kinectfvv.mp4',
      type: 'video/mp4',
      poster: 'img/slice.jpg'
    },
    {
      title: 'test video 1',
      href: 'http://media.au.tsinghua.edu.cn/mtrack.mp4',
      type: 'video/mp4',
      poster: 'img/blood.jpg'
    },

  ], {
    container: '#blueimp-video-carousel',
    carousel: true
  })
})
