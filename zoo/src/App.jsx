import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header.jsx';
import Card from './components/Card.jsx';
import Footer from './components/Footer.jsx';
import { animals } from './animalsList';


function App() {
    return (
        <>
        <Header />
        <main>
            {animals.map(animal => {
                <Card key = {animal.name} {...animal}  />;
            })}

        </main>
        <Footer /></>
    )
  
}





export default App
