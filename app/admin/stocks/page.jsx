import React from "react";
import { MongoClient } from "mongodb";

async function fetchStocks() {
  console.log("fetching options");
  const uri = process.env.MONGO;
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    const database = client.db("PizzaCiao");
    const collection = database.collection("inventory");

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
  const stocks = await fetchStocks();

  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-200">
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              IID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Item
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Quantity
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Type
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Price
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {stocks.map((stock) => (
            <tr key={stock.IID} className="hover:bg-gray-100">
              <td className="px-6 py-4 whitespace-nowrap">{stock.IID}</td>
              <td className="px-6 py-4 whitespace-nowrap">{stock.item}</td>
              <td className="px-6 py-4 whitespace-nowrap">{stock.qty}</td>
              <td className="px-6 py-4 whitespace-nowrap">{stock.type}</td>
              <td className="px-6 py-4 whitespace-nowrap">{stock.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default page;
