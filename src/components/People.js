import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function People() {
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
        <div>
            <h1>Products</h1>
            <ul>
                {products.map(product => (
                    <li key={product._id}>
                        <Link to={`/product/${product._id}`}>{product.name}</Link>
                    </li>
                ))}
            </ul>
            <input type="text" onChange={handleChange} /><button onClick={handleSave}>Add</button>
        </div>
    );
}

export default People;