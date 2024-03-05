import {
	capitalize,
	reverseString,
	calculator,
	caesarCipher,
	analyzeArray,
} from "./jest_practice";

test("capitalize first character string", () => {
	expect(capitalize("ramiro")).toBe("Ramiro");
});

test("reverse string", () => {
	expect(reverseString("ramiro")).toBe("orimar");
});

test("calculator", () => {
	expect(calculator.add(2, 3)).toBe(5);
	expect(calculator.subtract(2, 3)).toBe(-1);
	expect(calculator.divide(6, 2)).toBe(3);
	expect(calculator.multiply(3, 2)).toBe(6);
});

describe("caesar cipher", () => {
	test("maintains lowercase", () => {
		expect(caesarCipher("godzilla", 3)).toBe("jrgclood");
	});
	test("keeps punctuation constant", () => {
		expect(caesarCipher("godzilla!!", 3)).toBe("jrgclood!!");
	});
	test("respects uppercase", () => {
		expect(caesarCipher("GODZILLA!!", 3)).toBe("JRGCLOOD!!");
	});
	test("respects mixed characters", () => {
		expect(caesarCipher("gOdZillA#!", 3)).toBe("jRgClooD#!");
	});
});

describe("array", () => {
	test("minimum matches", () => {
		expect(analyzeArray([1, 8, 3, 4, 2, 6]).min).toBe(1);
		expect(analyzeArray([1, 8, 3, 4, 2, 6]).avg).toBe(4);
		expect(analyzeArray([1, 8, 3, 4, 2, 6]).max).toBe(8);
		expect(analyzeArray([1, 8, 3, 4, 2, 6]).length).toBe(6);
	});
});
