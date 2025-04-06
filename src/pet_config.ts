import type { AppRouteName } from "./router";

import CatRamen from "./assets/pet/ramen.png";
import CatEggDone from "./assets/pet/ramen_egg.png";
import CatDefault from "./assets/pet/default.png";

type PetAsset = string;

export const petByRoute: Partial<Record<AppRouteName, PetAsset | null>> = {
  home: CatRamen,
  countdown_done: CatEggDone,
};

export const DEFAULT_PET: PetAsset = CatDefault;
