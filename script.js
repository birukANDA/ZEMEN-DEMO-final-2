// Navbar scroll effect
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.classList.add('header-shadow');
  } else {
    navbar.classList.remove('header-shadow');
  }
});

// Toast function
function showToast(msg) {
  const toast = document.createElement('div');
  toast.className = 'toast-message';
  toast.innerText = msg;
  document.body.appendChild(toast);

  setTimeout(() => toast.remove(), 3000);
}

// Scroll to contact
document.getElementById('desktopQuoteBtn')?.addEventListener('click', () => {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});

// Form submit
const form = document.getElementById('quoteForm');

form?.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('fullName').value;

  if (name) {
    showToast(`Thank you ${name}!`);
  } else {
    showToast('Enter your name');
  }

  form.reset();
});

// Modal example
function showQuickView(product) {
  const modal = document.createElement('div');
  modal.className = 'modal-overlay';

  modal.innerHTML = `
    <div class="modal-content">
      <h2>${product}</h2>
      <button id="closeModal">Close</button>
    </div>
  `;

  document.body.appendChild(modal);

  document.getElementById('closeModal').onclick = () => modal.remove();
}