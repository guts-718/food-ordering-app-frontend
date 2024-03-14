import { CircleUserRound } from 'lucide-react';
import { DropdownMenu, DropdownMenuTrigger } from "./ui/dropdown-menu";
import {useAuth0} from "@auth0/auth0-react"
import { DropdownMenuContent, DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { Link } from "react-router-dom";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

const UsernameMenu = () => {
    const {user, logout} = useAuth0();
  return(
    <DropdownMenu>
        <DropdownMenuTrigger className="flex items-items-center bg-white px-3 font-bold hover:text-orange-500 gap-2">
            <CircleUserRound className="text-orange-500"/>
            {user?.email}
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-white rounded-lg p-3 space-b-2">
            <DropdownMenuItem>
           <Link to="/user-profile"
           className="font-bold hover:text-orange-500">User Profile</Link> 
           </DropdownMenuItem>
           <DropdownMenuItem>
           <Link to="/manage-restaurant"
           className="font-bold hover:text-orange-500">Manage Restaurant</Link> 
           </DropdownMenuItem>
           <DropdownMenuItem>
            <Button onClick={()=>logout()} className="flex flex-1 font-bold bg-orange-500 mt-2">Log Out</Button>
           </DropdownMenuItem>
           <Separator/>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UsernameMenu;