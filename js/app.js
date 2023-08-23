// // // // // // // // // // //
//                            //
//          Typed JS          //
//                            //
// // // // // // // // // // //

var typed = new Typed(".coures", {
    strings: ["Web Designer.", "Graphic Designer." , "Web Developer."],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 100,
    loop: true
});


// // // // // // // // // // //
//                            //
//         Header JS          //
//                            //
// // // // // // // // // // //

window.addEventListener("scroll" , function(){
    var header = this.document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});
