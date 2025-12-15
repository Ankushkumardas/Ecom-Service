import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

const FilterSidebar = ({ setissidebaropen, issidebaropen }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    // console.log(Object.fromEntries([...searchParams]))
    const navigate = useNavigate();
    const [filters, setFilters] = useState({
        category: "",
        gender: "",
        color: "",
        size: [],
        material: [],
        brand: [],
        minprice: 0,
        maxprice: 100,
    });
    const categories = ['Top Wear', 'Bottom Wear'];
    const colors = ['Red', 'Blue', 'Green', 'Black', 'White', 'Yellow', 'Purple', 'Orange'];
    const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
    const genders = ["Male", "Female"];
    const brand = ['Nike', 'Adidas', 'Puma', 'Reebok', 'Under Armour'];
    const materials = ['Cotton', 'Polyester', 'Wool', 'Silk', 'Denim'];

    // Sync filters from URL on mount or URL change
    useEffect(() => {
        const params = Object.fromEntries([...searchParams]);
        const newFilters = {
            category: params.category || "",
            gender: params.gender || "",
            color: params.color || "",
            size: params.size ? params.size.split(",") : [],
            material: params.material ? params.material.split(",") : [],
            brand: params.brand ? params.brand.split(",") : [],
            minprice: params.minprice ? Number(params.minprice) : 0,
            maxprice: params.maxprice ? Number(params.maxprice) : 100,
        };
        setFilters(newFilters);
    }, [searchParams]);

    // Update URL when filters change
    useEffect(() => {
        // Start with current params so we don't lose unrelated ones (like sortBy)
        const params = new URLSearchParams(searchParams);

        // Update only the filter-related params
        Object.keys(filters).forEach((key) => {
            if (Array.isArray(filters[key]) && filters[key].length > 0) {
                params.set(key, filters[key].join(","));
            } else if (
                filters[key] !== "" &&
                filters[key] !== null &&
                filters[key] !== undefined &&
                !(typeof filters[key] === "number" && isNaN(filters[key]))
            ) {
                params.set(key, filters[key]);
            } else {
                params.delete(key); // Remove empty filters from URL
            }
        });

        setSearchParams(params, { replace: true });
        // Optionally, you can use navigate if you want to push to history
        // navigate(`?${params.toString()}`, { replace: true });
    }, [filters, setSearchParams]);

    // Use this setter everywhere in the UI
    const setFilter = (newFilters) => {
        setFilters(newFilters);
    };
    
    return (
        <aside className={`fixed top-0 left-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ${issidebaropen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="flex flex-col h-full p-6">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-extrabold tracking-tight text-gray-800">Filters</h2>
                    <button
                        onClick={() => setissidebaropen(false)}
                        className="text-gray-400 hover:text-red-500 text-3xl transition-colors"
                        aria-label="Close sidebar"
                    >
                        <span className="sr-only">Close</span>
                        &times;
                    </button>
                </div>
                <div className="flex-1 overflow-y-auto space-y-3 custom-scrollbar">
                    <div>
                        <label className="block font-semibold mb-2 text-gray-700">Category</label>
                        <div className="flex flex-wrap gap-2">
                            {categories.map(cat => (
                                <label
                                    key={cat}
                                    className={`flex items-center gap-1 text-sm px-3 py-1 rounded-full border cursor-pointer transition-colors ${
                                        filters.category === cat
                                            ? 'bg-blue-500 text-white border-blue-500'
                                            : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-50'
                                    }`}
                                >
                                    <input
                                        type="checkbox"
                                        checked={filters.category === cat}
                                        onChange={e => {
                                            setFilter({
                                                ...filters,
                                                category: e.target.checked ? cat : ""
                                            });
                                        }}
                                        className="accent-blue-500 hidden"
                                    />
                                    {cat}
                                </label>
                            ))}
                            <label
                                className={`flex items-center gap-1 text-sm px-3 py-1 rounded-full border cursor-pointer transition-colors ${
                                    filters.category === ""
                                        ? 'bg-blue-500 text-white border-blue-500'
                                        : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-50'
                                }`}
                            >
                                <input
                                    type="checkbox"
                                    checked={filters.category === ""}
                                    onChange={() => setFilter({ ...filters, category: "" })}
                                    className="accent-blue-500 hidden"
                                />
                                All
                            </label>
                        </div>
                    </div>
                    <div>
                        <label className="block font-semibold mb-2 text-gray-700">Gender</label>
                        <div className="flex gap-3">
                            {genders.map(g => (
                                <button
                                    key={g}
                                    type="button"
                                    onClick={() => setFilter({ ...filters, gender: g })}
                                    className={`px-4 py-1 rounded-full border transition-colors ${
                                        filters.gender === g
                                            ? 'bg-blue-500 text-white border-blue-500'
                                            : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-50'
                                    }`}
                                >
                                    {g}
                                </button>
                            ))}
                            <button
                                type="button"
                                onClick={() => setFilter({ ...filters, gender: "" })}
                                className={`px-3 py-1 rounded-full border transition-colors ${
                                    filters.gender === ""
                                        ? 'bg-blue-500 text-white border-blue-500'
                                        : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-50'
                                }`}
                            >
                                All
                            </button>
                        </div>
                    </div>
                    <div>
                        <label className="block font-semibold mb-2 text-gray-700">Color</label>
                        <div className="flex flex-wrap gap-2">
                            <button
                                type="button"
                                onClick={() => setFilter({ ...filters, color: "" })}
                                className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs ${
                                    filters.color === "" ? 'border-blue-500' : 'border-gray-300'
                                }`}
                            >
                                All
                            </button>
                            {colors.map(c => (
                                <button
                                    key={c}
                                    type="button"
                                    onClick={() => setFilter({ ...filters, color: c })}
                                    className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${
                                        filters.color === c ? 'ring-2 ring-blue-400 border-blue-500' : 'border-gray-300'
                                    }`}
                                    style={{ backgroundColor: c.toLowerCase() }}
                                    title={c}
                                >
                                    {filters.color === c && (
                                        <span className="text-white text-xs font-bold">&#10003;</span>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div>
                        <label className="block font-semibold mb-2 text-gray-700">Size</label>
                        <div className="flex flex-wrap gap-2">
                            {sizes.map(size => (
                                <label
                                    key={size}
                                    className={`flex items-center gap-1 text-sm px-3 py-1 rounded-full border cursor-pointer transition-colors ${
                                        filters.size.includes(size)
                                            ? 'bg-blue-500 text-white border-blue-500'
                                            : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-50'
                                    }`}
                                >
                                    <input
                                        type="checkbox"
                                        checked={filters.size.includes(size)}
                                        onChange={e => {
                                            if (e.target.checked) {
                                                setFilter({ ...filters, size: [...filters.size, size] });
                                            } else {
                                                setFilter({ ...filters, size: filters.size.filter(s => s !== size) });
                                            }
                                        }}
                                        className="accent-blue-500 hidden"
                                    />
                                    {size}
                                </label>
                            ))}
                        </div>
                    </div>
                    <div>
                        <label className="block font-semibold mb-2 text-gray-700">Price Range</label>
                        <div className="flex items-center gap-3">
                            <input
                                type="number"
                                min={0}
                                max={filters.maxprice}
                                value={filters.minprice}
                                onChange={e => setFilter({ ...filters, minprice: Number(e.target.value) })}
                                className="w-20 border border-gray-300 rounded-lg p-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            <span className="text-gray-500">-</span>
                            <input
                                type="number"
                                min={filters.minprice}
                                max={100}
                                value={filters.maxprice}
                                onChange={e => setFilter({ ...filters, maxprice: Number(e.target.value) })}
                                className="w-20 border border-gray-300 rounded-lg p-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        <div className="mt-2">
                            <input
                                type="range"
                                min={0}
                                max={100}
                                value={filters.maxprice}
                                onChange={e => setFilter({ ...filters, maxprice: Number(e.target.value) })}
                                className="w-full accent-blue-500"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block font-semibold mb-2 text-gray-700">Brand</label>
                        <div className="flex flex-wrap gap-2">
                            {brand.map(b => (
                                <label
                                    key={b}
                                    className={`flex items-center gap-1 text-sm px-3 py-1 rounded-full border cursor-pointer transition-colors ${
                                        filters.brand.includes(b)
                                            ? 'bg-blue-500 text-white border-blue-500'
                                            : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-50'
                                    }`}
                                >
                                    <input
                                        type="checkbox"
                                        checked={filters.brand.includes(b)}
                                        onChange={e => {
                                            if (e.target.checked) {
                                                setFilter({ ...filters, brand: [...filters.brand, b] });
                                            } else {
                                                setFilter({ ...filters, brand: filters.brand.filter(br => br !== b) });
                                            }
                                        }}
                                        className="accent-blue-500 hidden"
                                    />
                                    {b}
                                </label>
                            ))}
                        </div>
                    </div>
                    <div>
                        <label className="block font-semibold mb-2 text-gray-700">Material</label>
                        <div className="flex flex-wrap gap-2">
                            {materials.map(m => (
                                <label
                                    key={m}
                                    className={`flex items-center gap-1 text-sm px-3 py-1 rounded-full border cursor-pointer transition-colors ${
                                        filters.material.includes(m)
                                            ? 'bg-blue-500 text-white border-blue-500'
                                            : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-50'
                                    }`}
                                >
                                    <input
                                        type="checkbox"
                                        checked={filters.material.includes(m)}
                                        onChange={e => {
                                            if (e.target.checked) {
                                                setFilter({ ...filters, material: [...filters.material, m] });
                                            } else {
                                                setFilter({ ...filters, material: filters.material.filter(mat => mat !== m) });
                                            }
                                        }}
                                        className="accent-blue-500 hidden"
                                    />
                                    {m}
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
                
            </div>
           
        </aside>
    )
}

export default FilterSidebar
