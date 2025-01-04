import { useTranslation } from "react-i18next";

// Styles
import styles from "./Samples.module.scss";

const Samples = () => {
	const { i18n } = useTranslation();
	const currLang = i18n.language;

	const samples = [
		{
			id: 1,
			image: "/img/sample1.svg",
			titleEn: "We make things simple",
			titleAr: "نحن نجعل الأمور بسيطة",
			descEn:
				"Simplicity is often the key to creating great designs and projects. It helps in making ideas more accessible and solutions more user-friendly.",
			descAr:
				"غالبًا ما تكون البساطة هي المفتاح لإنشاء تصميمات ومشاريع رائعة. فهي تساعد في جعل الأفكار أكثر سهولة في الوصول إليها والحلول أكثر سهولة في الاستخدام.",
		},
		{
			id: 2,
			image: "/img/sample2.svg",
			titleEn: "Never compromise on quality",
			titleAr: "لا تتنازل أبدًا عن الجودة",
			descEn:
				"That's a powerful principle! Combining simplicity with uncompromised quality is a great approach. It ensures that even though things are made straightforward, they still meet the highest standards.",
			descAr:
				"هذا مبدأ قوي! إن الجمع بين البساطة والجودة غير المساومة هو نهج رائع. فهو يضمن أنه على الرغم من أن الأمور بسيطة، إلا أنها لا تزال تلبي أعلى المعايير.",
		},
		{
			id: 3,
			image: "/img/sample3.svg",
			titleEn: "Deadline is essential to us",
			titleAr: "الموعد النهائي ضروري بالنسبة لنا",
			descEn:
				"Meeting deadlines while maintaining high quality and simplicity is a remarkable combination. It reflects a strong work ethic.",
			descAr:
				"إن الالتزام بالمواعيد النهائية مع الحفاظ على الجودة العالية والبساطة يشكلان مزيجًا رائعًا. ويعكس ذلك أخلاقيات العمل القوية.",
		},
	];

	return (
		<div className={styles.samples}>
			<div className="container">
				<div className="row">
					{samples.map((sample) => (
						<div className="col-md-6 col-lg-4 mb-4 mb-lg-0" key={sample.id}>
							<div className={styles.sample_card}>
								<div className={styles.img}>
									<img src={sample.image} alt="" />
								</div>
								<h5 className="fs_20 fw_700 primary mb_8 text-center">
									{currLang === "ar" ? sample.titleAr : sample.titleEn}
								</h5>
								<p className="fs_16 fw_500 text text-center">
									{currLang === "ar" ? sample.descAr : sample.descEn}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Samples;
