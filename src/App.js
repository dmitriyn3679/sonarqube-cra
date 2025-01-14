import Header from "./components/Header";
import Footer from './components/Footer';
import Counter from './components/Counter';
import BadPracticeComponent from './components/BadPracticeComponent';
import CriticalBugComponent from './components/CriticalBugComponent';
import VulnerabilityComponent from './components/VulnerabilityComponent';
import DuplicateComponent1 from './components/DuplicateComponent1';
import DuplicateComponent2 from './components/DuplicateComponent2';

function App() {
  return (
    <>
      <Header />
      <Counter />
      <BadPracticeComponent />
      <CriticalBugComponent />
      <VulnerabilityComponent />
      <DuplicateComponent1 />
      <DuplicateComponent2 />
      <Footer />
    </>
  );
}

export default App;
