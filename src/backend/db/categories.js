import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Get Started",
    slug: "video-editing-for-beginners",
  },
  {
    _id: uuid(),
    categoryName: "Learn Final cut pro X",
    slug: "final-cut-pro-x",
  },
  {
    _id: uuid(),
    categoryName: "Learn Filmora X",
    slug: "filmora-x",
  },
  {
    _id: uuid(),
    categoryName: "Learn After effects",
    slug: "after-effects",
  },
];
