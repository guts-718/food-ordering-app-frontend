import { useCreateMyRestaurant, useGetMyRestaurant, useUpdateMyRestaurant } from "@/api/MyRestaurantApi";
import ManageRestaurantForm from "@/forms/manage-restaurant-form/ManageRestaurantForm";
//import { Restaurant } from "@/types";

const ManageRestaurantPage=()=>{
    const { createRestaurant, isLoading: isCreateLoading}=useCreateMyRestaurant();
    const { restaurant } = useGetMyRestaurant();
    const {updateRestaurant, isLoading : isUpdateLoading} = useUpdateMyRestaurant();

    const isEditing= !!restaurant;
    return(
    <ManageRestaurantForm  
        restaurant={restaurant} 
        isLoading={isCreateLoading || isUpdateLoading} 
        onSave={isEditing? updateRestaurant:createRestaurant}/>);

};
export default ManageRestaurantPage;


