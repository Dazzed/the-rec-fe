$(".close").click(function () {
  window.close();
});

$(function () {
  chrome.runtime.sendMessage({ greeting: "hello" }, function (response) {
    if (
      Object.keys(response).length === 0 ||
      Object.keys(response.farewell).length === 0
    ) {
      // alert("NOT A PRODUCT PAGE");
    } else {
      console.log("product:", response.farewell);
      $("#productName").html(response.farewell.title);
    }
  });
});
