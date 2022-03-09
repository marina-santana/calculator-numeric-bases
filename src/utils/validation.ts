export const ERROR_MESSAGE = 'no result'

export const resultIsValid = (result: string): string => parseInt(result) ? result : ERROR_MESSAGE