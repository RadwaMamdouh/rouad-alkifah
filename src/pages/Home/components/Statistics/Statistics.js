import { NumbersFormater } from "utils/NumbersFormater";

import { useTranslation } from "react-i18next";

// Styles
import styles from "./Statistics.module.scss";

const Statistics = () => {
	const { i18n } = useTranslation();
	const currLang = i18n.language;

	const statistics = [
		{
			icon: "/img/years-experience.svg",
			count: 15,
			titleEn: "Years of Experience",
			titleAr: "سنة الخبرة",
		},
		{
			icon: "/img/workforce.svg",
			count: 50,
			titleEn: "Workforce Size",
			titleAr: "القوة العاملة",
		},
		{
			icon: "/img/completed-projects.svg",
			count: 3000,
			titleEn: "Completed Projects",
			titleAr: "المشاريع المكتملة",
		},
		{
			icon: "/img/happy-clients.svg",
			count: 3000,
			titleEn: "Happy Clients",
			titleAr: "العملاء السعداء",
		},
	];

	return (
		<section className={styles.statistics}>
			<div className="container">
				<div className={styles.statistics_boxes}>
					{statistics.map((el, index) => (
						<div className={styles.statistics_box} key={index}>
							<img src={el.icon} alt="" />
							<div>
								<h3>{NumbersFormater(el.count)}+</h3>
								<p>{currLang === "ar" ? el.titleAr : el.titleEn}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Statistics;
