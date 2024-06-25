import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = ({ onProductAdded }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [barcode, setBarcode] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const product = { name, price, quantity, barcode };
            await axios.post('http://localhost:5000/api/products', product);
            setName('');
            setPrice('');
            setQuantity('');
            setBarcode('');
            onProductAdded();
        } catch (error) {
            console.error('Error adding product', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
            <input type="number" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
            <input type="text" placeholder="Barcode" value={barcode} onChange={(e) => setBarcode(e.target.value)} required />
            <button type="submit">Add Product</button>
        </form>
    );
};

export default ProductForm;
