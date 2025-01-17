'use client';
import React from 'react';
import Link from 'next/link'; // Import Next.js Link for client-side navigation
import Image from 'next/image'; // Use Next.js Image for optimization

const ResearchPage = () => {
  return (
    <div className="bg-[#F5F5F5] text-black min-h-screen font-serif">
      {/* Sticky Navigation with Name and Links */}
      <nav className="bg-white py-4 shadow-md fixed top-0 left-0 w-full z-50 text-center">
        <div className="container mx-auto">
          {/* Name Section */}
          <h1 className="text-3xl font-bold">Samuel N. Koscelny</h1>

          {/* Navigation Links */}
          <div className="mt-4 space-x-8 font-sans text-lg flex justify-center">
            <Link href="/" passHref>
              <a className="hover:text-[#2541B2] hover:underline">Home</a>
            </Link>
            <Link href="/research" passHref>
              <a className="hover:text-[#2541B2] hover:underline underline">Research</a>
            </Link>
            <Link href="/publications" passHref>
              <a className="hover:text-[#2541B2] hover:underline">Publications</a>
            </Link>
            <Link href="/about" passHref>
              <a className="hover:text-[#2541B2] hover:underline">About</a>
            </Link>
            <Link href="/cv" passHref>
              <a className="hover:text-[#2541B2] hover:underline">CV</a>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Section */}
      <section className="pt-32 py-16 px-4 lg:px-24 bg-[#F5F5F5]">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-left">Research Projects</h1>

          {/* EASt Lab Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-left">
              Ergonomics and Applied Statistics (EASt) Lab: Recent Projects -{' '}
              <a href="https://cecas.clemson.edu/east/" className="text-[#EA8F1F] underline hover:text-[#FF8800]">Visit Lab</a>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Project 1 with Static Image */}
              <div className="bg-white shadow-lg rounded-lg p-6">
                <div className="w-full h-48 relative">
                  <Image
                    src="https://placehold.co/300x200?text=Chatbot+1"
                    alt="Bayesian Chatbot Models"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                </div>
                <h3 className="text-xl font-bold mt-4">Bayesian Chatbot Models</h3>
                <p className="text-base mt-2">
                  Evaluated healthcare chatbot information presentation styles through Bayesian hierarchical regression. 
                </p>
              </div>

              {/* Project 2 with Static Image */}
              <div className="bg-white shadow-lg rounded-lg p-6">
                <div className="w-full h-48 relative">
                  <Image
                    src="https://placehold.co/300x200?text=Thematic+1"
                    alt="Thematic Analysis in Human-AI Interaction"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                </div>
                <h3 className="text-xl font-bold mt-4">Thematic Analysis in Human-AI Interaction</h3>
                <p className="text-base mt-2">
                  Explored user experience and perceptions through thematic analysis of chatbot interactions. 
                </p>
              </div>

              {/* Project 3 with Static Image */}
              <div className="bg-white shadow-lg rounded-lg p-6">
                <div className="w-full h-48 relative">
                  <Image
                    src="https://placehold.co/300x200?text=BigData+1"
                    alt="Big Data Healthcare Analytics"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                </div>
                <h3 className="text-xl font-bold mt-4">Big Data Healthcare Analytics</h3>
                <p className="text-base mt-2">
                  Investigated pediatric patient characteristics and outcomes using big data analytics.
                </p>
              </div>
            </div>
          </div>

          {/* HSEAS Lab Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-left">
              Human-Systems Engineering and Applied Statistics (HSEAS) Lab: Past Project -{' '}
              <a href="https://sites.google.com/view/hseas-lab/" className="text-[#EA8F1F] underline hover:text-[#FF8800]">Visit Lab</a>
            </h2>

            {/* Single Project with Static Image */}
            <div className="bg-white shadow-lg rounded-lg p-6 mx-auto max-w-2xl">
              <div className="w-full h-48 relative">
                <Image
                  src="https://placehold.co/300x200?text=Gesture+1"
                  alt="Gesture Study Research"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <h3 className="text-xl font-bold mt-4">Gesture Study Research</h3>
              <p className="text-base mt-2">
                Natural gesture elicitation across different linguistic and cultural groups was explored, focusing on intuitive gestures in 3D systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#A8AB9B] text-black py-4 text-center">
        <p>&copy; Created & designed by Sam Koscelny</p>
      </footer>
    </div>
  );
};

export default ResearchPage;
