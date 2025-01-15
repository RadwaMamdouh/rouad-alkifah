import PrimaryBtn from "components/PrimaryBtn/PrimaryBtn";

import { Tr } from "utils/i18n";

// Styles
import styles from "./AluminumProfiles.module.scss";

const AluminumProfiles = () => {
	const items = [
		{
			id: 1,
			image: "/img/aluminum.svg",
		},
		{
			id: 2,
			image: "/img/aluminum.svg",
		},
		{
			id: 3,
			image: "/img/aluminum.svg",
		},
		{
			id: 4,
			image: "/img/aluminum.svg",
		},
		{
			id: 5,
			image: "/img/aluminum.svg",
		},
		{
			id: 6,
			image: "/img/aluminum.svg",
		},
		{
			id: 7,
			image: "/img/aluminum.svg",
		},
		{
			id: 8,
			image: "/img/aluminum.svg",
		},
		{
			id: 9,
			image: "/img/aluminum.svg",
		},
		{
			id: 10,
			image: "/img/aluminum.svg",
		},
		{
			id: 11,
			image: "/img/aluminum.svg",
		},
		{
			id: 12,
			image: "/img/aluminum.svg",
		},
		{
			id: 13,
			image: "/img/aluminum.svg",
		},
		{
			id: 14,
			image: "/img/aluminum.svg",
		},
		{
			id: 15,
			image: "/img/aluminum.svg",
		},
		{
			id: 16,
			image: "/img/aluminum.svg",
		},
	];

	return (
		<div className={styles.aluminum_profiles}>
			<section className={styles.aluminum_profiles_head}>
				<div className="container">
					<h1 className="fs_48 fw_800 white text-center mbe_8 lineH_72">
						{Tr.tr("translation:Aluminum_Profiles")}
					</h1>
					<div className="hr_red mbe_8 mx-auto"></div>
					<p
						className={`fs_24 fw_500 white text-center mx-auto ${styles.maxWidth}`}>
						{Tr.tr("translation:Aluminum_Profiles_Desc")}
					</p>
				</div>
			</section>

			<section className={styles.aluminum_profiles_body}>
				<div className="container">
					<div className="mbe_40">
						<div className="row">
							{items.map((item) => (
								<div className="col-6 col-lg-4 col-xl-3 mb-4" key={item.id}>
									<div className={styles.item_Card}>
										<img src={item.image} alt="" />
									</div>
								</div>
							))}
						</div>
					</div>

					<PrimaryBtn
						btn
						type="button"
						label={Tr.tr("translation:Load_More")}
						classes="mx-auto md_w-100"
					/>
				</div>
			</section>
		</div>
	);
};

export default AluminumProfiles;
