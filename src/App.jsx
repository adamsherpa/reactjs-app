import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DataProvider } from "./context/DataContext";
import "./css/App.css";
import Employees from "./components/Employees";
import Footer from "./components/Footer";
import GroupedTeamMembers from "./components/GroupedTeamMembers";
import Header from "./components/Header";
import Nav from "./components/Nav";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <DataProvider>
      <Router>
        <Nav />
        <Header />
        <Routes>
          <Route path='/' element={<Employees />} />
          <Route path='/GroupedTeamMembers' element={<GroupedTeamMembers />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </DataProvider>
  );
};

export default App;
