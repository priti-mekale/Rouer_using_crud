export interface IgenericResponse<T>{
    status:'sucess'|'error';
    message:string;
    data :T

}