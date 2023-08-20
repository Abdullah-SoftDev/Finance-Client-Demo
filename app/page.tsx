import { Blog } from "@/components/Blog";
import { Footer } from "@/components/Footer";
import HomePost from "@/components/HomePost";
import MyTeam from "@/components/MyTeam";
import Navbar from "@/components/Navbar";
import OurMission from "@/components/OurMission";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomePost />
      <Blog />
      <OurMission />
      <MyTeam />
      <Footer />
    </>
  )
}
