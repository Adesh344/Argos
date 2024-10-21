import React from 'react';
import { Link } from 'react-router-dom'; 
import Card from '../../card/Card';

function Home() {
  return (
    <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '100vh', 
        textAlign: 'center' 
      }}>
      <p>Argos</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div>
          <Link to="/doc" style={{ textDecoration: 'none' }}> 
            <Card name="Doc Submit" />
          </Link>
        </div>
        <div>
          <Link to="/qa" style={{ textDecoration: 'none' }}> 
            <Card name="QA" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
