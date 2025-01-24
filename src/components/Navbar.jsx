import MenuData from "./MenuData";
import { MenuItems } from "./MenuItems";


const Navbar=()=>{

    return (
             <div  className="text-bold  flex justify-between items-center px-4 bg-black text-white text-xl py-3">
             <h1>DropDown</h1>


             {
               MenuItems.map((item,i)=>(
                     <div key={i} className="flex gap-4">

                    <MenuData item={item} key={i} />


                        </div>
                 

               ))
             } 
             



             </div>

    )
}

export default Navbar;