import React from "react";

interface BookingSectionProps {
  price: number;
}

const BookingSection: React.FC<BookingSectionProps> = ({ price }) => {
  const nights = 7;
  const weeklyDiscount = 88;
  const serviceFee = 33;
  const subtotal = price * nights;
  const total = subtotal - weeklyDiscount + serviceFee;

  return (
    <div className="bg-white p-6 border border-gray-100 rounded-2xl shadow-lg w-full max-w-md font-extrabold">
      {/* Price per night */}
      <div className="mb-4">
        <span className="text-2xl font-semibold">
          ${price.toLocaleString()}
        </span>
        <span className="text-gray-400 text-lg font-normal">/night</span>
      </div>
      <hr className="mb-4" />

      {/* Date inputs */}
      <div className="mb-4">
        <label className="block text-sm font-bold text-gray-700 mb-1">
          Check in
        </label>
        <div className="relative mb-3">
          <input
            type="text"
            placeholder="DD/MM/YY"
            className="border border-gray-200 rounded-md p-3 w-full text-sm focus:outline-none focus:ring-2 focus:ring-[#34967C]"
            readOnly
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
              <path
                stroke="#BDBDBD"
                strokeWidth="2"
                d="M7 4v2m10-2v2M3 9.5A2.5 2.5 0 0 1 5.5 7h13A2.5 2.5 0 0 1 21 9.5v8A2.5 2.5 0 0 1 18.5 20h-13A2.5 2.5 0 0 1 3 17.5v-8ZM3 9.5V8m18 1.5V8"
              />
            </svg>
          </span>
        </div>
        <label className="block text-sm font-bold text-gray-700 mb-1">
          Check out
        </label>
        <div className="relative">
          <input
            type="text"
            placeholder="DD/MM/YY"
            className="border border-gray-200 rounded-md p-3 w-full text-sm focus:outline-none focus:ring-2 focus:ring-[#34967C]"
            readOnly
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
              <path
                stroke="#BDBDBD"
                strokeWidth="2"
                d="M7 4v2m10-2v2M3 9.5A2.5 2.5 0 0 1 5.5 7h13A2.5 2.5 0 0 1 21 9.5v8A2.5 2.5 0 0 1 18.5 20h-13A2.5 2.5 0 0 1 3 17.5v-8ZM3 9.5V8m18 1.5V8"
              />
            </svg>
          </span>
        </div>
      </div>

      {/* Price breakdown */}
      <div className="space-y-2 mb-4">
        <div className="flex justify-between text-base">
          <span className="text-gray-700">
            ${price} x {nights} nights
          </span>
          <span className="font-semibold">${subtotal}</span>
        </div>
        <div className="flex justify-between text-base">
          <span className="text-gray-700">Weekly discounts</span>
          <span className="text-[#34967C] font-semibold">
            -${weeklyDiscount}
          </span>
        </div>
        <div className="flex justify-between text-base">
          <span className="text-gray-700">Service fee</span>
          <span className="font-semibold">${serviceFee}</span>
        </div>
      </div>

      {/* Total payment */}
      <div className="flex justify-between items-center border-t border-gray-200 pt-4 mb-4">
        <span className="text-gray-500 text-base font-medium">
          Total payment
        </span>
        <span className="text-[#34967C] text-lg font-semibold">${total}</span>
      </div>

      {/* Reserve button */}
      <button className="w-full bg-[#34967C] hover:bg-[#28745F] text-white py-3 px-4 rounded-xl font-medium text-lg transition-colors">
        Reserve now
      </button>
    </div>
  );
};

export default BookingSection;
