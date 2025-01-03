import Intro from "./components/Intro/Intro";
import Statistics from "./components/Statistics/Statistics";
import WhoWeAre from "components/WhoWeAre/WhoWeAre";
import OurProducts from "./components/OurProducts/OurProducts";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Innovation from "./components/Innovation/Innovation";
import OurProjects from "./components/OurProjects/OurProjects";
import NewsRoom from "./components/NewsRoom/NewsRoom";
import Blogs from "./components/Blogs/Blogs";

// Styles
import styles from "./Home.module.scss";

const Home = () => {
	return (
		<div>
			<Intro />
			<Statistics />
			<WhoWeAre>
				<div className={styles.imgs}>
					<img src="/img/who-we.svg" alt="" className={styles.main_img} />
					<img src="/img/who-we2.svg" alt="" className={styles.small_img} />
				</div>
			</WhoWeAre>
			<OurProducts />
			<WhyChooseUs />
			<Innovation />
			<OurProjects />
			<NewsRoom />
			<Blogs />
		</div>
	);
};

export default Home;
