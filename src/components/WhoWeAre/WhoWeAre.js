import PrimaryBtn from "components/PrimaryBtn/PrimaryBtn";

import { useTranslation } from "react-i18next";
import { Tr } from "utils/i18n";

// Styles
import styles from "./WhoWeAre.module.scss";

const WhoWeAre = ({ ...props }) => {
	const { i18n } = useTranslation();
	const currLang = i18n.language;

	const content =
		currLang === "ar"
			? `في شركة <span>مصنع رواد الكفاح</span> للصناعة، نفخر بكوننا رواداً في صناعة الألومنيوم للنوافذ والأبواب وواجهات المباني لمختلف أنواع المشاريع. نتميز بتصاميمنا المخصصة عالية الجودة، المصممة بعناية لتحمل أقسى الظروف الجوية. كما نضمن أن جميع منتجاتنا ضد الماء والغبار وتغير لون الألومنيوم. بالإضافة إلى ذلك، تم تحسين تصاميمنا لتوفير الطاقة، مما يسهم في توفير الكهرباء وخلق بيئات صحية. نحن ملتزمون بمواكبة التقدم التكنولوجي باستخدام أحدث الآلات الدقيقة مما يساهم في إنتاج منتجات عالمية المستوى بجودة استثنائية.`
			: `At <span>Rouad Al-Kafah Factory</span> Company for Industry, we take pride in being pioneers in aluminum manufacturing for windows, doors, and building facades for various types of projects. We stand out with our high-quality custom-designed profiles, specifically engineered to withstand the harshest weather conditions. We guarantee all our products against water, dust, and aluminum discoloration. Additionally, our designs are optimized for energy efficiency, contributing to electricity savings and creating healthier living environments. We are committed to keeping up with technological advancements by using the latest electronically-operated precision machines, accelerating the production of world-class products with excellent quality.`;

	return (
		<section className={styles.who_weAre}>
			<img src="/img/gradient-bg.svg" alt="" className={styles.float_img} />
			<div className="container position-relative">
				<div className="row d-flex align-items-center justify-content-between">
					<div className="col-md-6 col-xl-7">
						<h1>{Tr.tr("translation:Who_We_Are")}</h1>
						<div className="hr_red mbe_24 md_mx-auto"></div>
						<p dangerouslySetInnerHTML={{ __html: content }}></p>
						{!props.hideBtn && (
							<PrimaryBtn
								btn
								type="button"
								label={Tr.tr("translation:Read_More")}
								classes="md_w-100"
							/>
						)}
					</div>
					<div
						className={`col-md-6 ${
							props.bigCol ? "col-xl-5" : "col-xl-4"
						} d-none d-md-block`}>
						{props.children}
					</div>
				</div>
			</div>
		</section>
	);
};

export default WhoWeAre;
