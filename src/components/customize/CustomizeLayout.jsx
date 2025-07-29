import React from 'react';
import { useForm } from 'react-hook-form';

export default function CustomizeLayout() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <>  <div className='flex flex-col justify-center items-center px-10 py-10'>
            <form className='flex flex-wrap justify-center items-center border-1' onSubmit={handleSubmit(onSubmit)}>
            <input type="number" placeholder="Number of Easy Questions" {...register("Number of Easy Questions", {required: true, max: 10, min: 0})} />
            <input type="number" placeholder="Number of Medium Questions" {...register("Number of Medium Questions", {required: true, max: 10, min: 0})} />
            <input type="number" placeholder="Number of Hard Questions" {...register("Number of Hard Questions", {required: true, max: 10, min: -2})} />
            <textarea {...register("Include reading material", {min: 0, max:1000})} />
            <select {...register("Grade Level", { required: true })}>
                <option value="High School">High School</option>
                <option value=" Undergraduate"> Undergraduate</option>
                <option value=" Post-Graduate"> Post-Graduate</option>
            </select>

            <input type="submit" />
            </form>
        </div>
    </>
  );
}