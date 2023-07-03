import React from "react";
import Navbar from "./navbar";

export const metadata = {
  title: "PizzaCiao | Order a Pizza!",
  description: "PizzaCiao",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
