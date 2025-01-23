// components
import { LandingContainer } from "@/components/containers/LandingContainer/LandingContainer";
import { CMSLayout } from "@/components/layout/CMSLayout/CMSLayout";
import { ScrollToTopButton } from "../components/common/ScrollToTopButton/ScrollToTopButton";

export default function LandingPage() {
  return (
    <CMSLayout>
      <LandingContainer />
      <ScrollToTopButton />
    </CMSLayout>
  );
}
