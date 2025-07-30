import { useState } from "react";
import { baseUrls } from "../baseUrls";
import { errorEmitter, successEmitter } from "../ToastEmitter";
import { NavLink } from "react-router-dom";
import { useListContext } from "../contextapi/listcontext/listContext";

function AddListing() {

   const {addListFun} = useListContext()

  const [listing, setListing]= useState({
    title:"",
    description:"",
    price:"",
    location:"",
    country:""
  });


  const [image, setImage] = useState(null);

  const changehandler =(e)=>{
   setListing({...listing, [e.target.name] : e.target.value});
  };

  const submitHandler = async (e)=>{
    e.preventDefault();
    // try {
    //    const response = await fetch(`${baseUrls}/api/v3.2/post/addlist`, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       "auth_token": localStorage.getItem("token"),
    //     },
    //     body: JSON.stringify(listing),
    //   });
    //   const data = await response.json();
    //   console.log(data);
    //   if (data.success) {
    //     successEmitter(data.message);
    //     setListing({
    //       title: "",
    //       description: "",
    //       price: "",
    //       location: "",
    //       country: "",
    //     });
    //   } else {
    //     errorEmitter(data.message);
    //   }
    // } catch (error) {
    //   errorEmitter("internal server error");
    // }
    addListFun(listing, image, setListing)
  }
 

  return (
    <section className="bg-gray-100 dark:text-gray-100 dark:bg-gray-900 transition-all duration-300 ease-in-out text-gray-900 ">
      <div className="mx-auto max-w-screen-xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:py-12">
            <h1 className="font-bold py-2 text-2xl ">Listing Your Place </h1>
            <p className="max-w-xl text-lg">
              Share your space and start earning today! List your room,
              apartment, or home in just a few easy steps. Add photos, set your
              price, and describe your place — we’ll help you reach thousands of
              travelers looking for stays like yours.
            </p>
            <div className="mt-8">
              <NavLink to="#" className="text-2xl font-bold text-orange-600">
                {" "}
                Start hosting with Prabhat today!{" "}
              </NavLink>
              <address className="mt-2 not-italic">
                282 Kevin Brook, Imogeneborough, CA 58517
              </address>
            </div>
          </div>
          <div className="rounded-lg bg-gray-100  text-gray-900 dark:text-gray-100 dark:bg-gray-800 p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form
              className="space-y-4"
              onSubmit={submitHandler}
            >
              <div>
                <label className="sr-only" htmlFor="title">
                  Title
                </label>
                <input
                  className="w-full border rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Title"
                  name="title"
                  value={listing.title}
                  onChange={changehandler}
                  type="text"
                  id="title"
                />
              </div>
              <div>
                <label className="sr-only" htmlFor="description">
                  Description
                </label>
                <textarea
                  className="w-full border rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Description"
                  name="description"
                  value={listing.description}
                  onChange={changehandler}
                  rows="4"
                  id="description"
                ></textarea>
              </div>
              <div>
                <label className="sr-only" htmlFor="image">
                  Image
                </label>
                <input
                  className="w-full border rounded-lg border-gray-200 p-3 text-sm"
                  name="image"
                  type="file"
                  id="image"
                  required
                  onChange={(e)=>{setImage(e.target.files[0])}}
                />
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" htmlFor="price">
                    Price
                  </label>
                  <input
                    className="w-full border rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Price"
                    type="number"
                    name="price"
                    value={listing.price}
                    onChange={changehandler}
                    id="price"
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="country">
                    Country
                  </label>
                  <input
                    className="w-full border rounded-lg border-gray-200 p-3 text-sm"
                    name="country"
                    value={listing.country}
                    onChange={changehandler}
                    placeholder="Country"
                    type="tel"
                    id="country"
                  />
                </div>
              </div>
              <div>
                <label className="sr-only" htmlFor="Location">
                  Location
                </label>
                <input
                  className="w-full border rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Location"
                  name="location"
                  value={listing.location}
                  onChange={changehandler}
                  type="text"
                  id="Location"
                />
              </div>
              <div className="mt-5">
                <button
                  type="submit"
                  className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                >
                  Add Listing
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AddListing;
