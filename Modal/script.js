'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
//выбор всех объектов класса .show-modal
const btnsOpenModal = document.querySelectorAll('.show-modal');
//console.log(btnsOpenModal);

//функция открытия окна
const openModal = function () {
  console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
//функция закрытия окна
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
//пробегаем циклом по всем элементам массива из кнопок
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}
//закрытин окна нажатием на крестик
btnCloseModal.addEventListener('click', closeModal);
//закрытие окна кликом вне этого окна
overlay.addEventListener('click', closeModal);
