import type { AppRouteName } from "./router";

import CatDefault from "/images/pet/default.png";
import CatEggDone from "/images/pet/smile.png";

type PetAsset = string;

export const petByRoute: Partial<Record<AppRouteName, PetAsset | null>> = {
  countdown_done: CatEggDone,
};

export const DEFAULT_PET: PetAsset = CatDefault;
