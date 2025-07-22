import { HoverCard, HoverCardContent, HoverCardTrigger } from "@radix-ui/react-hover-card";
import { Link } from "react-router-dom";


function Header() {
    return (  
        <>
        <div className="flex justify-between px-11 py-8 fixed top-0 left-0 right-0 bg-white z-50 shadow-md">
            <img className="w-28 h-8" src="https://html.themexplosion.com/goru/assets/images/logo.png" alt="" />
      <div className="sm:flex gap-14 font-semibold hidden">
        <HoverCard className:gap-0>
          <Link to="/"><HoverCardTrigger>HOME</HoverCardTrigger></Link>
         
          <Link to="/about"><HoverCardTrigger>ABOUT</HoverCardTrigger></Link>
     
          <Link to="/shop"><HoverCardTrigger>SHOP</HoverCardTrigger></Link>
         <Link to="/contact"> <HoverCardTrigger>CONTACT</HoverCardTrigger> </Link>
          
        </HoverCard>

      </div>
            
          <i className="fa-solid fa-cart-shopping text-3xl "><span className="absolute top-2  right-4 text-xl">(0)</span></i>
        </div>
        
        </>
    );
}

export default Header;