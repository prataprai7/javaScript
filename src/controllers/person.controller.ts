import { Request, Response } from "express";
import {data }from "../models/person.model";
import { HttpException } from "../exceptions/http-exception";
import { ApiResponseHelper } from "../utils/api-response";


export class PersonController{
    //1. Get - get all
    async getAllPerson(req: Request, res: Response){
        //later paginated results
        try{
            const someVar: any= {}
            // implement exception handling
            if(!someVar.name){
                throw new HttpException(400, "Name is required");
            }
            // simulate exception (server error)
            someVar.name.getAll();
            // return res.status(202).json(data);
            return ApiResponseHelper.success(res, data, 200, "Success"); //consistent api
        }catch(err: Error | unknown | any){
            // return res.status(500).json({message: "Failed to get"})
            return ApiResponseHelper.error(
                res,
                err?.message || "Failed to get",
                err.status || 500
            );
        }
    }
}