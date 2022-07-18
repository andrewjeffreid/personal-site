import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import { createContext, useState } from 'react'
import './App.css'

export const ThemeContext = createContext(null);

function App() {

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => curr === "light" ? "dark": "light")
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className="App" id={theme}>
        <Navbar theme={theme} toggleTheme={toggleTheme}/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/blog" element={<Blog />}/>
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
