import type { NextPage } from "next";

export default function TailWindPractice() {
  return (
    <>
      <div className="bg-slate-400 xl:place-content-center py-20 px-20 grid gap-10 lg:grid-cols-2 xl:grid-cols-3 min-h-screen">
        <div className="bg-white p-6 rounded-3xl shadow-2xl flex flex-col justify-between">
          <span className="font-semibold text-3xl">Select Item</span>
          <ul>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex justify-between my-2 ">
                <span className="text-gray-500">Grey Chair</span>
                <span className="font-semibold">$19</span>
              </div>
            ))}
          </ul>
          <ul>
            {["a", "b", "c", ""].map((friend, i) => (
              <li className="bg-red-300 py-2 empty:hidden" key={i}>
                {friend}
              </li>
            ))}
          </ul>
          <div className="flex justify-between t-2 pt-2 border-t-2 border-dashed">
            <span>Total</span>
            <span className="font-semibold">$38</span>
          </div>
          <button
            className="mt-5 bg-blue-500 text-white p-3 text-center rounded-xl w-3/4 mx-auto hover:bg-blue-300
        active:bg-yellow-300 focus:bg-yellow-300"
          >
            Checkout
          </button>
        </div>
        <div className="bg-white overflow-hidden rounded-3xl shadow-xl group">
          <div className="portrait:bg-indigo-600  landscape:bg-teal-500 p-6 pb-14  xl:pb-40">
            <span className="text-white text-2xl">Profile</span>
          </div>
          <div className="rounded-3xl p-6 bg-white relative -top-5">
            <div className="flex relative -top-16 items-end justify-between ">
              <div className="flex flex-col item-center">
                <span className="text-sm text-gray-500">Orders</span>
                <span className="font-medium">$340</span>
              </div>
              <div className="h-24 w-24 bg-gray-300 rounded-full group-hover:bg-red-100 transition-colors" />
              <div className="flex flex-col item-center">
                <span className="text-sm text-gray-500">spent</span>
                <span className="font-medium">$340</span>
              </div>
            </div>
            <div className="relative flex flex-col mt-5 items-center -mt-10 -mb-5">
              <span className="text-lg font-medium">Tony Molloy</span>
              <span className="text-sm text-gray-500">New York, USA</span>
            </div>
          </div>
        </div>
        <div className="bg-white p-10 rounded-2xl shadow-2xl lg:col-span-2 xl:col-span-1">
          <div className="flex mb-5 justify-between items-center">
            <span>←</span>
            <div className="space-x-3">
              <span>☆ 4.9</span>
              <span className="shadow-xl p-2 rounded-md">♥</span>
            </div>
          </div>
          <div className="bg-zinc-400 h-72 mb-5" />
          <div className="flex flex-col">
            <span className="font-medium text-xl">Swoon Lounge</span>
            <span className="text-xs text-gray-500">Chair</span>
            <div className="mt-3 mb-5 flex justify-between items-center">
              <div className="space-x-2">
                <button className="w-5 h-5 rounded-full bg-yellow-300 focus:ring-2 ring-offset-2 ring-yellow-300 transition" />
                <button className="w-5 h-5 rounded-full bg-indigo-300 focus:ring-2 ring-offset-2 ring-indigo-300 transition" />
                <button className="w-5 h-5 rounded-full bg-teal-300 focus:ring-2 ring-offset-2 ring-teal-300 transition" />
              </div>
              <div className="flex items-center space-x-5">
                <button className="rounded-lg bg-blue-50 justify-center items-center aspect-square w-8 text-xl text-gray-500">
                  -
                </button>
                <span>1</span>
                <button className="rounded-lg bg-blue-50 justify-center items-center aspect-square w-8 text-xl text-gray-500">
                  +
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium text-2xl">$450</span>
              <button className="bg-blue-500 py-2 px-8 text-center text-xs text-white rounded-lg">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>

      <form className="flex flex-col space-y-2 p-5 ">
        <input
          type="text"
          required
          placeholder="Username"
          className="border p-1 peer border-gray-400 rounded-md "
        />
        <span className="hidden peer-invalid:block peer-invalid:text-red-500">
          This input is invalid
        </span>
        <span className="hidden peer-valid:block peer-valid:text-blue-500">
          This input is perfect
        </span>
        <input type="submit" value="Login" className="bg-white" />
      </form>

      <div className="flex flex-col space-y-2 p-5">
        <input
          type="file"
          className="file:cursor-pointer file:hover:text-blue-300 file:hover:bg-white file:hover:border hover:border-blue-300 file:transition-colors file:border-0 file:rounded-xl file:px-5 file:text-white file:bg-blue-300"
        />
        <ul className="list-decimal marker:text-teal-500">
          <li>hi</li>
          <li>hi</li>
          <li>hi</li>
        </ul>
      </div>
    </>
  );
}
