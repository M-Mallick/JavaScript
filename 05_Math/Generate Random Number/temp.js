// Function to generate OTP
function generateOTP() {
	let digits = '0123456789'; // 10
	let OTP = '';
	let len = digits.length
	for (let i = 0; i < 4; i++) {
		OTP += digits[Math.floor(Math.random() * len)]; // 0.536*10 = 5.36 --> floor = 5
	}

	return OTP;
}

console.log("OTP of 4 digits: ")
console.log(generateOTP());
