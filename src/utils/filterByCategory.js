export const filterByCategory = (videos, selectedCategory) => {
  if (selectedCategory === "All") return videos;
  return videos.filter((video) => video.categoryName === selectedCategory);
};
