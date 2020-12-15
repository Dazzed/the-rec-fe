$(".close").click(function () {
  window.close();
});

$(function () {
  $('#rec_iframe', window.parent.document).height('100px');
  let queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const title = urlParams.get('title')
  $("#productName").html(title);
});
