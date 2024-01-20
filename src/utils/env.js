const liveHost = `https://placesnearby-235e63knsq-uc.a.run.app`;
const localHost = `http://127.0.0.1:5001/mealstogo-78c91/us-central1/placesNearby`;

export const isDevelopment = process.env.NODE_ENV === "development" 

export const host = isDevelopment ? localHost : liveHost;
