import { PropertyProps } from "@/interfaces/index";
import Image from "next/image";
import Button from "../layout/Button";
import BookingSection from "./BookingSection";
import ReviewSection from "./ReviewSection";
//import { FaLocationDot } from "react-icons/fa6";
const PropertyDetail: React.FC<{ property: PropertyProps }> = ({
  property,
}) => {
  // Sample reviews data (replace with real data as needed)
  const reviews = [
    {
      avatar: "/assets/Icons/profile 1.svg",
      name: "Jane Doe",
      rating: 5,
      comment:
        "Amazing place! Super clean and the host was very helpful. Would definitely stay again!",
    },
    {
      avatar: "/assets/Icons/profile 2.svg",
      name: "John Smith",
      rating: 4,
      comment:
        "Great location and amenities. The only downside was a bit of noise at night.",
    },
  ];
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-extrabold">{property.name}</h1>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2 mt-2">
          <Image
            src="/assets/Icons/Star 2.svg"
            alt="Star rating"
            width={20}
            height={20}
            className="star-icon"
          />
          <span className="text-black font-semibold">{property.rating}</span>
          {/* <FaLocationDot className="text-red-500" size={20} /> */}
          <span>
            {property.address.city}, {property.address.country}
          </span>
        </div>
        <div className="flex justify-between space-x-2">
          <Button className="bg-white" label="Save"></Button>
          <Button className="bg-white" label="Share"></Button>
        </div>
      </div>

      {/* Image Grid */}
      <div className=" image-Container grid grid-cols-2 gap-4 mt-4">
        <Image
          src={property.image[0]}
          alt={property.name}
          width={800}
          height={384}
          className="col-span-1 rounded-l-2xl"
        />
        <div className="grid grid-cols-2 gap-1">
          <Image
            src={property.image[1]}
            alt={property.name}
            width={800}
            height={384}
            className="col-span-2 w-full h-75 object-cover rounded-r-2xl"
          />
          <div className="col-span-2 flex space-x-4 mt-2 w-full h-fit">
            <Image
              src={property.image[2]}
              alt={property.name}
              width={800}
              height={384}
              className="w-full h-56.5 object-cover"
            />
            <Image
              src={property.image[3]}
              alt={property.name}
              width={800}
              height={384}
              className="w-full h-56.5 object-cover rounded-r-2xl"
            />
          </div>
        </div>
      </div>

      {/* Amenities under image grid */}
      {property.iconsUrl && (
        <>
          <div className="flex space-x-4">
            {property.iconsUrl.map((icon) => (
              <div
                key={icon}
                className="amenities-container flex space-x-3 border-2 p-2 rounded-4xl border-gray-200 my-4"
              >
                <Image
                  src={icon}
                  alt=""
                  width={24}
                  height={24}
                  className="amenity-icon"
                />
                <span className="amenity-value text-sm text-gray-500">
                  {icon.includes("bed") && "4 Beds"}
                  {icon.includes("bathtub") && "2 Bathrooms"}
                  {icon.includes("people") && "2-4 Guests"}
                </span>
              </div>
            ))}
          </div>
        </>
      )}
      <div className="Description and booking container mb-5 flex space-x-10">
        <div className="Tab container mb-5">
          <hr className="mt-5 opacity-10 w-4xl mb-8" />
          {/* Description */}
          <div className="flex space-x-10 mt-4">
            <h1
              className="text-2sm font-semibold opacity-25 hover:text-[#60bea5] hover:opacity-100 hover:cursor-pointer hover:underline 
          hover:border-b-4 border-[#60bea5]  transition-all"
            >
              Description
            </h1>
            <h1 className="text-2sm font-semibold opacity-25 hover:text-[#60bea5] hover:opacity-100 hover:cursor-pointer hover:underline transition-all">
              What We offer
            </h1>
            <h1 className="text-2sm font-semibold opacity-25 hover:text-[#60bea5] hover:opacity-100 hover:cursor-pointer hover:underline transition-all">
              Reviews
            </h1>
            <h1 className="text-2sm font-semibold opacity-25 hover:text-[#60bea5] hover:opacity-100 hover:cursor-pointer hover:underline transition-all">
              About host
            </h1>
          </div>
          <hr className="mt-2 opacity-10 w-4xl mb-8" />
          <p className="mb-8 font-[600]">{property.description[0]}</p>
          <p className="font-black">{property.description[1]}</p>
          <p className="font-semibold">{property.description[2]}</p>
          <p className="font-semibold">{property.description[3]}</p>
          <p className="font-semibold">{property.description[4]}</p>

          <h1 className="text-[#60bea5] text-2sm font-semibold hover:cursor-pointer transition-all">
            Read more
          </h1>
          <hr className="mt-8 opacity-10 w-4xl mb-8" />
        </div>
        <BookingSection price={property.price} />
      </div>

      {/* Amenities */}
      <div className="mt-4">
        <h2 className="text-2xl font-semibold">What this place offers</h2>
        <ul className="flex flex-wrap space-x-4">
          {property.category.map((amenity, index) => (
            <li key={index} className="bg-gray-200 p-2 rounded-md">
              {amenity}
            </li>
          ))}
        </ul>
      </div>
      {/* Reviews Section at the very bottom */}
      <ReviewSection reviews={reviews} />
    </div>
  );
};

export default PropertyDetail;
