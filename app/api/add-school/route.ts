import { prisma } from "@/lib/db";

export async function POST(request: Request) {
   try {
      const form = await request.json();
      const resp = await prisma.school.create({ data: form });

      return Response.json({ msg: "School Created Successfully", resp, status: 200 });
   } catch (error) {
      console.error(error);
      return Response.json({ msg: "Something wen't wrong", status: 500 });
   }
}
