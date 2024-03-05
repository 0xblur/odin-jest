function capitalize(string) {
	const firstLetter = string.slice(0, 1);
	const stringCapitalized = firstLetter.toUpperCase() + string.slice(1);
	return stringCapitalized;
}

function reverseString(string) {
	let arr = [];
	for (const char of string) {
		arr.unshift(char);
	}
	return arr.join("");
}

const calculator = {
	add: (a, b) => a + b,
	subtract: (a, b) => a - b,
	divide: (a, b) => a / b,
	multiply: (a, b) => a * b,
};

function caesarCipher(string, shift = 3) {
	const table = createCipheredAlphabet(shift);
	const chars = string.split("");
	const cipheredString = [];
	for (const char of chars) {
		let needsCapitalization = false;
		if (char == char.toUpperCase()) {
			needsCapitalization = true;
		}
		const lowerCasedChar = char.toLowerCase();
		if (lowerCasedChar in table) {
			const cipher = table[lowerCasedChar];
			if (needsCapitalization) {
				cipheredString.push(cipher.toUpperCase());
			} else {
				cipheredString.push(cipher);
			}
		} else {
			cipheredString.push(char);
		}
	}
	// Transform to string before return
	return cipheredString.join("");

	function createCipheredAlphabet(shift = 3) {
		const alphabet = "abcdefghijklmnopqrstuvwxyz";
		const table = {};
		for (let i = 0; i < alphabet.length; i++) {
			const char = alphabet[i];
			const distanceFromEnd = alphabet.slice(i).length;

			if (distanceFromEnd <= shift) {
				// Count from start
				const difference = shift - distanceFromEnd;
				let cipheredChar = alphabet[0 + difference];
				table[char] = cipheredChar;
			} else {
				let cipheredChar = alphabet[i + shift];
				table[char] = cipheredChar;
			}
		}
		return table;
	}
}

function analyzeArray(arr) {
	const obj = {
		min: 99999999,
		avg: 0,
		max: 0,
		length: 0,
	};

	for (const item of arr) {
		if (item < obj.min) {
			obj.min = item;
		}
		if (item > obj.max) {
			obj.max = item;
		}
		obj.avg += item;
		obj.length++;
	}

	obj.avg = obj.avg / obj.length;

	return obj;
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
