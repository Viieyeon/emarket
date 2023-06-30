const menuBtn = document.querySelector('.header-burger');
const header = document.querySelector('.header');
const menuOff = document.querySelector('.burger__off');
const inputClear = document.querySelector('.icon__clear');


menuBtn.addEventListener('click', () => {
  header.classList.add('open');
})

menuOff.addEventListener('click', () => {
  header.classList.remove('open');
})

inputClear.addEventListener('click', () => {
  document.getElementById('headerSearch').value = '';
})



//Slider-about//
const photos = [
  'images/photo-1.png',
  'images/photo-2.png',
  'images/photo-3.png',
  'images/photo-4.png'
];


const thumbnails = document.querySelectorAll('.gallery__photo-preview');
const fullPhoto = document.querySelector('.full-photo');

const addThumbnailClickHandler = function (thumbnail, photo) {
  thumbnail.addEventListener('click', function () {
    fullPhoto.src = photo;
  });
};

for (let i = 0; i < thumbnails.length; i++) {
  addThumbnailClickHandler(thumbnails[i], photos[i]);
}


//number-button//
document.querySelectorAll('.number__button .plus').forEach(item => {

  item.addEventListener('click', function () {

    ++item.parentElement.querySelector('input').value;

    if (item.parentElement.querySelector('input').value > 1) {

      item.parentElement.querySelector('.minus').classList.remove('min');

    }

  });

});

document.querySelectorAll('.number__button .minus').forEach(item => {

  item.addEventListener('click', function () {

    --item.parentElement.querySelector('input').value;

    if (item.parentElement.querySelector('input').value < 2) {

      item.parentElement.querySelector('input').value = 1

      item.classList.add('min');

    }

  });

});


//tab//

const tabsTitle = document.querySelectorAll('.tab__title');
const tabsContent = document.querySelectorAll('.tab__content');

tabsTitle.forEach(item => item.addEventListener('click', event => {

  const tabsTitleTarget = event.target.getAttribute('data-tab');

  tabsTitle.forEach(element => element.classList.remove('active__tab'));
  tabsContent.forEach(element => element.classList.add('hidden__tab'));

  item.classList.add('active__tab');

  document.getElementById(tabsTitleTarget).classList.remove('hidden__tab');
}));

document.querySelector('[data-tab="tab-2"]').classList.add('active__tab');
document.querySelector('#tab-2').classList.remove('hidden__tab');