import ProductList from "../Components/ProductList";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Search } from "lucide-react";

const Shop = () => {
  const [data,setData ] = useState([])
  const [serch, setSerch]= useState("")
  const [selectgatogry, setSelectgatogry]= useState("")
  // console.log(selectgatogry)

  const handleRead = ()=>{
    // Reading Api
    axios.get("https://fakestoreapi.com/products").then((res)=>{
      setData(res.data)
    }).catch(error=>console.log(error))
  }
  useEffect(()=>{
    handleRead()
  },[])
  // filterData
  const filterData = data.filter((xog)=>{
    const searchData = xog.title.toLowerCase().includes(serch.toLowerCase())
    // matchedCategory
    const matchedCategory = selectgatogry ? xog.category === selectgatogry:true
    return searchData && matchedCategory
  })
  return (
<div>
    <Header/>
    <div className="flex  items-center p-8 mt-28">
      <input value={serch} onChange={(e)=> setSerch(e.target.value)}  className="w-52 h-10 outline-none border-2 border-gray-400 pl-4 rounded-lg" type="search" placeholder="Search product" />
      <div className="flex gap-4 text-black text-xl ml-3">
        <input type="radio"name="category" value="" onChange={()=>setSelectgatogry("")} />All
        <input type="radio"name="category" value="electronics" onChange={()=> setSelectgatogry("electronics")} />Electronics
       < input type="radio"name="category" value="jewelery" onChange={()=> setSelectgatogry("jewelery")} />jewelery
       <input type="radio" name="category" value="men's clothing" onChange={()=> setSelectgatogry("men's clothing")}/>men's clothing
       <input type="radio" name="category" value="women's clothing" onChange={()=> setSelectgatogry("women's clothing")}/>  women's clothing
      </div>
    </div>
    {/* printing api data using props  */}
    <div className="grid grid-cols-3 -ml-52 px-14 ">
           {
        filterData.map((item)=>{
          return <ProductList product={item}/>

        
        })
      }

    </div>
  
    


  

   
    {/* <Footer/> */}
</div>
  );
};

export default Shop;
