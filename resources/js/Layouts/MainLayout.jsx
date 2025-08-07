import { Head } from "@inertiajs/react";

export default function MainLayout({
    children,
    title = "Selma's Special Day",
}) {
    return (
        <>
            <Head title={title} />
            <div className="min-h-screen bg-gradient-to-br from-neutral-white via-neutral-off-white to-primary-100">
                {/* Smooth scrolling container */}
                <div className="relative">
                    {/* Background decorative elements */}
                    <div className="fixed inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute top-1/4 -right-40 w-80 h-80 bg-gradient-to-br from-primary-200/30 to-secondary-200/20 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-1/4 -left-40 w-96 h-96 bg-gradient-to-tr from-secondary-200/20 to-primary-200/30 rounded-full blur-3xl"></div>
                    </div>

                    {/* Main content */}
                    <main className="relative z-10">{children}</main>
                </div>
            </div>
        </>
    );
}
