import JobFilterSideBar from "@/components/JobFilterSideBar";
import JobListItem from "@/components/JobListItem";
import JobResults from "@/components/JobResults";
import prisma from "@/lib/prisma";
import { JobFilterValues } from "@/lib/validation";

interface PageProps {
  searchParams:{
    q?:string,
    type?: string,
    location?:string,
    remote? : string,
  }
}
export default async function Home({
  searchParams:{q,type, location, remote}
}: PageProps) {
  const filterValues:JobFilterValues ={
    q,
    type,
    location,
    remote: remote ==="true"
  }

  return (
    <main className="m-auto my-10 max-w-5xl space-y-10 px-3">
      <div className="space-y-5 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          Developer jobs
        </h1>
        <p className="text-muted-foreground">Find your dream job.</p>
      </div>
      <section className="flex flex-col gap-4 md:flex-row">
        <JobFilterSideBar defaultValues={filterValues} />
        <JobResults filterValues={filterValues}/>
      </section>
    </main>
  )
}
