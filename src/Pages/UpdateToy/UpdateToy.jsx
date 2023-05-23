import React from 'react';
import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdateToy = () => {
    const toyData = useLoaderData();

    const handleOnSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const seller = form.seller.value;
        const subCategory = form.category.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const rating = form.rating.value;
        const image = form.photo.value;
        const description = form.description.value;

        const updateToy = {
            name, seller, email, subCategory, price, quantity, rating, image, description
        }

        fetch(`https://craft-ease-main-server.vercel.app/allToys/${toyData._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateToy)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast("Toy Update Success")
                }
            })
    }
    return (
        <section className="w-9/12 mx-auto mt-40">
            <Helmet>
                <title>Craft Ease - Update Toy page</title>
            </Helmet>
            <h1 className='text-4xl text-center'>Update Toy</h1>

            <form onSubmit={handleOnSubmit} className='flex flex-col gap-3 w-full md:w-[500px] mx-auto my-10 px-4 py-8 shadow-lg rounded-lg'>
                <label htmlFor="name">Name :</label>
                <input
                    id='name'
                    type="text"
                    placeholder='Enter toy name :'
                    name='name'
                    defaultValue={toyData.name}
                    className='border w-full py-2 px-3 rounded-lg'
                />
                <div>
                    <label htmlFor="category">Sub Category :</label>
                    <input
                        id='category'
                        type="text"
                        placeholder='Enter Sub Category :'
                        name='category'
                        defaultValue={toyData.subCategory}
                        className='border w-full py-2 px-3 rounded-lg'
                    />
                </div>
                <div className='flex flex-col md:flex-row items-center gap-3'>
                    <div>
                        <label htmlFor="seller">Seller :</label>
                        <input
                            id='seller'
                            type="text"
                            placeholder='Enter toy name'
                            defaultValue={toyData.seller}
                            name='seller'
                            className='border w-full py-2 px-3 rounded-lg'
                        />
                    </div>
                    <div>
                        <label htmlFor="category">Email :</label>
                        <input
                            id='email'
                            type="email"
                            placeholder='Enter toy name'
                            defaultValue={toyData.email}
                            name='email'
                            className='border w-full py-2 px-3 rounded-lg'
                        />
                    </div>
                </div>
                <div className='flex flex-col md:flex-row items-center gap-3'>
                    <div>
                        <label htmlFor="price">Price :</label>
                        <input
                            id='price'
                            type="text"
                            placeholder='Enter toy Price :'
                            name='price'
                            defaultValue={toyData.price}
                            className='border w-full py-2 px-3 rounded-lg'
                        />
                    </div>
                    <div>
                        <label htmlFor="quantity">Quantity :</label>
                        <input
                            id='quantity'
                            type="text"
                            placeholder='Enter toy Quantity :'
                            name='quantity'
                            defaultValue={toyData.quantity}
                            className='border w-full py-2 px-3 rounded-lg'
                        />
                    </div>
                    <div>
                        <label htmlFor="rating">Rating :</label>
                        <input
                            id='rating'
                            type="text"
                            placeholder='Enter toy Rating :'
                            name='rating'
                            defaultValue={toyData.rating}
                            className='border w-full py-2 px-3 rounded-lg'
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="image">Image URL :</label>
                    <input
                        id='image'
                        type="text"
                        placeholder='Enter toy Photo :'
                        name='photo'
                        defaultValue={toyData.image}
                        className='border w-full py-2 px-3 rounded-lg'
                    />
                </div>
                <div>
                    <label htmlFor="description">Description :</label>
                    <textarea
                        id='description'
                        rows={4}
                        type="text"
                        placeholder='Enter toy Description :'
                        name='description'
                        defaultValue={toyData.description}
                        className='border w-full py-2 px-3 rounded-lg'
                    />
                </div>
                <button type="submit">Update Toy</button>
            </form>
        </section>
    );
};

export default UpdateToy;