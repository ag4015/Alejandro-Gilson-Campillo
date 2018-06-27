


function isMobileDevice() {
   if ( navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/BlackBerry/i) ||
        navigator.userAgent.match(/Windows Phone/i) ||
        navigator.userAgent.match(/IEMobile/i) ||
        navigator.userAgent.match(/Opera Mini/i)
        )
 {
       // document.write('<link rel="stylesheet" type="text/css" href="styles/mobile.css">');
       // var topbarMobile = document.querySelector('topbarMobile');
       // topbarMobile.style.height = (height/7 + "px");
       // var everything = document.querySelector('html');
       // everything.style.fontSize = "30px";
 }
 else {
       // document.write('<link rel="stylesheet" type="text/css" href="styles/fixed.css">');
 }
}
document.write('<link rel="stylesheet" type="text/css" href="styles/fixed.css">');
//isMobileDevice();
