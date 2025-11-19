import ProjectPage from "@/components/projectpage/ProjectPage";
import { getGlobalData, getProject } from "@/data/loader";

export default async function Projects() {
  const globalresponse = await getGlobalData();
  const cta = globalresponse?.data?.cta[0];

  const { data } = await getProject();
  return (
    <div>
      {" "}
      <ProjectPage cta={cta} projects={data} />
    </div>
  );
}
