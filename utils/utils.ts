export function convertToPersianNumbers(input: string): string {
  const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
  let output = "";
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    if (char >= "0" && char <= "9") {
      output += persianDigits[parseInt(char)];
    } else {
      output += char;
    }
  }
  return output;
}

// Delay simulator function
export function delaySimulator(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
