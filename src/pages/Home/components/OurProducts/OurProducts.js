import { Button } from "primereact/button";
import PrimaryBtn from "components/PrimaryBtn/PrimaryBtn";

// Styles
import styles from "./OurProducts.module.scss";

const OurProducts = () => {
	const products = [
		{
			id: 1,
			img1: "/img/product1.svg",
			img2: "/img/product1-small1.svg",
			img3: "/img/product1-small2.svg",
			title: "Doors",
		},
		{
			id: 2,
			img1: "/img/product2.svg",
			img2: "/img/product2-small1.svg",
			img3: "/img/product2-small2.svg",
			title: "Windows",
		},
		{
			id: 3,
			img1: "/img/product3.svg",
			img2: "/img/product3-small1.svg",
			img3: "/img/product3-small2.svg",
			title: "Domes",
		},
		{
			id: 4,
			img1: "/img/product4.svg",
			img2: "/img/product4-small1.svg",
			img3: "/img/product4-small2.svg",
			title: "Building Facades",
		},
	];

	return (
		<div className={styles.our_products}>
			<div className="container">
				<h2 className="fs_32 fw_700 text-black text-center">Our Products</h2>
				<div className="hr_red mx-auto mbe_16"></div>
				<p
					className={`fs_18 fw_500 text-text-sub text-center mbe_40 mx-auto md_mbe24 ${styles.maxWidth}`}>
					Ipsum is simply dummy text of the printing and typesetting industry.
					Lorem Ipsum has been the industry's standard dummy text ever since the
					1500s, when an unknown printer took a galley.
				</p>

				<div className={styles.products}>
					{products.map((product) => (
						<div className={styles.product_card} key={product.id}>
							<div className={styles.product_imgs}>
								<div className={`${styles.img} ${styles.main_img}`}>
									<Button type="button" text className={styles.magnify}>
										<img src="/img/magnify.svg" alt="" />
									</Button>
									<img src={product.img1} alt="" />
								</div>
								<div className={styles.img}>
									<Button type="button" text className={styles.magnify}>
										<img src="/img/magnify.svg" alt="" />
									</Button>
									<img src={product.img2} alt="" />
								</div>
								<div className={styles.img}>
									<Button type="button" text className={styles.magnify}>
										<img src="/img/magnify.svg" alt="" />
									</Button>
									<img src={product.img3} alt="" />
								</div>
							</div>
							<div className={styles.title}>
								<h4>{product.title}</h4>
								<div className="hr_red"></div>
							</div>
						</div>
					))}
				</div>

				<PrimaryBtn
					btn
					type="button"
					label="View More Products"
					classes="mx-auto md_w-100"
				/>
			</div>
		</div>
	);
};

export default OurProducts;
