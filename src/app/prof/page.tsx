
const Page=async ()=>{
//this page aimed at testing loading
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