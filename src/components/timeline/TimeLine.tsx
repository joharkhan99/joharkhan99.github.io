import React from "react";

const TimeLine = () => {
  return (
    <div className="w-full p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-[#333] rounded-lg transform transition-all duration-150 hover:scale-105 shadow-xl p-4 md:mt-20 h-fit">
          <div className="mx-auto flex justify-center items-center bg-[#95C11F] text-sm text-[#154633] h-20 w-20 font-bold uppercase animate-blob text-center">
            1.
            <br />
            Plan
          </div>
          <p className="text-sm mt-5 font-normal">
            I worked out the user journeys for both service providers and
            buyers, and sketched some wireframes to see how the two sides of the
            platform would work together.
          </p>
        </div>
        <div className="bg-[#333] rounded-lg transform transition-all duration-150 hover:scale-105 shadow-xl p-4 h-fit">
          <div className="mx-auto flex justify-center items-center bg-[#95C11F] text-sm text-[#154633] h-20 w-20 font-bold uppercase animate-blob text-center">
            2.
            <br />
            Build
          </div>
          <p className="text-sm mt-5 font-normal">
            I developed the platform as a full-stack MERN application with
            blockchain elements. The frontend was built with React and Redux,
            while Node.js and Express handled the backend. MongoDB stored user
            data, and I integrated Stripe and PayPal for payments. NFT features
            were enabled using IPFS for decentralized asset storage, and
            Tailwind CSS kept the interface modern and responsive.
          </p>
        </div>
        <div className="bg-[#333] rounded-lg transform transition-all duration-150 hover:scale-105 shadow-xl p-4 md:mt-20 h-fit">
          <div className="mx-auto flex justify-center items-center bg-[#95C11F] text-sm text-[#154633] h-20 w-20 font-bold uppercase animate-blob text-center">
            3.
            <br />
            Refine
          </div>
          <p className="text-sm mt-5 font-normal">
            During this phase, I focused on performance and usability. I
            implemented code-splitting and lazy loading in React, which sped up
            the initial load time significantly. I also built a simple
            abstraction for blockchain interactions so creators could mint NFTs
            without needing technical know-how, while ensuring both traditional
            and crypto transactions worked seamlessly.
          </p>
        </div>
        <div className="bg-[#333] rounded-lg transform transition-all duration-150 hover:scale-105 shadow-xl p-4 h-fit">
          <div className="mx-auto flex justify-center items-center bg-[#95C11F] text-sm text-[#154633] h-20 w-20 font-bold uppercase animate-blob text-center">
            4.
            <br />
            Launch
          </div>
          <p className="text-sm mt-5 font-normal">
            The final platform supports both gig services and NFT assets in one
            marketplace, handling over 100 secure transactions daily. It
            provides a friendly experience for new and experienced users alike,
            combining reliable payment processing with innovative NFT features
            to create a trusted digital space for creators and buyers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
