import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Use Routes instead of Route
import Header from "./components/Header";
import Footer from "./components/Footer";

import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            {" "}
            {/* Use Routes to wrap your routes */}
            <Route path="/" element={<HomeScreen />} exact />{" "}
            {/* Use element prop instead of component */}
            <Route path="/home" element={<HomeScreen />} exact />{" "}
            {/* Use element prop instead of component */}
            <Route path="/product/:id" element={<ProductScreen />} />{" "}
            {/* Use element prop instead of component */}
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
