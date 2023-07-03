import React from "react";
import Image from "next/image";
import Link from "next/link";
import HeroImage from "@/public/PizzaBackground.png";
import Logo from "@/public/logo.png";

function Hero() {
  return (
    <div style={{ height: "95vh" }}>
      <img
        src={HeroImage.src}
        alt="Pizza"
        className="w-full h-auto filter brightness-50 grayscale-65"
        style={{ height: "95vh", width: "100vw" }}
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Welcome to
        </h1>
        <Image
          src={Logo}
          alt="Logo"
          className="h-24 w-auto mx-auto mb-5 mt-2 rounded-lg"
        />
        <p className="text-lg md:text-xl text-white mb-8">
          The best pizza in town, made with love and fresh ingredients.
        </p>
        <Link
          href="/make"
          className="bg-orange-400 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"
        >
          Order Your Pizza Now
        </Link>
      </div>
    </div>
  );
}

export default Hero;
