export const countryCode = {
  "United States": "us",
  "Belarus": "by",
  "France": "fr",
  "Poland": "pl",
  "Kazakhstan": "kz",
  "Czech Republic": "cz",
  "Greece": "gr",
  "Tunisia": "tn",
};

export const getCountryCode = (countryName) => {
  return (
    countryCode[countryName]
  );
};
