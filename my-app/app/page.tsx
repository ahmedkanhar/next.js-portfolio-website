import Header from '@/components/Header';
import Home from '@/components/Home';
import About from '@/components/About';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Page = () => {
  return (
    <div>
      {/* Header Section */}
      <Header />

      {/* Home section */}
      <Home/>

      {/* About section */}
      <About/>

      {/* Education Section */}
      <Education />

      {/* Skills Section */}
      <Skills />

      {/* Contact Section */}
      <Contact />

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Page;
