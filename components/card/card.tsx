import { School } from "@/types/school";
import classes from "./card.module.css";

export function Card({ school }: { school: School }) {
   console.log(school);

   return (
      <div className={classes.card}>
         <img
            className={classes.img}
            src={school.image || "https://iconicentertainment.in/wp-content/uploads/2013/11/dummy-image-square.jpg"}
         />
         <p className={classes.school_name}>{school.name}</p>
         <p>
            {school.state}, {school.city}
         </p>
         <p>{school.address}</p>
         <p>Contact: {school.contact}</p>
      </div>
   );
}
