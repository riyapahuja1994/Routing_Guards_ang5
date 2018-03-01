interface IGeoCode{
	lat: string,
	long:string
}

interface IAddress{
	street:string,
	suite:string,
	city:string,
	zipcode:string,
	geo:IGeoCode
}
interface ICompany{
	name:string,
	catchPhrase:string,
	bs:string
}
export interface IUser{
    "id": number,
    "name": string,
    "username": string,
    "email": string,
    "address": IAddress,
    "phone": string,
    "website": string,
    "company": ICompany
  }