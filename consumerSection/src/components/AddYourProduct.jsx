import React, { useState } from 'react';
import Layout from './Layout';
import HeadingDiv from './HeadingDiv';
import PhotoUploader from './PhotoUploader';
import SimpleDropDownComponent from './SimpleDropDown';
import InputBox from './InputBox';

const AddYourProduct = () => {
    const [productDetails, setProductDetails] = useState({
        productName: 'Chyawanprash',
        brandName: 'Dabar',
        productLink: 'https://www.daburchyawanprash.com/',
        image: null,
    });

    const handleChange = (e) => {
        // const { name, value } = e.target;
        // setProductDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
    };

    const handleImageUpload = (e) => {
        // setProductDetails((prevDetails) => ({ ...prevDetails, image: e.target.files[0] }));
    };

    const handleSubmit = (e) => {
        // e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <Layout>
            <HeadingDiv title="Add Your Products">

                <form onSubmit={handleSubmit} className='flex justify-center items-center flex-col'>

                    <div className="wrapper flex justify-between items-center w-full p-6 flex-col md:flex-row ">

                        <div className="left w-[100%] md:w-[50%]">
                            <div className="mb-6">
                                <SimpleDropDownComponent label="Product Name" list={["Chyawanprash"]} placeholder="Chyawanprash"/>
                            </div>

                            <div className="mb-6">
                                <SimpleDropDownComponent label="Brand Name" list={["Dabur"]}  placeholder="Dabur"/>
                                
                            </div>
                        </div>

                        <div className="w-[100%] md:w-[50%]  flex justify-center items-center">
                            <PhotoUploader />

                        </div>


                    </div>

                    <div className="mb-6 flex items-center justify-between w-[50%]">
                        <span className="block w-full h-px bg-gray-300"></span>
                        <span className="block mx-4 text-gray-500">OR</span>
                        <span className="block w-full h-px bg-gray-300"></span>
                    </div>

                    <div className="mb-6 w-[100%]  px-6">
                        <div className="w-[50%]">
                        <InputBox label="product Link" placeholder="https://www.daburchyawanprash.com/"/>
                        </div>
                    </div>

                    <div className="mt-6 my-6">
                        <button
                            className="bg-[--primary] text-white font-bold py-3 px-[5rem] rounded focus:outline-none focus:shadow-outline w-full"
                            type="submit"
                        >
                            Add Product
                        </button>
                    </div>
                </form>
            </HeadingDiv>


        </Layout>
    );
};

export default AddYourProduct;
