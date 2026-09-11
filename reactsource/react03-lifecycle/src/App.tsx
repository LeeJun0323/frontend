import { Route, Routes } from "react-router-dom";
import "./App.css";
import ExternalApiFetcher from "./ExternalApiFetcher";
import LifeCycle from "./LifeCycle";
import LoaclJsonFetcher from "./LocalJsonFetcher";
import TopNavi from "./TopNavi";
import BookJsonFetcher from "./BookJsonFetcher";

function App() {
  return (
    <>
      <TopNavi />
      <Routes>
        <Route path="/" element={<LifeCycle />} />
        <Route path="/local" element={<LoaclJsonFetcher />} />
        <Route path="/external" element={<ExternalApiFetcher />} />
        <Route path="/book" element={<BookJsonFetcher />} />
      </Routes>
    </>
  );
}

export default App;
