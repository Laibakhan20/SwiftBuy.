"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Contact = () => {
    return (
        <div className="text-center mx-auto md:mt-3  max-w-2xl  sm:pb-6 lg:max-w-7xl mb-[100px] justify-center bg-mywhite py-16 px-4 sm:px-8 lg:px-16 flex flex-col items-center">
            {/* Hero Section */}
            <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
                <p className="text-lg text-gray-600">
                    We&apos;d love to hear from you! Get in touch with us for any queries or support.
                </p>
            </motion.div>

            {/* Contact Form & Details Section */}
            <div className="flex flex-wrap justify-center gap-8 w-full max-w-6xl">
                {/* Contact Form */}
                <motion.div
                    className="bg-white p-8 rounded-lg shadow-lg w-full md:w-1/2 lg:w-1/3"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Send Us a Message</h2>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-gray-600 mb-1">Name</label>
                            <input
                                type="text"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-600 mb-1">Email</label>
                            <input
                                type="email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                                placeholder="Your Email"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-600 mb-1">Message</label>
                            <textarea
                                rows={4}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                                placeholder="Your Message"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-myBlack text-white py-2 rounded-lg hover:bg-myDarkGrey transition duration-300"
                        >
                            Submit
                        </button>
                    </form>
                </motion.div>

                {/* Contact Details */}
                <motion.div
                    className="space-y-8 w-full md:w-1/2 lg:w-1/3 text-gray-800"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <div className="flex items-center space-x-4">
                            <Phone className="text-primary text-2xl" />
                            <div>
                                <h3 className="text-lg font-semibold">Phone</h3>
                                <p className="text-gray-600">+123 456 7890</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <div className="flex items-center space-x-4">
                            <Mail className="text-primary text-2xl" />
                            <div>
                                <h3 className="text-lg font-semibold">Email</h3>
                                <p className="text-gray-600">info@swiftbuy.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <div className="flex items-center space-x-4">
                            <MapPin className="text-primary text-2xl" />
                            <div>
                                <h3 className="text-lg font-semibold">Address</h3>
                                <p className="text-gray-600">1234 E-commerce St, Web City</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Social Media Section */}
            <motion.div
                className="flex space-x-6 mt-12"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <a href="#" className="text-primary text-3xl hover:text-blue-700 transition duration-300">
                    <Facebook />
                </a>
                <a href="#" className="text-primary text-3xl hover:text-blue-700 transition duration-300">
                    <Instagram />
                </a>
                <a href="#" className="text-primary text-3xl hover:text-blue-700 transition duration-300">
                    <Twitter />
                </a>
                <a href="#" className="text-primary text-3xl hover:text-blue-700 transition duration-300">
                    <Linkedin />
                </a>
            </motion.div>
        </div>
    );
};

export default Contact;
