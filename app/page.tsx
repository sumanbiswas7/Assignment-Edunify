import { prisma } from "@/lib/db";
import styles from "./page.module.css";
import { GridContainer } from "@/components/layout/grid-container";
import { Card } from "@/components/card/card";

export default async function Home() {
   const schools = await prisma.school.findMany();

   return (
      <main className={styles.main}>
         <h1>Schoolz</h1>
         <GridContainer>
            {schools.map((s) => (
               <Card school={s} />
            ))}
         </GridContainer>
      </main>
   );
}
