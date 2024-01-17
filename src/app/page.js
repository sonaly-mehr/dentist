import Image from "next/image";
import styles from "./page.module.css";
import Accordionn from "@/components/accordion/accordion";
import Choose from "@/components/Choose";
import DoctorList from "@/components/doctorList/doctorList";
import Summery from "@/components/summery/summery";
import Review from "@/components/review/review";
import Technology from "@/components/technology/technology";
// import It_Img from "../components/it-img/it-img"
import Hospitals from "@/components/it-img/Hospitals";
import Contact from "@/components/contact/contact";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <main className="">
      <Accordionn />
      <Choose />
      <DoctorList />
      <Summery />
      <Review />
            <Technology />
      {/* <It_Img />   */}
      <Hospitals />
            <Contact />
            <Footer />
    </main>
  );
}
