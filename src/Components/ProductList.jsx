function ProductList({product}) {
    return ( 
        <>
      
  
    <div className="bg-white  rounded-lg border-2 border-gray-400 w-60 ml-52 text-center p-8 shadow-lg m-5 ">
        <img  src={product.image}
      alt="VR Headset" className="w-full h-48 object-contain  "/>
          <h1 className="mt-4 font-bold ">{product.title}</h1>
          <h1 className="text-black font-semibold text-sm">{product.price}</h1>
          <button className="w-full h-10 bg-blue-500 text-2xl text-white rounded-md shadow-md">Add Cart</button>
        </div>

        
        
        </>

     );
}

export default ProductList;