import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

// Replace these with your actual imports
const PhoneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>;
const MailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>;
const ContactIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>;

export const Contact = () => {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        emailjs
            .sendForm('service_cjpw6ha', 'template_re57kda', form.current, 'WjyO23qy6hsH3-Z2f')
            .then(
                () => {
                    console.log('SUCCESS!');
                    setSubmitStatus('success');
                    setIsSubmitting(false);
                    form.current.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setSubmitStatus('error');
                    setIsSubmitting(false);
                },
            );
    };

    return (
        <section className="relative py-20 bg-white text-black px-5 sm:px-10 md:px-10" id="contact">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-20 -left-20 w-64 h-64 border border-gray-200 rounded-full opacity-10"></div>
                <div className="absolute top-1/2 right-0 w-48 h-48 border border-gray-300 rounded-full opacity-10"></div>
                <div className="absolute bottom-0 left-1/4 w-72 h-72 border border-gray-400 rounded-full opacity-10"></div>
            </div>
            
            <div className="container mx-auto px-4 relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 uppercase tracking-wide">
                    Contact
                </h2>
                <div className="w-20 h-1 bg-black mx-auto mb-12"></div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Left side - Illustration and info */}
                    <div className="space-y-8">
                        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                            <h3 className="text-2xl font-semibold mb-6">Let's work together</h3>
                            <p className="text-gray-700 max-w-md mb-8">
                                Have a project in mind? Looking to partner or work together? Reach out through the form or contact me directly.
                            </p>
                        </div>
                        
                        <div className="flex justify-center lg:justify-start">
                            <div className="relative w-64 h-64">
                                <div className="absolute inset-0 border-2 border-black rounded-lg transform rotate-3"></div>
                                <div className="absolute inset-2 bg-gray-100 rounded-lg flex items-center justify-center p-8">
                                    <ContactIcon className="w-20 h-20 text-black" />
                                </div>
                            </div>
                        </div>
                        
                        <div className="space-y-6 mt-10">
                            <div className="flex items-center space-x-4 p-4 rounded-lg border border-gray-200 hover:border-gray-400 transition-all duration-300">
                                <div className="p-3 rounded-full bg-gray-100">
                                    <PhoneIcon />
                                </div>
                                <div>
                                    <p className="text-gray-600 text-sm">Phone</p>
                                    <p className="font-medium">+91 6382971205</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center space-x-4 p-4 rounded-lg border border-gray-200 hover:border-gray-400 transition-all duration-300">
                                <div className="p-3 rounded-full bg-gray-100">
                                    <MailIcon />
                                </div>
                                <div>
                                    <p className="text-gray-600 text-sm">Email</p>
                                    <p className="font-medium">prasanna.guru02@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Right side - Contact Form */}
                    <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 shadow-sm">
                        <form ref={form} onSubmit={sendEmail} className="space-y-6">
                            <div className="relative">
                                <input 
                                    type="text" 
                                    name="name"
                                    required
                                    className="w-full px-5 py-4 bg-white border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                                    placeholder="Your Name"
                                />
                            </div>
                            
                            <div className="relative">
                                <input 
                                    type="email" 
                                    name="mail"
                                    required
                                    className="w-full px-5 py-4 bg-white border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                                    placeholder="Your Email"
                                />
                            </div>
                            
                            <div className="relative">
                                <textarea 
                                    name="message"
                                    required
                                    rows="5"
                                    className="w-full px-5 py-4 bg-white border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                                    placeholder="Your Message"
                                ></textarea>
                            </div>
                            
                            <button 
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-4 px-6 bg-black text-white font-semibold border-2  border-black rounded-lg hover:border-2 hover:border-black hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                            >
                                {isSubmitting ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Sending...
                                    </>
                                ) : 'Send Message'}
                            </button>
                            
                            {submitStatus === 'success' && (
                                <div className="mt-4 p-4 bg-gray-100 border border-gray-300 rounded-lg">
                                    Message sent successfully! I'll get back to you soon.
                                </div>
                            )}
                            
                            {submitStatus === 'error' && (
                                <div className="mt-4 p-4 bg-gray-100 border border-gray-300 rounded-lg ">
                                    Sorry, there was an error sending your message. Please try again.
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};