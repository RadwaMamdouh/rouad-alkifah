import { Button } from "primereact/button";
import PrimaryBtn from "components/PrimaryBtn/PrimaryBtn";

import { Tr } from "utils/i18n";

// Styles
import styles from "./OurProducts.module.scss";

const OurProducts = () => {
	const products = [
		{
			id: 1,
			img1: "/img/door1.svg",
			img2: "/img/door2.jpg",
			img3: "/img/door3.jpg",
			title: Tr.tr("translation:Doors"),
		},
		{
			id: 2,
			img1: "/img/window1.jpg",
			img2: "/img/window2.jpg",
			img3: "/img/window3.jpg",
			title: Tr.tr("translation:Windows"),
		},
		{
			id: 3,
			img1: "/img/demo1.jpg",
			img2: "/img/demo2.jpg",
			img3: "/img/demo3.jpg",
			title: Tr.tr("translation:Domes"),
		},
		{
			id: 4,
			img1: "/img/building-facades1.jpg",
			img2: "/img/building-facades2.jpg",
			img3: "/img/building-facades3.jpg",
			title: Tr.tr("translation:Building_Facades"),
		},
	];

	return (
		<div className={styles.our_products}>
			<div className="container">
				<h2 className="fs_32 fw_700 text-black text-center">
					{Tr.tr("translation:Our_Products")}
				</h2>
				<div className="hr_red mx-auto mbe_16"></div>

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
					label={Tr.tr("translation:View_More_Products")}
					classes="mx-auto md_w-100"
				/>
			</div>
		</div>
	);
};

export default OurProducts;
