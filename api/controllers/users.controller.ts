import { Request, Response } from 'express';

import { PrismaClient } from '../node_modules/.prisma/client'

const prisma = new PrismaClient()



export const register = async (req: Request, res: Response) => {
    try {
       
    } catch (error) {
        
    }
} 


export const login = async (req: Request, res: Response) => {

}

export const getUsers = async (req: Request, res: Response) => {
    try{
    const users = await prisma.user.findMany()
    res.json(users)
    }catch(err){
        console.log(err)
    }
   
}

export const getUser = async (req: Request, res: Response) => {

}