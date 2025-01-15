import { useEffect, useState } from "react";
import BreadCrumbWrapper from "components/BreadCrumbWrapper/BreadCrumbWrapper";
import { Link } from "react-router-dom";
import PrimaryBtn from "components/PrimaryBtn/PrimaryBtn";

import { Tr } from "utils/i18n";

import allBlogs from "json/Blogs.json";

// Styles
import styles from "./Blogs.module.scss";

const Blogs = () => {
	const [blogs, setBlogs] = useState([]);

	// BreadCrumb
	const items = [
		{
			label: "Home",
			template: () => <Link to="/">Home</Link>,
		},
		{ label: "Blogs" },
	];

	useEffect(() => {
		setBlogs(allBlogs);
	}, []);

	return (
		<div className={styles.blogs}>
			<section className={styles.blogs_head}>
				<div className="container">
					<h1 className="fs_48 fw_800 white text-center mbe_8 lineH_72">
						{Tr.tr("translation:Blogs")}
					</h1>
					<div className="hr_red mbe_8 mx-auto"></div>
				</div>
			</section>

			<BreadCrumbWrapper items={items} />

			<section className={styles.blogs_list}>
				<div className="container">
					<div className="mbe_32">
						<div className="row">
							{blogs.map((blog) => (
								<div className="col-md-6 col-lg-4 col-xl-3 mb-4" key={blog.id}>
									<Link to={`/blogs/${blog.id}`} className={styles.blogs_card}>
										<div className={styles.img}>
											<img src={blog.image} alt="" />
										</div>
										<div className={styles.blogs_card_body}>
											<h3 className={styles.title}>{blog.title}</h3>
											<p className={styles.desc}>{blog.description}</p>
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

export default Blogs;
