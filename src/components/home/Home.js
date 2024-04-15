import Navbar from "../navbar/Navbar";
import Banner from "../banner/Banner";
import Products from "../products/Products";
const Home= ()=>{
    return (
    <>
        <Navbar />
        <Banner />
        <div className="product-card-container">
            <Products />
        </div>
        
    </>);
    
};

export default Home;