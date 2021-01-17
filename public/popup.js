let script_env = null;
$('.addToRecRedBtn').click(function () {
  $('#Modal1').hide();
  // chrome.tabs.query({ currentWindow: true, active: true }, (tabs) => {
  //   let tab = tabs[0];
  //   // chrome.tabs.sendMessage(tab.id, { colour: "#ff0000" } )
  // });
  window.location.replace('productsDetails.html?' + window.location.search);
});

$('.close img').click(function () {
  parent.window.postMessage('removetheiframe', '*');
});

$(function () {
  let queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const title = urlParams.get('title');
  const price = urlParams.get('price');
  const brand = urlParams.get('brand');
  const category = urlParams.get('category');
  const images = urlParams.getAll('imgs');
  const search = urlParams.get('search');
  const externalId = urlParams.get('externalId');
  script_env = urlParams.get('script_env');

  $('#productName').html(title);
  $('#brandName').html(brand);
  price && $('#productPrice').html(`$${Number.parseFloat(price).toFixed(2)}`);
  $('#searchedText').val(search || title);
  $('#productImage').attr('src', images[0]);

  // check if product already added to recs list
  if (externalId) {
    checkProductInRecs(externalId);
  }
  if (search || title) {
    UpdateSuggestionList(search || title);
  }

  productListActions();
});

function productListActions() {
  $('.cartPage').click(function () {
    // Add product to mytags
    let eleId = $(this).attr('id');
    let eleIdChunk = eleId.split('-');
    const productId = Number.parseInt(eleIdChunk[eleIdChunk.length - 1]);
    console.log('Adding product to rec', productId);
    addToRec(productId, script_env)
      .catch((error) => console.error(error))
      .finally(() => {
        $('#Modal1').hide();
        // chrome.tabs.query({ currentWindow: true, active: true }, (tabs) => {
        //   let tab = tabs[0];
        //   // chrome.tabs.sendMessage(tab.id, { colour: "#ff0000" } )
        // });
        // window.location.replace("productsDetails.html");
        window.location.replace('sucessPage.html?' + window.location.search);
      });
  });
  $('.product_items').mouseover(function () {
    $('.product_items').addClass('opacity');
    $(this).removeClass('opacity');
    $(this).find('.common').css('display', 'none');
    $(this).find('.common1').css('display', 'none');
    $(this).find('.bordernone').css('border', 'none');
    $(this).find('.cartPage').css('display', 'block');
  });
  $('.product_items').mouseout(function () {
    $(this).show();
    $('.product_items').removeClass('opacity');
    $('.cart-items').remove();
    $(this).find('.common').css('display', '-webkit-box');
    $(this).find('.common1').css('display', 'block');
    $(this).find('.bordernone').css('border', '1px solid #F1F3F4');
    $(this).find('.cartPage').css('display', 'none');
  });
}

function UpdateSuggestionList(query) {
  fetchProducts(query, script_env)
    .then((result) => {
      let html = '';
      // const results = result.data ? result.data.slice(0, 4) : [];
      const results = result.data;
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
          }">Tag this Item</button>
                </div>
            </div>`;
      });

      if (html === '') {
        html = `<div class="no-suggestion-content">
        <img src="../assets/images/no-result-icon.svg"  />
        <h6>No Suggestions available.</h6></div>`;
      }

      $('#product-search-results').html(html);

      // if (html != '') {
      //   $('#product-search-results').html(html);
      // }

      productListActions();
    })
    .catch((error) => {
      console.error(error);
    });
}

function checkProductInRecs(externalId) {
  checkRecExist(externalId, script_env)
    .then(({ data }) => {
      console.log('In rec status:', data);
      if (data && data.productInRecs) {
        $('#in-recs-status').text('Tagged');
        $('#add-to-my-recs-btn').prop('disabled', true);
        $('#add-to-my-recs-btn').hide();
      } else {
        $('#in-recs-status').text('Not Tagged');
        $('#add-to-my-recs-btn').prop('disabled', false);
        $('#add-to-my-recs-btn').show();
      }
    })
    .catch((error) => console.error(error));
}

$('#searchedText').on(
  'change paste keyup',
  debounce(250, function () {
    const val = $(this).val();
    UpdateSuggestionList(val);
  })
);
