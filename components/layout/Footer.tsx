import React from "react";
import ALXlogo from "@/public/assets/Logos/ALXlogo white.svg";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-12 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="footer-section grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-start space-y-4 col-span-1">
            <Image
              src={ALXlogo}
              alt="ALX Logo"
              width={60}
              height={60}
              className="mb-2"
            />
            <p className="text-sm font-light text-gray-200">
              ALX is a platform where travelers can discover and book unique,
              comfortable, and affordable lodging options worldwide. From cozy
              city apartments and tranquil countryside retreats to exotic
              beachside villas, ALX connects you with the perfect place to stay
              for any trip.
            </p>
          </div>
          <div className="flex flex-col space-y-2 col-span-1">
            <h3 className="text-lg font-bold text-white-900">Explore</h3>
            <div>
              <a href="#" className="block hover:text-blue-600 font-medium">
                Apartments in Dubai
              </a>
              <a href="#" className="block hover:text-blue-600 font-medium">
                Hotels in New York
              </a>
              <a href="#" className="block hover:text-blue-600 font-medium">
                Villa in Spain
              </a>
              <a href="#" className="block hover:text-blue-600 font-medium">
                Mansion in Indonesia
              </a>
            </div>
          </div>
          <div className="flex flex-col space-y-2 col-span-1">
            <h3 className="text-lg font-bold text-white-900">Company</h3>
            <div>
              <a href="#" className="block hover:text-blue-600 font-medium">
                About us
              </a>
              <a href="#" className="block hover:text-blue-600 font-medium">
                Blog
              </a>
              <a href="#" className="block hover:text-blue-600 font-medium">
                Career
              </a>
              <a href="#" className="block hover:text-blue-600 font-medium">
                Customers
              </a>
              <a href="#" className="block hover:text-blue-600 font-medium">
                Brand
              </a>
            </div>
          </div>
          <div className="flex flex-col space-y-2 col-span-1">
            <h3 className="text-lg font-bold text-white-900">Help</h3>
            <div className="space-y-2">
              <a href="#" className="block hover:text-blue-600 font-medium">
                Support
              </a>
              <a href="#" className="block hover:text-blue-600 font-medium">
                Cancel booking
              </a>
              <a href="#" className="block hover:text-blue-600 font-medium">
                Refunds Process
              </a>
            </div>
          </div>
        </div>
        <p className="text-sm mt-10 text-center lg:text-left">
          Some hotel requires you to cancel more than 24 hours before check-in.{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Details here
          </a>
        </p>
      </div>
      {/* Copyright/legal would typically go here */}
      <div className="border-t border-gray-200 mt-8 pt-8 text-sm text-gray-500">
        <div className="flex flex-col items-center lg:flex-row lg:justify-end lg:space-x-4 space-y-2 lg:space-y-0">
          <a href="#" className="block hover:text-blue-600">
            Team of service
          </a>
          <a href="#" className="block hover:text-blue-600">
            Policy service
          </a>
          <a href="#" className="block hover:text-blue-600">
            Cookies Policy
          </a>
          <a href="#" className="block hover:text-blue-600">
            Partners
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
