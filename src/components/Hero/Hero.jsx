"use client";
import "../../../src/index.css";
// import Navbar from "../common/Navbar";
import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import Feedback from "../Feedback/Feedback";
import Card from "../Cards/Card";
import Features from "../Features/Features";

const Hero = () => {
    return (
        <>
            <div className="bg-primary-lightGray h-full rounded-bl-[100q] md:h-[85vh] bg-fixed md:pb-0 pb-4">
                <section className="flex md:flex-row flex-col-reverse justify-around items-center md:gap-0 gap-8 pt-32 -mt-2">
                    <div className="flex flex-col items-center md:items-start gap-4">
                        <div className="min-h-[96px] pl-4 md:pl-0">
                            <Typewriter
                                options={{
                                    autoStart: true,
                                    loop: true,
                                    cursor:
                                        '<span class="text-primary-navy font-extralight text-5xl mb-8" style="visibility:hidden">|</span>',
                                    // delay: 260,
                                    deleteSpeed: "natural",
                                }}
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString(
                                            '<span style="color: #D47C42; font-size:4em; font-weight:500;">Learn.</span>'
                                        )
                                        .pauseFor(500)
                                        .deleteAll()
                                        .typeString(
                                            '<span style="color: #D47C42; font-size:4em; font-weight:500;">Educate.</span>'
                                        )
                                        .pauseFor(500)
                                        .deleteAll()
                                        .typeString(
                                            '<span style="color:#D47C42; font-size:4em; font-weight:500;">Explore.</span>'
                                        )
                                        .pauseFor(500)
                                        .deleteAll()
                                        .typeString(
                                            '<span style="color: #D47C42; font-size:4em; font-weight:500;">Enjoy.</span>'
                                        )
                                        .pauseFor(500)
                                        .deleteAll()
                                        .start();
                                }}
                            />
                        </div>

                        <p className="text-xl text-primary-mediumGray text-center md:text-left">
                            A comprehensive resource for connecting you with <br /> the ideal attorney to address all your Educational requirements, <br /> we recognize that selecting the right Teacher can be <br /> an overwhelming and daunting task{" "}
                            and this is precisely <br /> where we step in to alleviate the burden.
                        </p>
                        <button className="p-2 bg-primary-navy rounded-xl px-4 text-xl font-semibold text-white hover:shadow-xl">
                            Explore
                        </button>
                    </div>
                    <div className="">
                        <img
                            src="https://images.pexels.com/photos/3231359/pexels-photo-3231359.jpeg?auto=compress&cs=tinysrgb&w=600"
                            width={550}
                            height={550}
                            alt="heroImg"
                            className="hover:scale-105 duration-500"
                        />
                    </div>
                </section>
            </div>
            <Feedback />
            <Card />
            <Features />
        </>
    );
};

export default Hero;