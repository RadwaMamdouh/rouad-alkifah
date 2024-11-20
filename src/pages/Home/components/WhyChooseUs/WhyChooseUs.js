// Styles
import styles from "./WhyChooseUs.module.scss";

const WhyChooseUs = () => {
	const data = [
		{
			icon: "/img/high-quality.svg",
			title: "High Quality",
			desc: "We carefully and precisely inspect and select local and international materials. We are committed to using high-quality raw materials.",
		},
		{
			icon: "/img/professional-team.svg",
			title: "Professional Team",
			desc: "We carefully select our team from administrative staff, engineers, supervisors, and technicians, and we focus on developing their expertise and skills.",
		},
		{
			icon: "/img/competitive-pricing.svg",
			title: "Competitive Pricing",
			desc: "We have a dedicated department to study market prices and raw material costs to offer the best prices suitable for our clients.",
		},
		{
			icon: "/img/advanced-equipment.svg",
			title: "Advanced Equipment",
			desc: "We use the latest technology in equipment and machinery worldwide to achieve top-tier aluminum and glass works.",
		},
		{
			icon: "/img/after-sales-service.svg",
			title: "After-Sales Service",
			desc: "We provide a warranty on our work after installation for a duration that suits the project, ensuring our clients receive support whenever needed.",
		},
		{
			icon: "/img/fast-execution.svg",
			title: "Fast Execution",
			desc: "We ensure quick and efficient execution using advanced technology and smart tools to enhance speed.",
		},
		{
			icon: "/img/experience.svg",
			title: "Experience",
			desc: "We have over 15 years of experience, marked by our success and customer satisfaction throughout the years.",
		},
		{
			icon: "/img/attention-detail.svg",
			title: "Attention to Detail",
			desc: "We excel in the precision of our products and the craftsmanship of our workforce, making us leaders in creating various designs tailored to our clients' desires.",
		},
	];

	return (
		<div className={styles.why_chooseUs}>
			<div className="container">
				<h2 className="fs_32 fw_700 text-black text-center mbe_4">
					Why Choose Us
				</h2>
				<div className="hr_red mx-auto mbe_16"></div>
				<p
					className={`fs_18 fw_500 text-sub text-center mx-auto mbe_24 ${styles.maxWidth}`}>
					Ipsum is simply dummy text of the printing and typesetting industry.
					Lorem Ipsum has been the industry's standard dummy text ever since the
					1500s, when an unknown printer took a galley.
				</p>
				<div className={styles.cards}>
					{data.map((el, index) => (
						<div className={styles.card_holder} key={index}>
							<img src={el.icon} alt="" />
							<h5>{el.title}</h5>
							<div className="hr_red"></div>
							<p>{el.desc}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default WhyChooseUs;
