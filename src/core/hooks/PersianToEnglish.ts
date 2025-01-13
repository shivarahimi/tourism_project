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

// تبدیل رشته به عدد، حذف حروف و کاراکترهای غیر عددی
export function convertToNumber(inputValue: string): { pureValue: string } {
  // حذف تمامی کاراکترهای غیر عددی (حروف و علائم)
  const numericString = inputValue?.toString()?.replace(/[^\d]/g, "");
  console.log(numericString);

  // در اینجا، خروجی به صورت رشته خواهد بود تا صفر ابتدایی حفظ شود
  return {
    pureValue: numericString, // اگر چیزی باقی نماند، "0" را باز می‌گرداند
  };
}
