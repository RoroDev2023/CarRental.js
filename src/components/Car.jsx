import React from 'react'
import { Form, FormGroup } from 'reactstrap'

const Car = () => {
  return (
    <div className="m-auto max-w-7xl bg-[#f8f8f8] h-[280px] rounded-lg my-20 ">
      <div className="flex flex-wrap text-4xl ml-10 mt-16 font-bold">
        <h1 className="mt-4">Rent a Car</h1>
      </div>
      <Form className="flex flex-row flex-wrap px-6 mt-10">
        <FormGroup className="flex flex-col w-1/3 px-4 py-2">
          <label htmlFor="carModel">Select your car model</label>
          <select id="carModel" className="w-full h-8 rounded-md bg-[#222324] text-white">
            <option value="Ford">Ford</option>
            <option value="Volvo">Volvo</option>
            <option value="Fiat">Fiat</option>
          </select>
        </FormGroup>
        <FormGroup className="flex flex-col w-1/3 px-4 py-2">
          <label htmlFor="pickUp">Pick Up</label>
          <select id="pickUp" className="w-full h-8 rounded-md bg-[#222324] text-white">
            <option value="Baku">Baku</option>
            <option value="Paris">Paris</option>
            <option value="Berlin">Berlin</option>
          </select>
        </FormGroup>
        <FormGroup className="flex flex-col w-1/3 px-4 py-2">
          <label htmlFor="dropOff">Drop Off</label>
          <select id="dropOff" className="w-full h-8 rounded-md bg-[#222324] text-white">
            <option value="Baku">Baku</option>
            <option value="Paris">Paris</option>
            <option value="Berlin">Berlin</option>
          </select>
        </FormGroup>
        <FormGroup className="flex flex-col w-1/3 px-4 py-2">
          <label htmlFor="carModel">Pick Up Date</label>
          <input 
            class="w-full h-8 rounded-md bg-[#222324] text-white"
            type="date"
          />

        </FormGroup>
        <FormGroup className="flex flex-col w-1/3 px-4 py-2">
          <label htmlFor="pickUp">Drop Off Date</label>
          <input 
            class="w-full h-8 rounded-md bg-[#222324] text-white"
            type="date"
          />
        </FormGroup>
        <FormGroup className="flex flex-col w-1/3 px-4 py-2 self-center">
          <button className="text-white bg-blue-700 w-full h-10 rounded-md mt-4">Submit</button>
        </FormGroup>
      </Form>
    </div>
  )
}

export default Car

