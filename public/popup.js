$(".addToRecRedBtn").click(function () {
  $("#Modal1").hide();
  chrome.tabs.query({ currentWindow: true, active: true }, (tabs) => {
    let tab = tabs[0];
    // chrome.tabs.sendMessage(tab.id, { colour: "#ff0000" } )
  });
  window.location.replace("productsDetails.html");
});

$(".close").click(function () {
  window.close();
});

$(function () {
  // chrome.storage.sync.get(['dom'], function(result) {
  //     console.log('Value currently is ' + result.key);
  // });
  console.log("OPENED POPUP");
  // $(".addToRecBtn").click(function () {
  //     console.log("Add to Rec");
  //     chrome.browserAction.setBadgeText({
  //         "text": "4+"
  //     })
  // });
  // chrome.runtime.sendMessage({ greeting: "hello" }, function (response) {
  //   if (
  //     Object.keys(response).length === 0 ||
  //     Object.keys(response.farewell).length === 0
  //   ) {
  //     // alert("NOT A PRODUCT PAGE");
  //   } else {
  //     // alert("PRODUCT PAGE");
  //     // alert(JSON.stringify(response))
  //     console.log("product:", response.farewell);

  //     $("#productName").html(response.farewell.title);
  //     $("#brandName").html(response.farewell.brand);
  //     $("#productPrice").html(response.farewell.price);
  //     $("#searchedText").val(
  //       response.farewell.search || response.farewell.title
  //     );
  //     $("#productImage").attr("src", response.farewell.images[0]);
  //     $(".modal").show();

  //     // check if product already in recs
  //     if (response.farewell.externalId) {
  //       checkProductInRecs(response.farewell.externalId);
  //     }
  //     if (response.farewell.search || response.farewell.title) {
  //       UpdateSuggestionList(
  //         response.farewell.search || response.farewell.title
  //       );
  //     }
  //   }
  // });

  productListActions();
});

// chrome.tabs.query({'active': true,'currentWindow':true},function(tab){
//     console.log("TAB: ", tab)
//   chrome.tabs.sendMessage(tab[0].id,"stuff", function(response){
//     //assuming that info was html markup then you could do
//     document.body.innerhtml = response;
//     //I personally wouldn't do it like this but you get the idea
//   });
// });

// chrome.runtime.sendMessage({'method':'getInfo'},function(response){
//   //response is now the info collected by the content script.
//   console.log(response);
// });

function productListActions() {
  $(".cartPage").click(function () {
    // Add product to myrecs
    let eleId = $(this).attr("id");
    let eleIdChunk = eleId.split("-");
    const productId = Number.parseInt(eleIdChunk[eleIdChunk.length - 1]);
    console.log("Adding product to rec", productId);
    addToRec(productId)
      .catch((error) => console.error(error))
      .finally(() => {
        $("#Modal1").hide();
        // chrome.tabs.query({ currentWindow: true, active: true }, (tabs) => {
        //   let tab = tabs[0];
        //   // chrome.tabs.sendMessage(tab.id, { colour: "#ff0000" } )
        // });
        // window.location.replace("productsDetails.html");
        window.location.replace("sucessPage.html");
      });
  });
  $(".product_items").mouseover(function () {
    $(".product_items").addClass("opacity");
    $(this).removeClass("opacity");
    // $(this).append($("<div class='product_items cart-items'><button class='\'cartPage'\'>Add to Recs</button></div>"))
    $(this).find(".common").css("display", "none");
    $(this).find(".common1").css("display", "none");
    $(this).find(".bordernone").css("border", "none");
    $(this).find(".cartPage").css("display", "block");
  });
  $(".product_items").mouseout(function () {
    $(this).show();
    $(".product_items").removeClass("opacity");
    $(".cart-items").remove();
    $(this).find(".common").css("display", "-webkit-box");
    $(this).find(".common1").css("display", "block");
    $(this).find(".bordernone").css("border", "1px solid #F1F3F4");
    $(this).find(".cartPage").css("display", "none");
  });
}

function UpdateSuggestionList(query) {
  fetchProducts(query)
    .then((result) => {
      let html = "";
      const results = result.data ? result.data.slice(0, 4) : [];
      results.forEach((ele) => {
        let { product, user } = ele;

        html += `
            <div class="product_items">
                <img src="${product.images && product.images[0]}" />
                <div class="product_content bordernone">
                    <img src="${user.profilePicUrl}" />
                    <h2>
                        ${user.name}
                    </h2>
                    <p class="common1">${product.category.name}</p>
                    <h3 class="common">
                        ${product.title}
                    </h3>
                    <h6 class="common1">$${product.price.toFixed(2)}</h6>
                    <button class="cartPage" style="display: none" id="add-to-rec-btn-${product.id
          }">Add to Recs</button>
                </div>
            </div>`;
      });

      if (html === "") {
        html = `<div style="margin: auto;">No results found</div>`;
      }

      $("#product-search-results").html(html);
      productListActions();
    })
    .catch((error) => {
      console.error(error);
    });
}

function checkProductInRecs(externalId) {
  checkRecExist(externalId)
    .then(({ data }) => {
      console.log("In rec status:", data);
      if (data.productInRecs) {
        $("#in-recs-status").text("In Recs");
        $("#add-to-my-recs-btn").prop("disabled", true);
        $("#add-to-my-recs-btn").hide();
      } else {
        $("#in-recs-status").text("Not in Recs");
        $("#add-to-my-recs-btn").prop("disabled", false);
        $("#add-to-my-recs-btn").show();
      }
    })
    .catch((error) => console.error(error));
}

$("#searchedText").on(
  "change paste keyup",
  debounce(250, function () {
    const val = $(this).val();
    UpdateSuggestionList(val);
  })
);
