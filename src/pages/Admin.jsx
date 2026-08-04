import { useState, useEffect } from 'react'
import { FiEdit, FiTrash2 } from 'react-icons/fi'

const API_URL = 'https://6a722b254d741b02b1f7641e.mockapi.io/product'

function Admin() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [submitError, setSubmitError] = useState(null)
  const [editingProduct, setEditingProduct] = useState(null) // holds the whole product object, not just id
  const [deleteTarget, setDeleteTarget] = useState(null) // product pending delete confirmation

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [oldPrice, setOldPrice] = useState('')
  const [category, setCategory] = useState('men')
  const [image, setImage] = useState('')

  // Load products on mount
  useEffect(() => {
    loadProducts()
  }, [])

  async function loadProducts() {
    setLoading(true)
    try {
      const res = await fetch(API_URL)
      if (!res.ok) throw new Error('Failed to load products')
      const data = await res.json()
      setProducts(data)
    } catch (err) {
      console.error('Load error:', err)
    } finally {
      setLoading(false)
    }
  }

  function resetForm() {
    setName('')
    setPrice('')
    setOldPrice('')
    setCategory('men')
    setImage('')
    setEditingProduct(null)
    setSubmitError(null)
  }

  function openAddForm() {
    resetForm()
    setIsFormOpen(true)
  }

  function openEditForm(product) {
    setEditingProduct(product)
    setName(product.name || '')
    setPrice(product.price ?? '')
    setOldPrice(product.oldPrice ?? '')
    setCategory(product.category || 'men')
    setImage(product.image || '')
    setSubmitError(null)
    setIsFormOpen(true)
  }

  function closeForm() {
    setIsFormOpen(false)
    resetForm()
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setSubmitError(null)

    const payload = {
      name,
      price: Number(price),
      oldPrice: Number(oldPrice),
      category,
      image,
      timesSold: editingProduct ? editingProduct.timesSold : 0,
      isNew: editingProduct ? editingProduct.isNew : true,
    }

    try {
      if (editingProduct) {
        // EDIT — update existing product
        const res = await fetch(`${API_URL}/${editingProduct.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        })

        if (!res.ok) {
          throw new Error(`Update failed (status ${res.status})`)
        }

        const updated = await res.json()

        // Update just this one product in local state — no full refetch needed
        setProducts((prev) =>
          prev.map((p) => (p.id === editingProduct.id ? updated : p))
        )
      } else {
        // ADD — create new product
        const res = await fetch(API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        })

        if (!res.ok) {
          throw new Error(`Add failed (status ${res.status})`)
        }

        const created = await res.json()
        setProducts((prev) => [...prev, created])
      }

      closeForm()
    } catch (err) {
      console.error('Save error:', err)
      setSubmitError(err.message)
    }
  }

  function requestDelete(product) {
    setDeleteTarget(product)
  }

  function cancelDelete() {
    setDeleteTarget(null)
  }

  async function confirmDelete() {
    const product = deleteTarget
    if (!product) return

    try {
      const res = await fetch(`${API_URL}/${product.id}`, {
        method: 'DELETE',
      })

      if (!res.ok) {
        throw new Error(`Delete failed (status ${res.status})`)
      }

      setProducts((prev) => prev.filter((p) => p.id !== product.id))
      setDeleteTarget(null)
    } catch (err) {
      console.error('Delete error:', err)
      setSubmitError('Delete failed: ' + err.message)
      setDeleteTarget(null)
    }
  }

  if (loading) return <p className="text-center py-16">Loading products...</p>

  return (
    <div className="p-8 pt-24">
      <h1 className="text-2xl font-bold font-Poppins mb-6">Admin Dashboard</h1>

      <button
        type="button"
        onClick={openAddForm}
        className="mb-8 rounded-full bg-black px-6 py-3 text-white transition hover:bg-slate-800"
      >
        Add Product
      </button>

      {isFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 py-6">
          <div className="w-full max-w-2xl rounded-3xl bg-white p-8 shadow-2xl">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-semibold">
                {editingProduct ? 'Edit Product' : 'Add New Product'}
              </h2>
              <button
                type="button"
                onClick={closeForm}
                className="rounded-full border border-slate-300 px-4 py-2 text-sm text-slate-700 transition hover:bg-slate-100"
              >
                Cancel
              </button>
            </div>

            {submitError && (
              <div className="mb-4 rounded-lg bg-rose-100 px-4 py-3 text-sm text-rose-800">
                {submitError}
              </div>
            )}

            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Product name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border rounded px-3 py-2 col-span-2"
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
                className="border rounded px-3 py-2 col-span-2"
              >
                <option value="men">Men</option>
                <option value="women">Women</option>
                <option value="boy">Boy</option>
                <option value="girl">Girl</option>
                <option value="child">Child</option>
              </select>
              <input
                type="text"
                placeholder="Image path or URL"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className="border rounded px-3 py-2 col-span-2"
              />

              {image && (
                <div className="col-span-2">
                  <p className="text-xs text-gray-500 mb-1">Preview:</p>
                  <img
                    src={image.startsWith('http') ? image : `${import.meta.env.BASE_URL}${image}`}
                    alt="Preview"
                    className="h-24 w-24 object-cover rounded border"
                    onError={(e) => { e.target.style.display = 'none' }}
                  />
                </div>
              )}

              <div className="col-span-2 flex justify-end gap-4">
                <button
                  type="button"
                  onClick={closeForm}
                  className="rounded-md border border-slate-300 px-6 py-2 text-slate-700 transition hover:bg-slate-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-black px-6 py-2 text-white transition hover:bg-slate-800"
                >
                  {editingProduct ? 'Save Changes' : 'Add Product'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {deleteTarget && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 py-6">
          <div className="w-full max-w-sm rounded-3xl bg-white p-6 shadow-2xl text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-rose-100">
              <FiTrash2 className="h-6 w-6 text-rose-500" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">
              Delete "{deleteTarget.name}"?
            </h3>
            <p className="mt-2 text-sm text-slate-500">
              This action can't be undone. The product will be permanently removed.
            </p>
            <div className="mt-6 flex justify-center gap-3">
              <button
                type="button"
                onClick={cancelDelete}
                className="rounded-md border border-slate-300 px-6 py-2 text-slate-700 transition hover:bg-slate-100"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={confirmDelete}
                className="rounded-md bg-rose-500 px-6 py-2 text-white transition hover:bg-rose-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      <table className="w-full border-collapse">
        <thead>
          <tr className="text-left border-b">
            <th className="py-2">ID</th>
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
              <td className="py-2 text-gray-400">{p.id}</td>
              <td className="py-2">{p.name}</td>
              <td className="py-2 capitalize">{p.category}</td>
              <td className="py-2">₹ {p.price}</td>
              <td className="py-2">{p.timesSold}</td>
              <td className="py-2">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => openEditForm(p)}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-700 transition hover:bg-slate-100"
                  >
                    <FiEdit className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => requestDelete(p)}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-rose-500 transition hover:bg-rose-100"
                  >
                    <FiTrash2 className="h-5 w-5" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Admin