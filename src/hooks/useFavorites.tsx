import { useContext } from "react";
import { FavoritesContext } from "../contexts/FavoritesContex";

export const useFavorites = () => {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error("FavoritesContext must be within a FavoritesProvider");
  }

  return context;
};
