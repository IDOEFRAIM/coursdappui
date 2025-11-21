import { TextInput ,Button} from "flowbite-react"    
import { ArrowRightIcon } from "flowbite-react"

const Page=async ()=>{

    await new Promise((resolve)=>{
            setTimeout(()=>{
                resolve('We delay for testing timeout')
            },10000)
        })
    return (
        <div className="flex flex-col">prof
        </div>
    )
}

export default Page