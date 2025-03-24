"use client"
import {submitAction} from '@/actions/form';
import { useRef } from 'react';

export default function Home() {

let ref =useRef()
  return (
    <div className="w-2/3 mx-auto">
      <form ref={ref} action= {(e) => {submitAction(e); ref.current.reset()}}>
        <div >
          <label htmlFor="Name">Name: </label>
          <input className="text-black bg-white " type="text" name="name" id="name" />
        </div>

        <div>
          <label htmlFor="Address">Address: </label>
          <input className="text-black bg-white" type="text" name="add" id="add" />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}
