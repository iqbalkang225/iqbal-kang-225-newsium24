
import { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ContentHolder from './pages/ContentHolder';
import NewsList from './components/NewsList'

function App() {
  
  return (
    <div className = "app">

        <Header />

        <main className = "main section-center">
          <Routes>
            <Route path = '/' element = { <Home /> } />
            <Route path = ":id" element = { <ContentHolder /> } >
              <Route path = '' element = { <NewsList /> } />
            </Route>
          </Routes>
        </main>

    </div>
  )
}

export default App;
