import React from 'react';

const Card = ({ name }) => {
  return (
    <div style={styles.card}>
      <h2>{name}</h2>
    </div>
  );
};

const styles = {
  card: {
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    width: '200px',
    textAlign: 'center',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f9f9f9',
  },
};

export default Card;
