// import Swiper core and required modules
import { Pagination } from "swiper/modules";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { useTranslation } from "react-i18next";

// Styles
import styles from "./OurMessage.module.scss";

const OurMessage = () => {
	const { i18n } = useTranslation();
	const currLang = i18n.language;

	const slides = [
		{
			title: "Our Message",
			desc: "We carry a message emanating from the core, aspiring for a better future for our dear country, and we aspire to provide works and services that in turn contribute to building a bright future in line with the Kingdom's Vision 2030 and based on our expertise and competence with which we ensure the design and implementation of all aluminum and glass works.",
		},
		{
			title: "Our Vision",
			desc: "Contribute effectively to the aluminum industry in the Kingdom, and to seek to bring about a development and growth in this sector, which plays its role in the movement of economic growth in order to reach the forefront and leadership in this field.",
		},
		{
			title: "Our goal",
			desc: "Our goal is to be a leading company in the world of aluminium and glass industries and an ideal choice for all customers by adhering to the best specifications, highest quality and lowest prices",
		},
	];

	return (
		<section className={styles.our_message}>
			<div className={styles.img}>
				<img src="/img/our-message.svg" alt="" />
			</div>
			<div className={styles.text_side}>
				<img
					src="/img/innovation-float1.svg"
					alt=""
					className={styles.float1}
				/>
				<img
					src="/img/innovation-float2.svg"
					alt=""
					className={styles.float2}
				/>

				<div className="position-relative">
					<Swiper
						key={currLang} // To re-render this component with language change
						dir={currLang === "ar" ? "rtl" : "ltr"}
						// install Swiper modules
						modules={[Pagination]}
						slidesPerView={1}
						spaceBetween={0}
						initialSlide={0}
						speed={1500}
						loop={true}
						pagination={{ el: ".ourMsg-swiper-pagination", clickable: true }}
						breakpoints={{
							0: {
								slidesPerView: 1,
							},
						}}>
						{slides.map((slide, index) => (
							<SwiperSlide key={index}>
								<h3 className="fs_32 fw_700 white mb_10">{slide.title}</h3>
								<div className="hr_red mb_10"></div>
								<p
									className="fs_20 fw_500 white mb_16"
									style={{ minHeight: "150px" }}>
									{slide.desc}
								</p>
							</SwiperSlide>
						))}
						{/* pagination */}
						<div className="ourMsg-swiper-pagination"></div>
					</Swiper>
				</div>
			</div>
		</section>
	);
};

export default OurMessage;
