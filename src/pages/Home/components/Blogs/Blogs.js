import { Link } from "react-router-dom";
import PrimaryBtn from "components/PrimaryBtn/PrimaryBtn";

// Styles
import styles from "./Blogs.module.scss";

const Blogs = () => {
	const blogs = [
		{
			id: 1,
			img: "/img/blog1.svg",
			title:
				"Jiayu New Materials hits 10,000 tonnes milestone in double-zero foil sales, exceeding targets",
			desc: "We carefully and precisely inspect and select local and international materials. We are committed to using high-quality raw materials.",
		},
		{
			id: 2,
			img: "/img/blog2.svg",
			title: "Jiayu New Materials hits 10,000 tonnes",
			desc: "We carefully and precisely inspect and select local and international materials. We are committed to using high-quality raw materials.",
		},
		{
			id: 3,
			img: "/img/blog3.svg",
			title:
				"Jiayu New Materials hits 10,000 tonnes milestone in double-zero foil sales, exceeding targets",
			desc: "We carefully and precisely inspect and select local and international materials. We are committed to using high-quality raw materials.",
		},
		{
			id: 4,
			img: "/img/blog4.svg",
			title:
				"Jiayu New Materials hits 10,000 tonnes milestone in double-zero foil sales, exceeding targets",
			desc: "We carefully and precisely inspect and select local and international materials. We are committed to using high-quality raw materials.",
		},
	];

	return (
		<section className={styles.blogs}>
			<div className="container">
				<div className="mbe_32">
					<h2 className="fs_32 fw_700 black text-center mbe_4">Blogs</h2>
					<div className="hr_red mx-auto"></div>
				</div>

				<div className={styles.blogs_cards}>
					{blogs.map((blog) => (
						<div className={styles.blog_card} key={blog.id}>
							<div className={styles.img}>
								<img src={blog.img} alt="" />
							</div>
							<Link to="#">{blog.title}</Link>
							<p>{blog.desc}</p>
						</div>
					))}
				</div>

				<PrimaryBtn
					btn
					type="button"
					label="View More Blogs"
					classes="mx-auto"
				/>
			</div>
		</section>
	);
};

export default Blogs;
