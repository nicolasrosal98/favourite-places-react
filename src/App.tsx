import PageHeader from "./components/PageHeader";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function App(): JSX.Element {
  return (
    <div className="background">
      <PageHeader />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
