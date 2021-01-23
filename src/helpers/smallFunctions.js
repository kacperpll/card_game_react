export const extractPathFromUrl = (url) => url.split("/")[5]

export const randomNum = (amount) => Math.floor(Math.random() * amount)

export const checkIfExist = (data) => data ? data : "No data"