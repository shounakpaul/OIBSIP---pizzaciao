import React from "react";
import Image from "next/image";
import { redirect } from "next/navigation";
import RedirectMe from "./redirect";
import { MongoClient } from "mongodb";
import PizzaCiaoLogo from "@/public/logo.png";

import { NextRequest } from "next/server";

async function LoginPage() {
  async function handleSubmit(formData) {
    "use server";
    async function fetchUsers() {
      "use server";
      console.log("clicked");
      const uri = process.env.MONGO;
      const client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      try {
        await client.connect();
        const database = client.db("PizzaCiao");
        const collection = database.collection("users");
        const result = await collection.find().toArray();
        console.log("users fetched");
        // console.log(result);
        let users = [];
        for (let user of result) {
          users.push({ username: user.username, password: user.password });
        }
        return users;
      } catch (err) {
        console.log(err);
      } finally {
        await client.close();
      }
    }
    fetchUsers().then((users) => {
      console.log(users);
      let enteredUser = {
        username: formData.get("email"),
        password: formData.get("password"),
      };
      let foundUser = users.find(
        (user) =>
          user.username === enteredUser.username &&
          user.password === enteredUser.password
      );
      if (foundUser) {
        console.log("user found");
        redirect("/home");
        RedirectMe();
      } else {
        console.log(enteredUser);
        console.log("user not found");
      }
    });
  }

  async function dream(formData) {
    "use server";

    if (formData) {
      async function fetchUsers() {
        console.log("clicked");
        const uri = process.env.MONGO;
        const client = new MongoClient(uri, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        try {
          await client.connect();
          const database = client.db("PizzaCiao");
          const collection = database.collection("users");
          const result = await collection.find().toArray();
          console.log("users fetched");
          // console.log(result);
          let users = [];
          for (let user of result) {
            users.push({ username: user.username, password: user.password });
          }
          return users;
        } catch (err) {
          console.log(err);
        } finally {
          await client.close();
        }
      }
      fetchUsers().then((users) => {
        console.log(users);
        let enteredUser = {
          username: formData.get("email"),
          password: formData.get("password"),
        };
        let foundUser = users.find(
          (user) =>
            user.username === enteredUser.username &&
            user.password === enteredUser.password
        );
        if (foundUser) {
          console.log("user found");
          redirect("/home");
          RedirectMe();
        } else {
          console.log(enteredUser);
          console.log("user not found");
        }
      });
      // redirect("/home");
    }
  }

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
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" action={dream}>
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
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 "
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="remember" className="text-gray-500 ">
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-sm font-medium text-gray-400 hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>
                <button
                  href="/home"
                  className="w-full bg-blue-500 hover:bg-blue-600 rounded-lg text-lg text-white border-0 py-2"
                >
                  Sign in
                </button>
                <p className="text-sm font-light text-gray-500 ">
                  Don't have an account yet?{" "}
                  <a
                    href="#"
                    className="font-medium text-primary-600 hover:underline "
                  >
                    Sign up
                  </a>
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
