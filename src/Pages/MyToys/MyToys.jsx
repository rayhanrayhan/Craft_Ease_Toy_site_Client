import React, { useContext, useEffect, useState } from 'react';
import MyToysRow from './MyToysRow';
import { AuthContext } from '../../Provider/AuthProvider';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [MyToys, setMyToys] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/myToys?email=${user?.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [user?.email])

    return (
        <section className="p-4 md:p-28">
            <h1 className='text-4xl text-center my-10'>My Toys</h1>
            <div>
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>SUB-CATEGORY</th>
                            <th>SELLER</th>
                            <th>PRICE</th>
                            <th className='text-center'>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {MyToys.map((toy) => (
                            <MyToysRow key={toy._id} toy={toy} />
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default MyToys;