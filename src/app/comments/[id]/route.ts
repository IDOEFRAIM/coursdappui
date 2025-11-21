import { NextResponse } from "next/server"
import { comments } from "../data"

export async function GET(
    request:Request,
    {params}:{params:Promise<{id:string}>}
){
    const {id} =await params

    const comment  = comments.find((comment)=>comment.id == parseInt(id))

    console.log(comment)
    return NextResponse.json('get it')
}