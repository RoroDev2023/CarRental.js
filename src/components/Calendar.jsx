import React from 'react'
import { Form, FormGroup } from "reactstrap";

const Calendar = () => {
  return ( 
    
    <div class="flex-col flex-wrap m-auto max-w-7xl bg-red-500 h-[280px] rounded-lg my-20 grid">
        <Form className="flex flex-wrap justifybg-black">
          <div className="flex items-center justify-between flex-wrap bg-black">
            <FormGroup class='h-6 w-28'>
              <select>
                <option value="ac">Car Model</option>
                <option value="non-ac">Non AC Car</option>
              </select>
            </FormGroup>
           
            <FormGroup>
              <input type="text" placeholder="From address" required />
            </FormGroup>

            <FormGroup>
              <input type="text" placeholder="To address" required />
            </FormGroup>

            <FormGroup >
              <input type="date" placeholder="Journey date" required />
            </FormGroup>

          
            <FormGroup>
              <select>
                <option value="ac">AC Car</option>
                <option value="non-ac">Non AC Car</option>
              </select>
            </FormGroup>

            <FormGroup>
              <button>Find Car</button>
            </FormGroup>
          </div>
        </Form>

    </div>    
  )
}

export default Calendar