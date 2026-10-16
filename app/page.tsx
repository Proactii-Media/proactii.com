import HomeSlider from "@/component/HomeSlider";
import HomeServices from "@/component/HomeService";
import HomeCounter from "@/component/HomeCounter";
import HomeWeAre from "@/component/HomeWeare";
import Testimonial from "@/component/Testimonial"
import AgentraServices from "@/component/AgentraServices";
import ClientLogo from "@/component/Clientlogo"

export default function Home() {
  return (
    <>

      <HomeSlider />
      <HomeCounter />
      <HomeServices />
      <HomeWeAre />
      <Testimonial />
      <AgentraServices />
      <ClientLogo />
    </>
  );
}