import DynamicCarousel from "@/components/DynamicCarousel";
import { getImages } from "../../lib/getImages";
import Fnisher from "@/components/Fnisher";
import ExternalNav from "@/components/ExternalNav";
import Myprojects from "@/components/MyProjects";
interface PageProps {
  params: Promise<{ lang: string; studio: string }>;
}

export default async function SitePage({ params }: PageProps) {
  const { studio } = await params;
  // ✅ get images server-side (works in server component)
  const images = getImages(`${studio}`);

  return (
    <div className="w-full min-h-screen relative overflow-hidden bg-fixed ">
      <Fnisher>
        {" "}
        <ExternalNav />
        <div className="pt-[150px]  pb-20 w-[90%] mx-auto flex flex-col gap-[100px]">
          {" "}
          <DynamicCarousel images={images} />
          <Myprojects
            project={
              studio === "reef-land" ? 0 : studio === "medicalcenter" ? 1 : studio === "ecommerce" ? 2 : 3
            }
          />
        </div>{" "}
      </Fnisher>
    </div>
  );
}
