import React from 'react';
import { useForm } from 'react-hook-form';

export default function CustomizeLayout() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <div className="min-h-full bg-[#F8F8FB] grid place-items-center">
      <form className="grid gap-y-2 border-1 bg-white rounded-md p-2" onSubmit={handleSubmit(onSubmit)}>

        <div className='grid'>
          <p>Number of Questions</p>
          <div className=' grid'>
            <p>Easy</p>  
            <input className="outline-none border-1 rounded-md" type="number" placeholder="Number of Easy Questions" {...register("Number of Easy Questions", {required: true, max: 10, min: 0})} />

            <p>Medium</p>
            <input className="outline-none border-1 rounded-md" type="number" placeholder="Number of Medium Questions" {...register("Number of Medium Questions", {required: true, max: 10, min: 0})} />

            <p>Hard</p>
            <input className="outline-none border-1 rounded-md" type="number" placeholder="Number of Hard Questions" {...register("Number of Hard Questions", {required: true, max: 10, min: 0})} />
          </div>
        
        </div>
        
        <div className='grid'>
          <div>
              <p>Grade Level</p>
              <select {...register("Grade Level", { required: true })}>
                <option value="High School">High School</option>
                <option value=" Undergraduate"> Undergraduate</option>
                <option value=" Post-Graduate"> Post-Graduate</option>
              </select>
          </div>
          <div>
            <p>Include reading material ↘️</p>
          </div>
        </div>
        <div className='border-1 rounded-md'>
            <textarea className="outline-none w-full " {...register("Include reading material", {min:0 , max: 1000})} />
        </div>

        <button className='cursor-pointer border-1 rounded-sm px-1 w-fit' type="submit">Generate</button>
      
      </form>
    </div>
  );
}