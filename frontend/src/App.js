import React, { useState } from 'react';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';

const App = () => {
    const [refresh, setRefresh] = useState(false);

    const handleProductAdded = () => {
        setRefresh(!refresh);
    };

    return (
        <div className="App">
            <h1>Retail Inventory Management System</h1>
            <ProductForm onProductAdded={handleProductAdded} />
            <ProductList key={refresh} />
        </div>
    );
};

export default App;
