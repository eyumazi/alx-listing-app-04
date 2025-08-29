import Card from "@/components/layout/Card";
import { PROPERTYLISTINGSAMPLE } from "@/constants/index";
const PropertyPage = () => {
  return (
    <>
    <div className="bg-white shadow-md mb-4">
    </div>
      {PROPERTYLISTINGSAMPLE[0] && (
        <Card
          key={PROPERTYLISTINGSAMPLE[0].name}
          title={PROPERTYLISTINGSAMPLE[0].name}
          location={`${PROPERTYLISTINGSAMPLE[0].address.city}, ${PROPERTYLISTINGSAMPLE[0].address.country}`}
          price={`$${PROPERTYLISTINGSAMPLE[0].price}/n`}
          rating={PROPERTYLISTINGSAMPLE[0].rating}
          reviews={PROPERTYLISTINGSAMPLE[0].category}
          imageUrl={PROPERTYLISTINGSAMPLE[0].image[1]}
          iconsUrl={[
            "/assets/Icons/bed 1.svg",
            "/assets/Icons/bathtub 1.svg",
            "/assets/Icons/people 1.svg",
          ]}
        />
      )}
    </>
  );
};

export default PropertyPage;
