import React from "react";
import Image from "next/image";
import Link from "next/link";
import PrimaryButton from "@/components/buttons";

import PizzaBg from "../public/PizzaBackground.png";
import PizzaImg from "../public/Pizza.png";
import PizzaCiaoLogo from "../public/logo.png";

function page() {
  return (
    <section
      className="text-gray-600 body-font bg-orange-200"
      // style={{ backgroundImage: `url:${PizzaBg.src}` }}
    >
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <Image
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="hero"
          src={PizzaImg}
        />
        <div className="text-center lg:w-2/3 w-full">
          {/* <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            
          </h1> */}
          <Image
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded-lg m-auto"
            alt="PizzaCiao"
            src={PizzaCiaoLogo}
          />
          <p className="mb-8 leading-relaxed">
            Who doesnt't love Pizza? We're sure you do 😉 !
          </p>
          <div className="flex justify-center">
            <PrimaryButton
              href="/login"
              className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
            >
              Login
            </PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
