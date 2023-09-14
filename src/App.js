
import './App.css';
import InterestingFacts from './InterestingFacts';
import Feedbacks from './Feedbacks';
import NavigationBar from './NavigationBar';
import Skills from './Skills';
import AboutMe from './AboutMe';
import FixedBar from './FixedBar';
import Banner from './Banner';
import Achievements from './Achievements';
import Footer from './Footer';

function App() {
  return (
    <div className="App" >
      <FixedBar name="SASWAT SUNDAR BEHERA" />
      <Banner description="" />
      <NavigationBar />

      <Skills skillType="technical" skillsets="" />
      <Skills skillType="process" skillsets="" />
      <Skills skillType="behavioral" skillsets="" />
      <Achievements />
      <Feedbacks />
      <InterestingFacts />
      <AboutMe />
      <Footer />
    </div>
  );
}

export default App;
