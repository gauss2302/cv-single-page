import React from 'react';
import Header from './components/header/Header';
import HomeSection from './components/homesection/HomeSection';
import CVSection from './components/cvsection/CVSection';
import Footer from './components/footer/Footer';
import Contact from './components/contacts/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Home Section */}
        <section id="home">
          <HomeSection />
        </section>

        {/* Experience Section */}
        <section id="experience">
          <CVSection />
        </section>

        {/* Contact Section */}
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </main>
    </div>
  );
};

export default App;