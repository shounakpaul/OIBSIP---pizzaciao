import React from "react";
import Image from "next/image";
import { MongoClient } from "mongodb";

import CartPizza from "@/public/cart/pizza_cart.png";

async function fetchCart() {
  console.log("fetching options");
  const uri = process.env.MONGO;
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    const database = client.db("PizzaCiao");
    const collection = database.collection("Cart");

    const result = await collection.find().toArray();

    // const output = JSON.stringify(result);
    console.log("fetched");
    return result;
  } catch (err) {
    console.log(err);
  } finally {
    await client.close();
  }
}

async function page() {
  // const cart = await fetchCart();
  // console.log(cart);
  const cart = [
    {
      UID: 1,
      CID: 1,
      crust: "Thin Crust",
      cheese: "Bechamel Sauce",
      sauce: "Mozzarela Cheese",
      veggie: "Mushrooms",
    },
    {
      UID: 1,
      CID: 1,
      crust: "Thick Crust",
      cheese: "White Sauce",
      sauce: "Mozzarela Cheese",
      veggie: "Mushrooms",
    },
  ];
  const cost = cart.length * 150;
  return (
    <div className="bg-orange-50" style={{ height: "100vh" }}>
      <div className="flex flex-row justify-between px-10 border-y-2 bg-gray-200 py-5">
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-2">Your cart</h1>
          <p className="text-lg mb-2">Review your order and checkout</p>
          <p className="text-lg">Total: ₹{cost}</p>
        </div>
        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold px-4 rounded h-min py-2 my-auto shadow-lg hover:shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
          Checkout
        </button>
      </div>
      {cart.map((item) => (
        <div
          key={item.CID}
          className="bg-gray-100 my-5 rounded-lg p-5 flex flex-row justify-center space-x-14 md:space-x-16 lg:space-x-18 w-11/12 md:w-3/4 lg:w-1/2 mx-auto shadow-lg hover:shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
        >
          <div className="flex items-center justify-center">
            <Image src={CartPizza} alt="Pizza" className="h-24 w-auto" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-xl font-bold mb-2">{item.crust}</p>
            <p className="text-lg mb-2">{item.cheese}</p>
            <p className="text-lg mb-2">{item.sauce}</p>
            <p className="text-lg mb-2">{item.veggie}</p>
            <p className="text-lg font-bold">₹150</p>
          </div>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold px-4 rounded h-min py-2 my-auto shadow-lg hover:shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            Remove from cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default page;
