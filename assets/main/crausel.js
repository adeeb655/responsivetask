$('.owl-carousel').owlCarousel({
loop:true,
margin:10,
nav:true,
responsive:{
0:{
    items:1
},
480:{
    item:1
},
600:{
    item:2
},
767:{
    items:2
},


1024:{
    items:3
}
}
})

// $('#owl-carousel1').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:true,
//     responsive:{
//     0:{
//         items:1
//     },
//     768:{
//         items:2
//     },
//     1024:{
//         items:3
//     }
//     }
//     })

$('.story_slider ').slick({
    dots: true,

});
// $('.story_slider').slick({
//     dots: true,
//     infinite: false,
//     speed: 300,
//     slidesToShow: 4,
//     slidesToScroll: 4,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//       // You can unslick at a given breakpoint now by adding:
//       // settings: "unslick"
//       // instead of a settings object
//     ]
//   });


// $('.logos ').slick({
//   slidesToShow: 4,
//    slidesToScroll: 1,
//    autoplay: true,
//    autoplaySpeed: 1000,
//  }); 