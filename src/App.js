
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { MapPin, Phone, ChefHat, Star, ArrowRight } from 'lucide-react';

const menuItems = [
  {
    name: 'Seared Scallops',
    description: 'With butternut squash puree, brown butter vinaigrette, and toasted hazelnuts.',
    price: '$28',
    image: 'https://images.unsplash.com/photo-1588276552401-72c363142779?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80',
    isSignature: true,
  },
  {
    name: 'Wagyu Beef Burger',
    description: 'Grilled wagyu patty, truffle aioli, aged cheddar, and crispy onions on a brioche bun.',
    price: '$24',
    image: 'https://images.unsplash.com/photo-1605789538316-3e0e6231d8e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80',
    isSignature: false,
  },
  {
    name: 'Mushroom Risotto',
    description: 'Creamy Arborio rice with wild mushrooms, parmesan cheese, and a hint of white truffle oil.',
    price: '$22',
    image: 'https://images.unsplash.com/photo-1595908129323-936495141b71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80',
    isSignature: false,
  },
];

const RestaurantLandingPage = () => {
  const [isSticky, setIsSticky] = useState(false);
  const heroRef = useRef(null);

  const handleScroll = useCallback(() => {
    if (heroRef.current) {
      if (window.scrollY > heroRef.current.offsetHeight) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const smoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Eiffel+Tower+Paris+France";

  return (
    <div className="bg-slate-900 text-slate-300 font-sans antialiased">
      <style>{`
        html { scroll-behavior: smooth; }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isSticky ? 'bg-slate-900/80 backdrop-blur-lg shadow-xl' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="flex items-center space-x-2" aria-label="Homepage">
            <ChefHat className="w-8 h-8 text-amber-400" />
            <span className="text-2xl font-bold text-white tracking-wider">AURA</span>
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#menu"
              onClick={(e) => smoothScroll(e, 'menu')}
              className="text-slate-300 hover:text-amber-400 transition-colors duration-300"
            >
              Menu
            </a>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-500 text-slate-900 font-bold px-5 py-2 rounded-full hover:bg-amber-400 transition-colors duration-300 flex items-center space-x-2"
            >
              <MapPin className="w-4 h-4" />
              <span>Get Directions</span>
            </a>
          </nav>
          <div className="md:hidden">
             <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-500 text-slate-900 font-bold px-4 py-2 rounded-full hover:bg-amber-400 transition-colors duration-300 flex items-center space-x-2"
              aria-label="Get Directions"
            >
              <MapPin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </header>

      <main>
        <section
          ref={heroRef}
          className="relative h-screen flex items-center justify-center text-center"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')" }}
          >
             <div className="absolute inset-0 bg-black/60"></div>
          </div>
          <div className="relative z-10 p-6 animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4 tracking-tighter">
              An Unforgettable <span className="text-amber-400">Culinary</span> Experience
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-8">
              Discover the art of fine dining where every dish tells a story.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
               <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-500 text-slate-900 font-bold px-8 py-4 rounded-full text-lg hover:bg-amber-400 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <MapPin className="w-5 h-5" />
                <span>Find Our Location</span>
              </a>
              <a
                href="tel:+1234567890"
                className="border-2 border-slate-400 text-white font-bold px-8 py-4 rounded-full text-lg hover:bg-slate-400/20 transition-colors duration-300 flex items-center space-x-2"
                aria-label="Call us"
              >
                <Phone className="w-5 h-5" />
                <span>Call to Reserve</span>
              </a>
            </div>
          </div>
        </section>

        <section id="menu" className="py-20 sm:py-32 bg-slate-900">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Menu Highlights</h2>
              <p className="text-slate-400 max-w-xl mx-auto">
                A glimpse into our chef's signature creations, crafted with the freshest seasonal ingredients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-slate-800 rounded-lg overflow-hidden group transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/10"
                >
                  <div className="relative h-56">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    {item.isSignature && (
                      <div className="absolute top-3 right-3 bg-amber-500 text-slate-900 text-xs font-bold px-2 py-1 rounded-full flex items-center space-x-1">
                        <Star className="w-3 h-3"/>
                        <span>SIGNATURE</span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-white">{item.name}</h3>
                      <p className="text-xl font-bold text-amber-400">{item.price}</p>
                    </div>
                    <p className="text-slate-400 text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="bg-slate-800 py-20 sm:py-24">
            <div className="container mx-auto px-6 text-center">
                <ChefHat className="w-12 h-12 text-amber-400 mx-auto mb-4"/>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready for an Exquisite Meal?</h2>
                <p className="text-slate-400 max-w-2xl mx-auto mb-8">We are conveniently located in the heart of the city, ready to welcome you for a memorable dining experience.</p>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-amber-500 text-slate-900 font-bold px-8 py-4 rounded-full text-lg hover:bg-amber-400 transition-all duration-300 transform hover:scale-105"
                >
                  <span>Get Directions Now</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
            </div>
        </section>

      </main>

      <footer className="bg-slate-900 border-t border-slate-800">
        <div className="container mx-auto px-6 py-8 text-center text-slate-400">
          <p>&copy; {new Date().getFullYear()} AURA Restaurant. All Rights Reserved.</p>
          <p className="text-sm mt-2">123 Culinary Lane, Foodie City, 45678</p>
        </div>
      </footer>
    </div>
  );
};

export default RestaurantLandingPage;
