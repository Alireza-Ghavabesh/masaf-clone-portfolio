
import validator from 'validator';

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



export function validatePhoneNumber(phoneNumber: string): boolean {
  // Ensure only digits are present using a regular expression
  const digitsOnly = phoneNumber.replace(/\D/g, '');

  // Check for exactly 11 digits
  if (digitsOnly.length !== 11) {
    return false; // Not exactly 11 digits
  }

  // Basic check for valid mobile phone format (using strict mode for accuracy)
  if (!validator.isMobilePhone(digitsOnly, undefined)) {
    return false; // Invalid format
  }

  return true; // Valid phone number with exactly 11 digits
}

export function validateEmail(email: string): boolean {
  if (validator.isEmail(email)) {
    return true;
  }
  return false;
}

export function sleep(time: number) {
  const sec = time * 1000;
  return new Promise((resolve, regect) => {
    setTimeout(() => {
      resolve('sleeping...');
    }, sec);
  });
}


export function getNestjsServerAdress(): string {
  return `${process.env.NEXT_PUBLIC_HTTPS_RESTAPI_ADDRESS !== "" ? process.env.NEXT_PUBLIC_HTTPS_RESTAPI_ADDRESS : process.env.NEXT_PUBLIC_HTTP_RESTAPI_ADDRESS}`
}

export function getNextjsServerAdress(): string {
  return `${process.env.NEXT_PUBLIC_HTTPS_DOMAIN_ADDRESS !== "" ? process.env.NEXT_PUBLIC_HTTPS_DOMAIN_ADDRESS : process.env.NEXT_PUBLIC_HTTP_DOMAIN_ADDRESS}`
}