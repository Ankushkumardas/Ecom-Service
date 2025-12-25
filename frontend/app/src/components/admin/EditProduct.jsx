import React, { useState } from 'react'

const EditProduct = () => {
    const [productdata, setproductdata] = useState({
        name: "", description: "", price: 0, countInStock: 0, sku: "", category: "", brand: "", sizes: [], colors: [], collections: "", material: "", gender: "", images: [{
            url: "https://img.freepik.com/premium-photo/man-is-taking-photo-with-camera_337384-178362.jpg?semt=ais_hybrid&w=740&q=80"
        }, { url: "https://img.freepik.com/premium-photo/man-is-taking-photo-with-camera_337384-178362.jpg?semt=ais_hybrid&w=740&q=80" }],image:[{
            url:"https://img.freepik.com/premium-photo/man-is-taking-photo-with-camera_337384-178362.jpg?semt=ais_hybrid&w=740&q=80"
        }]
    });

    const handlesubmit = (e) => {
        e.preventDefault();
        console.log(productdata)
        setproductdata({
            name: "", description: "", price: 0, countInStock: 0, sku: "", category: "", brand: "", sizes: [], colors: [], collections: "", material: "", gender: "", images: [{
                url: 'asfsac'
            }, { url: "asda" }]
        });
    }
    return (
        <div className="container mx-auto">
            <div className="max-w-3xl mx-auto p-2">
                <h1 className="text-lg font-semibold mb-4 text-gray-700">Edit Product</h1>
                <form onSubmit={handlesubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block mb-0.5 text-xs text-gray-600">Name</label>
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full border border-gray-200 rounded px-2 py-1 text-sm"
                                onChange={(e) => setproductdata({ ...productdata, name: e.target.value })}
                                value={productdata.name}
                            />
                        </div>
                        <div>
                            <label className="block mb-0.5 text-xs text-gray-600">Description</label>
                            <input
                                type="text"
                                placeholder="Description"
                                className="w-full border border-gray-200 rounded px-2 py-1 text-sm"
                                onChange={(e) => setproductdata({ ...productdata, description: e.target.value })}
                                value={productdata.description}
                            />
                        </div>
                        <div>
                            <label className="block mb-0.5 text-xs text-gray-600">Price</label>
                            <input
                                type="number"
                                placeholder="Price"
                                className="w-full border border-gray-200 rounded px-2 py-1 text-sm"
                                onChange={(e) => setproductdata({ ...productdata, price: e.target.value })}
                                value={productdata.price}
                            />
                        </div>
                        <div>
                            <label className="block mb-0.5 text-xs text-gray-600">Count In Stock</label>
                            <input
                                type="number"
                                placeholder="Count In Stock"
                                className="w-full border border-gray-200 rounded px-2 py-1 text-sm"
                                onChange={(e) => setproductdata({ ...productdata, countInStock: e.target.value })}
                                value={productdata.countInStock}
                            />
                        </div>
                        <div>
                            <label className="block mb-0.5 text-xs text-gray-600">SKU</label>
                            <input
                                type="text"
                                placeholder="SKU"
                                className="w-full border border-gray-200 rounded px-2 py-1 text-sm"
                                onChange={(e) => setproductdata({ ...productdata, sku: e.target.value })}
                                value={productdata.sku}
                            />
                        </div>
                        <div>
                            <label className="block mb-0.5 text-xs text-gray-600">Category</label>
                            <input
                                type="text"
                                placeholder="Category"
                                className="w-full border border-gray-200 rounded px-2 py-1 text-sm"
                                onChange={(e) => setproductdata({ ...productdata, category: e.target.value })}
                                value={productdata.category}
                            />
                        </div>
                        <div>
                            <label className="block mb-0.5 text-xs text-gray-600">Brand</label>
                            <input
                                type="text"
                                placeholder="Brand"
                                className="w-full border border-gray-200 rounded px-2 py-1 text-sm"
                                onChange={(e) => setproductdata({ ...productdata, brand: e.target.value })}
                                value={productdata.brand}
                            />
                        </div>
                        <div>
                            <label className="block mb-0.5 text-xs text-gray-600">Collections</label>
                            <input
                                type="text"
                                placeholder="Collections"
                                className="w-full border border-gray-200 rounded px-2 py-1 text-sm"
                                onChange={(e) => setproductdata({ ...productdata, collections: e.target.value })}
                                value={productdata.collections}
                            />
                        </div>
                        <div>
                            <label className="block mb-0.5 text-xs text-gray-600">Material</label>
                            <input
                                type="text"
                                placeholder="Material"
                                className="w-full border border-gray-200 rounded px-2 py-1 text-sm"
                                onChange={(e) => setproductdata({ ...productdata, material: e.target.value })}
                                value={productdata.material}
                            />
                        </div>
                        <div>
                            <label className="block mb-0.5 text-xs text-gray-600">Gender</label>
                            <input
                                type="text"
                                placeholder="Gender"
                                className="w-full border border-gray-200 rounded px-2 py-1 text-sm"
                                onChange={(e) => setproductdata({ ...productdata, gender: e.target.value })}
                                value={productdata.gender}
                            />
                        </div>
                        <div>
                            <label className="block mb-0.5 text-xs text-gray-600">Sizes</label>
                            <input
                                type="text"
                                placeholder="Sizes (comma separated)"
                                className="w-full border border-gray-200 rounded px-2 py-1 text-sm"
                                onChange={(e) =>
                                    setproductdata({
                                        ...productdata,
                                        sizes: e.target.value.split(",").map((size) => size.trim()),
                                    })
                                }
                                value={productdata.sizes.join(",") || ""}
                            />
                        </div>
                        <div>
                            <label className="block mb-0.5 text-xs text-gray-600">Colors</label>
                            <input
                                type="text"
                                placeholder="Colors (comma separated)"
                                className="w-full border border-gray-200 rounded px-2 py-1 text-sm"
                                onChange={(e) =>
                                    setproductdata({
                                        ...productdata,
                                        colors: e.target.value.split(",").map((color) => color.trim()),
                                    })
                                }
                                value={productdata.colors.join(",") || ""}
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block mb-0.5 text-xs text-gray-600">Images</label>
                            <input
                                type="file"
                                multiple
                                className="w-full text-xs"
                                onChange={(e) => {
                                    const files = Array.from(e.target.files);
                                    setproductdata({
                                        ...productdata,
                                        images: files.map((file) => ({
                                            url: URL.createObjectURL(file),
                                            file: file,
                                        })),
                                    });
                                }}
                            />
                            <div className="flex gap-1 mt-1 flex-wrap">
                                {productdata.images &&
                                    productdata.images.map((img, idx) => (
                                        <img
                                            key={idx}
                                            src={img.url}
                                            alt={`preview-${idx}`}
                                            className="w-10 h-10 object-cover rounded "
                                        />
                                    ))}
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 flex justify-end">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-1.5 rounded text-sm hover:bg-blue-600 transition"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditProduct
