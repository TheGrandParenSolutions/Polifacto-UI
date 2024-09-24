export function pluralize(
  count: number,
  one: string,
  twoToFour: string,
  other: string
) {
  if (count === 1) {
    return one;
  }
  if (count > 1 && count < 5) {
    return twoToFour;
  }
  return other;
}

export const lockBgScrollWhenModalOpen = () => {
  const html = document.getElementsByTagName("html")[0];
  html.classList.add("lock-scroll");
};

export const unLockBgScrollWhenModalClose = () => {
  const html = document.getElementsByTagName("html")[0];
  html.classList.remove("lock-scroll");
};
