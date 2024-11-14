
import React from "react";
import FormComp from "../HomeComponents/FormComp";

const ContactSection: React.FC = () => {
    return (
        <section className="w-full">
            <div className="py-16 px-[2rem] sm:py-20 services">
                <div className="max-w-[70rem] gap-4 md:gap-0 m-auto grid grid-cols-1 md:grid-cols-[2fr_1fr] relative">
                    <span>
                        <h2 className="text-[1.7rem] sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold drop-shadow-md">
                            Contact Us
                        </h2>
                        <p className="text-white  text-xl lg:text-2xl font-bold leading-relaxed md:mt-2 drop-shadow-md">
                            We're here to help. Feel free to reach out!
                        </p>
                    </span>
                    <main className="flex md:hidden items-center select-none order-first md:order-last mt-4">
                        <div className="bg-white p-10 rounded-full w-fit h-fit">
                            <img src="/bug2.png" className="w-12  opacity-90" />
                        </div>
                    </main>
                </div>
            </div>
            <main className="text-gray-600 body-font relative px-[2rem] m-auto max-w-[74rem]  py-[4rem]">
                <div className="mx-auto w-full flex flex-wrap sm:flex-nowrap flex-col ">
                    <div className="h-[12rem] md:h-[25rem] bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-6 sm:p-10 flex items-end justify-start relative w-full">
                        <iframe
                            width="100%"
                            height="100%"
                            title="map"
                            className="absolute inset-0"
                            style={{ filter: "opacity(0.8)" }}
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3992.005220874702!2d-80.06932902469431!3d32.71627116244206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88fe7fbaeb0a3bff%3A0x4c1fe2591ba74bf2!2s1994%20Nitsa%20St%2C%20Johns%20Island%2C%20SC%2029455%2C%20USA!5e0!3m2!1sen!2s!4v1731514381060!5m2!1sen!2s"
                        ></iframe>
                    </div>
                    <FormComp />
                </div>
            </main>
        </section>
    );
};

export default ContactSection;
