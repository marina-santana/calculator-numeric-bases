export const convertOctalToBinary = (octal: string): string => Number(parseInt(octal, 8)).toString(2)

export const convertOctalToDecimal = (octal: string): string => Number(parseInt(octal, 8)).toString()

export const convertOctalToHexadecimal = (octal: string): string => Number(parseInt(octal, 8)).toString(16)