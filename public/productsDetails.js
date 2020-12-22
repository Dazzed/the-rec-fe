let queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const title = urlParams.get('title');
const price = urlParams.get('price');
const brand = urlParams.get('brand');
const description = urlParams.get('description');
const category = urlParams.get('category');
const images = urlParams.getAll('imgs');
const search = urlParams.get('search');
const externalId = urlParams.get('externalId');
const externalLink = urlParams.get('externalLink');
const script_env = urlParams.get('script_env');
let hostname = 'Amazon.com';

function getLocation(href) {
  let l = document.createElement('a');
  l.href = href;
  return l;
}

let l = null;

if (externalLink) {
  l = getLocation(externalLink);
}

if (l && l.hostname) {
  hostname = l.hostname;
}

$('#productName').val(title);
$('#brandName').val(brand);
$('#productPrice').val(Number.parseFloat(price));

$('#productCategory').val(category);

for (let i = 0; i < images.length; i++) {
  // alert(response.farewell.images[i]);
  $('#productImages').append(
    '<div class="mySlides fade"><img src="' +
    images[i] +
    '"><input type="hidden" name="productImages" value="' +
    images[i] +
    '"></input></div>'
  );
  $('#productImageDots').append(
    '<span class="dot" onclick="currentSlide(' + (i + 1) + ')"></span>'
  );
}

$('#productDescription').val(description);
$('#productExternalLink').val(externalLink);
$('#productExternalId').val(externalId || undefined);
var slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
  slideIndex += Number.parseInt(n);
  showSlides(slideIndex);
}

document.addEventListener('DOMContentLoaded', function () {
  var next = document.getElementById('next');
  var prev = document.getElementById('prev');
  next.addEventListener('click', function () {
    plusSlides(1);
  });
  prev.addEventListener('click', function () {
    plusSlides(-1);
  });
});

function currentSlide(n) {
  slideIndex = Number.parseInt(n);
  showSlides(slideIndex);
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
  var slides = document.getElementsByClassName('mySlides');
  var dots = document.getElementsByClassName('dot');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
}
$('.close img').click(function () {
  parent.window.postMessage('removetheiframe', '*');
});

$('.cancel-btn').click(function () {
  parent.window.postMessage('removetheiframe', '*');
});

$('#createRecForm').submit(function () {
  const fields = $(this).serializeArray();

  const keys = {
    productImages: 'images',
    productName: 'title',
    productPrice: 'price',
    brandName: 'brand',
    productCategory: 'category',
    productDescription: 'description',
    productExternalLink: 'externalLink',
    productExternalId: 'externalId',
  };
  let values = {
    retailer: hostname,
    currency: 'USD',
    category: '',
  };

  fields.forEach((val) => {
    const key = keys[val.name];

    if (!val.value) {
      return;
    }

    if (key === 'images') {
      if (!values.images) values.images = [];
      values.images.push(val.value);
    } else if (key === 'price') {
      values.price = Number.parseFloat(val.value);
    } else if (key === 'externalId' && !val.value) {
      values.externalId = undefined;
    } else {
      values[key] = val.value;
    }
  });

  createAndAddToRec(values, script_env)
    .then(() => {
      console.log('rec created successfully');
      $('#modal3').hide();
      window.location.replace('sucessPage.html?' + window.location.search);
    })
    .catch((error) => console.error(error));

  event.preventDefault();
});

function removeItem() {
  $('.mySlides[style*="display: block;"]').remove();
  $('.dot.active').remove();
  plusSlides(1);
}
