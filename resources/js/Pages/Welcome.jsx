import MainLayout from "../Layouts/MainLayout";
import HeroSection from "../Components/Sections/HeroSection";

export default function Welcome() {
    return (
        <MainLayout title="Happy Birthday Selma">
            <HeroSection />

            {/* Placeholder for next sections */}
            <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-off-white to-primary-50">
                <div className="text-center">
                    <h2 className="text-h1 font-display font-bold text-neutral-charcoal mb-4">
                        More Magic Coming Soon
                    </h2>
                    <p className="text-body-lg text-neutral-medium-gray">
                        Gallery, Timeline, and Interactive Elements will be
                        added next
                    </p>
                </div>
            </section>
        </MainLayout>
    );
}
