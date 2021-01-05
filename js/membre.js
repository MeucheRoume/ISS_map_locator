// POP UP

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}






// MEMBRE ISS 

async function membre() {
    let response = await fetch("http://api.open-notify.org/astros.json");
    const data = await response.json();
    afficherMembre(data);
};


function afficherMembre(data) {
    document.getElementById('membre').innerHTML += data['number'];
    for (let i = 0; i < data['number']; i++) {
        document.getElementById('liste').innerHTML += "<li>"+data['people'][i]['name']+"</li>";
    }
}

membre();