// https://blog.logrocket.com/understanding-axios-create/

import axios from "axios";

const URL = "https://restcountries.com/v3.1";
const FIELD =
  "fields=cca3,flags,name,population,region,capital,subregion,tld,currencies,languages,borders";

const RestCountriesClient = axios.create({
  baseURL: URL,
});

async function getAllCountires() {
  const response = await RestCountriesClient.get(`/all/${FIELD}`);
  return response.data;
}

async function getCountryByName(param) {
  const response = await RestCountriesClient.get(`/name/${param}`);
  return response.data;
}

async () => {
  try {
  } catch (error) {
    console.log(`Error calling Rest Countries API: ${error.message}`, error);
  }
};
