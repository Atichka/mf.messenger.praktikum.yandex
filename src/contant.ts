const root = document.querySelector(".root");
interface FormData {
  [Symbol.iterator](): IterableIterator<[string, FormDataEntryValue]>;
}

export { root, FormData };
