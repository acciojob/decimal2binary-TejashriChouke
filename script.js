function decimalToBinary(decimalNumber) {
  if (decimalNumber === 0) {
    return '0';
  }

  let binary = '';
  while (decimalNumber > 0) {
    // Append the remainder when dividing by 2 to the binary string
    binary = (decimalNumber % 2) + binary;
    // Divide the number by 2 and take the integer part
    decimalNumber = Math.floor(decimalNumber / 2);
  }

  return binary;
  
}

window.decimalToBinary = decimalToBinary;
