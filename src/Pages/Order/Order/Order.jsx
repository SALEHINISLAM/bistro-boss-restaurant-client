import React, { useState } from "react";
import PropTypes from "prop-types";
import Cover from "../../SharedComponents/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../hooks/useMenu";
import FoodCard from "../../../Components/FoodCard";
import { useParams } from "react-router-dom";
import FoodTabPage from "../../../Components/FoodTabPage";
const Order = (props) => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const {category} = useParams();
  
  const initialIndex = categories.indexOf(category);
  console.log(category, initialIndex)
  const [tabIndex, setTabIndex] = useState(parseInt(initialIndex));
  const [menu] = useMenu();

  const desserts = menu.filter((item) => item.category === "dessert");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
      <Cover img={"https://i.ibb.co/qWTB5fm/banner2.jpg"} heading={'OUR SHOP'}/>
      <div className="container mx-auto">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => {setTabIndex(index)}}>
          <TabList className="uppercase flex justify-center">
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soup</Tab>
            <Tab>Dessert</Tab>
            <Tab>Drinks</Tab>
          </TabList>
          <TabPanel>
            {/* <div className="p-6 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {salad.map((item) => (
                <FoodCard key={item._id} item={item} />
              ))}
            </div> */}
            <FoodTabPage items={'salad'} categoryFoods={salad}/>
          </TabPanel>
          <TabPanel>
            {/* <div className="p-6 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {pizza.map((item) => (
                <FoodCard key={item._id} item={item} />
              ))}
            </div> */}
            <FoodTabPage items={'pizza'} categoryFoods={pizza}/>
          </TabPanel>
          <TabPanel>
            {/* <div className="p-6 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {soup.map((item) => (
                <FoodCard key={item._id} item={item} />
              ))}
            </div> */}
            <FoodTabPage items={'soup'} categoryFoods={soup}/>
          </TabPanel>
          <TabPanel>
            {/* <div className="p-6 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {desserts.map((item) => (
                <FoodCard key={item._id} item={item} />
              ))}
            </div> */}
            <FoodTabPage items={'dessert'} categoryFoods={desserts}/>
          </TabPanel>
          <TabPanel>
            {/* <div className="p-6 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {drinks.map((item) => (
                <FoodCard key={item._id} item={item} />
              ))}
            </div> */}
            <FoodTabPage items={'drinks'} categoryFoods={drinks}/>
            </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

Order.propTypes = {};

export default Order;
