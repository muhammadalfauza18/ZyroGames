// script bagian seacrh
const searchInput = document.getElementById('searchInput');
const productCards = document.querySelectorAll('.product-card');

searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  let found = false;

  productCards.forEach(card => {
    const title = card.querySelector('.product-name').textContent.toLowerCase();
    if (title.includes(query)) {
      card.style.display = 'flex';
      found = true;
    } else {
      card.style.display = 'none';
    }
  });

  let notFoundMessage = document.getElementById('notFoundMessage');
  if (!notFoundMessage) {
    notFoundMessage = document.createElement('div');
    notFoundMessage.id = 'notFoundMessage';
    notFoundMessage.style.textAlign = 'center';
    notFoundMessage.style.color = 'white';
    notFoundMessage.style.marginTop = '2rem';
    notFoundMessage.style.fontWeight = 'bold';
    notFoundMessage.style.fontSize = '5rem';
    notFoundMessage.textContent = 'Game tidak tersedia.';
    document.querySelector('main').appendChild(notFoundMessage);
  }

  notFoundMessage.style.display = found ? 'none' : 'block';
});

// untuk pop up produk
function openModal(id) {
  const modal = document.getElementById('modal-' + id);
  modal.classList.add('show');
}

function closeModal(id) {
  const modal = document.getElementById('modal-' + id);
  modal.classList.remove('show');
}