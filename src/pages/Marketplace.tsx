
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { CustomButton } from "@/components/ui/CustomButton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Leaf, ShoppingCart, Filter, Search, Star, ChevronDown } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Product mock data
const products = [
  {
    id: 1,
    name: "Organic Compost - Premium",
    category: "Fertilizers",
    price: 29.99,
    rating: 4.8,
    image: "placeholder.svg",
    description: "Nutrient-rich organic compost made from recycled green waste. Perfect for gardens and plants."
  },
  {
    id: 2,
    name: "Biodegradable Planter Pots",
    category: "Gardening",
    price: 19.99,
    rating: 4.5,
    image: "placeholder.svg",
    description: "Eco-friendly planter pots that break down naturally in soil. Available in multiple sizes."
  },
  {
    id: 3,
    name: "Organic Plant Food Concentrate",
    category: "Fertilizers",
    price: 24.99,
    rating: 4.7,
    image: "placeholder.svg",
    description: "Concentrated organic plant food derived from composted green materials."
  },
  {
    id: 4,
    name: "Mulch - Garden Premium",
    category: "Landscaping",
    price: 15.99,
    rating: 4.6,
    image: "placeholder.svg",
    description: "Premium organic mulch for garden beds and landscaping. Helps retain soil moisture."
  },
  {
    id: 5,
    name: "Grass Clipping Compost",
    category: "Fertilizers",
    price: 22.99,
    rating: 4.4,
    image: "placeholder.svg",
    description: "Specialized compost made from grass clippings, perfect for lawn care and garden beds."
  },
  {
    id: 6,
    name: "Biodegradable Seed Starter Kit",
    category: "Gardening",
    price: 34.99,
    rating: 4.9,
    image: "placeholder.svg",
    description: "Complete sustainable seed starting kit with biodegradable pots and organic soil."
  },
  {
    id: 7,
    name: "Eco Lawn Food",
    category: "Fertilizers",
    price: 27.99,
    rating: 4.3,
    image: "placeholder.svg",
    description: "Natural lawn fertilizer created from composted organic materials with no chemicals."
  },
  {
    id: 8,
    name: "Garden Stepping Stones",
    category: "Landscaping",
    price: 39.99,
    rating: 4.7,
    image: "placeholder.svg",
    description: "Decorative stepping stones made from recycled materials for garden pathways."
  }
];

const Marketplace = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [cartCount, setCartCount] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>("");
  
  const [featuredRef, featuredInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const filteredProducts = products.filter(product => {
    // Filter by category
    const categoryMatch = selectedCategory === "all" || product.category.toLowerCase() === selectedCategory.toLowerCase();
    
    // Filter by search query
    const searchMatch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                       product.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return categoryMatch && searchMatch;
  });
  
  const addToCart = () => {
    setCartCount(prev => prev + 1);
  };
  
  const categories = ["all", "Fertilizers", "Gardening", "Landscaping"];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-28 pb-16 bg-gradient-to-b from-green-50 to-white dark:from-slate-900 dark:to-slate-900">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
                Sustainable Products Marketplace
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                Shop our range of eco-friendly products made from recycled green waste. Every purchase contributes to our circular economy mission.
              </p>
              <div className="relative max-w-lg mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search products..." 
                  className="w-full pl-10 pr-4 py-3 rounded-full border border-slate-200 focus:outline-none focus:ring-2 focus:ring-jaivak-500 focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-12 bg-white dark:bg-slate-900">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Product Categories
              </h2>
              
              <div className="flex items-center">
                <div className="mr-4 relative">
                  <div className="absolute -top-2 -right-2 bg-jaivak-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                    {cartCount}
                  </div>
                  <CustomButton variant="outline" size="sm" className="flex items-center gap-2">
                    <ShoppingCart className="h-4 w-4" />
                    Cart
                  </CustomButton>
                </div>
                
                <CustomButton variant="outline" size="sm" className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  Filter
                  <ChevronDown className="h-4 w-4" />
                </CustomButton>
              </div>
            </div>
            
            <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
              <TabsList className="w-full flex justify-start overflow-x-auto space-x-2 pb-2">
                {categories.map((category) => (
                  <TabsTrigger 
                    key={category} 
                    value={category}
                    className="px-4 py-2 capitalize"
                  >
                    {category === "all" ? "All Products" : category}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {categories.map((category) => (
                <TabsContent key={category} value={category} className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredProducts.map((product) => (
                      <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
                          <div className="h-48 bg-slate-100 dark:bg-slate-800 relative">
                            <img 
                              src={product.image} 
                              alt={product.name} 
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute top-2 right-2 bg-white dark:bg-slate-700 rounded-full px-2 py-1 flex items-center">
                              <Star className="h-3 w-3 text-yellow-500 mr-1" fill="currentColor" />
                              <span className="text-xs font-medium">{product.rating}</span>
                            </div>
                          </div>
                          
                          <CardContent className="py-4 flex-grow">
                            <div className="text-xs font-medium text-jaivak-500 mb-2">
                              {product.category}
                            </div>
                            <h3 className="font-semibold text-lg mb-2 text-slate-900 dark:text-white">
                              {product.name}
                            </h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                              {product.description}
                            </p>
                            <div className="font-bold text-lg text-slate-900 dark:text-white">
                              ${product.price.toFixed(2)}
                            </div>
                          </CardContent>
                          
                          <CardFooter className="pt-0">
                            <CustomButton 
                              variant="gradient" 
                              className="w-full"
                              onClick={addToCart}
                            >
                              Add to Cart
                            </CustomButton>
                          </CardFooter>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Featured Products */}
        <motion.section 
          ref={featuredRef}
          initial={{ opacity: 0 }}
          animate={featuredInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="py-16 bg-slate-50 dark:bg-slate-800"
        >
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-slate-900 dark:text-white">
              Best Selling Products
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {products.slice(0, 3).map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow border-2 border-jaivak-500/20">
                    <div className="h-64 bg-slate-100 dark:bg-slate-800 relative">
                      <div className="absolute top-0 left-0 bg-jaivak-500 text-white px-3 py-1 text-sm font-medium">
                        Best Seller
                      </div>
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <CardContent className="py-6 flex-grow">
                      <div className="flex justify-between items-center mb-2">
                        <div className="text-sm font-medium text-jaivak-500">
                          {product.category}
                        </div>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-500 mr-1" fill="currentColor" />
                          <span className="text-sm font-medium">{product.rating}</span>
                        </div>
                      </div>
                      
                      <h3 className="font-semibold text-xl mb-2 text-slate-900 dark:text-white">
                        {product.name}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 mb-4">
                        {product.description}
                      </p>
                      <div className="font-bold text-xl text-slate-900 dark:text-white">
                        ${product.price.toFixed(2)}
                      </div>
                    </CardContent>
                    
                    <CardFooter>
                      <CustomButton 
                        variant="gradient" 
                        className="w-full"
                        onClick={addToCart}
                      >
                        Add to Cart
                      </CustomButton>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <CustomButton variant="outline" size="lg" className="flex items-center gap-2 mx-auto">
                View All Best Sellers <ChevronDown className="h-5 w-5" />
              </CustomButton>
            </div>
          </div>
        </motion.section>

        {/* Eco Benefits Section */}
        <section className="py-16 bg-white dark:bg-slate-900">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">
                Environmental Benefits
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                Every purchase contributes to our circular economy mission. See the impact you're making with each product.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-green-50 dark:bg-slate-800 p-8 rounded-lg text-center">
                <div className="w-16 h-16 bg-jaivak-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Leaf className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">Waste Reduction</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Every product diverts waste from landfills, reducing methane emissions and pollution.
                </p>
              </div>
              
              <div className="bg-green-50 dark:bg-slate-800 p-8 rounded-lg text-center">
                <div className="w-16 h-16 bg-jaivak-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-.71-13.7l2.79 2.8-7.07 7.07-2.79-2.8 7.07-7.07z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">Carbon Sequestration</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Our products help lock carbon in soil, reducing greenhouse gas emissions.
                </p>
              </div>
              
              <div className="bg-green-50 dark:bg-slate-800 p-8 rounded-lg text-center">
                <div className="w-16 h-16 bg-jaivak-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16.67 13.13C18.04 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.57-3.47-6.33-3.87z" />
                    <circle cx="9" cy="8" r="4" />
                    <path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.47 0-.91.1-1.33.24C14.5 5.27 15 6.58 15 8s-.5 2.73-1.33 3.76c.42.14.86.24 1.33.24zm-6 1c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">Community Support</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Purchases support local green jobs and community sustainability initiatives.
                </p>
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
