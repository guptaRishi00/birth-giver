import { getGlobalData, getPageBySlug } from "@/data/loader";
import AboutUs from "@/components/aboutpage/AboutUs";

type Props = {};

export default async function About() {
  const response = await getPageBySlug("about");

  const aboutBlock = response.data[0]?.blocks?.find(
    (block: any) => block.__component === "blocks.about-us"
  );

  console.log("response data in about us page:", response);

  const globalresponse = await getGlobalData();
  const cta = globalresponse?.data?.cta[0];

  const herosectionData = aboutBlock?.herosection;
  const mission = aboutBlock?.mission;
  const vision = aboutBlock?.vision;
  const ourStory = aboutBlock?.ourStory;
  const highlights = aboutBlock?.highlights;
  const features = aboutBlock?.features;
  const members = aboutBlock?.members;

  return (
    <div>
      <AboutUs
        herosectionData={herosectionData}
        mission={mission}
        vision={vision}
        ourStory={ourStory}
        highlights={highlights}
        features={features}
        members={members}
        cta={cta}
      />
    </div>
  );
}
