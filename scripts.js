/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */

// Array of car objects
let cars = [
  {
    title: "Toyota GR86",
    brand: "Toyota",
    imageURL: "https://upload.wikimedia.org/wikipedia/commons/5/55/2022_Toyota_GR86_Premium_in_Halo%2C_Front_Right%2C_09-27-2022.jpg",
    engine: "2.4L Boxer-4 engine",
    transmission: "6-speed manual or automatic",
    drive: "Rear-wheel drive",
    power: "228 hp, 184 lb-ft torque",
    price: "$30,000",
  },
  {
    title: "Toyota GR Corolla",
    brand: "Toyota",
    imageURL: "https://upload.wikimedia.org/wikipedia/commons/a/ab/2024_Toyota_GR_Corolla_Circuit_Edition_in_Blue_Flame%2C_front_right%2C_2024-06-30.jpg",
    engine: "1.6L Turbocharged I3 engine",
    transmission: "6-speed manual or automatic",
    drive: "All-wheel drive",
    power: "300 hp, 273 lb-ft torque",
    price: "$38,860",
  },
  {
    title: "Toyota GR Supra",
    brand: "Toyota",
    imageURL: "https://upload.wikimedia.org/wikipedia/commons/0/06/Toyota_Supra_GR_Genf_2019_1Y7A5645.jpg",
    engine: "3.0L Turbocharged I6 engine",
    transmission: "6-speed manual or automatic",
    drive: "Rear-wheel drive",
    power: "382 hp, 368 lb-ft torque",
    price: "$56,900"
  },
  {
    title: "Subaru WRX",
    brand: "Subaru",
    imageURL: "https://upload.wikimedia.org/wikipedia/commons/d/d0/2022_Subaru_WRX_Sport-Tech_in_World_Rally_Blue_Pearl%2C_Front_Left%2C_06-03-2022.jpg",
    engine: "2.4L Turbocharged Boxer-4 engine",
    transmission: "6-speed manual or CVT",
    drive: "All-wheel drive",
    power: "271 hp, 258 lb-ft torque",
    price: "$32,735",
  },
  {
    title: "Subaru BRZ",
    brand: "Subaru",
    imageURL: "https://upload.wikimedia.org/wikipedia/commons/9/90/Subaru_BRZ_%28ZD8%29_Auto_Zuerich_2023_1X7A1254.jpg",
    engine: "2.4L Boxer-4 engine",
    transmission: "6-speed manual or automatic",
    drive: "Rear-wheel drive",
    power: "228 hp, 184 lb-ft torque",
    price: "$31,210",
  },
  {
    title: "Mazda MX-5 Miata",
    brand: "Mazda",
    imageURL: "https://upload.wikimedia.org/wikipedia/commons/9/95/Mazda_Roadster_%28MX-5%29_by_Negawa_Bridge_%28cropped%29.jpg",
    engine: "2.0L I4 engine",
    transmission: "6-speed manual or automatic",
    drive: "Rear-wheel drive",
    power: "181 hp, 151 lb-ft torque",
    price: "$29,530",
  },
  {
    title: "Ford Mustang",
    brand: "Ford",
    imageURL: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Ford_Mustang_VII_Sindelfingen_2024_IMG_9164.jpg",
    engine: "5.0L V8 engine",
    transmission: "6-speed manual",
    drive: "Rear-wheel drive",
    power: "486 hp, 418 lb-ft torque",
    price: "$42,860",
  },
  {
    title: "Honda Civic Type R",
    brand: "Honda",
    imageURL: "https://upload.wikimedia.org/wikipedia/commons/7/71/2024_Honda_Civic_Type_R%2C_front_right%2C_06-15-2024.jpg",
    engine: "2.0L Turbocharged I4 engine",
    transmission: "6-speed manual",
    drive: "Front-wheel drive",
    power: "315 hp, 310 lb-ft torque",
    price: "$45,895",
  },
  {
    title: "Nissan Z",
    brand: "Nissan",
    imageURL: "https://upload.wikimedia.org/wikipedia/commons/7/75/Nissan_FAIRLADY_Z_%28Z34%29_Version_ST%2C_2022%2C_left-front.jpg",
    engine: "3.0L Twin-Turbo V6 engine",
    transmission: "6-speed manual",
    drive: "Rear-wheel drive",
    power: "400 hp, 350 lb-ft torque",
    price: "$42,970",
  },
  {
    title: "Nissan GT-R",
    brand: "Nissan",
    imageURL: "https://upload.wikimedia.org/wikipedia/commons/7/7c/2018_Nissan_GT-R_Premium_in_Super_Silver%2C_Front_Right%2C_10-11-2022.jpg",
    engine: "3.8L Twin-Turbo V6 engine",
    transmission: "6-speed automatic",
    drive: "All-wheel drive",
    power: "565 hp, 467 lb-ft torque",
    price: "$121,090",
  },
  {
    title: "Chevrolet Corvette",
    brand: "Chevrolet",
    imageURL: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Chevrolet_Corvette_C8_IAA_2021_1X7A0156.jpg",
    engine: "6.2L V8 engine",
    transmission: "8-speed automatic",
    drive: "Rear-wheel drive",
    power: "490 hp, 465 lb-ft torque",
    price: "$70,195",
  },
  {
    title: "Chevrolet Camaro",
    brand: "Chevrolet",
    imageURL: "https://upload.wikimedia.org/wikipedia/commons/5/5e/2019_Chevrolet_Camaro_2SS_6.2L_front_3.16.19.jpg",
    engine: "6.2L V8 engine",
    transmission: "6-speed manual",
    drive: "Rear-wheel drive",
    power: "455 hp, 455 lb-ft torque",
    price: "$40,395",
  },
  {
    title: "BMW M3",
    brand: "BMW",
    imageURL: "https://upload.wikimedia.org/wikipedia/commons/3/39/2021_BMW_M3_Competition_Automatic_3.0_Front.jpg",
    engine: "S58 3.0L Twin-Turbo I6 engine",
    transmission: "8-speed automatic",
    drive: "Rear-wheel drive",
    power: "473 hp, 406 lb-ft torque",
    price: "$76,700",
  },
  {
    title: "BMW M4",
    brand: "BMW",
    imageURL: "https://upload.wikimedia.org/wikipedia/commons/e/e2/2021_BMW_M4_Competition_Automatic_3.0_Front.jpg",
    engine: "S58 3.0L Twin-Turbo I6 engine",
    transmission: "8-speed automatic",
    drive: "Rear-wheel drive",
    power: "473 hp, 406 lb-ft torque",
    price: "$80,100",
  },
  {
    title: "Audi R8",
    brand: "Audi",
    imageURL: "https://upload.wikimedia.org/wikipedia/commons/7/7e/2016_Audi_R8_Plus_Quattro_V10_S-A_5.2.jpg",
    engine: "5.2L V10 engine",
    transmission: "7-speed automatic",
    drive: "All-wheel drive",
    power: "602 hp, 413 lb-ft torque",
    price: "$142,700",
  },
  {
    title: "Mercedes-Benz AMG S63 E",
    brand: "Mercedes-Benz",
    imageURL: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Mercedes-AMG_S_63_%28W223%29_IMG_8215.jpg",
    engine: "4.0L Twin-Turbo V8 engine",
    transmission: "9-speed automatic",
    drive: "All-wheel drive",
    power: "791 hp, 1,055 lb-ft torque",
    price: "$186,200",
  },
];

function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  // Loop through the cars array and create a card for each car
  // Uses the template card to create new cards
  for (let i = 0; i < cars.length; i++) {
    let { title, imageURL, price } = cars[i];
    const nextCard = templateCard.cloneNode(true);
    editCardContent(nextCard, title, imageURL, price);
    cardContainer.appendChild(nextCard);
  }
}

function editCardContent(card, newTitle, newImageURL) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = newTitle;

  const cardImage = card.querySelector("img");
  cardImage.src = newImageURL;
  cardImage.alt = newTitle + " Poster";

  const cardDescriptions = card.querySelector(".descriptions");
  cardDescriptions.innerHTML = "";
  
  // You can use console.log to help you debug!
  // View the output by right clicking on your website,
  // select "Inspect", then click on the "Console" tab
  console.log("new card:", newTitle, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

function quoteAlert() {
  console.log("Button Clicked!");
  alert(
    "Interested in a car? Call us today at +1 (123) 456-7890 for a quote!"
  );
}

//* Search cars by title */
function searchByTitle() {
  const searchInput = document.getElementById("search-input").value.toLowerCase(); // Get the search input and convert to lowercase
  const filteredCars = cars.filter((car) =>
    car.title.toLowerCase().includes(searchInput) // Check if the title includes the search input
  );

  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = ""; // Clear existing cards

  const templateCard = document.querySelector(".card");

  // Loop through the filtered cars and create a card for each
  for (let i = 0; i < filteredCars.length; i++) {
    let { title, imageURL, price } = filteredCars[i];
    const nextCard = templateCard.cloneNode(true);
    editCardContent(nextCard, title, imageURL, price);
    cardContainer.appendChild(nextCard);
  }

  if (filteredCars.length === 0) {
    cardContainer.innerHTML = "<p>No cars found.</p>"; // Display a message if no cars match the search
  }
}

/* Sort cars by brand */
function filterByBrand(brand) {
  const filteredCars = cars.filter((car) => car.brand === brand);
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";

  const templateCard = document.querySelector(".card");

  // Create new filtered list
  for (let i = 0; i < filteredCars.length; i++) {
    let { title, imageURL, price } = filteredCars[i];
    const nextCard = templateCard.cloneNode(true);
    editCardContent(nextCard, title, imageURL, price);
    cardContainer.appendChild(nextCard);
  }
}

function resetCards() {
  // Reset the cards to their original order (if you have a backup of the original array)
  // For now, this just reloads the page
  location.reload();
}

function sortByPrice(order) {
  // Sort the cars array based on the selected order
  cars.sort((a, b) => {
    const priceA = parseFloat(a.price.replace(/[^0-9.-]+/g, "")); // Remove "$" and commas
    const priceB = parseFloat(b.price.replace(/[^0-9.-]+/g, ""));
    return order === "low-to-high" ? priceA - priceB : priceB - priceA;
  });

  // Re-render the cards
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = ""; // Clear existing cards
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < cars.length; i++) {
    let { title, imageURL, price } = cars[i];
    const nextCard = templateCard.cloneNode(true);
    editCardContent(nextCard, title, imageURL, price);
    cardContainer.appendChild(nextCard);
  }
}

/* Functions for modal comparison */
let selectedCars = []; // Array for selected cars for comparison
function selectCarForComparison(car) {
  if (selectedCars.length < 2) {
    selectedCars.push(car);
    alert(`${car.title} has been added for comparison.`);
  } else {
    alert("You can only compare two cars at a time.");
  }

  if (selectedCars.length === 2) {
    showComparisonModal();
  }
}

function showComparisonModal() {
  const modal = document.getElementById("compare-modal");
  const comparisonContainer = document.getElementById("comparison-container");

  // Clear previous comparison data
  comparisonContainer.innerHTML = "";

  // Add comparison details
  const car1 = selectedCars[0];
  const car2 = selectedCars[1];

  const comparisonTable = `
    <table>
      <thead>
        <tr>
          <th>Attribute</th>
          <th>${car1.title}</th>
          <th>${car2.title}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Engine</td>
          <td>${car1.engine}</td>
          <td>${car2.engine}</td>
        </tr>
        <tr>
          <td>Transmission</td>
          <td>${car1.transmission}</td>
          <td>${car2.transmission}</td>
        </tr>
        <tr>
          <td>Drive</td>
          <td>${car1.drive}</td>
          <td>${car2.drive}</td>
        </tr>
        <tr>
          <td>Power</td>
          <td>${car1.power}</td>
          <td>${car2.power}</td>
        </tr>
        <tr>
          <td>Price</td>
          <td>${car1.price}</td>
          <td>${car2.price}</td>
        </tr>
      </tbody>
    </table>
  `;

  comparisonContainer.innerHTML = comparisonTable;
  // Show the modal
  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("compare-modal");
  modal.style.display = "none";
  selectedCars = []; // Clear selected cars
}

/* Creates the cards*/
function editCardContent(card, newTitle, newImageURL, newPrice) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = newTitle;

  const cardImage = card.querySelector("img");
  cardImage.src = newImageURL;
  cardImage.alt = newTitle + " Poster";

  // Show car price
  const priceElement = document.createElement("p");
  priceElement.textContent = `Price: ${newPrice}`;
  priceElement.style.fontWeight = "bold";

  // Add a "Compare" button to each card
  const compareButton = document.createElement("button");
  compareButton.textContent = "Compare";
  compareButton.onclick = () => {
    const car = cars.find((c) => c.title === newTitle);
    selectCarForComparison(car);
  };

  const cardDescriptions = card.querySelector(".descriptions");
  cardDescriptions.innerHTML = ""; // Clear existing descriptions
  cardDescriptions.appendChild(priceElement);
  cardDescriptions.appendChild(compareButton);
}

/* Function to show image attributions */
// Adds a new button that shows the image attributions
function toggleAttributions() {
  const attributionList = document.getElementById("attribution-list");
  if (attributionList.style.display === "none") {
    attributionList.style.display = "block";
  } else {
    attributionList.style.display = "none";
  }
}
