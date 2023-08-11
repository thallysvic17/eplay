import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Categories from './pages/Categories'
import Products from './pages/Products'

const Rotes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categories" element={<Categories />} />
    <Route path="/products" element={<Products />} />
  </Routes>
)

export default Rotes
