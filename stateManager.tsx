import { atom, selector } from "recoil";

export const textState = atom({
  key: "textStateKey",
  default: ""
});

export const charCount = selector({
  key: "charCountState",
  get: ({ get }) => {
    const text = get(textState);
    return text.length;
  }
});
