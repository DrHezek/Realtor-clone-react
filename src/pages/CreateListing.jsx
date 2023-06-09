import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function CreateListing() {
  const [formData, setFormData] = useState({
    type: "rent",
    name: "",
    bedrooms: 1,
    bathrooms: 1,
    parking: false,
    furnished: false,
    offer: true,
    address: "",
    desc: "",
    rPrice: 0,
    dPrice: 0,
  });
  const {
    type,
    name,
    bedrooms,
    bathrooms,
    parking,
    furnished,
    address,
    desc,
    offer,
    rPrice,
    dPrice,
  } = formData;
  function onChange() {}
  return (
    <main className="max-w-md px-2 mx-auto">
      <h1 className="text-3xl text-center mt-6 font-bold ">
        {" "}
        Create a Listing
      </h1>
      <form>
        <p className="text-lg mt-6 font-semibold ">Sell / rent</p>
        <div className="flex">
          <button
            type="button"
            id="type"
            value="sale"
            onClick={onChange}
            className={` mr-3 w-full px-7 py-3 font-medium text-sm uppercase shadow-md rounded 
          hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out
          ${
            type === "rent" ? "bg-white text-black" : " bg-slate-600 text-white"
          }`}
          >
            {" "}
            Sell
          </button>
          <button
            type="button"
            id="type"
            value="sale"
            onClick={onChange}
            className={`ml-3 w-full px-7 py-3 font-medium text-sm uppercase shadow-md rounded 
          hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out
          ${
            type === "sale" ? "bg-white text-black" : " bg-slate-600 text-white"
          }`}
          >
            {" "}
            Rent
          </button>
        </div>
        <p className="text-lg mt-6 font-semibold"> Name</p>
        <input
          type="text"
          id="name"
          value={name}
          onChange={onChange}
          placeholder="Name"
          maxLength="32"
          minLength="10"
          required
          className="w-full rounded px-4 py-2 text-xl text-gray-700 
          bg-white border border-gray-300 transition duration-150 ease-in-out 
          focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"
        ></input>
        <div className="flex space-x-6">
          <div className="">
            <p className="text-lg font-semibold"> Beds</p>
            <input
              type="number"
              id="bedrooms"
              value={bedrooms}
              onChange={onChange}
              min="1"
              max="50"
              required
              className=" w-full px-4 py-2 text-lg text-gray-700 bg-white border rounded
               border-gray-300 transition duration-150 ease-in-out focus:text-gray-700
               focus:bg-white focus:border-slate-600 text-center"
            ></input>
          </div>
          <div className="">
            <p className="text-lg font-semibold"> Baths</p>
            <input
              type="number"
              id="bathrooms"
              value={bathrooms}
              onChange={onChange}
              min="1"
              max="50"
              required
              className=" w-full px-4 py-2 text-lg text-gray-700 bg-white border rounded
               border-gray-300 transition duration-150 ease-in-out focus:text-gray-700
               focus:bg-white focus:border-slate-600 text-center"
            ></input>
          </div>
        </div>
        <p className="text-lg mt-6 font-semibold ">Parking Spot</p>
        <div className="flex">
          <button
            type="button"
            id="parking"
            value={true}
            onClick={onChange}
            className={` mr-3 w-full px-7 py-3 font-medium text-sm uppercase shadow-md rounded 
          hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out
          ${!parking ? "bg-white text-black" : " bg-slate-600 text-white"}`}
          >
            {" "}
            Yes
          </button>
          <button
            type="button"
            id="parking"
            value={false}
            onClick={onChange}
            className={`ml-3 w-full px-7 py-3 font-medium text-sm uppercase shadow-md rounded 
          hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out
          ${!parking ? "bg-slate-600 text-white" : " bg-white text-black "}`}
          >
            {" "}
            No
          </button>
        </div>

        <p className="text-lg mt-6 font-semibold ">Furnished</p>
        <div className="flex">
          <button
            type="button"
            id="furnished"
            value={true}
            onClick={onChange}
            className={` mr-3 w-full px-7 py-3 font-medium text-sm uppercase shadow-md rounded 
          hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out
          ${!furnished ? "bg-white text-black" : " bg-slate-600 text-white"}`}
          >
            {" "}
            Yes
          </button>
          <button
            type="button"
            id="furnished"
            value={false}
            onClick={onChange}
            className={`ml-3 w-full px-7 py-3 font-medium text-sm uppercase shadow-md rounded 
          hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out
          ${!furnished ? "bg-slate-600 text-white" : " bg-white text-black "}`}
          >
            {" "}
            No
          </button>
        </div>

        <p className="text-lg mt-6 font-semibold"> Address</p>
        <textarea
          type="text"
          id="address"
          value={address}
          onChange={onChange}
          placeholder="Address"
          required
          className="w-full rounded px-4 py-2 text-xl text-gray-700 
          bg-white border border-gray-300 transition duration-150 ease-in-out 
          focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"
        ></textarea>
        <p className="text-lg font-semibold"> Description</p>
        <textarea
          type="text"
          id="desc"
          value={desc}
          onChange={onChange}
          placeholder="Description"
          required
          className="w-full rounded px-4 py-2 text-xl text-gray-700 
          bg-white border border-gray-300 transition duration-150 ease-in-out 
          focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"
        ></textarea>

        <p className="text-lg font-semibold ">Offer</p>
        <div className="flex mb-6">
          <button
            type="button"
            id="offer"
            value={true}
            onClick={onChange}
            className={` mr-3 w-full px-7 py-3 font-medium text-sm uppercase shadow-md rounded 
          hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out
          ${offer ? "bg-slate-600 text-white " : "bg-white text-black "}`}
          >
            {" "}
            Yes
          </button>
          <button
            type="button"
            id="offer"
            value={false}
            onClick={onChange}
            className={`ml-3 w-full px-7 py-3 font-medium text-sm uppercase shadow-md rounded 
          hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out
          ${!offer ? "bg-slate-600 text-white" : " bg-white text-black "}`}
          >
            {" "}
            No
          </button>
        </div>

        <div className="flex items-center mb-6">
          <div className="">
            <p className="text-lg font-semibold"> Regular Price</p>

            <div className=" flex w-full justify-center items-center space-x-6">
              <input
                type="number"
                id="rPrice"
                value={rPrice}
                onChange={onChange}
                min="50"
                max="40000000"
                required
                className=" w-full px-4 py-2 text-xl text-gray-700 bg-white border rounded
               border-gray-300 transition duration-150 ease-in-out focus:text-gray-700
               focus:bg-white focus:border-slate-600 text-center "
              ></input>

              {type === "rent" && (
                <div className="">
                  <p className="text-md w-full whitespace-nowrap">$ / Month</p>
                </div>
              )}
            </div>
          </div>
        </div>
        {offer && (
          <div className="flex items-center mb-6">
            <div className="">
              <p className="text-lg font-semibold"> Discounted Price</p>

              <div className=" flex w-full justify-center items-center space-x-6">
                <input
                  type="number"
                  id="dPrice"
                  value={dPrice}
                  onChange={onChange}
                  min="50"
                  max="40000000"
                  required={offer}
                  className=" w-full px-4 py-2 text-xl text-gray-700 bg-white border rounded
               border-gray-300 transition duration-150 ease-in-out focus:text-gray-700
               focus:bg-white focus:border-slate-600 text-center "
                ></input>

                {type === "rent" && (
                  <div className="">
                    <p className="text-md w-full whitespace-nowrap">
                      $ / Month
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        <div className="mb-6">
          <p className="text-lg font-semibold">Images</p>
          <p className="text-gray-600 ">
            The first image will be the cover (max 6)
          </p>
          <input
            type="file"
            id="images"
            onChange={onChange}
            accept=".jpg, ,png, .jpeg"
            multiple
            required
            className="w-full px-3 py-1.5 text-gray-700 bg-white border border-gray-300
            rounded transition duration-150 ease-in-out focus:bg-white
             focus:border-slate-600"
          ></input>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white uppercase px-7 py-3 
            text-sm font-medium rounded shadow-md
             hover:bg-blue-700 transition duration-150 ease-in-out
             hover:shadow-lg active:bg-blue-800 focus:bg-blue-700 focus:shadow-lg mb-6"
        >
          <Link
            to="/create-listing"
            className="flex justify-center items-center"
          >
            Create Listing
          </Link>
        </button>
      </form>
    </main>
  );
}
