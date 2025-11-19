import CareersPage from "@/components/careerpage/CareersPage";
import { getGlobalData, getPageBySlug } from "@/data/loader";

export default async function Careers() {
  const response = await getPageBySlug("careers");

  const careersBlock = response.data[0]?.blocks?.find(
    (block: any) => block.__component === "blocks.careers"
  );

  const globalresponse = await getGlobalData();
  const cta = globalresponse?.data?.cta[0];
  return (
    <div>
      <CareersPage careersBlock={careersBlock} cta={cta} />
    </div>
  );
}
