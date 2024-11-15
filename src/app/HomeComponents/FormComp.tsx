'use client'
import React, { FormEvent, useRef } from 'react'
import emailjs from '@emailjs/browser';
import { FaBuildingUser } from 'react-icons/fa6';
import { IoMdMailOpen } from 'react-icons/io';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md';
import { toast } from 'react-toastify';

const FormComp = () => {

    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: FormEvent) => {
        e.preventDefault();

        if (form.current) {
            emailjs
                .sendForm('service_1lpxp44', 'template_elkelk8', form.current, 'u5czIXILmOPJIfSQl')
                .then(
                    () => {
                        console.log('SUCCESS!')
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                    }
                );
        }
    };

    const ShowToast =  () =>  {
        toast.success('Email sent Successfully!')
    }

    return (
        <section className="flex flex-col md:flex-row gap-10 ">
            <form
                className="w-full md:w-1/2 bg-white flex flex-col py-8 md:py-12 mt-4 md:mt-0"
                ref={form}
                onSubmit={sendEmail}
            >
                <h2 className="text-2xl xl:text-3xl mb-1 md:mb-2 font-bold text-black">
                    Let&#39;s Talk
                </h2>
                <p className="leading-relaxed mb-3 md:mb-5 text-gray-600 text-lg">
                    Have questions or need assistance? Reach out to us, we&apos;re here to help!
                </p>
                <div className="relative mb-2 md:mb-5">
                    <input
                        type="text"
                        id="name"
                        name="from_name"
                        required
                        placeholder="Name"
                        className="w-full bg-white rounded border border-gray-400 focus:ring-1 focus:ring-[--Primary] focus:border-[--Primary] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                </div>
                <div className="relative mb-2 md:mb-5">
                    <input
                        type="email"
                        id="email"
                        name="from_email"
                        required
                        placeholder="Email"
                        className="w-full bg-white rounded border border-gray-400 focus:ring-1 focus:ring-[--Primary] focus:border-[--Primary] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                </div>
                <div className="relative mb-2 md:mb-5">
                    <textarea
                        id="message"
                        name="message"
                        required
                        placeholder="Message"
                        className="w-full bg-white rounded border border-gray-400 focus:ring-1 focus:ring-[--Primary] focus:border-[--Primary] h-32 text-base outline-none text-gray-700 py-2 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    value="Send"
                    onClick={ShowToast}
                    className="text-white bg-[--Primary] border-0 py-2 px-6 focus:outline-none hover:opacity-80 text-lg font-semibold rounded-full"
                >
                    Submit
                </button>
            </form>

            <div className="grid grid-cols-1 min-[1078px]:grid-cols-2 gap-y-8 gap-x-4 w-full md:w-1/2 md:mt-[10rem] min-[1078px]:mt-[11rem] h-fit">
                <div className="flex items-center gap-x-4">
                    <span className="p-4 rounded-md bg-[var(--Primary)]">
                        <FaBuildingUser color="white" size={20} />
                    </span>
                    <span>
                        <h2 className="text-[--Secondary] font-bold">Address</h2>
                        <p className="text-sm">1994 Nitsa Street, Johns Island, South Carolina 29455</p>
                    </span>
                </div>
                <div className="flex items-center gap-x-4">
                    <span className="p-4 rounded-md bg-[var(--Primary)]">
                        <IoMdMailOpen color="white" size={20} />
                    </span>
                    <span>
                        <h2 className="text-[--Secondary] font-bold">Mailing Address</h2>
                        <p className="text-sm">2096 Church Creek Drive Charleston, SC 29414</p>
                    </span>
                </div>
                <div className="flex items-center gap-x-4">
                    <span className="p-4 rounded-md bg-[var(--Primary)]">
                        <FaPhoneAlt color="white" size={20} />
                    </span>
                    <span>
                        <h2 className="text-[--Secondary] font-bold">Direct Contact</h2>
                        <p className="text-sm">843-224-8976</p>
                    </span>
                </div>
                <div className="flex items-center gap-x-4">
                    <span className="p-4 rounded-md bg-[var(--Primary)]">
                        <MdAlternateEmail color="white" size={20} />
                    </span>
                    <span>
                        <h2 className="text-[--Secondary] font-bold">Email</h2>
                        <p className="text-sm">americanhitec@yahoo.com</p>
                    </span>
                </div>
            </div>
        </section>

    )
}

export default FormComp