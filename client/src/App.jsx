import { useEffect } from "react"
import { useSelector } from "react-redux"
import { Route, Routes, useNavigate } from "react-router-dom"
import Header from "./components/Header"
import ScrollToTop from "./components/ScrollToTop"
import AboutItems from "./pages/AboutItems"
import AboutProduct from "./pages/AboutProduct"
import Cart from "./pages/Cart"
import Home from "./pages/Home"
import ListItemsForPets from "./pages/ListItemsForPets"
import ListPets from "./pages/ListPets"
import Login from "./pages/Login"
import Search from "./pages/Search"


function App() {
  const navigate = useNavigate()
  const petsState = useSelector(state => state.getAllPetsReducer)
  const { pets } = petsState
  useEffect(() => {
    if (pets.length == 0) {
      navigate('/')
    }
  }, [])
  return (
    <div className="w-full">
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about/:id" element={<AboutProduct />} />
        <Route path="/listPets/:type" element={<ListPets />} />
        <Route path="/listItems/:forPetsType" element={<ListItemsForPets />} />
        <Route path="/aboutItems/:id" element={<AboutItems />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/search/:name" element={<Search />} />
      </Routes>
    </div>
  )
}

export default App
