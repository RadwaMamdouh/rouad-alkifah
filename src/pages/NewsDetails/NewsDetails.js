import { useEffect, useState } from "react";
import BreadCrumbWrapper from "components/BreadCrumbWrapper/BreadCrumbWrapper";
import { Link, useParams } from "react-router-dom";

import { Tr } from "utils/i18n";

import allNews from "json/News.json";

// Styles
import styles from "./NewsDetails.module.scss";

const NewsDetails = () => {
	const [newsDetails, setNewsDetails] = useState({});
	const { id } = useParams();

	// BreadCrumb
	const items = [
		{
			label: "Home",
			template: () => <Link to="/">Home</Link>,
		},
		{ label: "News", template: () => <Link to="/news">News</Link> },
		{ label: newsDetails?.title },
	];

	useEffect(() => {
		const newsItem = allNews.find((el) => el.id === +id);
		setNewsDetails(newsItem);
	}, [id]);

	return (
		<div className={styles.news_details}>
			<section className={styles.news_details_head}>
				<div className="container">
					<h1 className="fs_48 fw_800 white text-center mbe_8 lineH_72">
						{Tr.tr("translation:News")}
					</h1>
					<div className="hr_red mbe_8 mx-auto"></div>
				</div>
			</section>

			<BreadCrumbWrapper items={items} />

			<section className={styles.details_body}>
				<div className="container">
					<div className={styles.details_padding}>
						<h2 className="fs_22 fw_700 text mbe_8">{newsDetails?.title}</h2>
						<h5 className="fs_16 fw_700 text mb-3 pbe_8 bb_1_light-gray">
							{newsDetails?.date}
						</h5>
						<div className={styles.details_img}>
							<img src={newsDetails?.image} alt="" />
						</div>
						<p className={styles.news_desc}>{newsDetails?.description}</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default NewsDetails;
