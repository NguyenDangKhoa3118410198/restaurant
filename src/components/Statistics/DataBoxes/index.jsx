import React from 'react';
import { FaUser, FaShoppingCart, FaBox, FaHubspot } from 'react-icons/fa';
import axios from 'axios';
import { sendRequest } from '../../../ulti/sendHeaderRequest';

export const infoCard = [
   {
      title: 'Customers',
      color: 'color1',
      icon: <FaUser />,
   },
   {
      title: 'Products',
      color: 'color2',
      icon: <FaShoppingCart />,
   },
   {
      title: 'Orders',
      color: 'color3',
      icon: <FaBox />,
   },
   {
      title: 'Access',
      color: 'color4',
      icon: <FaHubspot />,
   },
];

export const data = [
   {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
   },
   {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
   },
   {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
   },
   {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
   },
   {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
   },
   {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
   },
   {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
   },
];

export async function DataBoxUsers() {
   try {
      const response = await axios.get('https://dummyjson.com/carts');
      return response.data.carts.map((order) =>
         order.products.map((product) => ({
            id: product.id,
            amount: product.price,
         }))
      );
   } catch (error) {
      throw error;
   }
}

export async function DataBoxOrders() {
   try {
      const response = await axios.get('https://dummyjson.com/comments');
      return response.data.comments.map((user) => ({
         id: user.id,
         amount: user.postId,
      }));
   } catch (error) {
      throw error;
   }
}

export const countingProducts = async () => {
   try {
      const response = await axios.get('https://dummyjson.com/products');
      const products = response.data.products;
      const totalProducts = products.length;
      return totalProducts;
   } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
   }
};

export const countingUsers = async () => {
   try {
      const records = await sendRequest('GET', 'api/users');
      return records.length;
   } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
   }
};

export const countingOrders = async () => {
   try {
      const records = await sendRequest('GET', 'api/orders');
      return records.length;
   } catch (error) {
      console.error('Error fetching orders:', error);
      throw error;
   }
};
