import React, { useContext } from "react";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { FavouritesContext } from "../../services/favourites/favourites.context";

const FavouriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 10px;
  right: 10px;

  z-index: 9;
`;

export const Favourite = () => {
  const { Favourites, addToFavourites, removeFromFavourites } =
    useContext(FavouritesContext);
  return null;
};
