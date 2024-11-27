import conf from '../conf/conf'
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint()
            .setProject()

        this.account = new Account(this.client)
    }

    async createAccount({email,password,name}) {
        try {
            return this.login({email,password})
        } catch (error) {
            console.log("auth service :: createAccount error");
        }
    }

    async login({email,password}) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            console.log("auth service :: login error");
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("auth service :: getCurrent error");
        }
        return null;
    }

    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("auth service :: logout error");
        }
    }
}

const authService = new AuthService;

export default authService