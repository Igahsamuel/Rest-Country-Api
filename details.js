function getqueryParams(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

const displayCountriesDetails = async () => {
  const countryName = getqueryParams("name");
  const countryElement = document.querySelector(".country-details");
  const country = countryApi.find((country) => countryName === country.name);
  if (country) {
    countryElement.innerHTML = `
        <div class="flag-container">
        <img src="${country.flags.svg}" alt="${country.name}" class="flag-Img">
        </div>
        <div class="details-container">
        <div class="separater">
        <div class="top-details">
        <h2>${country.name}</h2>
        <p>Population: ${country.population}</p>
        <p>Sub Region: ${country.subregion}</p>
        <p>Capital: ${country.capital}</p>
        </div>
        <div class="bottom-details">
        <p>Top Level Domain: ${country.topLevelDomain}</p>
        <p>Currencies:${country.currencies
          .map((currencies) => currencies.name)
          .join(", ")}</p>
        <p>Languages: ${country.languages
          .map((language) => language.name)
          .join(", ")}</p>
          </div>
          </div>
          <div class="border-details">
        <h3>Border Countries:</h3>
        <div>${
          country.borders
            ? country.borders
                .map((border) => `<span class="border">${border}</span>`)
                .join(" ")
            : "none"
        }</div>
        </div>
        </div>
        </div>`;
  } else {
    countryElement.innerHTML = `
        <p>Country not found!!</p>`;
  }
};
displayCountriesDetails();
