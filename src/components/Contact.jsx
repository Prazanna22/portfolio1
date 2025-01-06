import phone from '../assets/phone.png'
import mail from '../assets/gmail.png'
import contact from '../assets/contact.png'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_dcieig6', 'template_wra9j8m', form.current, 'oB-m0khulFwQ6EjMx') // Use the public key directly as a string
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (

        <>
            <div className="pt-14  pb-20 md:pb-40" id='5'>
                <h1 className="font-extrabold text-5xl text-[#000] my-14 uppercase text-center" >Contact</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 ">

                    <div className=" flex md:justify-start justify-center items-center flex-col text-black">
                        <div className="">
                            
                           <img src={contact} alt="" className='w-96 md:w-[600px]'/>
                        </div>
                    </div>
                    <div className="flex flex-col items-center" >
                        <form ref={form} onSubmit={sendEmail} className="flex flex-col ">
                            {/* <label className='text-white font-normal my-2'>Name</label> */}
                            <input type="text" name="from_name" placeholder='Name' className="bg-[#000] text-white outline-none py-2 pr-20 md:pr-36 xl:pr-72 pl-3 my-5 " />
                            {/* <label className='text-white font-normal my-2'>Email</label> */}
                            <input type="email" name="from_email" placeholder='email' className="bg-[#000] text-white outline-none py-2 pr-20 md:pr-36 xl:pr-72 pl-3  my-5" />
                            {/* <label className='text-white font-normal my-2'>Message</label> */}
                            <textarea name="message" placeholder="message" className="bg-[#000] text-white outline-none py-2 pr-20 md:pr-36 xl:pr-72 pl-3  my-5" />
                            <button type="submit" value="Send" className=" my- text-white font-medium border-[2px] border-[#000] bg-[#000] py-1.5 px-10 hover:border-3  hover:bg-transparent hover:text-[#000]" >Submit</button>
                        </form>
                    </div>
                </div>

            </div>
        </>
    );
};
