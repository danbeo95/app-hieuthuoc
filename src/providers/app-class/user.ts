export class User{
    username:string  = '';
    password:string = '';
    role:number = 1;
    description:string = '';
    constructor(data?:any){
        if(data){
            this.parse(data);
        }

    }
    parse(data){
        if(data.username) this.username = data.username;
        if(data.password) this.password = data.password;
        if(data.role) this.role = data.role;
        if(data.description) this.description = data.description;
    }
    setUserName(username:string){
        this.username = username;
    }
    setPassword(password:string){
        this.password = password;
    }
    setRole(role:number){
        this.role = role;
    }
    setDescription(description:string){
        this.description =  description;
    }
}