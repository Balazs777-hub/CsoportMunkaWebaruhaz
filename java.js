// Autók adatainak tömbje
const cars = [
    {
      id: 1,
      name: "Tesla Model 3",
      price: "12,000,000 Ft",
      image: "https://link-to-tesla-image.jpg"
    },
    {
      id: 2,
      name: "BMW X5",
      price: "15,000,000 Ft",
      image: "https://link-to-bmw-image.jpg"
    },
    // Add hozzá a többi autót is
  ];
  
  // Kosár száma
  let cartCount = 0;
  
  // Kártyák generálása
  function generateCarCards() {
    const carCardsContainer = document.getElementById('carCards');
    carCardsContainer.innerHTML = ''; // Törli a korábbi kártyákat
  
    cars.forEach(car => {
      const card = document.createElement('div');
      card.classList.add('col-12', 'col-md-4', 'col-lg-3', 'mb-4');
  
      card.innerHTML = `
        <div class="card">
          <img src="${car.image}" class="card-img-top" alt="${car.name}">
          <div class="card-body">
            <h5 class="card-title">${car.name}</h5>
            <p class="card-text">${car.price}</p>
            <button class="btn btn-primary" onclick="addToCart(${car.id})">Kosárba</button>
          </div>
        </div>
      `;
      carCardsContainer.appendChild(card);
    });
  }
  
  // Kosárba teszi az autót
  function addToCart(carId) {
    cartCount++;
    document.getElementById('cartCount').textContent = cartCount;
  }
  
  // Oldal betöltődésekor kártyák megjelenítése
  document.addEventListener('DOMContentLoaded', generateCarCards);
  