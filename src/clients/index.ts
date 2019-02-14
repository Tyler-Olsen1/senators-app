export const SENATORS_URI = `https://raw.githubusercontent.com/CivilServiceUSA/us-senate/master/us-senate/data/us-senate.json`

export const getSenators = async (uri: string = SENATORS_URI): Promise<any> => await fetch(uri).then(res => res.json())
