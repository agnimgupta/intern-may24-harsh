import React, { useState } from 'react';

const AddYourProduct = () => {
    const [productDetails, setProductDetails] = useState({
        productName: 'Chyawanprash',
        brandName: 'Dabar',
        productLink: 'https://www.daburchyawanprash.com/',
        image: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
    };

    const handleImageUpload = (e) => {
        setProductDetails((prevDetails) => ({ ...prevDetails, image: e.target.files[0] }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <div className="max-w-4xl mx-auto  bg-white rounded-xl overflow-hidden border ">
            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-8 bg-[#3a643b19] p-6 text-[--primary]">Add Your Product</h2>
            </div>

            <form onSubmit={handleSubmit} className='flex justify-center items-center flex-col'>

                <div className="wrapper flex justify-center items-start w-full p-6">
                    <div className="left w-[50%]">
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productName">
                                Product Name
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="productName"
                                type="text"
                                name="productName"
                                value={productDetails.productName}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="brandName">
                                Brand Name
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="brandName"
                                type="text"
                                name="brandName"
                                value={productDetails.brandName}
                                onChange={handleChange}
                            />
                        </div>
                    </div>



                    <div className="right  w-[50%] flex justify-center items-center flex-col">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Upload Image
                        </label>
                        <div className="w-[50%] h-40 border-dashed border-2 border-gray-300 rounded-lg flex items-center justify-center mb-3 cursor-pointer">
                            {/* <input type="file" /> */}
                        </div>
                    </div>
                </div>

                <div className="mb-6 flex items-center justify-between w-[50%]">
                    <span className="block w-full h-px bg-gray-300"></span>
                    <span className="block mx-4 text-gray-500">OR</span>
                    <span className="block w-full h-px bg-gray-300"></span>
                </div>

                <div className="mb-6 w-[100%]  px-6">
                    <div className="w-[50%]">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productLink">
                            Product Link
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                            id="productLink"
                            type="text"
                            name="productLink"
                            value={productDetails.productLink}
                            onChange={handleChange}
                        />
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
        </div>
    );
};

export default AddYourProduct;
