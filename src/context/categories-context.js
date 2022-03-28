import { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";
const CategoriesContext = createContext();

const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/api/categories");
      setCategories(data.categories);
      data.categories.forEach(async (category) => {
        const {
          data: {
            category: { videos },
          },
        } = await axios.get(`/api/categories/${category._id}`);
        setCategories((prev) =>
          prev.map((item) =>
            item._id === category._id ? { ...item, videos } : item
          )
        );
      });
    })();
  }, []);

  return (
    <CategoriesContext.Provider value={{ categories }}>
      {children}
    </CategoriesContext.Provider>
  );
};

const useCategories = () => useContext(CategoriesContext);
export { useCategories, CategoriesProvider };
