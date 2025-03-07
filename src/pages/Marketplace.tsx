
import React, { useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { CustomButton } from "../components/ui/CustomButton";
import { ShoppingBag, Star, Tag, Truck, Leaf } from "lucide-react";

const Marketplace = () => {
  // Sample product data
  const sampleProducts = [
    {
      id: 1,
      name: "Organic Compost",
      description: "Premium organic compost made from recycled green waste",
      price: 24.99,
      rating: 4.8,
      image: "/placeholder.svg",
      category: "Fertilizers"
    },
    {
      id: 2,
      name: "Biodegradable Planter",
      description: "Eco-friendly planter that breaks down naturally over time",
      price: 18.50,
      rating: 4.6,
      image: "/placeholder.svg",
      category: "Gardening"
    },
    {
      id: 3,
      name: "Mulch Pack",
      description: "Sustainable mulch for gardens and landscaping",
      price: 15.99,
      rating: 4.7,
      image: "/placeholder.svg",
      category: "Landscaping"
    },
    {
      id: 4,
      name: "Herb Garden Kit",
      description: "Start your own herb garden with our sustainable kit",
      price: 34.99,
      rating: 4.9,
      image: "/placeholder.svg",
      category: "Gardening"
    },
  ];

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-28">
        <section className="py-12 bg-gradient-to-r from-leaf-50 to-jaivak-50 dark:from-slate-900 dark:to-slate-800">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block bg-leaf-50 dark:bg-leaf-500/20 px-4 py-1.5 rounded-full text-sm font-medium text-leaf-700 dark:text-leaf-300 mb-6">
                Marketplace
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-6">
                Shop Our <span className="text-gradient-secondary">Sustainable Products</span>
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
                Browse our selection of eco-friendly products made from recycled green waste, perfect for gardening, landscaping, and sustainable living.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white dark:bg-slate-900">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                <div className="md:col-span-1 space-y-6">
                  <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
                    <h3 className="text-lg font-semibold mb-4 text-slate-800 dark:text-slate-200">
                      Categories
                    </h3>
                    <ul className="space-y-2">
                      <li>
                        <a href="#" className="text-sm flex items-center justify-between text-slate-600 hover:text-jaivak-500 dark:text-slate-400 dark:hover:text-jaivak-400">
                          Fertilizers
                          <span className="bg-slate-100 dark:bg-slate-700 text-xs rounded-full px-2 py-0.5">12</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-sm flex items-center justify-between text-slate-600 hover:text-jaivak-500 dark:text-slate-400 dark:hover:text-jaivak-400">
                          Gardening
                          <span className="bg-slate-100 dark:bg-slate-700 text-xs rounded-full px-2 py-0.5">8</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-sm flex items-center justify-between text-slate-600 hover:text-jaivak-500 dark:text-slate-400 dark:hover:text-jaivak-400">
                          Landscaping
                          <span className="bg-slate-100 dark:bg-slate-700 text-xs rounded-full px-2 py-0.5">15</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-sm flex items-center justify-between text-slate-600 hover:text-jaivak-500 dark:text-slate-400 dark:hover:text-jaivak-400">
                          Packaging
                          <span className="bg-slate-100 dark:bg-slate-700 text-xs rounded-full px-2 py-0.5">6</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-sm flex items-center justify-between text-slate-600 hover:text-jaivak-500 dark:text-slate-400 dark:hover:text-jaivak-400">
                          Home & Living
                          <span className="bg-slate-100 dark:bg-slate-700 text-xs rounded-full px-2 py-0.5">9</span>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
                    <h3 className="text-lg font-semibold mb-4 text-slate-800 dark:text-slate-200">
                      Filters
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-medium mb-2">Price Range</p>
                        <div className="bg-slate-100 dark:bg-slate-700 h-2 rounded-full">
                          <div className="bg-jaivak-500 h-2 w-1/2 rounded-full"></div>
                        </div>
                        <div className="flex justify-between mt-1">
                          <span className="text-xs text-slate-500 dark:text-slate-400">$0</span>
                          <span className="text-xs text-slate-500 dark:text-slate-400">$100</span>
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-sm font-medium mb-2">Rating</p>
                        <div className="space-y-1">
                          {[5, 4, 3, 2, 1].map((rating) => (
                            <div key={rating} className="flex items-center">
                              <input type="checkbox" id={`rating-${rating}`} className="rounded text-jaivak-500 focus:ring-jaivak-500" />
                              <label htmlFor={`rating-${rating}`} className="ml-2 text-sm text-slate-600 dark:text-slate-400 flex items-center">
                                {Array(rating).fill(0).map((_, i) => (
                                  <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
                                ))}
                                {Array(5-rating).fill(0).map((_, i) => (
                                  <Star key={i} className="h-3 w-3 text-slate-300" />
                                ))}
                                <span className="ml-1">&amp; Up</span>
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-3">
                  <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 mb-8">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200">
                          All Products <span className="text-sm font-normal text-slate-500 dark:text-slate-400">(50)</span>
                        </h3>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-slate-500 dark:text-slate-400">Sort by:</span>
                        <select className="text-sm border border-slate-200 dark:border-slate-700 rounded-md bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 px-2 py-1 focus:outline-none focus:ring-1 focus:ring-jaivak-500">
                          <option>Featured</option>
                          <option>Price: Low to High</option>
                          <option>Price: High to Low</option>
                          <option>Rating</option>
                          <option>Newest</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sampleProducts.map((product) => (
                      <div 
                        key={product.id} 
                        className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-700 group hover:shadow-md transition-all"
                      >
                        <div className="relative aspect-square overflow-hidden bg-slate-100 dark:bg-slate-700">
                          <img 
                            src={product.image} 
                            alt={product.name} 
                            className="object-cover w-full h-full transition-transform group-hover:scale-105"
                          />
                          <div className="absolute top-3 left-3">
                            <span className="bg-jaivak-500 text-white text-xs px-2 py-1 rounded-full flex items-center">
                              <Leaf className="h-3 w-3 mr-1" />
                              Eco-friendly
                            </span>
                          </div>
                        </div>
                        <div className="p-5">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs text-ocean-600 dark:text-ocean-400 font-medium">
                              {product.category}
                            </span>
                            <div className="flex items-center">
                              <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                              <span className="text-xs text-slate-600 dark:text-slate-400 ml-1">
                                {product.rating}
                              </span>
                            </div>
                          </div>
                          <h3 className="text-md font-semibold mb-1 text-slate-800 dark:text-slate-200">
                            {product.name}
                          </h3>
                          <p className="text-sm text-slate-600 dark:text-slate-400 mb-3 line-clamp-2">
                            {product.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-lg font-bold text-jaivak-600 dark:text-jaivak-400">
                              ${product.price}
                            </span>
                            <CustomButton variant="gradient" size="sm">
                              <ShoppingBag className="h-4 w-4 mr-1" />
                              Add
                            </CustomButton>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-12 text-center">
                    <CustomButton variant="outline" size="lg">
                      Load More Products
                    </CustomButton>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-jaivak-50 to-leaf-50 dark:from-jaivak-900/30 dark:to-leaf-900/30 rounded-xl p-8 border border-jaivak-100 dark:border-jaivak-800 mt-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-white dark:bg-slate-800 rounded-full p-3 text-jaivak-500 shadow-sm">
                      <Leaf className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-md font-semibold mb-1 text-slate-800 dark:text-slate-200">
                        Eco-Friendly
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        All products made from recycled materials, reducing waste and environmental impact
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-white dark:bg-slate-800 rounded-full p-3 text-jaivak-500 shadow-sm">
                      <Truck className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-md font-semibold mb-1 text-slate-800 dark:text-slate-200">
                        Carbon-Neutral Delivery
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        We offset carbon emissions from all our shipments for guilt-free shopping
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-white dark:bg-slate-800 rounded-full p-3 text-jaivak-500 shadow-sm">
                      <Tag className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-md font-semibold mb-1 text-slate-800 dark:text-slate-200">
                        Green Impact Credits
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Earn credits with every purchase to track and showcase your environmental impact
                      </p>
                    </div>
                  </div>
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

export default Marketplace;
