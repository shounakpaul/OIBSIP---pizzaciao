import React from "react";
import Link from "next/link";

function PrimaryButton(props) {
  return (
    <>
      <Link
        href={props.href}
        className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg mx-2"
      >
        {props.children}
      </Link>
    </>
  );
}

export default PrimaryButton;
