function showContent(contentId) {
  var content = document.getElementById(contentId);
  var contentDivs = document.getElementsByClassName("content");
  for (var i = 0; i < contentDivs.length; i++) {
    contentDivs[i].style.display = "none";
  }
  content.style.display = "block";
}
