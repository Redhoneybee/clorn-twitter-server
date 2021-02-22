export interface IUser {
    _id: String;
    username: String;
    email: String;
    phone: String;
    password: String;
    salt: String;
    birthday: Date;
    createAt: Date;
}
