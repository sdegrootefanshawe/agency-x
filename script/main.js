(function() {

  var imgHolder = document.querySelectorAll(".image-holder"),
      heading = document.querySelector(".heading"),
      subHeading = document.querySelector(".main-copy h2"),
      seasonText = document.querySelector(".main-copy p"),
      appliedClass;

      function change(e) {
        // target = document.querySelector("#"+e.target.id);
        // console.log(target);
        appliedClass = this.id;

        heading.classList.add(this.id);
        subHeading.classList.add(this.id);

        heading.firstChild.nodeValue = dynamicContent[this.id].headline;
        seasonText.firstChild.nodeValue = dynamicContent[this.id].text;
      }

      function load() {
        heading.firstChild.nodeValue = dynamicContent['spring'].headline;
        seasonText.firstChild.nodeValue = dynamicContent['spring'].text;
      }


[].forEach.call(imgHolder, function(image){
  image.addEventListener('click', change, true);
});

window.addEventListener("load", load, false);


// for (var i = 0; i < imgHolder.length; i++) {
//   imgHolder[i].addEventListener("click", change, false);
// }

})();
