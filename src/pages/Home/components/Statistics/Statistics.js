import { NumbersFormater } from "utils/NumbersFormater";

// Styles
import styles from "./Statistics.module.scss";

const Statistics = () => {
	const statistics = [
		{
			icon: "/img/years-experience.svg",
			count: 50,
			title: "Years of Experience",
		},
		{
			icon: "/img/workforce.svg",
			count: 50,
			title: "Workforce Size",
		},
		{
			icon: "/img/completed-projects.svg",
			count: 15000,
			title: "Completed Projects",
		},
		{
			icon: "/img/happy-clients.svg",
			count: 80000,
			title: "Happy Clients",
		},
	];

	return (
		<div className={styles.statistics}>
			<div className="container">
				<div className={styles.statistics_boxes}>
					{statistics.map((el, index) => (
						<div className={styles.statistics_box} key={index}>
							<img src={el.icon} alt="" />
							<div>
								<h3>{NumbersFormater(el.count)}+</h3>
								<p>{el.title}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Statistics;
