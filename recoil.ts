import {
  atom,
} from "recoil";
import { Info } from "@/types";

// full firebase user authentication data
export const dataAtom = atom<Info[]>({
  key: 'dataAuth', // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
  // dangerouslyAllowMutability: true,
});
