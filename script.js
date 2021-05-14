'use strict';

// key = 'Escape'

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', function () {
    modal.classList.remove('hidden'); // We can remove multiple calsses seperated by a comma
    overlay.classList.remove('hidden');
  });
}

function removeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

btnCloseModal.addEventListener('click', removeModal);
overlay.addEventListener('click', removeModal);
window.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    removeModal();
  }
});
