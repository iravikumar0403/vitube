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
    title: "Beginners",
  },
  {
    _id: uuid(),
    categoryName: "Learn Final cut pro X",
    slug: "final-cut-pro-x",
    title: "Final Cut Pro X",
  },
  {
    _id: uuid(),
    categoryName: "Learn Filmora X",
    slug: "filmora-x",
    title: "Filmora X",
  },
  {
    _id: uuid(),
    categoryName: "Learn After effects",
    slug: "after-effects",
    title: "After Effects",
  },
];
