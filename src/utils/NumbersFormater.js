export function NumbersFormater(num) {
	num = Number(num);
	num = Math.abs(num);

	let formattedNumber;

	if (num >= 1000000000000) {
		formattedNumber =
			(num / 1000000000000).toFixed(1).replace(/\.0$/, "") + "T";
	} else if (num >= 1000000000) {
		formattedNumber = (num / 1000000000).toFixed(1).replace(/\.0$/, "") + "B";
	} else if (num >= 1000000) {
		formattedNumber = (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
	} else if (num >= 1000) {
		formattedNumber = (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
	} else {
		formattedNumber = num;
	}

	return formattedNumber;
}
