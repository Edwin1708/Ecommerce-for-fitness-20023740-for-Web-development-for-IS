import React from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <ProductForm />
            <ProductList />
        </div>
    );
};

export default Dashboard;
