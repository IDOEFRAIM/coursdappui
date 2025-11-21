import { comments } from "./data";

export async function GET(){
    return Response.json(comments)
}

export async function POST(request:Request){
    const comment = await request.json()
    
    const newComment = {
        id:comments.length + 1,
        comment : comment.comment
    }
    comments.push(newComment)
    return Response.json(JSON.stringify(newComment),{
        headers:{"Content-Type":"appliction/json"},
        status:201
    })
}