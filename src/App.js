import Footer from './components/Footer';
import Landing from './components/Landing';
import BigItemsDisplay from './components/BigItemsDisplay';
import MonthlyDealSection from './components/MonthlyDealSection';
import RecentNewsSection from './components/RecentNewsSection';
import TestimonialSection from './components/TestimonialSection';
import InstagramSection from './components/InstagramSection';
import SeriesWatchSection from './components/SeriesWatchSection';

function App() {
  return (
    <div className="App">
      <Landing />
      <BigItemsDisplay />
      <MonthlyDealSection />
      <RecentNewsSection />
      <SeriesWatchSection />
      <TestimonialSection />
      <InstagramSection />
      <Footer />
    </div>
  );
}

export default App;
