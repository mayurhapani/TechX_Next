import styles from "./styles/home.module.css";
import MainBenner from "./componants/MainBenner";
import AboutUS from "./componants/about/AboutUs";
import Services from "./componants/services/Services";
import LeadingWay from "./componants/LeadingWay";
import Gallery from "./componants/gallery/Gallery";
import Blog from "./componants/blog/Blog";
import Experts from "./componants/experts/Experts";
import Reviews from "./componants/reviews/Reviews";
import Footer from "./componants/Footer";

export default function Home() {
  return (
    <main className={styles.Main}>
      <MainBenner />
      <AboutUS />
      <Services />
      <LeadingWay />
      <Gallery />
      <Blog />
      <Experts />
      <Reviews />
      <Footer />
    </main>
  );
}
