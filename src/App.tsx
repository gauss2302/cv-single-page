import React from 'react';
import Header from './components/header/Header';
import HomeSection from './components/homesection/HomeSection';
import CVSection from './components/cvsection/CVSection';
import Footer from './components/footer/Footer';
import Contact from './components/contacts/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header />
      
      <main className="flex-grow w-full">
        {/* Home Section */}
        <section id="home" className="w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <HomeSection />
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <CVSection />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Contact />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default App;