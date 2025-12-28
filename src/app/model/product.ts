type status='pending'|'cancelled'|'delivered'


export interface Iproduct{
    name:string;
    desc:string;
    status:status;
}

export interface IgenericResponse<T>{
    status:'sucess'|'error';
    message:string;
    data :T

}