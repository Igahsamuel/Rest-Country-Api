// create a function to handle search functionality
const handleSearch = (searchValue) => {
  const searchResult = countryApi.filter((country) =>
    country.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  //   call a function to display the search result
  displaySearchResult(searchResult);
};
// addEventhandle
const searchQuery = document.querySelector(".search");
searchQuery.addEventListener("input", (e) => {
  const searchValue = e.target.value.trim();
  handleSearch(searchValue);
});
// display result
const displaySearchResult = (results) => {
  const countriesSession = document.querySelector(".countries-session");
  countriesSession.innerHTML = "";
  if (results.length > 0) {
    results.forEach((country) => {
      const countryElement = document.createElement("div");
      countryElement.classList.add("country");
      countryElement.innerHTML = `
            <img src="${country.flags.svg}" alt=#${country.name}>
    <div>
    <h3>${country.name}</h3>
    <p>Population: ${country.population}</p>
    <p>Region: ${country.region}</p>
    <p>Capital:${country.capital}</p>
    </div>
            `;
      countryElement.addEventListener("click", () => {
        window.location.href = `/Rest-Country-Api/countrydetails.html?name=${encodeURIComponent(
          country.name
        )}`;
      });
      countriesSession.appendChild(countryElement);
    });
  } else {
    const noResult = document.createElement("p");
    noResult.textContent = "No search result found";
    countriesSession.appendChild(noResult);
  }
};
//
function redirectCountryPage(countryName) {
  const countryPage = `/Rest-Country-Api/countrydetails.html?name=${encodeURIComponent(
    countryName
  )}`;
  window.location.href = countryPage;
}

function displayCountries(countries) {
  const container = document.querySelector(".countries-session");

  countries.forEach((country) => {
    const countryElement = document.createElement("div");
    countryElement.classList.add("country");
    countryElement.innerHTML = `
    <img src="${country.flags.svg}" alt=#${country.name}>
    <div>
    <h3>${country.name}</h3>
    <p>Population: ${country.population}</p>
    <p>Region: ${country.region}</p>
    <p>Capital:${country.capital}</p>
    </div>
    `;
    countryElement.addEventListener("click", () => {
      redirectCountryPage(country.name);
    });
    container.appendChild(countryElement);
  });
}
displayCountries(countryApi);

// dropdown session
const toggleButton = document.getElementById("toggle-button");
const dropdownButton = document.getElementById("dropdownOption");
const regionButton = document.querySelectorAll(".region");
const countriesSession = document.querySelector(".countries-session");

toggleButton.addEventListener("click", () => {
  dropdownButton.classList.toggle("show");
});

regionButton.forEach((region) => {
  region.addEventListener("click", () => {
    const selectedRegion = region.textContent;
    const countriesInRegion = countryApi.filter(
      (country) => country.region === selectedRegion
    );
    displayCountriesRegion(countriesInRegion);
  });
});

function displayCountriesRegion(countries) {
  countriesSession.innerHTML = "";
  if (countries.length > 0) {
    countries.forEach((country) => {
      const countryElement = document.createElement("div");
      countryElement.classList.add("country");
      countryElement.innerHTML = `
      <img src="${country.flags.svg}" alt=#${country.name}>
      <div>
      <h3>${country.name}</h3>
      <p>Population: ${country.population}</p>
      <p>Region: ${country.region}</p>
      <p>Capital:${country.capital}</p>
      </div>
            `;
      countryElement.addEventListener("click", () => {
        window.location.href = `/Rest-Country-Api/countrydetails.html?name=${encodeURIComponent(
          country.name
        )}`;
      });
      countriesSession.appendChild(countryElement);
    });
  } else {
    const noResultFound = document.createElement("p");
    noResultFound.textContent = "No result found";
    countriesSession.appendChild(noResultFound);
  }
}
