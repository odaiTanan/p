import DynamicCarousel from "@/components/DynamicCarousel";
import { getImages } from "../../lib/getImages";

import { HexagonBackground } from "@/components/ui/shadcn-io/hexagon-background";
import { useEffect } from "react";
import Fnisher from "@/components/Fnisher";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faBackward,
} from "@fortawesome/free-solid-svg-icons";
import ExternalNav from "@/components/ExternalNav";

interface PageProps {
  params: Promise<{ lang: string; studio: string }>;
}

export default async function SitePage({ params }: PageProps) {
  const { studio } = await params;
  // ✅ get images server-side (works in server component)
  const images = getImages(`${studio}`);

  return (
    <div className="w-full min-h-screen relative overflow-hidden ">
      <Fnisher>
        {" "}
        <ExternalNav />
        <div className="pt-[150px] w-[90%] mx-auto">
          {" "}
          <DynamicCarousel images={images} />
        </div>{" "}
      </Fnisher>
    </div>
  );
}
