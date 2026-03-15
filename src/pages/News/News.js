import { useEffect, useState } from "react";
import BreadCrumbWrapper from "components/BreadCrumbWrapper/BreadCrumbWrapper";
import { Link } from "react-router-dom";
import PrimaryBtn from "components/PrimaryBtn/PrimaryBtn";

import { Tr } from "utils/i18n";

import allNews from "json/News.json";

// Styles
import styles from "./News.module.scss";

const News = () => {
	const [news, setNews] = useState([]);

	// BreadCrumb
	const items = [
		{
			label: "Home",
			template: () => <Link to="/">Home</Link>,
		},
		{ label: "News" },
	];

	useEffect(() => {
		setNews(allNews);
	}, []);

	return (
		<div className={styles.news}>
			<section className={styles.news_head}>
				<div className="container">
					<h1 className="fs_48 fw_800 white text-center mbe_8 lineH_72">
						{Tr.tr("translation:News")}
					</h1>
					<div className="hr_red mbe_8 mx-auto"></div>
				</div>
			</section>

			<BreadCrumbWrapper items={items} />

			<section className={styles.news_list}>
				<div className="container">
					<div className="mbe_32">
						<div className="row">
							{news.map((el) => (
								<div className="col-md-6 col-lg-4 col-xl-3 mb-4" key={el.id}>
									<Link to={`/news/${el.id}`} className={styles.news_card}>
										<div className={styles.img}>
											<img src={el.image} alt="" />
										</div>
										<div className={styles.news_card_body}>
											<h6 className={styles.date}>{el.date}</h6>
											<h3 className={styles.title}>{el.title}</h3>
										</div>
									</Link>
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

export default News;
