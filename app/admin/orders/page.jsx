import React from "react";

import { MongoClient } from "mongodb";

async function fetchOrders() {
  console.log("fetching options");
  const uri = process.env.MONGO;
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    const database = client.db("PizzaCiao");
    const collection = database.collection("orders");

    const result = await collection.find().toArray();

    // const output = JSON.stringify(result);
    console.log("fetched");
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  } finally {
    await client.close();
  }
}

async function page() {
  const orders = await fetchOrders();
  return (
    <div className="p-4">
      {orders.map((order) => (
        <div
          key={order.OID}
          className="flex items-center justify-between mb-4 bg-white rounded-lg shadow-md p-6"
        >
          <div>
            <p className="text-lg font-medium">{`Order ID: ${order.OID}`}</p>
            <p className="text-gray-500">{`User ID: ${order.UID}`}</p>
            <p className="text-gray-500">{`Order Status: ${order.status}`}</p>
            <p className="text-gray-500">{`Status: ${
              order.status === 0 ? "Pending" : "Completed"
            }`}</p>
          </div>
          {order.status === 0 && (
            <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
              Mark as Completed
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default page;
