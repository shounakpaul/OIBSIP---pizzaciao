import React from "react";
import Image from "next/image";
import Link from "next/link";

import PizzaCiaoLogo from "@/public/logo.png";
import { MongoClient } from "mongodb";

function LoginPage() {
  async function handleSubmit(formData) {
    "use server";
    const uri = process.env.MONGO;
    const client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    try {
      await client.connect();
      const database = client.db("PizzaCiao");
      const collection = database.collection("users");

      const username = formData.get("email");
      const password = formData.get("password");

      const result = await collection.insertOne({
        username: username,
        password: password,
        UID: new Date().toISOString(),
        pos: 0,
      });

      // const output = JSON.stringify(result);
      //   console.log("fetched");
      //   console.log(result);
      return JSON.stringify(result);
    } catch (err) {
      console.log(err);
    } finally {
      await client.close();
    }
  }

  //   async function handleSubmit(data) {
  //     "use server";
  //     const username = data.get("email");
  //     const password = data.get("password");
  //     console.log("submitting");
  //     console.log(username);
  //     console.log(password);
  //   }
  return (
    <>
      <section className="bg-orange-200 ">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 "
          >
            <Image
              className="w-auto h-20 rounded-lg"
              src={PizzaCiaoLogo}
              alt="logo"
            />
          </a>
          <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                Create an Account
              </h1>
              <form className="space-y-4 md:space-y-6" action={handleSubmit}>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 :bg-gray-700 "
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    required=""
                  />
                </div>

                <button
                  href="/home"
                  className="w-full bg-blue-500 hover:bg-blue-600 rounded-lg text-lg text-white border-0 py-2"
                >
                  Signup
                </button>
                <p className="text-sm font-light text-gray-500 ">
                  Have an account?{" "}
                  <Link
                    href="/login"
                    className="font-medium text-primary-600 hover:underline "
                  >
                    Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LoginPage;
