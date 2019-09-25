import {Request,Response} from 'express'
import {connect} from '../database'
import {Post} from '../interface/Post'

export async function getPosts(req: Request, res: Response): Promise<Response | void> {
    try {
        const conn = await connect();
        const posts = await conn.query('SELECT * FROM posts');
        return res.json(posts[0]);
    }
    catch (e) { 
        console.log(e)
    }
}
export async function createPost(req:Request, res:Response){
    const newPost: Post = req.body
    
    return res.json({
        message: 'POST CREATED'
    })
}