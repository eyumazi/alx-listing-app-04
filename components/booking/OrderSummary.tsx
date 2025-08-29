import Image from "next/image";

type BookingDetails = {
  propertyName: string;
  startDate: string;
  totalNights: number;
  bookingFee: number;
  price: number;
};

const OrderSummary: React.FC<{ bookingDetails: BookingDetails }> = ({
  bookingDetails,
}) => {
  // Type guard for all required properties
  const isValid =
    bookingDetails &&
    typeof bookingDetails.propertyName === "string" &&
    bookingDetails.propertyName.length > 0 &&
    typeof bookingDetails.startDate === "string" &&
    bookingDetails.startDate.length > 0 &&
    typeof bookingDetails.totalNights === "number" &&
    !isNaN(bookingDetails.totalNights) &&
    typeof bookingDetails.bookingFee === "number" &&
    !isNaN(bookingDetails.bookingFee) &&
    typeof bookingDetails.price === "number" &&
    !isNaN(bookingDetails.price);

  if (!isValid) {
    return (
      <div className="bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-xl font-semibold">Order Details Unavailable</h2>
        <p className="text-gray-500">Booking details are missing or invalid.</p>
      </div>
    );
  }

  // Use default values as fallback
  const {
    propertyName = "Property Name",
    startDate = "N/A",
    totalNights = 0,
    bookingFee = 0,
    price = 0,
  } = bookingDetails;

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-xl font-semibold">Review Order Details</h2>
      <div className="flex items-center mt-4">
        <Image
          src="/assets/listing images/List 1.svg"
          alt="Property"
          width={128}
          height={128}
          className="w-32 h-32 object-cover rounded-md"
        />
        <div className="ml-4">
          <h3 className="text-lg font-semibold">{propertyName}</h3>
          <p className="text-sm text-gray-500">4.76 (345 reviews)</p>
          <p className="text-sm text-gray-500">
            {startDate} • {totalNights} Nights
          </p>
        </div>
      </div>

      {/* Price Breakdown */}
      <div className="mt-6">
        <div className="flex justify-between">
          <p>Booking Fee</p>
          <p>${bookingFee}</p>
        </div>
        <div className="flex justify-between mt-2">
          <p>Subtotal</p>
          <p>${price}</p>
        </div>
        <div className="flex justify-between mt-2 font-semibold">
          <p>Grand Total</p>
          <p>${bookingFee + price}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
