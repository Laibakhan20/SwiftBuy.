"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const AboutPage = () => {
    return (
        <div className="text-center mx-auto mt-5 md:mt-3 lg:mt-9 max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8 mb-[100px] flex flex-col items-center justify-center">
            {/* Hero Section with Background Image */}
            <motion.div
                className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh] mb-12 overflow-hidden rounded-lg flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <Image
                    src="/aboutimg.jpg"
                    alt="SwiftBuy Background"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    priority
                    className="rounded-lg"
                />
                <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
                <motion.h1
                    className="text-4xl sm:text-5xl md:text-6xl font-bold text-white absolute inset-0 flex items-center justify-center"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    About SwiftBuy
                </motion.h1>
            </motion.div>

            {/* About Text Section */}
            <motion.p
                className="max-w-xl text-lg text-myBlack mb-10 text-center"
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                At SwiftBuy, we believe in providing our customers with a seamless shopping experience. Our curated collection features the latest trends in fashion and lifestyle, ensuring you find exactly what you need with ease and efficiency.
            </motion.p>

            {/* Mission, Vision, Why Choose Us Section */}
            <div className="flex flex-wrap justify-center gap-6">
                <motion.div
                    className="bg-white shadow-lg rounded-lg p-6 max-w-xs sm:max-w-sm w-full"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <Image
                        src="/ourmission.jpg"
                        alt="Our Mission"
                        width={400}
                        height={2500}
                        className="rounded-lg mb-4 w-full object-cover"
                    />
                    
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Mission</h2>
                    <p className="text-gray-600">
                        To offer a diverse range of high-quality products while delivering exceptional customer service and convenience.
                    </p>
                </motion.div>

                <motion.div
                    className="bg-white shadow-lg rounded-lg p-6 max-w-xs sm:max-w-sm w-full"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <Image
                        src="/ourvision.jpg"
                        alt="Our Vision"
                        width={400}
                        height={250}
                        className="rounded-lg mb-4 w-full object-cover"
                    />
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Vision</h2>
                    <p className="text-gray-600">
                        To be the go-to online shopping destination for individuals seeking the latest styles and quality products.
                    </p>
                </motion.div>

                <motion.div
                    className="bg-white shadow-lg rounded-lg p-6 max-w-xs sm:max-w-sm w-full"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <Image
                        src="/whychooseus.jpg"
                        alt="Why Choose Us"
                        width={400}
                        height={250}
                        className="rounded-lg mb-4 w-full object-cover"
                    />
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">Why Choose Us</h2>
                    <p className="text-gray-600">
                        We prioritize customer satisfaction and provide a hassle-free return policy, ensuring you are happy with your purchase.
                    </p>
                </motion.div>
            </div>

            {/* Call to Action Section */}
            <motion.div
                className="mt-16 p-6 bg-myBlack text-white rounded-lg shadow-lg max-w-xl mx-auto text-center"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
            >
                <h2 className="text-3xl font-semibold mb-4">Join the SwiftBuy Family!</h2>
                <p>Shop now and experience the difference with SwiftBuy!</p>
            </motion.div>
        </div>
    );
};

export default AboutPage;
