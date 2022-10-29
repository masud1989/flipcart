import { products } from "./constants/productData";
import Product from './src/models/ProductsModel';


const defaultData = () => {
       try {
            Product.insertMany(products);
            console.log('Data Inserted Successfully');
       } 
       
       catch (error) {
            console.log('Error Occured from DefaulData', error.message);
       }

};

export default defaultData;