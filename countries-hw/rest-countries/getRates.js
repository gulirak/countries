// Using built-in fetch method
export const getCurrencyRates = async () => {
  const url = "https://exchangerate-api.p.rapidapi.com/rapid/latest/USD";

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "cd1bcd8bfemshbb9c1a9e080448bp13e078jsncd39deaa296f",
      "X-RapidAPI-Host": "exchangerate-api.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);
  const result = await response.json();
  return result.rates;
};
