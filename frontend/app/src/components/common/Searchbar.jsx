import React, { useState } from 'react'

const Searchbar = () => {
    const [searchterm, setsearchterm] = useState("");
    const [isopen, setisopen] = useState(false);
    const handletoggle=()=>{
        setisopen(!isopen)
    }
    const handlesubmit=(e)=>{
        e.preventDefault();
        console.log(searchterm)
        setisopen(false)
    }
    return (
        <div className={`flex items-center justify-center w-full ${isopen? 'absolute w-full bg-slate-100 z-50 top-0 left-0 h-16 shadow':"w-auto"}`}>
            {isopen ? (
                <form className=' relative flex justify-center w-full ' onSubmit={handlesubmit}>
                    <div className=' w-1/2 flex gap-2'>
                        <input type="text" value={searchterm} placeholder='Search ' className='bg-white rounded-md px-2 py-1 w-3/4 border border-slate-300' onChange={e=>setsearchterm(e.target.value)}/>
                        <button className='bg-white rounded-md px-2 py-1  border border-slate-300' type='submit'>Search</button>
                        <button onClick={()=>setisopen(false)} className='bg-white rounded-md px-2 py-1  border border-slate-300' >Close</button>

                    </div>
                </form>
            ) : (<button className=' cursor-pointer' onClick={handletoggle}>
                Search
            </button>)}
        </div>
    )
}

export default Searchbar
