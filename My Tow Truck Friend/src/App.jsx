import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from "./components/Navbar";
import FooterBar from "./components/Footer"
import Signup from "./components/Signup"
import Login from "./components/login";
import Home from "./components/Home"
import Abouts from "./components/Abouts";
import Gallery from "./components/Gallery";
import Gallery2 from "./components/Gallery2";

// const App = () => {
//     return (
//         <>
//             <NavBar />
//             <div className="max-w-7xl mx-auto pt-20 px-6"></div>
//             <Signup />
//             <Login />
//             <Home />
//             <Abouts />
//             <Gallery />
//             <Gallery2 />
//             <FooterBar />
//         </>
//     )
// }

// function App() {
//     return (
//         <Router>
//             <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/Abouts" element={<Abouts />} />
//                 <Route path="/Gallery" element={<Gallery />} />
//                 <Route path="/Gallery2" element={<Gallery2 />} />
//                 {/* <Route path="/signup" element={<Signup />} />
//               <Route path="/Index" element={<Index />} />
//               <Route path="/contact" element={<ContactUs />} />
//               <Route path="/store" element={<Store />} />
//               <Route path="/Brands" element={<Brands />} />
//               <Route path="/ItemList" element={<ItemList />} />
//               <Route path="/ItemView" element={<ItemView />} />
//               <Route path="/search" element={<SearchButton />} /> */}


//             </Routes>
//         </Router>
//     );
// }


const App = () => {
    return (
        <Router>
            <NavBar />
            <div className="w-full pt-20">
                <Routes> 
                    <Route path="/" element={<Home />} /> 
                    <Route path="/about" element={<Abouts />} /> 
                    <Route path="/gallery" element={<Gallery />} /> 
                    <Route path="/gallery2" element={<Gallery2 />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} /> 
                </Routes>
            </div>
            <FooterBar />
        </Router>
    );
};

export default App 