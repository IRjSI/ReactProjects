import conf from '../conf/conf'
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteURL)
            .setProject(conf.appwriteProjectID)

        this.account = new Account(this.client)
    }

    async createAccount({email,password,name}) {
        try {
            const userAccount = await this.account.create(ID.unique(),email,password,name)
            if (userAccount) {
                return this.login({email,password})
            }
            else {
                return userAccount
            }
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

const authService = new AuthService();

export default authService