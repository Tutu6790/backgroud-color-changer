function change() {
   var randomColor = "";
   var allChar ="0123456789ABCDEF";
   for (var i = 0; i < 6; i++) {
      randomColor += allChar[Math.floor(Math.random() * 16)];
   }
  document.body.style.backgroundColor = "#"+ randomColor;

}
