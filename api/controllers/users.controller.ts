import { Request, Response } from 'express';
import { PrismaClient } from '../node_modules/.prisma/client'
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";


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
    const {email, password} = req.body
    try{
        const user = await prisma.user.findUnique({
           where: {
            email:email
        }
    })
        if(!user) return res.status(404).json({ message: 'Invalid email ' })
        console.log(user, email, password)
        const checkPassword = bcrypt.compareSync(password, user.password)
        if (!checkPassword) return res.status(404).json({ message: 'Invalid password ' })

        jwt.sign({
            id: user.id},
            "secretkey",{}
            ,(error, token) => {
                if(error) throw error;
                res.cookie("access_token", token, {
                    httpOnly: true,
                }).status(200).json({id:user.id, email: user.email})
            }
        )
        

    } catch (error) {
        return res.status(500).json(error)
    }
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