import { Request, Response } from 'express';
import { PrismaClient } from '../node_modules/.prisma/client'
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient()



export const register = async (req: Request, res: Response) => {
    try {
        const salt = bcrypt.genSaltSync(10)
       const {username, email, password} = req.body;
       const user = await prisma.user.create({
        data: {username, email, password: bcrypt.hashSync(password, salt)}
       })
        return res.status(200).json(user)
    } catch (error) {
        return res.status(500).json(error)
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