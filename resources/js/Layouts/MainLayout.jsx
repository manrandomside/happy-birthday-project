import { Head } from "@inertiajs/react";

export default function MainLayout({
    children,
    title = "Selma's Special Day",
}) {
    return (
        <>
            <Head title={title} />
            <div className="min-h-screen bg-gradient-to-br from-primary-50 via-neutral-white to-secondary-50 relative">
                {/* Enhanced Background with Warm Blue Theme */}
                <div className="fixed inset-0 overflow-hidden pointer-events-none">
                    {/* Main background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-100/60 via-neutral-off-white/90 to-secondary-100/40"></div>

                    {/* Animated background orbs */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary-200/30 to-secondary-200/20 rounded-full blur-3xl transform translate-x-20 -translate-y-20 animate-pulse-slow"></div>
                    <div
                        className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-secondary-200/20 to-primary-200/30 rounded-full blur-3xl transform -translate-x-20 translate-y-20 animate-pulse-slow"
                        style={{ animationDelay: "2s" }}
                    ></div>

                    {/* Additional decorative elements */}
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-primary-100/20 to-secondary-100/20 rounded-full blur-2xl animate-float"></div>
                    <div
                        className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-gradient-to-l from-secondary-100/20 to-primary-100/20 rounded-full blur-2xl animate-float"
                        style={{ animationDelay: "3s" }}
                    ></div>

                    {/* Subtle texture overlay */}
                    <div
                        className="absolute inset-0 opacity-30"
                        style={{
                            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(30, 144, 255, 0.1) 0%, transparent 50%), 
                                         radial-gradient(circle at 75% 75%, rgba(14, 165, 233, 0.1) 0%, transparent 50%)`,
                        }}
                    ></div>
                </div>

                {/* Smooth scrolling container */}
                <div className="relative">
                    {/* Content wrapper with enhanced backdrop */}
                    <main className="relative z-10 backdrop-blur-[0.5px]">
                        {children}
                    </main>
                </div>

                {/* Floating UI Elements */}
                <div className="fixed top-8 left-8 z-50 pointer-events-none">
                    <div className="w-2 h-2 bg-primary-400 rounded-full opacity-70 animate-bounce-gentle"></div>
                </div>
                <div className="fixed top-20 right-12 z-50 pointer-events-none">
                    <div
                        className="w-1.5 h-1.5 bg-secondary-400 rounded-full opacity-60 animate-bounce-gentle"
                        style={{ animationDelay: "1s" }}
                    ></div>
                </div>
                <div className="fixed bottom-12 left-16 z-50 pointer-events-none">
                    <div
                        className="w-3 h-3 bg-primary-300 rounded-full opacity-50 animate-bounce-gentle"
                        style={{ animationDelay: "2s" }}
                    ></div>
                </div>
            </div>
        </>
    );
}
