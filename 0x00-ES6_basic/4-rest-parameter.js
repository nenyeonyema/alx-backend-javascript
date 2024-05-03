export default function returnHowManyArguments(...numbers) {
  	let count = 0;
	for (let i = 0; i < numbers.length; i++) {
		count += 1;
	}
	return count;
}
