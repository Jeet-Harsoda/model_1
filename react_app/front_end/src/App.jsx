import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import ServiceDetails from './pages/ServiceDetails'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'
import Cart from './pages/Cart'
import Category from './pages/Category'
import Faq from './pages/Faq'
import MusicBrowser from './pages/MusicBrowser'
import OrderHistory from './pages/OrderHistory'
import Payment from './pages/Payment'
import Profile from './pages/Profile'
import Sample from './pages/Sample'
import SvgExample from './pages/SvgExample'
import TableIr from './pages/TableIr'

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/service-details" element={<ServiceDetails />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/category" element={<Category />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/music_browser" element={<MusicBrowser />} />
                <Route path="/order-history" element={<OrderHistory />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/sample" element={<Sample />} />
                <Route path="/svg_example" element={<SvgExample />} />
                <Route path="/table_ir" element={<TableIr />} />
                
                {/* Fallbacks for .html routes just in case any hardcoded links were missed */}
                <Route path="/index.html" element={<Home />} />
                <Route path="/about.html" element={<About />} />
                <Route path="/services.html" element={<Services />} />
                <Route path="/service-details.html" element={<ServiceDetails />} />
                <Route path="/contact.html" element={<Contact />} />
                <Route path="/login.html" element={<Login />} />
                <Route path="/register.html" element={<Register />} />
                <Route path="/cart.html" element={<Cart />} />
                <Route path="/category.html" element={<Category />} />
                <Route path="/faq.html" element={<Faq />} />
                <Route path="/music_browser.html" element={<MusicBrowser />} />
                <Route path="/order-history.html" element={<OrderHistory />} />
                <Route path="/payment.html" element={<Payment />} />
                <Route path="/profile.html" element={<Profile />} />
                <Route path="/sample.html" element={<Sample />} />
                <Route path="/svg_example.html" element={<SvgExample />} />
                <Route path="/table_ir.html" element={<TableIr />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App;
