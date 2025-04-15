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
    descriptions: [
      "FA24 2.4L Boxer-4 engine",
      "6-speed manual or automatic transmission",
      "Rear-wheel drive",
    ],
  },
  {
    title: "Toyota GR Corolla",
    brand: "Toyota",
    imageURL: "https://upload.wikimedia.org/wikipedia/commons/a/ab/2024_Toyota_GR_Corolla_Circuit_Edition_in_Blue_Flame%2C_front_right%2C_2024-06-30.jpg",
    descriptions: [
      "G16E-GTS 1.6L Turbocharged I3 engine",
      "6-speed manual or 8-speed automatic transmission",
      "All-wheel drive",
    ],
  },
  {
    title: "Toyota GR Supra",
    brand: "Toyota",
    imageURL: "https://upload.wikimedia.org/wikipedia/commons/0/06/Toyota_Supra_GR_Genf_2019_1Y7A5645.jpg",
    descriptions: [
      "B58 3.0L Turbocharged I6 engine",
      "6-speed manual or 8-speed automatic transmission",
      "Rear-wheel drive",
    ],
  },
  {
    title: "Subaru WRX",
    brand: "Subaru",
    imageURL: "https://upload.wikimedia.org/wikipedia/commons/d/d0/2022_Subaru_WRX_Sport-Tech_in_World_Rally_Blue_Pearl%2C_Front_Left%2C_06-03-2022.jpg",
    descriptions: [
      "FA24 2.4L Turbocharged Boxer-4 engine",
      "6-speed manual or CVT transmission",
      "All-wheel drive",
    ],
  },
  {
    title: "Subaru BRZ",
    brand: "Subaru",
    imageURL: "https://upload.wikimedia.org/wikipedia/commons/9/90/Subaru_BRZ_%28ZD8%29_Auto_Zuerich_2023_1X7A1254.jpg",
    descriptions: [
      "FA24 2.4L Boxer-4 engine",
      "6-speed manual or automatic transmission",
      "Rear-wheel drive",
    ],
  },
  {
    title: "Mazda MX-5 Miata",
    brand: "Mazda",
    imageURL: "https://upload.wikimedia.org/wikipedia/commons/9/95/Mazda_Roadster_%28MX-5%29_by_Negawa_Bridge_%28cropped%29.jpg",
    descriptions: [
      "Skyactiv-G 1.5L engine",
      "6-speed manual or automatic transmission",
      "Rear-wheel drive",
    ],
  },
  {
    title: "Ford Mustang",
    brand: "Ford",
    imageURL: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Ford_Mustang_VII_Sindelfingen_2024_IMG_9164.jpg",
    descriptions: [
      "Coyote 5.0L V8 engine",
      "6-speed manual or 10-speed automatic transmission",
      "Rear-wheel drive",
    ],
  },
  {
    title: "Honda Civic Type R",
    brand: "Honda",
    imageURL: "https://upload.wikimedia.org/wikipedia/commons/7/71/2024_Honda_Civic_Type_R%2C_front_right%2C_06-15-2024.jpg",
    descriptions: [
      "K20C1 2.0L Turbocharged I4 engine",
      "6-speed manual transmission",
      "Front-wheel drive",
    ],
  },
  {
    title: "Nissan Z",
    brand: "Nissan",
    imageURL: "https://upload.wikimedia.org/wikipedia/commons/7/75/Nissan_FAIRLADY_Z_%28Z34%29_Version_ST%2C_2022%2C_left-front.jpg",
    descriptions: [
      "VR30DDTT 3.0L Twin-Turbo V6 engine",
      "6-speed manual or 9-speed automatic transmission",
      "Rear-wheel drive",
    ],
  },
  {
    title: "Nissan GT-R",
    brand: "Nissan",
    imageURL: "https://upload.wikimedia.org/wikipedia/commons/7/7c/2018_Nissan_GT-R_Premium_in_Super_Silver%2C_Front_Right%2C_10-11-2022.jpg",
    descriptions: [
      "VR38DETT 3.8L Twin-Turbo V6 engine",
      "6-speed dual-clutch automatic transmission",
      "All-wheel drive",
    ],
  },
  {
    title: "Chevrolet Corvette",
    brand: "Chevrolet",
    imageURL: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Chevrolet_Corvette_C8_IAA_2021_1X7A0156.jpg",
    descriptions: [
      "LT2 6.2L V8 engine",
      "8-speed dual-clutch automatic transmission",
      "Rear-wheel drive",
    ],
  },
  {
    title: "Chevrolet Camaro",
    brand: "Chevrolet",
    imageURL: "https://upload.wikimedia.org/wikipedia/commons/5/5e/2019_Chevrolet_Camaro_2SS_6.2L_front_3.16.19.jpg",
    descriptions: [
      "LT1 6.2L V8 engine",
      "6-speed manual or 10-speed automatic transmission",
      "Rear-wheel drive",
    ],
  },
  {
    title: "BMW M3",
    brand: "BMW",
    imageURL: "https://upload.wikimedia.org/wikipedia/commons/3/39/2021_BMW_M3_Competition_Automatic_3.0_Front.jpg",
    descriptions: [
      "S58 3.0L Twin-Turbo I6 engine",
      "6-speed manual or 8-speed automatic transmission",
      "Rear-wheel drive",
    ],
  },
  {
    title: "BMW M4",
    brand: "BMW",
    imageURL: "https://upload.wikimedia.org/wikipedia/commons/e/e2/2021_BMW_M4_Competition_Automatic_3.0_Front.jpg",
    descriptions: [
      "S58 3.0L Twin-Turbo I6 engine",
      "6-speed manual or 8-speed automatic transmission",
      "Rear-wheel drive",
    ],
  },
  {
    title: "Audi R8",
    brand: "Audi",
    imageURL: "https://upload.wikimedia.org/wikipedia/commons/7/7e/2016_Audi_R8_Plus_Quattro_V10_S-A_5.2.jpg",
    descriptions: [
      "V10 5.2L engine",
      "7-speed dual-clutch automatic transmission",
      "All-wheel drive",
    ],
  },
  {
    title: "Mercedes-Benz AMG S63 E",
    brand: "Mercedes-Benz",
    imageURL: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Mercedes-AMG_S_63_%28W223%29_IMG_8215.jpg",
    descriptions: [
      "M177 4.0L Twin-Turbo V8 engine",
      "9-speed automatic transmission",
      "All-wheel drive",
    ],
  },
];

function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  // Loop through the cars array and create a card for each car
  // Uses the template card to create new cards
  for (let i = 0; i < cars.length; i++) {
    let { title, imageURL, descriptions } = cars[i];
    const nextCard = templateCard.cloneNode(true);
    editCardContent(nextCard, title, imageURL, descriptions);
    cardContainer.appendChild(nextCard);
  }
}

function editCardContent(card, newTitle, newImageURL, newDescriptions) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = newTitle;

  const cardImage = card.querySelector("img");
  cardImage.src = newImageURL;
  cardImage.alt = newTitle + " Poster";

  const cardDescriptions = card.querySelector(".descriptions");
  cardDescriptions.innerHTML = ""; // Clear existing descriptions
  newDescriptions.forEach((desc) => {
    const descItem = document.createElement("li");
    descItem.textContent = desc;
    cardDescriptions.appendChild(descItem);
  });

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

// Search function
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
    let { title, imageURL, descriptions } = filteredCars[i];
    const nextCard = templateCard.cloneNode(true);
    editCardContent(nextCard, title, imageURL, descriptions);
    cardContainer.appendChild(nextCard);
  }

  if (filteredCars.length === 0) {
    cardContainer.innerHTML = "<p>No cars found.</p>"; // Display a message if no cars match the search
  }
}

// Sorting Functions
function filterByBrand(brand) {
  const filteredCars = cars.filter((car) => car.brand === brand);
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = ""; // Clear existing cards

  const templateCard = document.querySelector(".card");

  // Loop through the filtered cars and create a card for each
  for (let i = 0; i < filteredCars.length; i++) {
    let { title, imageURL, descriptions } = filteredCars[i];
    const nextCard = templateCard.cloneNode(true);
    editCardContent(nextCard, title, imageURL, descriptions);
    cardContainer.appendChild(nextCard);
  }
}

function resetCards() {
  // Reset the cards to their original order (if you have a backup of the original array)
  // For now, this just reloads the page
  location.reload();
}

// Adds a new button that shows the image attributions
function toggleAttributions() {
  const attributionList = document.getElementById("attribution-list");
  if (attributionList.style.display === "none") {
    attributionList.style.display = "block";
  } else {
    attributionList.style.display = "none";
  }
}