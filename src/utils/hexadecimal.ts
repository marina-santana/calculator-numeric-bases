export const convertHexadecimalToBinary = (hexadecimal: string): string => Number(parseInt(hexadecimal, 16)).toString(2)

export const convertHexadecimalToDecimal = (hexadecimal: string): string => Number(parseInt(hexadecimal, 16)).toString()

export const convertHexadecimalToOctal = (hexadecimal: string): string => Number(parseInt(hexadecimal, 16)).toString(8)
