$(".close").click(function () {
  parent.window.postMessage("removetheiframe", "*");
});

$(function () {
  let queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const title = urlParams.get('title')
  $("#productName").html(title);
  parent.window.postMessage("resizetheiframe", "*");

});
