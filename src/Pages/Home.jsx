import Hero from "../Components/Hero";
import Header from "../Components/Header";
import Categories from "../Components/Categories";
import PopularProducts from "../Components/PopularProducts";
import Footer from "../Components/Footer";
import ProductList from "../Components/ProductList";

function Home() {
    return ( 
        <>
       <div className="mt-20">
               <Header/>
           <Hero/>
            <Categories/>
              {/* <div className="p-9"><ProductList/></div> */}
              <PopularProducts/>

            <Footer/>
       </div>
      



</>
    )
}

export default Home;