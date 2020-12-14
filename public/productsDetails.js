// chrome.runtime.sendMessage({ greeting: "hello" }, function (response) {
//   // alert(response.farewell.price);
//   $("#productName").val(response.farewell.title);
//   $("#brandName").val(response.farewell.brand);

//   if (response.farewell.price) {
//     $("#productPrice").val(
//       Number.parseFloat(response.farewell.price.split("$")[1])
//     );
//   }

//   if (response.farewell.category) {
//     $("#productCategory").val(response.farewell.category);
//   }

//   for (let i = 0; i < response.farewell.images.length; i++) {
//     // alert(response.farewell.images[i]);
//     $("#productImages").append(
//       '<div class="mySlides fade"><img src="' +
//         response.farewell.images[i] +
//         '"><input type="hidden" name="productImages" value="' +
//         response.farewell.images[i] +
//         '"></input></div>'
//     );
//     $("#productImageDots").append(
//       '<span class="dot" onclick="currentSlide(' + (i + 1) + ')"></span>'
//     );
//   }

//   $("#productDescription").val(response.farewell.description);
//   $("#productExternalLink").val(response.farewell.externalLink);
//   $("#productExternalId").val(response.farewell.externalId || undefined);
//   showSlides(slideIndex);
// });

var slideIndex = 1;

function plusSlides(n) {
  showSlides((slideIndex += n));
}

document.addEventListener("DOMContentLoaded", function () {
  var next = document.getElementById("next");
  var prev = document.getElementById("prev");
  next.addEventListener("click", function () {
    plusSlides(1);
  });
  prev.addEventListener("click", function () {
    plusSlides(-1);
  });
});

function currentSlide(n) {
  showSlides((slideIndex = n));
}
// document.addEventListener('DOMContentLoaded', function() {
//   var currentSlideOne = document.getElementById('currentSlideOne');
//   var currentSlideTwo = document.getElementById('currentSlideTwo');
//   var currentSlideThree = document.getElementById('currentSlideThree');
//   currentSlideOne.addEventListener('click', function() {
//     currentSlide(1)
//   });
//   currentSlideTwo.addEventListener('click', function() {
//     currentSlide(2)
//   });
//   currentSlideThree.addEventListener('click', function() {
//     currentSlide(3)
//   });
// });

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
$(".close").click(function () {
  window.close();
});

$("#createRecForm").submit(function () {
  const fields = $(this).serializeArray();

  const keys = {
    productImages: "images",
    productName: "title",
    productPrice: "price",
    brandName: "brand",
    productCategory: "category",
    productDescription: "description",
    productExternalLink: "externalLink",
    productExternalId: "externalId",
  };
  let values = {
    retailer: "Amazon.com",
    currency: "USD",
    category: "None",
  };

  console.log("product form values", fields);

  fields.forEach((val) => {
    const key = keys[val.name];

    if (key === "images") {
      if (!values.images) values.images = [];
      values.images.push(val.value);
    } else if (key === "price") {
      values.price = Number.parseFloat(val.value);
    } else {
      values[key] = val.value;
    }
  });

  console.log("form values", values);

  createAndAddToRec(values)
    .then(() => {
      console.log("rec created successfully");
      $("#modal3").hide();
      window.location.replace("sucessPage.html");
    })
    .catch((error) => console.error(error));

  event.preventDefault();
});

// function removeItem() {
//   document.addEventListener('DOMContentLoaded', function () {
//     var onclickRemoveItem = document.getElementById("productImages");
//     onclickRemoveItem.indexOf();

//     var currentIndex = document.getElementsByClassName("mySlides").style.display = "none";
//     currentIndex.remove();
//     var nextWindow = document.getElementsByClassName("mySlides").style.display = "block";
//     nextWindow.addClass();
//   }
//   )
// };
// $('.btn-rec-successfully').click(function(){
//   $('#modal3').hide();
//   window.location.replace("sucessPage.html");
// });
