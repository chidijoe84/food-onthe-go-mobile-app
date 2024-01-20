import { mocks, mockImages } from "../../../functions/places/mock";
import camelize from "camelize";

export const restaurantsRequest = async (location) => {
  const live = `https://placesnearby-235e63knsq-uc.a.run.app?location=${location}`;
  const local = `http://127.0.0.1:5001/mealstogo-78c91/us-central1/placesNearby?location=${location}`;

  const res = await fetch(local);
  return res.json();
};

export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    return {
      ...restaurant,
      address: restaurant.vicinity,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });

  return camelize(mappedResults);
};
