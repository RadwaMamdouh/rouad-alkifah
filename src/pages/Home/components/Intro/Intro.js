// import Swiper core and required modules
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { useTranslation } from "react-i18next";

import PrimaryBtn from "components/PrimaryBtn/PrimaryBtn";

// Styles
import styles from "./Intro.module.scss";

const Intro = () => {
	const { i18n } = useTranslation();
	const currLang = i18n.language;

	const introSlides = [
		{
			title: "Curtain Wall",
			desc: "Unique designs used in companies, banks, hospitals, or institutions. They are considered one of the most impactful elements that can add a stunning aesthetic touch to any building.",
		},
		{
			title: "Curtain Wall",
			desc: "Unique designs used in companies, banks, hospitals, or institutions. They are considered one of the most impactful elements that can add a stunning aesthetic touch to any building.",
		},
		{
			title: "Curtain Wall",
			desc: "Unique designs used in companies, banks, hospitals, or institutions. They are considered one of the most impactful elements that can add a stunning aesthetic touch to any building.",
		},
		{
			title: "Curtain Wall",
			desc: "Unique designs used in companies, banks, hospitals, or institutions. They are considered one of the most impactful elements that can add a stunning aesthetic touch to any building.",
		},
	];

	return (
		<div className={styles.intro}>
			<div className="container">
				{/* Intro Slider */}
				<div className={styles.intro_slider}>
					<Swiper
						key={currLang} // To re-render this component with language change
						dir={currLang === "ar" ? "rtl" : "ltr"}
						// install Swiper modules
						modules={[Pagination, Autoplay]}
						slidesPerView={1}
						spaceBetween={0}
						initialSlide={0}
						autoplay={{
							delay: 3000,
							disableOnInteraction: false,
							waitForTransition: false,
						}}
						speed={1500}
						loop={true}
						pagination={{ el: ".swiper-custom-pagination", clickable: true }}
						breakpoints={{
							1024: {
								slidesPerView: 1,
							},
							992: {
								slidesPerView: 1,
							},
							575: {
								slidesPerView: 1,
							},
							0: {
								slidesPerView: 1,
							},
						}}>
						{introSlides.map((slide, index) => (
							<SwiperSlide key={index}>
								<div className={styles.intro_slide}>
									<h1>{slide.title}</h1>
									<div className="hr_red mx-auto mbe_24"></div>
									<p>{slide.desc}</p>
									<PrimaryBtn
										btn
										type="button"
										label="Read More"
										boldLabel
										classes="mx-auto"
									/>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
					{/* pagination */}
					<div className="swiper-custom-pagination"></div>
				</div>
			</div>
		</div>
	);
};

export default Intro;
