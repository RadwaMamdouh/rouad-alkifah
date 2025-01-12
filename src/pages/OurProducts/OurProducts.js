import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Galleria } from "primereact/galleria";
import PrimaryBtn from "components/PrimaryBtn/PrimaryBtn";
import { Button } from "primereact/button";
import { close } from "icons";

// Styles
import styles from "./OurProducts.module.scss";

const OurProducts = () => {
	// Products
	const products = [
		{
			label: "Doors",
			items: [
				{
					id: 1,
					label: "Bathroom doors",
				},
				{ id: 2, label: "Entrance doors" },
			],
		},
		{
			label: "Windows",
			items: [
				{ id: 3, label: "Fixed Windows" },
				{ id: 4, label: "Sliding Windows" },
				{ id: 5, label: "Tilt Windows" },
				{ id: 6, label: "Tilt and turn windows" },
			],
		},
		{
			label: "Building facades",
			items: [
				{ id: 7, label: "Structure system" },
				{ id: 8, label: "Curtain wall system" },
				{ id: 9, label: "Cladding system" },
			],
		},
		{
			label: "Domes",
			items: [{ id: 10, label: "Domes" }],
		},
	];

	const productDetails = {
		title: "Fixed Windows",
		description:
			"Fixed windows are a type of window that is designed to remain stationary and do not open or close. They are commonly used in the aluminum window industry for architectural and design purposes. These windows are primarily used to provide natural light, enhance the aesthetic appeal of a building, and offer panoramic views without the need for ventilation. Fixed windows are often installed in areas where ventilation is not required, such as in high-rise buildings, residential spaces, or commercial buildings, where the view or light is the primary concern. Their aluminum frame provides durability, resistance to weathering, and a sleek, modern appearance.",
		specifications: [
			{
				title:
					"Frame Material: High-quality aluminum for strength, durability, and weather resistance.",
			},
			{
				title: "Glass Type:",
				subTitles: [
					{
						title: "Clear, tinted, or frosted glass options.",
					},
					{
						title:
							"Double-glazed or triple-glazed glass for better thermal and sound insulation.",
					},
					{
						title: "Low-emissivity (Low-E) glass for energy efficiency.",
					},
				],
			},
			{
				title:
					"Window Size: Customizable to fit specific requirements based on the design of the building.",
			},
			{
				title: "Frame Design:",
				subTitles: [
					{
						title: "Slim, modern profiles with minimalistic aesthetics.",
					},
					{
						title:
							"Thermal breaks within the frame to enhance energy efficiency.",
					},
				],
			},
		],
		images: [
			{
				id: 1,
				imgSrc: "/img/productD1.svg",
			},
			{
				id: 2,
				imgSrc: "/img/productD2.svg",
			},
			{
				id: 3,
				imgSrc: "/img/productD3.svg",
			},
			{
				id: 4,
				imgSrc: "/img/productD4.svg",
			},
			{
				id: 5,
				imgSrc: "/img/productD5.svg",
			},
			{
				id: 6,
				imgSrc: "/img/productD6.svg",
			},
			{
				id: 7,
				imgSrc: "/img/productD7.svg",
			},
			{
				id: 8,
				imgSrc: "/img/productD8.svg",
			},
			{
				id: 9,
				imgSrc: "/img/productD9.svg",
			},
		],
	};

	const [activeIndex, setActiveIndex] = useState(0);
	const galleria = useRef(null);

	const itemTemplate = (item) => {
		return (
			<img
				src={item.imgSrc}
				alt=""
				style={{ width: "100%", display: "block" }}
			/>
		);
	};

	const [showProducts, setShowProducts] = useState(false);

	return (
		<>
			<div className={styles.our_products}>
				<div className={styles.our_products_head}>
					<div className="container">
						<h1 className="fs_48 fw_800 white text-center mbe_8 lineH_72">
							Our Products
						</h1>
						<div className="hr_red mbe_8 mx-auto"></div>
						<p
							className={`fs_24 fw_500 white text-center mx-auto ${styles.maxWidth}`}>
							High-quality aluminum products for diverse industrial needs,
							ensuring durability and performance.
						</p>
					</div>
				</div>

				<div className={styles.our_products_body}>
					<div className="container">
						<div className="row">
							<div className="col-lg-3 mb-3 mb-lg-0">
								<div className={`${styles.products_sidebar} d-none d-lg-block`}>
									<h3 className={styles.products_title}>Products</h3>
									<div className={styles.products_list}>
										{products.map((product, index) => (
											<div className={styles.product_box} key={index}>
												<h4>{product.label}</h4>
												<div className={styles.items}>
													{product.items.map((item) => (
														<NavLink
															to={`/products/${item.id}`}
															key={item.id}
															className={styles.item_link}>
															<span className={styles.bullet}></span>
															<span className={styles.item_lbl}>
																{item.label}
															</span>
														</NavLink>
													))}
												</div>
											</div>
										))}
									</div>
								</div>

								{/* Responsive */}
								<div className={`${styles.products_head} d-flex d-lg-none`}>
									<h3>Products</h3>
									<Button
										type="button"
										icon="pi pi-list"
										className={styles.list_btn}
										onClick={() => setShowProducts(true)}
									/>
								</div>
							</div>
							<div className="col-lg-9">
								<div className={styles.product_details}>
									<h1 className="pb-2 fs_22 fw_700 primary bb_1_light-gray mb-2">
										{productDetails.title}
									</h1>
									<p className="fs_16 fw_500 text mb-3">
										{productDetails.description}
									</p>

									<div className="mb-4">
										<h3 className="fs_18 fw_700 text mb-2">Specifications</h3>
										<ol>
											{productDetails.specifications.map((el, index) => (
												<li key={index}>
													{el.title}
													{el.subTitles && (
														<ul>
															{el.subTitles.map((ele, subIndex) => (
																<li key={subIndex}>{ele.title}</li>
															))}
														</ul>
													)}
												</li>
											))}
										</ol>
									</div>

									<div className={styles.product_imgs}>
										<Galleria
											ref={galleria}
											value={productDetails.images}
											numVisible={7}
											style={{ maxWidth: "850px" }}
											activeIndex={activeIndex}
											onItemChange={(e) => setActiveIndex(e.index)}
											circular
											fullScreen
											showItemNavigators
											showThumbnails={false}
											item={itemTemplate}
										/>

										<div className="row px-2 mb-4">
											{productDetails.images?.map((image, index) => (
												<div
													className="col-6 col-md-4 px-2 mb-2"
													key={image.id}>
													<div
														className={styles.img}
														key={image.id}
														onClick={() => {
															setActiveIndex(index);
															galleria.current.show();
														}}>
														<img src={image.imgSrc} alt="" />
													</div>
												</div>
											))}
										</div>

										<PrimaryBtn
											btn
											type="button"
											label="Load More"
											classes="mx-auto"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Products in Reposnive */}
			<div
				className={`${styles.products_sidebar_res} ${
					showProducts ? styles.show : ""
				}`}>
				<Button
					type="button"
					className={styles.close}
					onClick={() => setShowProducts(false)}>
					{close}
				</Button>

				{products.map((product, index) => (
					<div className={styles.product_box} key={index}>
						<h4>{product.label}</h4>
						<div className={styles.items}>
							{product.items.map((item) => (
								<NavLink
									to={`/products/${item.id}`}
									key={item.id}
									className={styles.item_link}
									onClick={() => setShowProducts(false)}>
									<span className={styles.bullet}></span>
									<span className={styles.item_lbl}>{item.label}</span>
								</NavLink>
							))}
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default OurProducts;
