export class User {
    constructor(public email: string,
                public name: string,
                private password: string,
                public role: string) {}
    
    matches(another: User): boolean {
        return another !== undefined && another.email === this.email && another.password === this.password
    }
}

export const users: {[key:string]: User} = {
    "victormf.df@hotmail.com": new User('victormf.df@hotmail.com', 'Matheus Freitas', '#Matheus123', 'Admin'),
    "amanda@gmail.com": new User('amanda@gmail.com', 'Amanda Albuquerque', '#Amanda123', 'Colaboradora')
}