import { useState } from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

const App = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <HeroSection searchText={searchText} setSearchText={setSearchText} />
    </>
  );
};

export default App;
