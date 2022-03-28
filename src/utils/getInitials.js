export const getInitials = (str) =>
  str
    .split(" ")
    .slice(0, 2)
    .map((word) => word.split("")[0].toUpperCase())
    .join("");
