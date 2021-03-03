//  Ad Blur
var ads = document.getElementsByClassName("ad-blur");
var adsArray = Array.prototype.slice.call(ads);
var adsBlurCss = "";

adsArray.forEach(function (ad) {
  var imageUrl = ad.childNodes[1].children[0].style.backgroundImage;
  var css = "#" + ad.id + " .et_parallax_bg::before{background-image:" + imageUrl + "}";
  adsBlurCss += css;
});

var adBlurStyleTag = document.createElement("style");
adBlurStyleTag.innerHTML = adsBlurCss;
document.head.appendChild(adBlurStyleTag);
// End of Adblur
