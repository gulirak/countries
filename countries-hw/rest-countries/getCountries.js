export const getCountries = async () => {
  const url = "https://restcountries.com/v3.1/all";

  // async/await
  const resp = await fetch(url); // methods: GET, DELETE, PATCH, POST,...
  const data = await resp.json();

  return data;
};
