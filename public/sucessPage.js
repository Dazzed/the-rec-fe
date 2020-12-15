$(".close").click(function () {
  $("body").empty();
});

$(function () {
  let queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const title = urlParams.get('title')
  $("#productName").html(title);
});
