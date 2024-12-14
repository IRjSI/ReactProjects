import conf from "../conf/conf.js";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
    client = new Client();
    databases;
    bucket;
    constructor() {
        this.client
            .setEndpoint(conf.appwriteURL)
            .setProject(conf.appwriteProjectID)

        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    async createPost({title, slug, content, featuredImage, status, userID}) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseID, 
                conf.appwriteCollectionID, 
                slug, 
                {
                    title, content, featuredImage, status, userID
                }
            )
        } catch (error) {
            console.log(error);
        }
    }

    async updateDocument(slug, {title, content, featuredImage, status}) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug,
                {
                    title, content, featuredImage, status
                }
            )
        } catch (error) {
            console.log(error);
        }
    }

    async deleteDocument(slug) {
        try {
            await this.databases.deleteDocument(conf.appwriteDatabaseID,conf.appwriteCollectionID,slug)
            return true
        } catch (error) {
            console.log("");
            return false
        }
    }

    async getDocument(slug) {
        try {
            return await this.databases.getDocument(conf.appwriteDatabaseID,conf.appwriteCollectionID,slug)
        } catch (error) {
            console.log("");
            return false
        }
    }

    async getDocuments() {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                [
                    Query.equal('status','active')
                ]
            )
        } catch (error) {
            console.log('');
            return false
        }
    }

    //file upload service

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketID,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log('');
            return false
        }
    }

    async deleteFile(fileID) {
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketID,
                fileID
            )
            return true
        } catch (error) {
            console.log('');
            return false
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketID,
            fileId
        )
    }
}

const service = new Service()

export default service