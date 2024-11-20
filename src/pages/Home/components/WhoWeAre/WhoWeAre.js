// Styles
import PrimaryBtn from "components/PrimaryBtn/PrimaryBtn";
import styles from "./WhoWeAre.module.scss";

const WhoWeAre = () => {
	return (
		<div className={styles.who_weAre}>
			<img src="/img/gradient-bg.svg" alt="" className={styles.float_img} />
			<div className="container">
				<div className="row d-flex align-items-center justify-content-between">
					<div className="col-md-6 col-xl-7">
						<h1>Who we are</h1>
						<div className="hr_red mbe_24 md_mx-auto"></div>
						<p>
							At <span>Rouad Al-Kifah Factory</span>, we take pride in being
							pioneers in aluminum manufacturing for windows, doors, and
							building facades for various types of projects. We stand out with
							our high-quality custom-designed profiles, specifically engineered
							to withstand the harshest weather conditions. We guarantee all our
							products against water, dust, and aluminum discoloration. In
							addition, we are committed to keeping up with technological
							advancements by using the latest electronically-operated precision
							machines, accelerating the production of world-class products with
							excellent quality.
						</p>
						<PrimaryBtn
							btn
							type="button"
							label="Read more"
							classes="md_w-100"
						/>
					</div>
					<div className="col-md-6 col-xl-4 d-none d-md-block">
						<div className={styles.imgs}>
							<img src="/img/who-we.svg" alt="" className={styles.main_img} />
							<img src="/img/who-we2.svg" alt="" className={styles.small_img} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WhoWeAre;
