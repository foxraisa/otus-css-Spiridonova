//  здесь прописана функция для открытия и закрытия модального окна. Выбран один из вариантов, представленных в уроке с использованием jS



const handleModalSwitch = () => {
  // в консоли показывается, что вызывается функция
  console.log('handleModalSwitch invoked');
  document.querySelector('#modal-1').classList.toggle('modal--closed');
  document.querySelector('body.page').classList.toggle('page--scroll-locked');
}

//const body = document.querySelector('body.page'); - переменная добавлена прямо в handleModalSwitch
//const modal = document.querySelector('#modal-1'); - переменная добавлена прямо в handleModalSwitch

//const btnOpenModal = document.querySelector('#modal-1-trigger');-  переменная перенесена в html
//const btnCloseModal = document.querySelector('#modal-1-close');-  переменная перенесена в html 
//btnOpenModal.addEventListener('click', handleModalSwitch) - лиссенер  перенесена в html
//btnCloseModal.addEventListener('click', handleModalSwitch) - лиссенер перенесена в html


