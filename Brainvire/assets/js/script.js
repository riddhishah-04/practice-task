function toggleText() {
    var moreText = document.getElementById("moreText");
    var linkText = document.getElementById("readMoreLink");
    
    if (moreText.style.display === "none" || moreText.style.display === "") {
      moreText.style.display = "inline";
      linkText.innerHTML = "Read less";
    } else {
      moreText.style.display = "none";
      linkText.innerHTML = "Read more";
    }
  }