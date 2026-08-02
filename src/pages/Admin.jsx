import { useState, useEffect } from 'react'

function Admin() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  // form state
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [oldPrice, setOldPrice] = useState('')
  const [category, setCategory] = useState('men')
  const [image, setImage] = useState('')

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/Product.json`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  function handleAddProduct(e) {
    e.preventDefault()

    const newProduct = {
      id: Date.now(),           // temporary unique id
      name,
      price: Number(price),
      oldPrice: Number(oldPrice),
      category,
      image,
      timesSold: 0,
      isNew: true,
    }

    setProducts((prev) => [...prev, newProduct])

    // reset form
    setName('')
    setPrice('')
    setOldPrice('')
    setCategory('men')
    setImage('')
  }

  if (loading) return <p className="text-center py-16">Loading products...</p>

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold font-Poppins mb-6">Admin Dashboard</h1>

      {/* Add Product Form */}
      <form
        onSubmit={handleAddProduct}
        className="bg-gray-100 rounded-xl p-6 mb-10 grid grid-cols-2 gap-4 max-w-2xl"
      >
        <input
          type="text"
          placeholder="Product name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border rounded px-3 py-2"
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border rounded px-3 py-2"
          required
        />
        <input
          type="number"
          placeholder="Old price"
          value={oldPrice}
          onChange={(e) => setOldPrice(e.target.value)}
          className="border rounded px-3 py-2"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border rounded px-3 py-2"
        >
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="boy">Boy</option>
          <option value="girl">Girl</option>
          <option value="child">Child</option>
        </select>
        <input
          type="text"
          placeholder="Image path (e.g. images/products/shoe3.jpg)"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="border rounded px-3 py-2 col-span-2"
        />
        <button
          type="submit"
          className="col-span-2 bg-black text-white py-2 rounded-md"
        >
          Add Product
        </button>
      </form>

      {/* Product List */}
      <table className="w-full border-collapse">
        <thead>
          <tr className="text-left border-b">
            <th className="py-2">Name</th>
            <th className="py-2">Category</th>
            <th className="py-2">Price</th>
            <th className="py-2">Sold</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id} className="border-b">
              <td className="py-2">{p.name}</td>
              <td className="py-2 capitalize">{p.category}</td>
              <td className="py-2">₹ {p.price}</td>
              <td className="py-2">{p.timesSold}</td>
              <td className="py-2 flex gap-2">
                <button className="text-blue-500">Edit</button>
                <button className="text-red-500">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Admin