// import Swiper core and required modules
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Button } from "primereact/button";
import PrimaryBtn from "components/PrimaryBtn/PrimaryBtn";

import { useTranslation } from "react-i18next";
import { Tr } from "utils/i18n";

// Styles
import styles from "./OurProjects.module.scss";

const OurProjects = () => {
	const { i18n } = useTranslation();
	const currLang = i18n.language;

	const projects = [
		{
			img: "/img/project1.png",
			titleEn: "Fast Execution",
			titleAr: "التنفيذ السريع",
		},
		{
			img: "/img/project2.png",
			titleEn: "Fast Execution",
			titleAr: "التنفيذ السريع",
		},
		{
			img: "/img/project3.png",
			titleEn: "Fast Execution",
			titleAr: "التنفيذ السريع",
		},
		{
			img: "/img/project4.png",
			titleEn: "Fast Execution",
			titleAr: "التنفيذ السريع",
		},
		{
			img: "/img/project5.png",
			titleEn: "Fast Execution",
			titleAr: "التنفيذ السريع",
		},
		{
			img: "/img/project6.png",
			titleEn: "Fast Execution",
			titleAr: "التنفيذ السريع",
		},
		{
			img: "/img/project7.png",
			titleEn: "Fast Execution",
			titleAr: "التنفيذ السريع",
		},
		{
			img: "/img/project8.png",
			titleEn: "Fast Execution",
			titleAr: "التنفيذ السريع",
		},
		{
			img: "/img/project9.png",
			titleEn: "Fast Execution",
			titleAr: "التنفيذ السريع",
		},
		{
			img: "/img/project10.png",
			titleEn: "Fast Execution",
			titleAr: "التنفيذ السريع",
		},
		{
			img: "/img/project11.png",
			titleEn: "Fast Execution",
			titleAr: "التنفيذ السريع",
		},
		{
			img: "/img/project12.png",
			titleEn: "Fast Execution",
			titleAr: "التنفيذ السريع",
		},
		{
			img: "/img/project13.png",
			titleEn: "Fast Execution",
			titleAr: "التنفيذ السريع",
		},
		{
			img: "/img/project14.png",
			titleEn: "Fast Execution",
			titleAr: "التنفيذ السريع",
		},
		{
			img: "/img/project15.png",
			titleEn: "Fast Execution",
			titleAr: "التنفيذ السريع",
		},
		{
			img: "/img/project16.png",
			titleEn: "Fast Execution",
			titleAr: "التنفيذ السريع",
		},
		{
			img: "/img/project17.png",
			titleEn: "Fast Execution",
			titleAr: "التنفيذ السريع",
		},
		{
			img: "/img/project18.jpg",
			titleEn: "Fast Execution",
			titleAr: "التنفيذ السريع",
		},
		{
			img: "/img/project19.png",
			titleEn: "Fast Execution",
			titleAr: "التنفيذ السريع",
		},
		{
			img: "/img/project20.jpg",
			titleEn: "Fast Execution",
			titleAr: "التنفيذ السريع",
		},
		{
			img: "/img/project21.png",
			titleEn: "Fast Execution",
			titleAr: "التنفيذ السريع",
		},
	];

	return (
		<section className={styles.our_projects}>
			<div className="container">
				<h2 className="fs_32 fw_700 text-black text-center mbe_4">
					{Tr.tr("translation:Our_Projects")}
				</h2>
				<div className="hr_red mx-auto"></div>
				<p
					className={`fs_18 fw_500 text-sub text-center mb_24 mx-auto ${styles.maxWidth}`}>
					{currLang === "ar" ? "صور لبعض المشاريع" : "Photos of Some Projects"}
				</p>

				{/* Projects Slider */}
				<div className={styles.projects_slider}>
					<div className="position-relative">
						<Swiper
							key={currLang} // To re-render this component with language change
							dir={currLang === "ar" ? "rtl" : "ltr"}
							// install Swiper modules
							modules={[Pagination, Navigation]}
							slidesPerView={4}
							slidesPerGroup={4}
							spaceBetween={24}
							speed={1500}
							loop={true}
							pagination={{ el: ".project-swiper-pagination", clickable: true }}
							navigation={{
								nextEl: ".project-swiper-button-next",
								prevEl: ".project-swiper-button-prev",
							}}
							breakpoints={{
								1200: {
									slidesPerView: 4,
									slidesPerGroup: 4,
								},
								1024: {
									slidesPerView: 3.5,
									slidesPerGroup: 1,
								},
								992: {
									slidesPerView: 3.7,
									slidesPerGroup: 1,
								},
								768: {
									slidesPerView: 2.7,
									slidesPerGroup: 1,
								},
								575: {
									slidesPerView: 2.1,
									slidesPerGroup: 1,
								},
								400: {
									slidesPerView: 1.3,
									slidesPerGroup: 1,
								},
								0: {
									slidesPerView: 1.1,
									slidesPerGroup: 1,
								},
							}}>
							{projects.map((project, index) => (
								<SwiperSlide key={index}>
									<div className={styles.project_card}>
										<div className={styles.img}>
											<img src={project.img} alt="" />
										</div>
										{/* <h5>
											{currLang === "ar" ? project.titleAr : project.titleEn}
										</h5> */}
									</div>
								</SwiperSlide>
							))}
						</Swiper>
						<Button
							icon="pi-angle-left"
							className="project-swiper-button-prev"
						/>
						<Button
							icon="pi-angle-right"
							className="project-swiper-button-next"
						/>
					</div>
					{/* pagination */}
					<div className="project-swiper-pagination"></div>
					{/* Navigation */}
				</div>

				<PrimaryBtn
					btn
					type="button"
					label={Tr.tr("translation:View_More_Projects")}
					classes="mx-auto"
				/>
			</div>
		</section>
	);
};

export default OurProjects;
