const carType = document.getElementById("car-type");
const carSubmitButton = document.getElementById("car-hire-submit");
const pickupDate = document.getElementById("pickup-date");
const returnDate = document.getElementById("return-date");
const carResults = document.getElementById("car-hire-results");
const petrolHireCostDiv = document.querySelector(".hire-fuel-price");
const petrolCostForTrip = document.querySelector(".petrol-cost");
const hireCost = document.querySelector(".hire-cost");
const totalCost = document.querySelector(".total-cost");

// Initialise datepicker
const datePicker = document.getElementById("custom-datepicker");
const rangePicker = new DateRangePicker(datePicker, {
  format: "dd/mm/yyyy",
});

const perLiterPetrolPrice = 2.58;
let filteredCars = [];

const carLocations = [
  {
    carType: "motorbike",
    vehicles: [
      {
        images: [
          "img/motorbike/A4C26F96-CD16-476D-8F11-78BDE9F5F031.jpeg",
          "img/motorbike/AF145C4F-B197-41EA-B281-EB277ACE967F.jpeg",
          "img/motorbike/F0E0C19B-4A84-40C0-BD43-D12D25084149.jpeg",
        ],
        hireCost: 150,
        maxDaysAllowed: 7,
        minDaysAllowed: 1,
        perHunderedKmPetrol: 3.7,
        specs: "1 seat, Automatic Transmission",
      },
      {
        images: [
          "img/motorbike2/2BD6DD6B-A49E-43A2-BC1B-839B27F53DAD.jpeg",
          "img/motorbike2/3B7306E3-EB97-4009-B1A0-E706D770AC10.jpeg",
          "img/motorbike2/81342E0C-F757-4B80-9739-D717961BD92F.jpeg",
          "img/motorbike2/CBEBA93F-508C-4E95-987C-8E9DB1C28826.jpeg",
        ],
        hireCost: 150,
        maxDaysAllowed: 7,
        minDaysAllowed: 1,
        perHunderedKmPetrol: 3.7,
        specs: "1 seat, Manual Transmission",
      },
    ],
  },
  {
    carType: "sedan",
    vehicles: [
      {
        images: [
          "img/SmallCar/89A667BD-13E0-45D4-A6E2-A2B752C718E2.jpeg",
          "img/SmallCar/323340C0-FEB5-4CB6-B808-ABBF7B2AF691.jpeg",
          "img/SmallCar/F22F7079-1051-470E-B101-B5C25DE7C3D1.jpeg",
          "img/SmallCar/39F24874-4DF4-4353-9C26-32B2968ECED8.jpeg",
        ],
        hireCost: 150,
        maxDaysAllowed: 7,
        minDaysAllowed: 1,
        perHunderedKmPetrol: 8.5,
        specs: "5 seats, AC, Automatic Transmission",
      },
      {
        images: [
          "img/SmallCar2/1CA58272-C8EB-4461-BF75-2469AC0DA17B.jpeg",
          "img/SmallCar2/759CEF2F-5F89-40F8-A47E-5524D905D9F5.jpeg",
          "img/SmallCar2/FCF8235C-D3DB-4A46-A2C9-1F34E1267EC2.jpeg",
        ],
        hireCost: 150,
        maxDaysAllowed: 7,
        minDaysAllowed: 1,
        perHunderedKmPetrol: 8.5,
        specs: "5 seats, AC, Automatic Transmission",
      },
      {
        images: [
          "img/SmallCar3/2E467B50-29BE-4E2B-ABFE-FF7D16073CFC.jpeg",
          "img/SmallCar3/789F6078-4574-4823-A3B5-5A32F1B8641A.jpeg",
          "img/SmallCar3/D32A1901-DC2C-4EC9-B431-43029DCD57EA.jpeg",
        ],
        hireCost: 150,
        maxDaysAllowed: 7,
        minDaysAllowed: 1,
        perHunderedKmPetrol: 8.5,
        specs: "5 seats, AC, Automatic Transmission",
      },
    ],
  },
  {
    carType: "suv",
    vehicles: [
      {
        images: [
          "img/LargeCar/A597672A-5C86-4EF3-9B8D-BE31505882B7.jpeg",
          "img/LargeCar/ACB09819-1A55-4CBC-AF43-C1717DF79EE2.jpeg",
          "img/LargeCar/265ED81A-6014-4424-B6E1-36E6568938A9.jpeg",
          "img/LargeCar/D54F556F-6379-498F-9257-10D56DE35138.jpeg",
        ],
        hireCost: 200,
        maxDaysAllowed: 7,
        minDaysAllowed: 1,
        perHunderedKmPetrol: 9.7,
        specs: "7 seats, AC, Automatic Transmission",
      },
      {
        images: [
          "img/LargeCar2/51787259-6D97-47B6-B0D0-D8565D30B70E.jpeg",
          "img/LargeCar2/A745AD88-CF38-4A7E-9FB8-59E8CB8DC52D.jpeg",
          "img/LargeCar2/B1499B3C-5C19-4E2A-ACD6-B89B6BE16BDD.jpeg",
          "img/LargeCar2/CADE1FD8-3292-428B-BF0B-6F94C8FE0B56.jpeg",
          "img/LargeCar2/D93C7F94-6C62-4321-805D-D619CDF2F516.jpeg",
        ],
        hireCost: 200,
        maxDaysAllowed: 7,
        minDaysAllowed: 1,
        perHunderedKmPetrol: 9.7,
        specs: "7 seats, AC, Automatic Transmission",
      },
    ],
  },
  {
    carType: "motorhome",
    vehicles: [
      {
        images: [
          "img/Motorhome/3DB3A617-7BB0-481C-9698-686200F83E58.jpeg",
          "img/Motorhome/76B4CE63-6DC6-42C3-A11F-0FC47ED0D2FB.jpeg",
          "img/Motorhome/635CA679-664D-48F5-A5C6-953C861A7CC7.jpeg",
          "img/Motorhome/AECE2559-74AA-4B47-965E-5471B592E28A.jpeg",
        ],
        hireCost: 200,
        maxDaysAllowed: 7,
        minDaysAllowed: 1,
        perHunderedKmPetrol: 17,
        specs: "6 seats, AC, Automatic Transmission",
      },
    ],
  },
];

const locations = {
  auckland: [174.7633, -36.8485],
  wellington: [174.777969, -41.276825],
  palmerston: [175.6111, -40.3564],
};

const pickupLocation = document.getElementById("pickup-location");
const dropoffLocation = document.getElementById("dropoff");
const mapContainer = document.getElementById("map");

function submitCarHire(event) {
  event.preventDefault();

  // // Get the selected pickup and dropoff locations
  const selectedPickupLocation = locations[pickupLocation.value];
  const selectedDropoffLocation = locations[dropoffLocation.value];

  // Get the selected values from the input fields
  const selectedCarType = carType.value;
  const selectedPassengers = parseInt(people.value);
  const dates = rangePicker.getDates();
  const difference = dates[1].getTime() - dates[0].getTime();
  const totalDays = Math.ceil(difference / (1000 * 3600 * 24));

  // Filter the carLocations array based on the selected criteria
  filteredCars = carLocations.filter((carType) => {
    return (
      carType.carType === selectedCarType &&
      carType.vehicles.some(
        (vehicle) =>
          selectedPassengers >= 1 &&
          selectedPassengers <= parseInt(vehicle.specs.split(" ")[0]) &&
          totalDays >= vehicle.minDaysAllowed &&
          totalDays <= vehicle.maxDaysAllowed
      )
    );
  });

  // Clear the previous results
  carResults.innerHTML = "";

  // Create separate card elements for each vehicle and append them to the carResults container
  if (filteredCars.length > 0) {
    filteredCars.forEach((carType) => {
      carType.vehicles.forEach((vehicle, index) => {
        const carCard = document.createElement("div");
        carCard.classList.add("car-card");

        const swiperContainer = document.createElement("div");
        swiperContainer.classList.add("swiper-container");

        const swiperWrapper = document.createElement("div");
        swiperWrapper.classList.add("swiper-wrapper");

        vehicle.images.forEach((image) => {
          const img = document.createElement("img");
          img.src = image;
          img.alt = carType.carType;
          img.classList.add("swiper-slide");
          img.addEventListener("click", () => {
            showRoute(selectedPickupLocation, selectedDropoffLocation);
            petrolHireCostDiv.style.display = "block";
          });
          swiperWrapper.appendChild(img);
        });

        swiperContainer.appendChild(swiperWrapper);

        const swiperButtonNext = document.createElement("div");
        swiperButtonNext.classList.add("swiper-button-next");

        const swiperButtonPrev = document.createElement("div");
        swiperButtonPrev.classList.add("swiper-button-prev");

        swiperContainer.appendChild(swiperButtonNext);
        swiperContainer.appendChild(swiperButtonPrev);

        const h2 = document.createElement("h2");
        h2.textContent = carType.carType;
        h2.classList.add("cartype");

        const p1 = document.createElement("p");
        p1.textContent = `Hire Cost: $${vehicle.hireCost}`;

        const p2 = document.createElement("p");
        p2.textContent = vehicle.specs;

        carCard.append(swiperContainer, h2, p1, p2);
        carResults.appendChild(carCard);

        // Initialize Swiper for the car card
        const swiper = new Swiper(swiperContainer, {
          direction: "horizontal",
          loop: true,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });
      });
    });
  } else {
    // Display "No Results Found" message
    carResults.innerHTML = "<h2>No Results Found</h2>";
  }

  // Calculating the Total Hire Cost
  const hireCostOfOneDay = filteredCars[0].vehicles[0].hireCost;
  const totalHireCost = hireCostOfOneDay * totalDays;
  totalCost.textContent = `Total Hiring Cost: $${totalHireCost}`;
}

mapboxgl.accessToken =
  "pk.eyJ1IjoidG1haWxvYWxleGFuZGVyOTEiLCJhIjoiY2xpMmMxd3owMDRiMjNmbXZwdjZtYTloZSJ9.l70Ahr4EiZT9Vtzb5SnuCQ";

// Create the mapboxgl.Map instance here, outside of showRoute
const map = new mapboxgl.Map({
  container: mapContainer,
  style: "mapbox://styles/mapbox/streets-v12",
});

function showRoute(selectedPickupLocation, selectedDropoffLocation) {
  mapContainer.style.display = "block";

  // Add a small delay before resizing the map
  setTimeout(() => {
    map.resize();
  }, 0);

  const directionsUrl = `https://api.mapbox.com/directions/v5/mapbox/driving/${selectedPickupLocation[0]},${selectedPickupLocation[1]};${selectedDropoffLocation[0]},${selectedDropoffLocation[1]}?geometries=geojson&access_token=${mapboxgl.accessToken}`;

  fetch(directionsUrl)
    .then((response) => response.json())
    .then((data) => {
      const route = {
        type: "Feature",
        properties: {},
        geometry: data.routes[0].geometry,
      };

      // The distance in meters
      const distanceMeters = data.routes[0].distance;
      // Convert distance in kilometers
      const distanceKm = (distanceMeters / 1000).toFixed(2);

      console.log(`Distance: ${distanceKm} km`);

      // Calculate the cost of petrol based on distance and perHundredKmPetrol rate
      // Check if there are filtered cars available
      if (filteredCars.length > 0) {
        filteredCars.forEach((carType) => {
          carType.vehicles.forEach((vehicle) => {
            const perHundredKmPetrolRate = vehicle.perHunderedKmPetrol;
            const petrolCost =
              (perLiterPetrolPrice / 100) * perHundredKmPetrolRate;

            const totalPetrol = petrolCost * distanceKm;
            petrolCostForTrip.textContent = `Petrol Cost: $${totalPetrol.toFixed(
              2
            )}`;
          });
        });
      } else {
        console.log("No filtered cars available.");
      }

      // Remove old route before adding new one
      if (map.getLayer("route")) {
        map.removeLayer("route");
        map.removeSource("route");
      }

      map.addLayer({
        id: "route",
        type: "line",
        source: {
          type: "geojson",
          data: route,
        },
        paint: {
          "line-width": 5,
          "line-color": "#007cbf",
        },
      });

      // Compute bounds from the start and end points
      const bounds = [
        [selectedPickupLocation[0], selectedPickupLocation[1]],
        [selectedDropoffLocation[0], selectedDropoffLocation[1]],
      ];

      // Use fitBounds to adjust the map view
      map.fitBounds(bounds, {
        padding: { top: 150, bottom: 150, left: 175, right: 175 },
      });
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}

carSubmitButton.addEventListener("click", (e) => {
  submitCarHire(e);
  mapContainer.scrollIntoView({ behavior: "smooth" });
});
