import { School } from "@/types/school";

export function isValidSchool(form: School): string | null {
   // Basic validation rules
   if (form.name === null || form.name.trim() === "") {
      return "Name is required.";
   }

   if (form.address === null || form.address.trim() === "") {
      return "Address is required.";
   }

   if (form.city === null || form.city.trim() === "") {
      return "City is required.";
   }

   if (form.state === null || form.state.trim() === "") {
      return "State is required.";
   }

   if (form.contact === null || !/^\d{4,15}$/.test(form.contact)) {
      return "Invalid contact number. It must be between 4 and 15 digits.";
   }

   if (form.email_id === null || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email_id)) {
      return "Invalid email address.";
   }

   // Add more validation rules as needed

   // If all validation rules pass, return null (indicating no errors)
   return null;
}
