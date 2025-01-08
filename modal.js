//  здесь прописана функция для открытия и закрытия модального окна. Выбран один из вариантов, представленных в уроке с использованием jS

const body = document.querySelector('body.page');
const btnOpenModal = document.querySelector('#modal-1-trigger');
const modal = document.querySelector('#modal-1');
const btnCloseModal = document.querySelector('#modal-1-close');

const handleModalSwitch = () => {
  modal.classList.toggle('modal--closed');
  body.classList.toggle('page--scroll-locked');
}

btnOpenModal.addEventListener('click', handleModalSwitch)

btnCloseModal.addEventListener('click', handleModalSwitch);


