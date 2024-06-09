import {
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";
import React from "react";

const Team = () => {
  return (
    <div
      id="team"
      className="max-w-[85rem]  min-h-[80vh] mt-5 px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto"
    >
      {/* <!-- Title --> */}
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-primary">
          Meet the crew
        </h2>
        <p className="mt-1 text-gray-600 dark:text-neutral-400">
          Creative people
        </p>
      </div>
      {/* <!-- End Title --> */}

      {/* <!-- Grid --> */}
      <div className="grid grid-cols-1 md:grid-cols-2 mx-12 gap-4 md:gap-8 justify-center items-center">
        <Card
          name="Yohana Laurent"
          position="Founder / CEO"
          image="/team/laurent.png"
        />

        <Card
          name="Salum Suleiman"
          position="Full Stack Developer"
          image="/team/Salum.png"
        />
        <Card
          name="Fidelis John"
          position="Marketing & Commrcial"
          image="/team/Fidelis.png"
        />
        <Card
          name="Yohana Palangyo"
          position="Head OF PRODUCT"
          image="/team/yohana.png"
        />
      </div>
      {/* <!-- End Grid --> */}
    </div>
    // {/* <!-- End Team --> */}
  );
};

export default Team;

function Card({
  name,
  position,
  image,
}: {
  name: string;
  position: string;
  image: string;
}) {
  return (
    <>
      <div className="flex gap-y-3 gap-x-5">
        <img
          width={80}
          height={80}
          className="rounded-full size-20 sm:size-24 lg:size-28"
          src={image}
          alt="Image Description"
        />

        <div className="sm:flex sm:flex-col sm:h-full">
          <div>
            <h3 className="font-medium text-2xl text-gray-800 dark:text-neutral-200">
              {name}
            </h3>
            <p className="mt-1  text-sm uppercase text-gray-500 dark:text-neutral-500">
              {position}
            </p>
          </div>

          {/* <!-- Social Brands --> */}
          <div className="mt-2 text-lg sm:mt-auto space-x-2.5">
            <a
              className="inline-flex justify-center items-center text-gray-500 rounded-full hover:text-blue-500 dark:text-neutral-500 dark:hover:text-blue-500"
              href="#"
            >
              <LinkedInLogoIcon />
            </a>
            <a
              className="inline-flex justify-center items-center text-gray-500 rounded-full hover:text-blue-500 dark:text-neutral-500 dark:hover:text-blue-500"
              href="#"
            >
              <InstagramLogoIcon />
            </a>
            <a
              className="inline-flex justify-center items-center text-gray-500 rounded-full hover:text-blue-500 dark:text-neutral-500 dark:hover:text-blue-500"
              href="#"
            >
              <TwitterLogoIcon />
            </a>
          </div>
          {/* <!-- End Social Brands --> */}
        </div>
      </div>
    </>
  );
}
