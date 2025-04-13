import React from "react";
import './css/App.css';
import { AnimatePresence, motion } from "framer-motion";
import { Route, Routes, useLocation, BrowserRouter as Router } from "react-router-dom";
import Header from "./jsx/Header";
import Home from "./jsx/Home";
import Perform from "./jsx/Perform";
import Food from "./jsx/Food";

const pageVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/perform"
          element={
            <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
              <Perform />
            </motion.div>
          }
        />
        <Route
          path="/food"
          element={
            <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
              <Food />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <Router>
      <Header />
      <AnimatedRoutes />
    </Router>
  );
};

export default App;
