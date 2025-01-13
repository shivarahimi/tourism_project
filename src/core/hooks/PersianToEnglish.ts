export const convertToPersianNumbers = (input: string) => {
  const englishToPersian: { [key: string]: string } = {
    "0": "۰",
    "1": "۱",
    "2": "۲",
    "3": "۳",
    "4": "۴",
    "5": "۵",
    "6": "۶",
    "7": "۷",
    "8": "۸",
    "9": "۹",
  };

  return input.replace(/[0-9]/g, (match) => englishToPersian[match]);
};

// convertToNumber

export function convertToNumber(inputValue: string): { pureValue: string } {
  const numericString = inputValue?.toString()?.replace(/[^\d]/g, "");
  console.log(numericString);

  return {
    pureValue: numericString,
  };
}
