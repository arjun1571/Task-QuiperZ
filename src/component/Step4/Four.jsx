import React, { useEffect, useState } from 'react';
import User from '../User';

const Four = () => {
    
    const [users,setUsers]=useState()
    useEffect(()=>{
        fetch("data.json")
        .then(res=>res.json())
        .then(data=> {
            // console.log(data);
            setUsers(data)
        })
    },[])
    return (
        <div className="w-full p-3 bg-[#FDFDFD] rounded lg:h-[100vh]">
            <div className='flex justify-start font-semibold p-4'>
                <p className='text-[#D9D9D9] px-5'>Step 1</p>
                <p className='text-[#D9D9D9] px-5'>Step 2</p>
                <p className='text-[#D9D9D9] px-5'>Step 3</p>
                <p className='font-bold'>Step 4</p>
            </div>
            <hr />
            <div className='md:p-5 p-2'>
                {
                    users?.map((user)=> <User key={user.id} user={user}></User>)
                }
            </div>
            <div className="mt-2 flex">
          <button
            // onClick={previus}
            className="w-full mr-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Previous
          </button>
          <button
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "

            type="submit"

          >
            Next
          </button>
        </div>
        </div>
    );
};

export default Four;