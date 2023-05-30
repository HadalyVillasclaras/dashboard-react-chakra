
import axios from "axios"

export type httpMethods =  "GET" | 'POST' | 'PUT'| 'DELETE';

export class http { 

    headers :any;

    methodName:httpMethods = 'POST';

    url:string;

    requestBody : any;

    constructor(url:string, method?:string,  requestBody?:any) {
        
        this.url = url;
        this.headers = {'Content-Type': 'application/json'};
        
        if (method && method.length) {
            this.methodName = method as httpMethods;
        }

        if (requestBody && requestBody!= null) {
            this.requestBody = requestBody;
        }
     
      }

      async request(): Promise<any> {
        
        const response = await axios({
            method: this.methodName as string,
            url:this.url, 
            headers:this.headers,
            data: this.requestBody
        })
        return response;
    }

    async post(): Promise<any> {
        this.methodName = 'POST';
        return this.request();
    }

    async get(): Promise<any> {
        this.methodName = 'GET';
        return this.request();
    }

    async put(): Promise<any> {
        this.methodName = 'PUT';
        return this.request();
    }

    async delete(): Promise<any> {
        this.methodName = 'DELETE';
        return this.request();
    }

}

