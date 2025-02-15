import React from "react";
import { assets } from "../assets/assets";

function About() {
  return (
    <div className=" px-10 md:px-24">
      {/* title of page */}
      <div>
        <h1 className="text-xl text-center my-8">
          ABOUT <span>US</span>
        </h1>
      </div>

      {/* image and content of page */}

      <div className="flex flex-col md:flex-row gap-8">
        <div>
          <img
            src={assets.about_image}
            className="w-full md:w-[1000px]"
            alt="About image"
          />
        </div>
        <div className="flex flex-col gap-3 md:px-2 text-justify">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consectetur ipsa ex fuga dignissimos dolore labore incidunt quo quos
            repellat voluptatibus possimus commodi minima, eligendi autem ipsam
            suscipit a quaerat consequatur.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
            molestiae quaerat recusandae sapiente iusto illum veniam, odio
            itaque est, labore nobis. Inventore asperiores maxime suscipit
            dignissimos voluptatem pariatur quos fuga culpa modi aliquam. Ipsum,
            quia! Nisi officiis perspiciatis at. Hic of the last line of
            paragraph so thats why so long.
          </p>
          <b>Our Vission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            explicabo voluptatum doloremque impedit perspiciatis omnis. Officiis
            culpa corrupti, aliquam illo laboriosam doloribus neque vitae harum
            voluptatum. Consectetur veritatis aliquam nam.
          </p>
        </div>
      </div>

      {/* last section why chooose us */}

      <div className="md:my-15 my-10">
        <h2 className="text-xl font-semibold mb-3"> WHY CHOOSE US</h2>

        <div className="flex flex-col md:flex-row my-5 text-justify">
          <div className="p-7 border-b-0 md:border-b-1 border-1 border-gray-600 flex flex-col gap-5   hover:bg-violet-500  hover:text-white  transition-all duration-300 hover:border-0">
            <b>EFFICIENCY</b>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Veritatis aut itaque exercitationem ipsa .
            </p>
          </div>
          <div className="p-8 border-b-0 md:border-s-0 md:border-b-1 hover:bg-violet-500 transition-all duration-300 hover:border-0 hover:text-white  border-1 border-gray-600 flex flex-col gap-5">
            <b>CONVIENCE</b>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Veritatis aut itaque exercitationem.
            </p>
          </div>
          <div className="p-8 border-1 md:border-s-0 border-gray-600 flex flex-col gap-5  hover:bg-violet-500 transition-all  hover:text-white  duration-300 hover:border-0">
            <b>PERSONALIZATION</b>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Veritatis aut.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
