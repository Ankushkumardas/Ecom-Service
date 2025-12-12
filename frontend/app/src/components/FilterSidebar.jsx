import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router'

const FilterSidebar = ({ setissidebaropen, issidebaropen }) => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [filters, setfilter] = useState({
        category: "",
        gender: "",
        color: "",
        size: [],
        material: "",
        brand: "",
        minprice: 0,
        maxprice: 100,
    });
    const colors = ['Red', 'Blue', 'Green', 'Black', 'White', 'Yellow', 'Purple', 'Orange'];
    const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
    const genders = ["Male", "Female"];
    const [pricerange, setpricerange] = useState([0, 100]);
    useEffect(() => {
        const params = Object.fromEntries([...searchParams])
        console.log(params)
        setfilter({
            category: params.category || "",
            gender: params.gender || "",
            color: params.color || "",
            size: params.size ? params.size.split(",") : [],
            material: params.material ? params.material.split(",") : [],
            brand: params.brand ? params.brand.split(",") : [],
            minprice: params.minprice ? Number(params.minprice) : 0,
            maxprice: params.maxprice ? Number(params.maxprice) : 100,
        })
        setpricerange([0,maxprice||100])
    }, [searchParams])
    return (
        <div className='p-2'>
            <button onClick={() => setissidebaropen(false)}>
                close
            </button>
            <div>
                Sidebar filter
            </div>
        </div>
    )
}

export default FilterSidebar
