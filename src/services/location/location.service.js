import camelize from "camelize";

export const locationRequest = async (searchTerm) => {
  const live = `https://geocode-235e63knsq-uc.a.run.app?city=${searchTerm}`;
  const local = `http://127.0.0.1:5001/mealstogo-78c91/us-central1/placesNearby?location=${location}`;
  // process.env.NODE_ENV === "development" ? local :
  const res = await fetch(local);
  return res.json();
};

export const locationTransform = (result) => {
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];

  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};
