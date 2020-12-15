$(".addToRecRedBtn").click(function () {
  $("#Modal1").hide();
  // chrome.tabs.query({ currentWindow: true, active: true }, (tabs) => {
  //   let tab = tabs[0];
  //   // chrome.tabs.sendMessage(tab.id, { colour: "#ff0000" } )
  // });
  window.location.replace("productsDetails.html?" + window.location.search);
});

$(".close").click(function () {
  window.close();
});

$(function () {
  console.log("OPENED POPUP");
  // $(".addToRecBtn").click(function () {
  //     console.log("Add to Rec");
  //     chrome.browserAction.setBadgeText({
  //         "text": "4+"
  //     })
  // });
  let queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const title = urlParams.get('title')
  const price = urlParams.get('price')
  const brand = urlParams.get('brand')
  const category_string = urlParams.get('category_string')
  const images = urlParams.getAll('imgs')
  const search = urlParams.get('search');
  console.log(urlParams.getAll("imgs"));
  $("#productName").html(title);
  $("#brandName").html(brand);
  $("#productPrice").html(price);
  $("#searchedText").val(search || title);
  $("#productImage").attr("src", images[0]);

  // check if product already in recs - CHECK WHAT THIS DOES
  // if (response.farewell.externalId) {
  //   checkProductInRecs(response.farewell.externalId);
  // }
  if (search || title) {
    UpdateSuggestionList(
      search || title
    );
  }

  productListActions();
});

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
