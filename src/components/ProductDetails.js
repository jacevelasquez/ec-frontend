import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ProductDetails() {
    const { id } = useParams(); // Get the product ID from the URL
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [todoList, setList] = useState([]);
    const [inp, setInp] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/products/${id}`);
                setProduct(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    const handleItem = () => {
        setList([...todoList, inp])
    }

    const handleChange = (event) => {
        setInp(event.target.value)
    }

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    // Check if product is null or undefined before accessing its properties
    if (!product) return <p>No product found</p>;

    return (
        <div>
            <div>
                <h2>TodoList</h2>
                {
                    todoList.map((todo, idx) =>(
                        <li key={idx}>{todo}</li>
                    ))
                }
                <h3><input key={product[0].id} onChange={handleChange} type="text" /><button onClick={handleItem}>Add</button></h3>
            </div>
            <h1>{product[0].name}</h1>
            <p>{product[0].email}</p>
        </div>
    );
}

export default ProductDetails;