import { Mail, MapPin } from 'lucide-react';
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[--Primary] w-full pt-8 px-6">
            <main className="max-w-[70rem] mx-auto mb-6 grid gap-6 grid-cols-1 md:grid-cols-3">
                {/* Left Section */}
                <div className="text-left flex flex-col justify-between">
                    <h2 className="text-white text-lg font-bold">American Hi Tec Pest Control</h2>
                    <p className="text-white">
                        Contact Us for a free inspection and estimate.
                    </p>
                    <span className="flex items-center ">
                        <MapPin color="#FFFFFF" size={20} className="mr-2" />
                        <h2 className="text-white">Charleston, SC</h2>
                    </span>
                    <span className="flex items-center ">
                        <Mail color="#FFFFFF" size={20} className="mr-2" />
                        <h2 className="text-white">americanhitec@yahoo.com</h2>
                    </span>

                </div>

                {/* Center Section */}
                <div className="flex justify-start md:justify-center items-center">
                    <div className="w-fit h-full">
                        <h2 className="text-white text-lg font-bold">Contact</h2>
                        <div className='mt-2'>
                            <h2 className='text-white'>Head Office:</h2>
                            <span className="flex items-center  gap-1">
                                <h2 className="text-white font-semibold text-sm">843-224-8976</h2>
                            </span>
                        </div>
                        <div className='mt-2'>
                            <h2 className='text-white '>Henry &#34;Bubba&#34; Grimes &#40;Owner&#41;:</h2>
                            <span className="flex items-center  gap-1">
                                <h2 className="text-white font-semibold text-sm">843-270-0202</h2>
                            </span>
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className="flex justify-start md:justify-end items-center">
                    <div className=" h-full flex flex-col justify-between">
                        <h2 className="text-white font-bold text-lg">Visitors</h2>
                        <p className='text-white w-[15rem] '>Total visitors who have accessed our website.</p>
                        <h2 className='text-white font-extrabold text-3xl tracking-widest'>19865</h2>
                    </div>
                </div>
            </main>

            {/* Bottom Footer */}
            <main className="w-full py-6  mx-auto border-t border-white/80">
                <div className="max-w-[70rem] m-auto">
                    <h1 className="text-white font-semibold text-center ">
                        Copyright &#169; 2012 American Hi Tec Pest Control. All Rights Reserved
                    </h1>
                </div>
            </main>
        </footer>
    );
};

export default Footer;

