import React from "react";
import { MongoClient } from "mongodb";
import Image from "next/image";

import Thin from "@/public/userBuilder/Crusts/Thin.jpg";
import Thick from "@/public/userBuilder/Crusts/Thick.jpg";
import Stuffed from "@/public/userBuilder/Crusts/Stuffed.jpg";
import WholeWheat from "@/public/userBuilder/Crusts/WholeWheat.jpg";
import Gluten from "@/public/userBuilder/Crusts/Gluten.jpg";

import Bechamel from "@/public/userBuilder/Sauces/Bechamel.jpg";
import Pepper from "@/public/userBuilder/Sauces/Pepper.jpg";
import Sweet from "@/public/userBuilder/Sauces/Sweet.jpg";
import Tomato from "@/public/userBuilder/Sauces/Tomato.jpg";
import White from "@/public/userBuilder/Sauces/White.jpg";

import Mozzarella from "@/public/userBuilder/Cheeses/Mozzarella.jpg";
import Cheddar from "@/public/userBuilder/Cheeses/Cheddar.jpg";
import Parmesan from "@/public/userBuilder/Cheeses/Parmesan.jpg";
import Feta from "@/public/userBuilder/Cheeses/Feta.jpg";
import Gorgonzola from "@/public/userBuilder/Cheeses/Gorgonzola.jpg";

import BellPepper from "@/public/userBuilder/Toppings/BellPepper.jpg";
import Mushroom from "@/public/userBuilder/Toppings/Mushrooms.jpg";
import Olives from "@/public/userBuilder/Toppings/Olives.jpg";
import Onions from "@/public/userBuilder/Toppings/Onions.jpg";
import Spinach from "@/public/userBuilder/Toppings/Spinach.jpg";

const renderer = async () => {
  const crustOptions = [
    { item: "Thin Crust", photo: Thin },
    { item: "Thick Crust", photo: Thick },
    { item: "Stuffed Crust", photo: Stuffed },
    { item: "Whole Wheat Crust", photo: WholeWheat },
    { item: "Gluten-Free Crust", photo: Gluten },
  ];
  const sauceOptions = [
    { item: "Bechamel Sauce", photo: Bechamel },
    { item: "Pepper Sauce", photo: Pepper },
    { item: "Sweet Sauce", photo: Sweet },
    { item: "Tomato Sauce", photo: Tomato },
    { item: "White Sauce", photo: White },
  ];
  const cheeseOptions = [
    { item: "Mozzarella Cheese", photo: Mozzarella },
    { item: "Cheddar Cheese", photo: Cheddar },
    { item: "Parmesan Cheese", photo: Parmesan },
    { item: "Gorgonzola Cheese", photo: Gorgonzola },
    { item: "Feta Cheese", photo: Feta },
  ];
  const toppingsOptions = [
    { item: "Spinach", photo: Spinach },
    { item: "Bell Peppers", photo: BellPepper },
    { item: "Onions", photo: Onions },
    { item: "Olives", photo: Olives },
    { item: "Spinach", photo: Spinach },
  ];

  return (
    <>
      <div className="flex flex-row justify-between px-10 border-y-2 bg-gray-200 py-5">
        <div>
          <p className="text-3xl font-bold mb-2">Select your Pizza</p>
          <p className="text-lg">Total: ₹150</p>
        </div>

        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold px-4 rounded h-min py-2 my-auto shadow-lg hover:shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
          Add to Cart
        </button>
      </div>
      <div className="p-4 bg-gray-100 rounded-lg shadow-md animate-fade-in-down">
        <form className="bg-white rounded-lg shadow-md p-6 flex flex-wrap">
          <div className="mb-8 w-full md:w-1/2">
            <p className="text-lg font-medium mb-4 text-orange-400">Crust</p>
            {crustOptions.map((option) => (
              <div key={option.photo} className="flex items-center mb-4">
                <Image
                  src={option.photo}
                  alt={option.item}
                  className="w-16 h-16 mr-4 rounded-full"
                />
                <label className="inline-flex items-center text-gray-700">
                  <input
                    type="radio"
                    name="crust"
                    value={option.item}
                    className="form-radio h-5 w-5 text-orange-400"
                  />
                  <span className="ml-2">{option.item}</span>
                </label>
              </div>
            ))}
          </div>
          <div className="mb-8 w-full md:w-1/2">
            <p className="text-lg font-medium mb-4 text-orange-400">Sauce</p>
            {sauceOptions.map((option) => (
              <div key={option.photo} className="flex items-center mb-4">
                <Image
                  src={option.photo}
                  alt={option.item}
                  className="w-16 h-16 mr-4 rounded-full"
                />
                <label className="inline-flex items-center text-gray-700">
                  <input
                    type="radio"
                    name="sauce"
                    value={option.item}
                    className="form-radio h-5 w-5 text-orange-400"
                  />
                  <span className="ml-2">{option.item}</span>
                </label>
              </div>
            ))}
          </div>
          <div className="mb-8 w-full md:w-1/2">
            <p className="text-lg font-medium mb-4 text-orange-400">Cheese</p>
            {cheeseOptions.map((option) => (
              <div key={option.photo} className="flex items-center mb-4">
                <Image
                  src={option.photo}
                  alt={option.item}
                  className="w-16 h-16 mr-4 rounded-full"
                />
                <label className="inline-flex items-center text-gray-700">
                  <input
                    type="radio"
                    name="cheese"
                    value={option.item}
                    className="form-radio h-5 w-5 text-orange-400"
                  />
                  <span className="ml-2">{option.item}</span>
                </label>
              </div>
            ))}
          </div>
          <div className="mb-8 w-full md:w-1/2">
            <p className="text-lg font-medium mb-4 text-orange-400">Toppings</p>
            {toppingsOptions.map((option) => (
              <div key={option.photo} className="flex items-center mb-4">
                <Image
                  src={option.photo}
                  alt={option.item}
                  className="w-16 h-16 mr-4 rounded-full"
                />
                <label className="inline-flex items-center text-gray-700">
                  <input
                    type="radio"
                    name="toppings"
                    value={option.item}
                    className="form-radio h-5 w-5 text-orange-400"
                  />
                  <span className="ml-2">{option.item}</span>
                </label>
              </div>
            ))}
          </div>
        </form>
      </div>
    </>
  );
};

export default renderer;
