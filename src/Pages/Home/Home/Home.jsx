import React from "react";
import Banner from "../Banner/Banner";
import OrderOnline from "../OrderOnline/OrderOnline";
import PopularMenu from "../PopularMenu/PopularMenu";
import Featured from "../Featured/Featured";
import Testimonials from "../Testimonials/Testimonials";
import SectionTitle from "../../../Components/SectionTitle";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>
          Bistro Boss | Home
        </title>
      </Helmet>
      <Banner />
      <OrderOnline />
      <div className="container mx-auto py-20">
        <div className="bg-[url('https://i.ibb.co/kmkxyqL/chef-service.jpg')] p-10 lg:p-20 text-center w-full h-full">
          <div className="bg-white p-4">
            <h2 className="uppercase text-black text-4xl py-8 font-cinzel font-semibold">Bistro Boss</h2>
            <p className="text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, libero accusamus laborum deserunt ratione dolor
              officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
              nihil iusto ducimus incidunt quibusdam nemo.
            </p>
          </div>
        </div>
      </div>
      <PopularMenu />
      <div className="container mx-auto">
        <div className="bg-black text-white font-raleway text-5xl font-semibold text-center min-h-64 justify-center items-center flex my-20">
          Call Us: +88 01227112003
        </div>
        <SectionTitle heading={"Should Try"} subheading={"CHEF RECOMMENDS"} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-12 pb-20">
          <div className="card rounded-none shadow-xl">
            <figure className="">
              <img
                src="https://i.ibb.co/6HbNMB6/slide1.jpg"
                alt="Shoes"
                className="w-full max-h-80"
              />
            </figure>
            <div className="card-body items-center text-center text-black bg-[#F3F3F3]">
              <h2 className="card-title">Caeser Salad</h2>
              <p>
                Lettuce, Eggs, Parmesan Cheese, Chicken <br /> Breast Fillets.
              </p>
              <div className="card-actions">
                <button className="btn bg-[#E8E8E8] uppercase border-b-2 border-t-0 border-r-0 border-l-0 text-[#BB8506] border-b-[#BB8506] hover:bg-[#1F2937]">
                  add to cart
                </button>
              </div>
            </div>
          </div>
          <div className="card rounded-none shadow-xl">
            <figure className="">
              <img
                src="https://i.ibb.co/6HbNMB6/slide1.jpg"
                alt="Shoes"
                className="w-full max-h-80"
              />
            </figure>
            <div className="card-body items-center text-center text-black bg-[#F3F3F3]">
              <h2 className="card-title">Caeser Salad</h2>
              <p>
                Lettuce, Eggs, Parmesan Cheese, Chicken <br /> Breast Fillets.
              </p>
              <div className="card-actions">
                <button className="btn bg-[#E8E8E8] uppercase border-b-2 border-t-0 border-r-0 border-l-0 text-[#BB8506] border-b-[#BB8506] hover:bg-[#1F2937]">
                  add to cart
                </button>
              </div>
            </div>
          </div>
          <div className="card rounded-none shadow-xl">
            <figure className="">
              <img
                src="https://i.ibb.co/6HbNMB6/slide1.jpg"
                alt="Shoes"
                className="w-full max-h-80"
              />
            </figure>
            <div className="card-body items-center text-center text-black bg-[#F3F3F3]">
              <h2 className="card-title">Caeser Salad</h2>
              <p>
                Lettuce, Eggs, Parmesan Cheese, Chicken <br /> Breast Fillets.
              </p>
              <div className="card-actions">
                <button className="btn bg-[#E8E8E8] uppercase border-b-2 border-t-0 border-r-0 border-l-0 text-[#BB8506] border-b-[#BB8506] hover:bg-[#1F2937]">
                  add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Featured />
      <Testimonials />
    </div>
  );
};

export default Home;
