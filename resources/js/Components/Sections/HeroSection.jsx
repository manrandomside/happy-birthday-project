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
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-white via-primary-50 to-primary-100 opacity-80"></div>

            {/* Floating decoration elements */}
            <motion.div
                className="absolute top-20 left-20 w-6 h-6 bg-primary-300 rounded-full opacity-60"
                variants={floatingVariants}
                animate="animate"
            ></motion.div>
            <motion.div
                className="absolute top-40 right-32 w-4 h-4 bg-secondary-300 rounded-full opacity-50"
                variants={floatingVariants}
                animate="animate"
                transition={{ delay: 1.5 }}
            ></motion.div>
            <motion.div
                className="absolute bottom-32 left-40 w-8 h-8 bg-primary-200 rounded-full opacity-40"
                variants={floatingVariants}
                animate="animate"
                transition={{ delay: 0.8 }}
            ></motion.div>

            {/* Main content */}
            <motion.div
                className="relative z-10 text-center px-6 max-w-4xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Greeting */}
                <motion.div className="mb-6" variants={itemVariants}>
                    <span className="inline-block px-4 py-2 bg-primary-200/30 backdrop-blur-sm rounded-full text-primary-700 text-small font-medium tracking-wide uppercase">
                        Happy Birthday
                    </span>
                </motion.div>

                {/* Main heading */}
                <motion.h1
                    className="font-display text-display font-bold text-neutral-charcoal mb-6 leading-tight"
                    variants={itemVariants}
                >
                    <span className="block">Dear</span>
                    <span className="block bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-600 bg-clip-text text-transparent">
                        Selma Alyvia Kirani
                    </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    className="text-h3 text-neutral-medium-gray mb-12 font-light leading-relaxed"
                    variants={itemVariants}
                >
                    May your special day be filled with
                    <br />
                    <span className="text-primary-600 font-medium">
                        love, laughter, and beautiful memories
                    </span>
                </motion.p>

                {/* Call to action */}
                <motion.div className="space-y-4" variants={itemVariants}>
                    <motion.button
                        className="group relative px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-medium rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-200/50"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="relative z-10">
                            Start the Celebration
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-secondary-500 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </motion.button>

                    <p className="text-small text-neutral-medium-gray">
                        Scroll down to explore your special surprise
                    </p>
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 0.6 }}
            >
                <motion.div
                    className="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    <motion.div
                        className="w-1 h-3 bg-primary-500 rounded-full mt-2"
                        animate={{ height: ["12px", "6px", "12px"] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    ></motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}
