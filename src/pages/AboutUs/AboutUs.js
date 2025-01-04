import WhoWeAre from "components/WhoWeAre/WhoWeAre";
import OurMessage from "./components/OurMessage/OurMessage";
import Samples from "./components/Samples/Samples";
import OurCertificates from "./components/OurCertificates/OurCertificates";

import { Tr } from "utils/i18n";

// Styles
import styles from "./AboutUs.module.scss";

const AboutUs = () => {
	return (
		<div className={styles.about_us}>
			<section className={styles.about_us_head}>
				<div className="container">
					<h1 className="fs_48 fw_800 white text-center mbe_8 lineH_72">
						{Tr.tr("translation:About_Us")}
					</h1>
					<div className="hr_red mbe_8 mx-auto"></div>
					<p className="fs_24 fw_500 white text-center">
						{Tr.tr("translation:We_Believe_In_Success")}
					</p>
				</div>
			</section>

			<WhoWeAre hideBtn={true} bigCol={true}>
				<img src="/img/about-whoAre.svg" alt="" className={styles.whoAre_img} />
			</WhoWeAre>

			<OurMessage />

			<Samples />

			<OurCertificates />
		</div>
	);
};

export default AboutUs;
