import React from "react";
import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

export async function GET() {
  console.log("fetching options");
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
    console.log("fetched");
    console.log(result);
    return NextResponse.json(result);
  } catch (err) {
    console.log(err);
  } finally {
    await client.close();
  }
}
