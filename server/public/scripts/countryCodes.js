export const countryCode = {
  "United States": "us",
  "Belarus": "by",
  "France": "fr",
  "Poland": "pl",
  "Kazakhstan": "kz",
  "Czech Republic": "cz",
  "Greece": "gr",
};

export const getCountryCode = (countryName) => {
  return (
    countryCode[countryName]
  );
};
