import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
    const [products, setProducts] = useState([]);
    const [inputBox, setInputBox] = useState('');

    useEffect(() => {
        axios.get('http://localhost:5000/api/products')
            .then(response => setProducts(response.data))
            .catch(error => console.error(error));
    }, []);

    const handleChange = (event) => {
        setInputBox(event.target.value)
    }

    const handleSave = async (event) => {
        event.preventDefault();
        console.log(inputBox)
        try {
          const response = await axios.post('http://localhost:5000/api/products', {
            name:inputBox,
            
          });
          console.log('Data saved:', response.data);
        } catch (error) {
          console.error('Error saving data:', error);
        }
    }
 
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-blue-500">Hello, Tailwind CSS!</h1>
      </div>
    );
}

export default Home;