import { BrowserRouter, Routes , Route } from "react-router-dom";
import Home from "./assets/pages/home";
import Count from "./pages/count/count";
import FormRegistration from "./assets/pages/FormRegistration";
import Activity_2 from "./components/ui/activity_2";
import Activity2 from "./components/ui/activity2";
import Pokemon from "./components/GUI/pokemon";
import Pokemon_2 from "./components/GUI/pokemon_2";
  






const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Pokemon_2 />} />
        
        <Route path="/pokemon" element={<Pokemon />} />

        <Route path="/Activity2" element={<Activity2 />} />

        <Route path="/Activity" element={<Activity_2/>} />

        <Route path="/Form" element={<FormRegistration />} />

        <Route path="/Count" element={<Count />} />

        <Route path="/Home" element={<Home />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;