import {
	clock,
	envelop,
	facebook,
	instagram,
	location,
	phone,
	tiktok,
	twitter,
} from "icons";
import styles from "./ContactInfo.module.scss";

// Styles
import { Link } from "react-router-dom";

const ContactInfo = () => {
	return (
		<div className={styles.contact_info}>
			<div className="mb-3">
				<h3 className="fs_18 fw_700 white pb_8 mb-3 bb_1_secondary">
					Contact Information
				</h3>
				<div className="d-flex align-items-center justify-content-start gap_8 mb-3">
					<span className="flex-shrink-0">{location}</span>
					<span className="fs_16 fw_500 white">
						Al-Ahsa, Al-Mubarraz, Dhahran Street
					</span>
				</div>
				<div className="d-flex align-items-center justify-content-start gap_8 mb-3">
					<span className="flex-shrink-0">{phone}</span>
					<span className="fs_16 fw_500 white">0543996880</span>
				</div>
				<div className="d-flex align-items-center justify-content-start gap_8 mb-3">
					<span className="flex-shrink-0">{envelop}</span>
					<span className="fs_16 fw_500 white">info@rouad-alkafah.sa</span>
				</div>
			</div>
			<div className="mb-3">
				<h3 className="fs_18 fw_700 white pb_8 mb-3 bb_1_secondary">
					Follow us
				</h3>
				<div className={styles.media}>
					<Link to="#">{facebook}</Link>
					<Link to="#">{tiktok}</Link>
					<Link to="#">{twitter}</Link>
					<Link to="#">{instagram}</Link>
				</div>
			</div>
			<div className="mb-3">
				<h3 className="fs_18 fw_700 white pb_8 mb-3 bb_1_secondary">
					Work Hours
				</h3>
				<div className="d-flex align-items-center justify-content-start gap_8 mb-3">
					<span className="flex-shrink-0">{clock}</span>
					<span className="fs_16 fw_500 white">
						Saturday to Thursday From 8 AM to 9 PM
					</span>
				</div>
			</div>
		</div>
	);
};

export default ContactInfo;
