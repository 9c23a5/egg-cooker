import type { AppRouteName } from "./router";

import CatRamen from "/images/pet/ramen.png";
import CatEggDone from "/images/pet/ramen.png";
import CatDefault from "/images/pet/ramen.png";

type PetAsset = string;

export const petByRoute: Partial<Record<AppRouteName, PetAsset | null>> = {
  home: CatRamen,
  countdown_done: CatEggDone,
};

export const DEFAULT_PET: PetAsset = CatDefault;
