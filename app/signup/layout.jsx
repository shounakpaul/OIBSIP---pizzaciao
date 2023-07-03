import React from "react";

export const metadata = {
  title: "PizzaCiao | Signup",
  description: "PizzaCiao",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
