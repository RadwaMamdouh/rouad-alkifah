// import Swiper core and required modules
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { useTranslation } from "react-i18next";
import { Tr } from "utils/i18n";

import PrimaryBtn from "components/PrimaryBtn/PrimaryBtn";

// Styles
import styles from "./Intro.module.scss";

const Intro = () => {
	const { i18n } = useTranslation();
	const currLang = i18n.language;

	const introSlides = [
		{
			img: "/img/intro-slide1.jpg",
			titleEn: "Curtin wall system",
			titleAr: "نظام الواجهات الزجاجية كرتن وول",
			descEn:
				"The Curtain Wall Aluminum System is a non-structural cladding system used in modern buildings, comprising lightweight aluminum frames and glass panels. It is designed to resist air and water infiltration, support wind loads, and provide thermal insulation while offering aesthetic appeal with large glass facades. The system enhances natural light, improves energy efficiency, and contributes to the sleek, modern appearance of buildings. Curtain walls are popular in high-rise constructions due to their durability, versatility, and low maintenance.",
			descAr:
				"نظام الكرتن وول من الألمنيوم هو نظام تغليف غير إنشائي يُستخدم في المباني الحديثة، يتكون من إطارات خفيفة الوزن من الألمنيوم وألواح زجاجية. تم تصميمه لمقاومة تسرب الهواء والماء، وتحمل أحمال الرياح، وتوفير العزل الحراري، مع تقديم مظهر جمالي من خلال الواجهات الزجاجية الكبيرة. يُعزز النظام دخول الضوء الطبيعي، ويحسن كفاءة الطاقة، ويساهم في الطابع العصري للمباني. يُعتبر الكرتن وول شائعاً في المباني الشاهقة نظراً لمتانته وتعدد استخداماته وسهولة صيانته.",
		},
		{
			img: "/img/intro-slide2.jpg",
			titleEn: "Structure system",
			titleAr: "نظام الواجهات الزجاجية الإنشائية",
			descEn:
				"The Structure Aluminum System is an advanced architectural solution designed for building facades. It integrates an aluminum framework with glass panels, providing structural stability and a seamless appearance. This system ensures strength, durability, and resistance to environmental factors while maximizing natural light. Its sleek and modern design is ideal for high-rise buildings, offering both aesthetic appeal and energy efficiency.",
			descAr:
				"نظام الألمنيوم الإنشائي هو حل معماري متقدم مصمم لواجهات المباني، يدمج إطاراً من الألمنيوم مع ألواح زجاجية لتوفير الثبات الإنشائي والمظهر الأنيق. يضمن هذا النظام القوة والمتانة ومقاومة العوامل البيئية، مع تعزيز دخول الضوء الطبيعي. يتميز بتصميم عصري وأنيق، مما يجعله مثالياً لجميع أنواع المباني، حيث يجمع بين الجمال وكفاءة الطاقة.",
		},
		{
			img: "/img/intro-slide3.jpg",
			titleEn: "Cladding system",
			titleAr: "نظام واجهات كلادينج",
			descEn:
				"The Cladding Aluminum System is a versatile exterior finishing solution used to enhance building aesthetics and protect structures from environmental factors. Made of lightweight and durable aluminum composite panels, it provides a sleek, modern look while offering insulation, fire resistance, and low maintenance. This system is widely used in commercial and residential buildings for its flexibility, durability, and energy efficiency.",
			descAr:
				"نظام الكلادينج هو حل متعدد الاستخدامات للتشطيبات الخارجية يُستخدم لتحسين جمالية المباني وحمايتها من العوامل البيئية. يتم تصنيعه من ألواح مركبة خفيفة الوزن ومتينة من الألمنيوم، ويوفر مظهراً عصرياً أنيقاً مع عزل حراري، ومقاومة للحريق، وصيانة منخفضة. يُستخدم هذا النظام على نطاق واسع في المباني التجارية والسكنية بفضل مرونته ومتانته وكفاءته في استهلاك الطاقة.",
		},
		{
			img: "/img/intro-slide4.jpg",
			titleEn: "Domes",
			titleAr: "القباب",
			descEn:
				"Domes are distinctive architectural structures with a circular or hemispherical shape, often symbolizing the heavens or eternity. They are known for their ability to evenly distribute weight, making them resilient to wind and earthquakes while creating large, open interior spaces without the need for many supporting columns.",
			descAr:
				"القباب هي هياكل معمارية مميزة تأخذ شكلاً دائرياً أو نصف كروي، وتُعتبر رمزاً للإبداع الهندسي والتصميم الفريد. تتميز القباب بقدرتها على توزيع الأحمال بشكل متساوٍ، مما يجعلها مقاومة للزلازل والرياح، بالإضافة إلى خلق مساحات داخلية واسعة دون الحاجة إلى أعمدة كثيرة.",
		},
	];

	return (
		<div className={styles.intro}>
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
							<div className={styles.slide_img}>
								<img src={slide.img} alt="" />
							</div>
							<div className={styles.intro_slide}>
								<h1>{currLang === "ar" ? slide.titleAr : slide.titleEn}</h1>
								<div className="hr_red mx-auto mbe_24"></div>
								<p>{currLang === "ar" ? slide.descAr : slide.descEn}</p>
								<PrimaryBtn
									btn
									type="button"
									label={Tr.tr("translation:Read_More")}
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
	);
};

export default Intro;
