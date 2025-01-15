import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BreadCrumbWrapper from "components/BreadCrumbWrapper/BreadCrumbWrapper";

import { Tr } from "utils/i18n";

import allBlogs from "json/Blogs.json";

// Styles
import styles from "./BlogsDetails.module.scss";

const BlogsDetails = () => {
	const [blogsDetails, setBlogsDetails] = useState({});
	const { id } = useParams();

	// BreadCrumb
	const items = [
		{
			label: "Home",
			template: () => <Link to="/">Home</Link>,
		},
		{ label: "Blogs", template: () => <Link to="/blogs">Blogs</Link> },
		{ label: blogsDetails?.title },
	];

	useEffect(() => {
		const newsItem = allBlogs.find((el) => el.id === +id);
		setBlogsDetails(newsItem);
	}, [id]);

	return (
		<div className={styles.blogs_details}>
			<section className={styles.blogs_details_head}>
				<div className="container">
					<h1 className="fs_48 fw_800 white text-center mbe_8 lineH_72">
						{Tr.tr("translation:Blogs")}
					</h1>
					<div className="hr_red mbe_8 mx-auto"></div>
				</div>
			</section>

			<BreadCrumbWrapper items={items} />

			<section className={styles.blogs_body}>
				<div className="container">
					<div className={styles.blogs_padding}>
						<h2 className="fs_22 fw_700 text mb-3 pbe_8 bb_1_light-gray">
							{blogsDetails?.title}
						</h2>
						<div className={styles.details_img}>
							<img src={blogsDetails?.image} alt="" />
						</div>
						<p className={styles.blogs_desc}>{blogsDetails?.description}</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default BlogsDetails;
