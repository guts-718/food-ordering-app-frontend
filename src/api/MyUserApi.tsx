// Import necessary modules and types
import { User } from "@/types"; // Importing User type from "@/types"
import { useAuth0 } from "@auth0/auth0-react"; // Importing useAuth0 hook from auth0-react package
import { useMutation, useQuery } from "react-query"; // Importing useMutation and useQuery hooks from react-query package
import { toast } from "sonner"; // Importing toast function from sonner library

// Retrieve API_BASE_URL from environment variables
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Custom hook to fetch current user information
export const useGetMyUser = () => {
    // Destructure getAccessTokenSilently from useAuth0 hook
    const { getAccessTokenSilently } = useAuth0();

    // Function to fetch current user information
    const getMyUserRequest = async (): Promise<User> => {
        // Get access token using getAccessTokenSilently
        const accessToken = await getAccessTokenSilently();
        // Fetch user data from API
        const response = await fetch(`${API_BASE_URL}/api/my/user`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${accessToken}`, // Include authorization token in headers
                "Content-Type": "application/json", // Specify content type as JSON
            },
        });

        // Check if response is not OK
        if (!response.ok) {
            throw new Error("Failed to fetch user");
        }
        // Return user data in JSON format
        return response.json();
    };

    // Fetch current user data using useQuery hook
    const { data: currentUser, isLoading, error } = useQuery("fetchCurrentUser", getMyUserRequest);

    // If there's an error, display it using toast
    if (error) {
        toast.error(error.toString());
    }

    // Return current user data and loading state
    return { currentUser, isLoading };
};

// Custom hook to create a new user
export const useCreateMyUser = () => {
    // Destructure getAccessTokenSilently from useAuth0 hook
    const { getAccessTokenSilently } = useAuth0();

    // Function to create a new user
    const createMyUserRequest = async (user: CreateUserRequest) => {
        // Get access token using getAccessTokenSilently
        const accessToken = await getAccessTokenSilently();
        // Send request to create user with provided data
        const response = await fetch(`${API_BASE_URL}/api/my/user`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${accessToken}`, // Include authorization token in headers
                "Content-Type": "application/json", // Specify content type as JSON
            },
            body: JSON.stringify(user), // Convert user data to JSON string and include in request body
        });

        // Check if response is not OK
        if (!response.ok) {
            throw new Error("Failed to create user");
        }
    };

    // Use useMutation hook to handle mutation (creating user)
    const { mutateAsync: createUser, isLoading, isError, isSuccess } = useMutation(createMyUserRequest);

    // Return createUser function, loading state, error state, and success state
    return {
        createUser,
        isLoading,
        isError,
        isSuccess,
    };
};

// Custom hook to update user information
export const useUpdateMyUser = () => {
    // Destructure getAccessTokenSilently from useAuth0 hook
    const { getAccessTokenSilently } = useAuth0();

    // Function to update user information
    const updateMyUserRequest = async (formData: updateMyUserRequest) => {
        // Get access token using getAccessTokenSilently
        const accessToken = await getAccessTokenSilently();
        // Send request to update user information with provided data
        const response = await fetch(`${API_BASE_URL}/api/my/user`, {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${accessToken}`, // Include authorization token in headers
                "Content-Type": "application/json", // Specify content type as JSON
            },
            body: JSON.stringify(formData), // Convert form data to JSON string and include in request body
        });

        // Check if response is not OK
        if (!response.ok) {
            throw new Error("Failed to update user");
        }
    };

    // Use useMutation hook to handle mutation (updating user)
    const {
        mutateAsync: updateUser,
        isLoading,
        isSuccess,
        error,
        reset,
    } = useMutation(updateMyUserRequest);

    // If update is successful, display success message using toast
    if (isSuccess) {
        toast.success("User profile updated!");
    }

    // If there's an error, display it using toast and reset error state
    if (error) {
        toast.error(error.toString());
        reset(); // Reset error state
    }

    // Return updateUser function, loading state
    return { updateUser, isLoading };
};
































































































// import { User } from "@/types";
// import { useAuth0 } from "@auth0/auth0-react";
// import { useMutation, useQuery } from "react-query";
// import { toast } from "sonner";

// const API_BASE_URL=import.meta.env.VITE_API_BASE_URL;

// export const useGetMyUser=()=>{
//     const {getAccessTokenSilently}=useAuth0();
//     const getMyUserRequest=async(): Promise<User> =>{
//         const accessToken=await getAccessTokenSilently();
//         const response= await fetch(`${API_BASE_URL}/api/my/user`,{
//             method:"GET",
//             headers:{
//                 Authorization: `Bearer ${accessToken}`,
//                 "Content-Type":"application/json",
//             },
          
//         });


//         if(!response.ok){
//             throw new Error("Failed to fetch user");
//         }
//         return response.json();
//     };
    
//     const {data:currentUser,isLoading, error} = useQuery("fetchCurrentUser",getMyUserRequest);
//     if(error){
//         toast.error(error.toString());
//     }
//     return {currentUser, isLoading};
// }





// type CreateUserRequest={
//     auth0Id: string;
//     email: string;
// };

// export const useCreateMyUser=()=>{

//     const {getAccessTokenSilently}=useAuth0();
//     const createMyUserRequest=async(user: CreateUserRequest)=>{
//         const accessToken=await getAccessTokenSilently();
//         const response= await fetch(`${API_BASE_URL}/api/my/user`,{
//             method:"POST",
//             headers:{
//                 Authorization: `Bearer ${accessToken}`,
//                 "Content-Type":"application/json",
//             },
//             body:JSON.stringify(user),
//         });

//         if(!response.ok){
//             throw new Error("Failed to create user");
//         }
//     };

//     const {mutateAsync: createUser, isLoading, isError, isSuccess}=useMutation(createMyUserRequest)

// return{
//     createUser,
//     isLoading,
//     isError,
//     isSuccess,
// }

// }

// type updateMyUserRequest={
//     name: string;
//     addressLine1: string;
//     city: string;
//     country: string;
// }

// export const useUpdateMyUser=()=>{
//     const { getAccessTokenSilently} = useAuth0();

//     const updateMyUserRequest=async(formData: updateMyUserRequest)=>{
//         const accessToken = await getAccessTokenSilently();
//         const response =await fetch(`${API_BASE_URL}/api/my/user`, {
//             method: "PUT",
//             headers:{
//                 Authorization: `Bearer ${accessToken}`,
//                 "Content-Type" : "application/json",
//             },
//                 body: JSON.stringify(formData),
           
//         });
//         if(!response.ok){
//             throw new Error("Failed to update user");
//         }

//     }

//     const {
//         mutateAsync: updateUser,
//         isLoading,
//         isSuccess,
//         error,
//         reset,
//     }=useMutation(updateMyUserRequest);
//     if(isSuccess){
//         toast.success("User profile updated!");
//     }
//     if(error){
//         toast.error(error.toString());
//         reset();
//     }

//     return {updateUser, isLoading}
// }