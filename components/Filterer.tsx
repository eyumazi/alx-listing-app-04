import Image from "next/image";
interface FiltererProps {
  imgUrl: string[];
  title: string[];
}
// Example usage below. Remove or move to a parent component as needed.
const imgUrl: FiltererProps["imgUrl"] = [
  "/assets/Logos/apartment 1.svg",
  "/assets/Logos/barn 1.svg",
  "/assets/Logos/cabin 1.svg",
  "/assets/Logos/castle-tower 1.svg",
  "/assets/Logos/cottage 1.svg",
  "/assets/Logos/farm 1.svg",
  "/assets/Logos/farm 1-1.svg",
  "/assets/Logos/home 1.svg",
  "/assets/Logos/island (1) 1.svg",
  "/assets/Logos/key-chain 1.svg",
  "/assets/Logos/living-room 1.svg",
  "/assets/Logos/mansion 1.svg",
  "/assets/Logos/palm-tree 1.svg",
  "/assets/Logos/swimming-pool 1.svg",
  "/assets/Logos/tent 1.svg",
  "/assets/Logos/treehouse (1) 1.svg",
  "/assets/Logos/vacations 1.svg",
  "/assets/Logos/villa 1.svg",
];
const title: FiltererProps["title"] = [
  "Apartment",
  "Barn",
  "Cabin",
  "Castle Tower",
  "Cottage",
  "Farm",
  "Farm",
  "Home",
  "Island",
  "Key Chain",
  "Living Room",
  "Mansion",
  "Palm Tree",
  "Swimming Pool",
  "Tent",
  "Treehouse",
  "Vacations",
  "Villa",
];

// Example parent component rendering Filterer
export function FiltererContainer() {
  return <Filterer imgUrl={imgUrl} title={title} />;
}
const Filterer: React.FC<FiltererProps> = ({ imgUrl, title }) => {
  return (
    <div
      className="filterer flex gap-4 overflow-x-auto whitespace-nowrap py-2 px-1 custom-scrollbar justify-between"
      style={{ WebkitOverflowScrolling: "touch" }}
    >
      {imgUrl.map((url, index) => (
        <button key={index} className="inline-flex flex-col items-center">
          <Image src={url} alt={title[index]} width={30} height={30} />
          <h3 className="text-gray-700 text-sm font-semibold mt-2">
            {title[index]}
          </h3>
        </button>
      ))}
    </div>
  );
};

// Add custom scrollbar styles
// You can move this to your global CSS if preferred
import React from "react";
const style = `
.custom-scrollbar::-webkit-scrollbar {
  height: 4px;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(156, 163, 175, 0.3); /* gray-400 with low opacity */
  border-radius: 2px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: rgba(243, 244, 246, 0.1); /* gray-100 with lower opacity */
}
`;
if (typeof window !== "undefined") {
  const styleTag = document.getElementById("custom-scrollbar-style");
  if (!styleTag) {
    const tag = document.createElement("style");
    tag.id = "custom-scrollbar-style";
    tag.innerHTML = style;
    document.head.appendChild(tag);
  }
}
