/* generates URI from object containing location info */
const formatLocation = (location) => {
  const string =
    location.street +
    "," +
    location.city +
    "," +
    location.country +
    "," +
    location.postcode;
  return encodeURIComponent(string);
};

export default formatLocation;
