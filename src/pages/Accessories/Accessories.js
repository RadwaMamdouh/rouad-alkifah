import { Tr } from "utils/i18n";

// Styles
import styles from "./Accessories.module.scss";

const Accessories = () => {
	const brands = [
		{
			id: 1,
			img: "/img/brand1.svg",
			name: "Italian",
		},
		{
			id: 2,
			img: "/img/brand2.svg",
			name: "Italian",
		},
		{
			id: 3,
			img: "/img/brand3.svg",
			name: "Spanish",
		},
		{
			id: 4,
			img: "/img/brand4.svg",
			name: "Portuguese",
		},
		{
			id: 5,
			img: "/img/brand5.svg",
			name: "Portuguese",
		},
		{
			id: 6,
			img: "/img/brand6.svg",
			name: "Italian",
		},
	];

	const accessories = [
		{
			id: 1,
			img: "/img/accessories.svg",
			title: "Laminated Clear Glass",
			desc: "A layer of organic polymer is placed between two pieces of glass. After heat treatment and high pressure, the glass and the interlayer are bonded together to form a composite product. UV blockage: 99%, infrared radiation blockage: 42%, visible light blockage: 16%.",
		},
		{
			id: 2,
			img: "/img/accessories.svg",
			title: "Double Hollow Clear Glass",
			desc: "The hollow glass is made of multiple layers of glass, tightly sealed on all sides. The non-thermal gas in the middle prevents heat conduction. The interior is filled with inert gas, which effectively reduces the heat transfer coefficient of the glass. UV blockage: 33%, infrared blockage: 76%, visible light blockage: 21%.",
		},
		{
			id: 3,
			img: "/img/accessories.svg",
			title: "Stained Glass",
			desc: "We use a sectional system for the colored and decorative glass with a thickness of 24mm to ensure greater insulation. It consists of two layers of 6mm tempered clear glass, separated by an air gap. UV blockage: 33%, infrared radiation blockage: 76%, visible light blockage: 21%.",
		},
		{
			id: 4,
			img: "/img/accessories.svg",
			title: "High-Performance Heat-Insulating Glass",
			desc: "It absorbs large amounts of infrared radiation and heat, resulting in a significant effect on the heat transfer coefficient: 35% for UV rays, 86% for infrared rays, and 26% for gray rays and visible light.",
		},
		{
			id: 5,
			img: "/img/accessories.svg",
			title: "Clear Glass",
			desc: "UV blockage rate: 20%, infrared radiation blockage: 27%, visible light blockage: 13%.",
		},
		{
			id: 6,
			img: "/img/accessories.svg",
			title: "Low E Glass",
			desc: "UV blockage rate: 52%, infrared radiation blockage: 70%, visible light blockage: 46%.",
		},
	];

	return (
		<div className={styles.accessories}>
			<section className={styles.accessories_head}>
				<div className="container">
					<h1 className="fs_48 fw_800 white text-center mbe_8 lineH_72">
						{Tr.tr("translation:Accessories")}
					</h1>
					<div className="hr_red mbe_8 mx-auto"></div>
					<p className="fs_24 fw_500 white text-center">
						The accessories used in all sectors.
					</p>
				</div>
			</section>

			{/* Brands */}
			<section className={styles.brands_wrapper}>
				<div className="container">
					<div className={styles.brands}>
						<div className="row row-cols-2 row-cols-sm-2 row-cols-md-4 row-cols-lg-6">
							{brands.map((brand) => (
								<div className="col mb-3 mb-lg-0 px-2" key={brand.id}>
									<div className={styles.brand_box}>
										<img src={brand.img} alt="" />
										<h5 className="fs_18 fw_600 text text-center">
											{brand.name}
										</h5>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Missions */}
			<section className="mbe_40">
				<div className="container">
					<div className="row">
						<div className="col-sm-6 col-md-4 mb-4 mb-md-0">
							<div className={styles.mission_card}>
								<div className={styles.img}>
									<img src="/img/super-protection.svg" alt="" />
								</div>
								<h5 className="fs_20 fw_700 primary mbe_8 text-center">
									Great Super Protection
								</h5>
								<p className="fs_16 fw_600 text text-center">
									Saves on energy bills and keeps the interior comfortable
								</p>
							</div>
						</div>
						<div className="col-sm-6 col-md-4 mb-4 mb-md-0">
							<div className={styles.mission_card}>
								<div className={styles.img}>
									<img src="/img/great-colors.svg" alt="" />
								</div>
								<h5 className="fs_20 fw_700 primary mbe_8 text-center">
									Great Colors
								</h5>
								<p className="fs_16 fw_600 text text-center">
									Products with advanced treatment.
								</p>
							</div>
						</div>
						<div className="col-sm-6 col-md-4 mb-4 mb-md-0">
							<div className={styles.mission_card}>
								<div className={styles.img}>
									<img src="/img/high-durability.svg" alt="" />
								</div>
								<h5 className="fs_20 fw_700 primary mbe_8 text-center">
									High Durability And strength
								</h5>
								<p className="fs_16 fw_600 text text-center">
									Products with advanced treatment.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Accessories Items */}
			<section className="mb-4 overflow-hidden">
				<div className="container">
					<div className="row">
						<div className="col-md-12 px-0 px_sm_12">
							<div className={styles.accessories_card_main}>
								<div className={styles.img}>
									<img src="/img/accessories-main.svg" alt="" />
								</div>
								<div className={styles.title_desc}>
									<img
										src="/img/accessories-main-overlay.svg"
										alt=""
										className={styles.overlay}
									/>
									<img
										src="/img/accessories-main-overlay-small.svg"
										alt=""
										className={`${styles.overlay} ${styles.overlay_small}`}
									/>
									<h5 className="fs_20 fw_700 white mbe_8 position-relative">
										Glass
									</h5>
									<p className="fs_16 fw_500 white position-relative">
										Glass makes up about 80% of the area of doors and windows.
										It can be said that the thermal insulation performance of
										doors and windows is directly related to the glass. The
										glass used in doors and windows includes single glass,
										laminated glass, hollow glass, decorative glass, and other
										composite products. The thermal insulation performance
										varies depending on the type of glass, and you can choose
										according to your needs.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className={styles.accessories_cards}>
				<div className="container">
					<div className="row">
						{accessories.map((item) => (
							<div className="col-md-6 col-lg-4 mb-4" key={item.id}>
								<div className={styles.accessories_card}>
									<div className={styles.img}>
										<img src={item.img} alt="" />
									</div>
									<div className={styles.title_desc}>
										<h5 className="fs_20 fw_700 primary mbe_8">{item.title}</h5>
										<p className="fs_16 fw_500 text">{item.desc}</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
};

export default Accessories;
