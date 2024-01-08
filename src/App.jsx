import { useState } from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const App = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Navbar searchText={searchText} setSearchText={setSearchText} />
        <HeroSection searchText={searchText} setSearchText={setSearchText} />
      </QueryClientProvider>
    </>
  );
};

export default App;
