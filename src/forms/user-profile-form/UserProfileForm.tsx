import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import LoadingButton from "@/components/LoadingButton";
import { Button } from "@/components/ui/button";
import { User } from "@/types";
import { useEffect } from "react";

const formSchema = z.object({
  email: z.string().optional(),
  name: z.string().min(1, "name is required"),
  addressLine1: z.string().min(1, "Address Line 1 is required"),
  city: z.string().min(1, "City is required"),
  country: z.string().min(1, "Country is required"),
});
//all this means that we are using zod framework to infer or to automatically determine the type based on the form schema
export type UserFormData = z.infer<typeof formSchema>;

type Props = {
  currentUser: User;
  onSave: (userProfileData: UserFormData) => void;
  isLoading: boolean;
  title?: string;
  buttonText?: string;
};
/*
 the reason we are passing onSave as a prop into this component is because it means we can do all the API stuffs at the page level and it also means that depending on the situation or requirement that we can pass different functions that 
 can get called whenever the user submits the form
*/
const UserProfileForm = ({
  onSave,
  isLoading,
  currentUser,
  title = "User Profile",
  buttonText = "Submit",
}: Props) => {
  const form = useForm<UserFormData>({ // it is telling that the typeof our data is going to be UserFormData
    resolver: zodResolver(formSchema), // it resolves /validates based on zod formSchema
    defaultValues: currentUser,
  });
  // if the page or the component updates then we need to make sure that if we receive a new current user that we'are updating the form again so we use useEffect
  useEffect(() => {
    form.reset(currentUser);
  }, [currentUser, form]);
 // Form -- shadcn form & form --> react hook form
  return (
    <Form {...form}> 
      <form
        onSubmit={form.handleSubmit(onSave)}
        className="space-y-4 bg-gray-50 rounded-lg md:p-10"
      >
        <div>
          <h2 className="text-2xl font-bold">{title}</h2>
          <FormDescription>
            View and change your profile information here
          </FormDescription>
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} disabled className="bg-white" />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} className="bg-white" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-col md:flex-row gap-4">
          <FormField
            control={form.control}
            name="addressLine1"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Address Line 1</FormLabel>
                <FormControl>
                  <Input {...field} className="bg-white" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input {...field} className="bg-white" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Country</FormLabel>
                <FormControl>
                  <Input {...field} className="bg-white" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {isLoading ? (
          <LoadingButton />
        ) : (
          <Button type="submit" className="bg-orange-500">
            {buttonText}
          </Button>
        )}
      </form>
    </Form>
  );
};

export default UserProfileForm;

















































// import {z} from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from "@/components/ui/form";
// import { ControllerFieldState, ControllerRenderProps, FieldValues, UseFormStateReturn, useForm } from "react-hook-form";
// import { ReactElement, JSXElementConstructor } from "react";
// import { Input } from "@/components/ui/input";

// const formSchema=z.object({
//     email: z.string().optional(),
//     name: z.string().min(1, "name is required"),
//     addressLine1: z.string().min(1,"AddressLine 1 is required"),
//     city: z.string().min(1,"city is required"),
//     country: z.string().min(1,"country is required")

// });


// type UserFormData = z.infer<typeof formSchema>;

// type Props = {
//   onSave: (userProfileData: UserFormData)=> void;
//   isLoading: boolean;
// }

// const UserProfileForm = ({onSave, isLoading}: Props) => {
//    const form= useForm<UserFormData>({
//     resolver: zodResolver(formSchema),
//    });


//    return(
//     <Form {...form}>
//         <form onSubmit={form.handleSubmit(onSave)} className="space-y-4 bg-gray-50 rounded-lg md:p-10">
//             <div>
//                 <h2 className="text-2xl font-bold">User Profile Form</h2>
//                 <FormDescription>
//                     View and change your profile information here
//                 </FormDescription>
//             </div>
//             <FormField 
//             control={form.control}
//             name="email"
//             render={({field})=>(
//                 <FormItem>
//                     <FormLabel>Email</FormLabel>
//                     <FormControl>
//                         <Input {...field}/>
//                     </FormControl>
//                 </FormItem>
//             )}/>
//         </form>
        
//     </Form>
//    )
  
// };

// export default UserProfileForm;