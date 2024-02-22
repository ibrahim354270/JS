import { countries } from "../data/countries.js";
const search = document.getElementById("search");
const countrylist = document.getElementById("countrylist");
search.addEventListener("input", (e) => {
    // Textboxtaki bilgiyi al
    const userInput = e.target.value;
    if (userInput.length < 3) return;
    // ulkeleri filtrele
    const filteredCountries = filterCountry(userInput);
    // listeyi guncelle
    
});
const filterCountry = (val) => {
    const filteredCountries = countries.filter((item) =>
        item.name.official.toLowerCase().includes(val.toLowerCase())
    );
    return filteredCountries;
};