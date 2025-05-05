// profile dropdown
const profileButton = document.getElementById('profile-button');
const dropdownMenu = document.getElementById('dropdown-menu');
const logoutLink = dropdownMenu.querySelector('a[href="login.html"]');

profileButton.addEventListener('click', () => {
  dropdownMenu.classList.toggle('hidden');
});

// Close dropdown when clicking outside
document.addEventListener('click', (event) => {
  if (!profileButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
    dropdownMenu.classList.add('hidden');
  }
});

// Handle logout confirmation
dropdownMenu.addEventListener('click', (event) => {
  if (event.target.matches('a.logout')) {
    event.preventDefault();
    const confirmLogout = confirm('Are you sure you want to logout?');
    if (confirmLogout) {
      // Redirect to logout page or perform logout
      window.location.href = '/testProject/login.html';  // Change this URL to your real logout
    }
  }
});
// animation
const product= document.querySelector('#product');
// const nav=document.querySelector('nav');
window.addEventListener('scroll',() =>{
  // nav.classList.toggle('navag',window.scrollY > 0);
  product.classList.toggle('display',window.scrollY > 10);

})

const contantBox=document.querySelector('.contantBox');
const registerBox=document.querySelector('.registerBox');
const secThird=document.querySelector('.thirdSection');
window.addEventListener('scroll',() =>{
  contantBox.classList.toggle('translatee',window.scrollY > 265);
  registerBox.classList.toggle('translate',window.scrollY > 265);
  secThird.classList.toggle('scaling',window.scrollY > 600);

})
// filtering perfume
function scrollToProducts() {
  document.getElementById('filter').scrollIntoView({ behavior: 'smooth' });
}

function filterPerfumes(type) {
  const products = document.querySelectorAll('.card-container');
  
  products.forEach(product => {
    if (type === 'all') {
      product.style.display = 'block';
    } else {
      if (product.classList.contains(type)) {
        product.style.display = 'block';
      } else {
        product.style.display = 'none';
      }
    }
  });
}
