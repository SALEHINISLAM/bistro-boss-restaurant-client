import { useEffect, useState } from "react";
import useMenu from "../hooks/useMenu";
import FoodCard from "./FoodCard";
import PropTypes from "prop-types";
const FoodTabPage = ({ items , categoryFoods}) => {
  const [menu] = useMenu();
  const [foods, setFoods] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [productPerPage, setProductPerPage] = useState(6);
  const numberOfPages = Math.ceil(
    categoryFoods.length/ productPerPage
  );
  const pages = [...Array(numberOfPages).keys()];
  const handleItemsPerPage = (e) => {
    const val = e.target.value;
    console.log(val);
    setProductPerPage(parseInt(val));
    setCurrentPage(0);
  };
  useEffect(() => {
    fetch(
      `http://localhost:5000/menu/${
        items ? items : "salad"
      }?page=${currentPage}&size=${productPerPage}`
    )
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, [currentPage, productPerPage]);
  return (
    <>
      <div className="p-6 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {foods.map((item) => (
          <FoodCard key={item._id} item={item} />
        ))}
      </div>

      <button
        className="btn"
        onClick={() =>
          setCurrentPage(currentPage - 1 >= 0 ? currentPage - 1 : 0)
        }
      >
        prev
      </button>
      {pages.map((i, index) => (
        <button key={index} className="btn" onClick={() => setCurrentPage(i)}>
          {i}
        </button>
      ))}
      <select
        name=""
        id=""
        value={productPerPage}
        onChange={handleItemsPerPage}
      >
        <option value="3">3</option>
        <option value="6">6</option>
        <option value="9">9</option>
        <option value="12">12</option>
      </select>
      <button
        className="btn"
        onClick={() =>
          setCurrentPage(
            currentPage + 1 < pages.length ? currentPage + 1 : pages.length - 1
          )
        }
      >
        next
      </button>
    </>
  );
};
FoodTabPage.propTypes = {
  items: PropTypes.string,
  categoryFoods: PropTypes.array,
};
export default FoodTabPage;
