export interface Ipass{
    id: string;
    fullName: string;
    checkedIn: boolean;
    checkInDate: number|string;
    children: null | Ichildren[];
}


   export interface Ichildren {
      fName:string,
      age:number
}