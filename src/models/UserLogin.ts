interface UserLogin{
    id: number;
    name: string;
    usuario: string;
    password: string;
    image: string;
    token?: string| null;
}

export default UserLogin;