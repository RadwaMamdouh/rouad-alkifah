import { Tr } from "utils/i18n";
import { useTranslation } from "react-i18next";

// Styles
import styles from "./WhyChooseUs.module.scss";

const WhyChooseUs = () => {
	const { i18n } = useTranslation();
	const currLang = i18n.language;

	const data = [
		{
			icon: "/img/high-quality.svg",
			titleEn: "High Quality",
			titleAr: "جودة عالية",
			descEn:
				"We carefully and precisely inspect and select local and international materials. We are committed to using high-quality raw materials.",
			descAr:
				"نقوم بفحص واختيار المواد المحلية والدولية بعناية ودقة، ونلتزم باستخدام المواد الخام عالية الجودة.",
		},
		{
			icon: "/img/professional-team.svg",
			titleEn: "Professional Team",
			titleAr: "فريق محترف",
			descEn:
				"We carefully select our team from administrative staff, engineers, supervisors, and technicians, and we focus on developing their expertise and skills.",
			descAr:
				"نقوم باختيار فريق عملنا بعناية من الموظفين الإداريين والمهندسين والمشرفين والفنيين، ونركز على تطوير خبراتهم ومهاراتهم.",
		},
		{
			icon: "/img/competitive-pricing.svg",
			titleEn: "Competitive Pricing",
			titleAr: "أسعار تنافسية",
			descEn:
				"We have a dedicated department to study market prices and raw material costs to offer the best prices suitable for our clients.",
			descAr:
				"لدينا قسم مخصص لدراسة أسعار السوق وتكاليف المواد الخام لتقديم أفضل الأسعار المناسبة لعملائنا.",
		},
		{
			icon: "/img/advanced-equipment.svg",
			titleEn: "Advanced Equipment",
			titleAr: "معدات متقدمة",
			descEn:
				"We use the latest technology in equipment and machinery worldwide to achieve top-tier aluminum and glass works.",
			descAr:
				"نحن نستخدم أحدث التقنيات في المعدات والآلات في جميع أنحاء العالم لتحقيق أعمال الألمنيوم والزجاج من الدرجة الأولى.",
		},
		{
			icon: "/img/after-sales-service.svg",
			titleEn: "After-Sales Service",
			titleAr: "خدمة ما بعد البيع",
			descEn:
				"We provide a warranty on our work after installation for a duration that suits the project, ensuring our clients receive support whenever needed.",
			descAr:
				"نحن نقدم ضمانًا على عملنا بعد التثبيت لمدة تناسب المشروع، مما يضمن حصول عملائنا على الدعم عند الحاجة إليه.",
		},
		{
			icon: "/img/fast-execution.svg",
			titleEn: "Fast Execution",
			titleAr: "التنفيذ السريع",
			descEn:
				"We ensure quick and efficient execution using advanced technology and smart tools to enhance speed.",
			descAr:
				"نحن نضمن التنفيذ السريع والفعال باستخدام التكنولوجيا المتقدمة والأدوات الذكية لتعزيز السرعة.",
		},
		{
			icon: "/img/experience.svg",
			titleEn: "Experience",
			titleAr: "الخبرة",
			descEn:
				"We have over 15 years of experience, marked by our success and customer satisfaction throughout the years.",
			descAr:
				"لدينا أكثر من 15 عامًا من الخبرة، تميزت بالنجاح ورضا العملاء على مر السنين.",
		},
		{
			icon: "/img/attention-detail.svg",
			titleEn: "Attention to Detail",
			titleAr: "الاهتمام بالتفاصيل",
			descEn:
				"We excel in the precision of our products and the craftsmanship of our workforce, making us leaders in creating various designs tailored to our clients' desires.",
			descAr:
				"نحن نتميز بدقة منتجاتنا وحرفية القوى العاملة لدينا، مما يجعلنا روادًا في إنشاء تصميمات مختلفة مصممة خصيصًا لتلبية رغبات عملائنا.",
		},
	];

	return (
		<div className={styles.why_chooseUs}>
			<div className="container">
				<h2 className="fs_32 fw_700 text-black text-center mbe_4">
					{Tr.tr("translation:Why_Choose_Us")}
				</h2>
				<div className="hr_red mx-auto mbe_16"></div>

				<div className={styles.cards}>
					{data.map((el, index) => (
						<div className={styles.card_holder} key={index}>
							<img src={el.icon} alt="" />
							<h5>{currLang === "ar" ? el.titleAr : el.titleEn}</h5>
							<div className="hr_red"></div>
							<p>{currLang === "ar" ? el.descAr : el.descEn}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default WhyChooseUs;
