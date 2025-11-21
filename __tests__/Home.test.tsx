import {fireEvent,render,screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '@/app/page'


function sum(a:number,b:number){
    return a+b
}

test('should be 2+3=5',()=>{
    expect(sum(2,3)).toBe(5)
        expect(sum(2,6)).toBe(8)

})

it('should have Docs text',()=>{
    render(<Home/>) //ARRANGE

    const el = screen.getByText('Docs') //ACT

    expect(el).toBeInTheDocument() //ASSERT
})