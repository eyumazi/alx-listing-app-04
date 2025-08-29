import type { CardProps } from "@/interfaces";
import Image from "next/image";

const Card: React.FC<CardProps> = ({
  title,
  location,
  price,
  rating,
  reviews,
  imageUrl,
  iconsUrl,
}) => {
  return (
    <div className="card-container flex flex-col p-6 w-[455px] bg-white rounded-3xl shadow-lg">
      <div className="absolute bg-[#30c8ff] text-white font-bold px-3 py-1 rounded-lg text-sm ml-4 mt-4 z-10">
        60% OFF
      </div>

      <div className="image-wrapper relative">
        <Image
          src={imageUrl}
          alt="Property Image"
          width={455}
          height={305}
          className="property-image rounded-3xl object-cover mb-5 w-full h-[305px]"
        />
      </div>

      <div className="reviews-container flex gap-2 mb-4">
        {reviews.map((review) => (
          <div
            key={review}
            className="flex bg-gray-50 px-3 py-1 rounded-full items-center"
          >
            <span className="review-tag text-xs font-medium font-[Quicksand] text-gray-700">
              {review}
            </span>
          </div>
        ))}
      </div>

      <div className="title-section flex justify-between items-center mb-2">
        <h2 className="property-title font-[Quicksand] font-semibold text-[28px] text-gray-900">
          {title}
        </h2>
        <div className="rating-container flex items-center gap-1">
          <Image
            src="/assets/Icons/Star 2.svg"
            alt="Star rating"
            width={16}
            height={16}
            className="star-icon"
          />
          <span className="rating-value font-[600] text-gray-700">
            {rating}
          </span>
        </div>
      </div>

      {/* Location - Added proper spacing */}
      <p className="location-text font-[Quicksand] font-medium text-[20px] text-gray-500 mb-6">
        {location}
      </p>

      {/* Amenities and Price - Restructured to match Figma */}
      <div className="footer-section flex justify-between items-center">
        <div className="amenities-container flex space-x-3 border-2 p-2 rounded-4xl border-gray-200">
          {iconsUrl.map((icon) => (
            <div key={icon} className="amenity-item flex items-center gap-1">
              <Image
                src={icon}
                alt=""
                width={16}
                height={16}
                className="amenity-icon"
              />
              <span className="amenity-value text-sm text-gray-500">
                {icon.includes("bed") && "4"}
                {icon.includes("bathtub") && "2"}
                {icon.includes("people") && "2-4"}
              </span>
            </div>
          ))}
        </div>
        <div className="price-container font-semibold text-[28px] text-gray-900">
          {price}
        </div>
      </div>
    </div>
  );
};

export default Card;
