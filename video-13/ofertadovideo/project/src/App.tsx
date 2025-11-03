import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Themes from './components/Themes';
import HowToUse from './components/HowToUse';
import Bonuses from './components/Bonuses';
import Testimonials from './components/Testimonials';
import EmailCapture from './components/EmailCapture';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 text-white overflow-hidden">
      <div className="fixed inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?w=1920')] opacity-5 bg-cover bg-center" />
      <Hero />
      <Benefits />
      <Themes />
      <HowToUse />
      <Bonuses />
      <Testimonials />
      <EmailCapture />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
