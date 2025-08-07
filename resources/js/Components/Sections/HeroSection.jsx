import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroSection() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.4, 0.0, 0.2, 1],
            },
        },
    };

    const floatingVariants = {
        animate: {
            y: [-10, 10, -10],
            transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
            },
        },
    };

    if (!mounted) return null;

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-neutral-white to-secondary-50">
            {/* Enhanced Background Elements */}
            <div className="absolute inset-0">
                {/* Main gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-100/40 via-neutral-white/80 to-secondary-100/30"></div>

                {/* Animated gradient orbs */}
                <motion.div
                    className="absolute top-20 -right-20 w-96 h-96 bg-gradient-to-br from-primary-300/30 to-secondary-300/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                ></motion.div>
                <motion.div
                    className="absolute bottom-20 -left-20 w-80 h-80 bg-gradient-to-tr from-secondary-300/20 to-primary-300/30 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2,
                    }}
                ></motion.div>
            </div>

            {/* Floating Decorative Elements */}
            <motion.div
                className="absolute top-20 left-20 w-6 h-6 bg-primary-400 rounded-full opacity-70 shadow-elegant"
                variants={floatingVariants}
                animate="animate"
            ></motion.div>
            <motion.div
                className="absolute top-40 right-32 w-4 h-4 bg-secondary-400 rounded-full opacity-60 shadow-elegant"
                variants={floatingVariants}
                animate="animate"
                transition={{ delay: 1.5 }}
            ></motion.div>
            <motion.div
                className="absolute bottom-32 left-40 w-8 h-8 bg-primary-300 rounded-full opacity-50 shadow-elegant"
                variants={floatingVariants}
                animate="animate"
                transition={{ delay: 0.8 }}
            ></motion.div>
            <motion.div
                className="absolute top-60 left-1/2 w-3 h-3 bg-secondary-500 rounded-full opacity-80"
                variants={floatingVariants}
                animate="animate"
                transition={{ delay: 3 }}
            ></motion.div>
            <motion.div
                className="absolute bottom-60 right-20 w-5 h-5 bg-primary-200 rounded-full opacity-60"
                variants={floatingVariants}
                animate="animate"
                transition={{ delay: 4.5 }}
            ></motion.div>

            {/* Main Content */}
            <motion.div
                className="relative z-10 text-center px-6 max-w-5xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Greeting Badge */}
                <motion.div className="mb-8" variants={itemVariants}>
                    <span className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-100/80 to-secondary-100/80 backdrop-blur-sm rounded-full text-primary-700 text-small font-medium tracking-wide uppercase border border-primary-200/50 shadow-elegant">
                        Happy Birthday
                    </span>
                </motion.div>

                {/* Main Heading with Fixed Gradient */}
                <motion.h1
                    className="font-display text-display font-bold text-neutral-charcoal mb-8 leading-tight"
                    variants={itemVariants}
                >
                    <span className="block mb-2">Dear</span>
                    <span className="block text-gradient-primary bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-600 bg-clip-text text-transparent">
                        Selma Alyvia Kirani
                    </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    className="text-h3 text-neutral-medium-gray mb-12 font-light leading-relaxed max-w-3xl mx-auto"
                    variants={itemVariants}
                >
                    May your special day be filled with
                    <br />
                    <span className="text-primary-600 font-medium">
                        love, laughter, and beautiful memories
                    </span>
                </motion.p>

                {/* Enhanced Call to Action */}
                <motion.div className="space-y-6" variants={itemVariants}>
                    <motion.button
                        className="group relative px-10 py-5 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold text-lg rounded-full overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-elegant-xl shadow-elegant-lg"
                        whileHover={{
                            scale: 1.05,
                            boxShadow:
                                "0 25px 50px -12px rgba(30, 144, 255, 0.4)",
                        }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                            // Smooth scroll to next section
                            window.scrollTo({
                                top: window.innerHeight,
                                behavior: "smooth",
                            });
                        }}
                    >
                        <span className="relative z-10 flex items-center gap-3">
                            Start the Celebration
                            <svg
                                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                                />
                            </svg>
                        </span>

                        {/* Hover overlay effect */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-secondary-500 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                        ></motion.div>

                        {/* Sparkle effect on hover */}
                        <motion.div
                            className="absolute inset-0 opacity-0 group-hover:opacity-100"
                            animate={{
                                background: [
                                    "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)",
                                    "radial-gradient(circle at 80% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)",
                                    "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)",
                                ],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                            }}
                        ></motion.div>
                    </motion.button>

                    <motion.p
                        className="text-small text-neutral-medium-gray flex items-center justify-center gap-2"
                        variants={itemVariants}
                    >
                        <svg
                            className="w-4 h-4 text-primary-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                            />
                        </svg>
                        Scroll down to explore your special surprise
                    </motion.p>
                </motion.div>
            </motion.div>

            {/* Enhanced Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 0.6 }}
            >
                <motion.div
                    className="w-7 h-12 border-2 border-primary-400 rounded-full flex justify-center bg-gradient-to-b from-transparent to-primary-50/50 backdrop-blur-sm shadow-elegant"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    <motion.div
                        className="w-1.5 h-4 bg-gradient-to-b from-primary-500 to-secondary-500 rounded-full mt-2"
                        animate={{
                            height: ["16px", "8px", "16px"],
                            opacity: [1, 0.5, 1],
                        }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    ></motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}
