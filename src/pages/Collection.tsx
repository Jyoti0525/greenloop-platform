
import React, { useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { CustomButton } from "../components/ui/CustomButton";
import { MapPin, CalendarCheck, Truck } from "lucide-react";

const Collection = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-28">
        <section className="py-12 bg-gradient-to-r from-jaivak-50 to-ocean-50 dark:from-slate-900 dark:to-slate-800">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block bg-jaivak-50 dark:bg-jaivak-500/20 px-4 py-1.5 rounded-full text-sm font-medium text-jaivak-700 dark:text-jaivak-300 mb-6">
                Waste Collection
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-6">
                Schedule Your <span className="text-gradient-primary">Green Waste Collection</span>
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
                Our smart collection system makes it easy to schedule pickups and track your waste contribution to the circular economy.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white dark:bg-slate-900">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm text-center mb-12">
                <h2 className="text-2xl font-semibold mb-6">Coming Soon</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  Our interactive waste collection portal with map visualization and scheduling is under development. Check back soon for updates!
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <CustomButton variant="gradient" size="lg">
                    Get Notified
                  </CustomButton>
                  <CustomButton variant="outline" size="lg">
                    Learn More
                  </CustomButton>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 text-center">
                  <div className="bg-jaivak-100 dark:bg-jaivak-900/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <MapPin className="h-8 w-8 text-jaivak-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-slate-800 dark:text-slate-200">
                    Location-Based Service
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Find pickup options available in your area with our interactive map interface.
                  </p>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 text-center">
                  <div className="bg-ocean-100 dark:bg-ocean-900/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CalendarCheck className="h-8 w-8 text-ocean-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-slate-800 dark:text-slate-200">
                    Flexible Scheduling
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Choose collection times that fit your schedule with our easy booking system.
                  </p>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 text-center">
                  <div className="bg-leaf-100 dark:bg-leaf-900/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Truck className="h-8 w-8 text-leaf-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-slate-800 dark:text-slate-200">
                    Real-Time Tracking
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Monitor your collection status and receive notifications throughout the process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Collection;
