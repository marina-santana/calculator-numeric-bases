import { NumericBases } from "../typings/global"
import { convertBinaryToDecimal, convertBinaryToHexadecimal, convertBinaryToOctal } from "./binary"
import { convertDecimalToBinary, convertDecimalToHexadecimal, convertDecimalToOctal } from "./decimal"
import { convertHexadecimalToBinary, convertHexadecimalToDecimal, convertHexadecimalToOctal } from "./hexadecimal"
import { convertOctalToBinary, convertOctalToDecimal, convertOctalToHexadecimal } from "./octal"
import { resultIsValid } from "./validation"

export const handleChangeDecimal = (decimal: string, dispatchFn: React.Dispatch<React.SetStateAction<NumericBases>>) => {
  const binary = convertDecimalToBinary(decimal)
  const octal = convertDecimalToOctal(decimal)
  const hexadecimal = convertDecimalToHexadecimal(decimal)

  const numericTypes = {
    binary: resultIsValid(binary),
    decimal,
    octal: resultIsValid(octal),
    hexadecimal: resultIsValid(hexadecimal),
  }

  dispatchFn(numericTypes)
}

export const handleChangeBinary = (binary: string, dispatchFn: React.Dispatch<React.SetStateAction<NumericBases>>) => {
  const decimal = convertBinaryToDecimal(binary)
  const octal = convertBinaryToOctal(binary)
  const hexadecimal = convertBinaryToHexadecimal(binary)

  const numericTypes = {
    binary,
    decimal: resultIsValid(decimal),
    octal: resultIsValid(octal),
    hexadecimal: resultIsValid(hexadecimal),
  }

  dispatchFn(numericTypes)
}

export const handleChangeHexadecimal = (hexadecimal: string, dispatchFn: React.Dispatch<React.SetStateAction<NumericBases>>) => {
  const decimal = convertHexadecimalToDecimal(hexadecimal)
  const octal = convertHexadecimalToOctal(hexadecimal)
  const binary = convertHexadecimalToBinary(hexadecimal)

  const numericTypes = {
    binary: resultIsValid(binary),
    decimal: resultIsValid(decimal),
    octal: resultIsValid(octal),
    hexadecimal
  }

  dispatchFn(numericTypes)
}

export const handleChangeOctal = (octal: string, dispatchFn: React.Dispatch<React.SetStateAction<NumericBases>>) => {
  const decimal = convertOctalToDecimal(octal)
  const hexadecimal = convertOctalToHexadecimal(octal)
  const binary = convertOctalToBinary(octal)

  const numericTypes = {
    binary: resultIsValid(binary),
    decimal: resultIsValid(decimal),
    octal,
    hexadecimal: resultIsValid(hexadecimal),
  }

  dispatchFn(numericTypes)
}