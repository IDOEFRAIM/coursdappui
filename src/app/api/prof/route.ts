import { prof as profs } from "../../../../data/oeuvres";

export async function GET(request:Request){
    
    return Response.json(profs)
}

export async function POST(request:Request){
    const prof = await request.json()

    
    const newProf = {
        id:profs.length+1,
        name:prof.name,
        matery:prof.matery
    }
    profs.push(newProf)

    console.log(profs)
    return Response.json(JSON.stringify(newProf))
}

