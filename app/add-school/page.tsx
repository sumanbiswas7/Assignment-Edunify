"use client";

import React, { useState } from "react";
import classes from "./add-school.module.css";

import { School } from "@/types/school";
import { isValidSchool } from "@/utils/is-valid-school";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function AddSchool() {
   const route = useRouter();
   const [loading, setLoading] = useState(false);
   const [form, setForm] = useState<School>({
      name: null,
      address: null,
      city: null,
      state: null,
      contact: null,
      image: null,
      email_id: null,
   });

   async function addNewSchool(e: React.MouseEvent<HTMLButtonElement>) {
      try {
         e.preventDefault();

         const err = isValidSchool(form as any);
         if (err) return alert(err);

         setLoading(true);
         const res = await axios.post("/api/add-school", form);
         setLoading(false);
         if (res.data?.status === 200) route.replace("/");
         else alert("Something wen't wrong");
      } catch (error) {
         setLoading(false);
         console.error(error);
         alert("Something wen't wrong");
      }
   }

   function changeForm(key: keyof typeof form, val: string) {
      setForm({ ...form, [key]: val });
   }

   return (
      <div className={classes.container}>
         <button className={classes.back_btn} onClick={() => route.back()}>
            &lt;
         </button>
         {loading ? (
            <p>Submitting...</p>
         ) : (
            <form className={classes.form}>
               <h1 className={classes.title}>Add New School</h1>
               <input className={classes.inp} onChange={(e) => changeForm("name", e.target.value)} placeholder="Name" />
               <input
                  className={classes.inp}
                  onChange={(e) => changeForm("address", e.target.value)}
                  placeholder="Address"
               />
               <input className={classes.inp} onChange={(e) => changeForm("city", e.target.value)} placeholder="City" />
               <input
                  className={classes.inp}
                  onChange={(e) => changeForm("state", e.target.value)}
                  placeholder="State"
               />
               <input
                  className={classes.inp}
                  onChange={(e) => changeForm("contact", e.target.value)}
                  placeholder="Contact"
               />
               <input
                  className={classes.inp}
                  onChange={(e) => changeForm("image", e.target.value)}
                  placeholder="Image Url"
               />
               <input
                  className={classes.inp}
                  onChange={(e) => changeForm("email_id", e.target.value)}
                  placeholder="Email ID"
               />
               <button type="submit" className={classes.btn} onClick={addNewSchool}>
                  Save
               </button>
            </form>
         )}
      </div>
   );
}
