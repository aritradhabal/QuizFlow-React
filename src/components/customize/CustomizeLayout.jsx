import { useEffect } from 'react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useOutletContext } from 'react-router'



function CustomizeLayout() {
  const {getUser_data} =  useOutletContext();

  const { register, handleSubmit, setError, clearErrors, formState: { errors }, watch} = useForm();
  


  const countQuestions = () => {
    const easy = (watch("easy")) || 0;
    const medium = (watch("medium")) || 0;
    const hard = (watch("hard")) || 0;
    
    return easy + medium + hard;
  }
  const countwords= () => {
    const text = watch("material") || "";
    const words = text.trim().split(/\s+/);
    return words.length;
  }
  const onSubmit = (data) => {
    if (countQuestions() < 1) {
      setError("formError", {
        type: "manual",
        message: "You must create at least 1 question."
      });
      return;
    }
    if (Number.isNaN(data.easy)) {
      data.easy=0
    }
    if (Number.isNaN(data.medium)) {
      data.medium=0
    }
    if (Number.isNaN(data.hard)) {
      data.hard=0
    }

    getUser_data(data);
  }
  
  useEffect(() => {
    if (countQuestions() >= 0) {
      clearErrors("formError");
  }
  }, [watch("easy"), watch("medium"), watch("hard")]);

  return (
    <>

    <form onSubmit={handleSubmit(onSubmit)} className="h-full bg-[#F8F8FB] flex items-center justify-center md:p-4">
      <div className="w-full max-w-2xl">
        
        <div className="bg-white rounded-2xl shadow-md md:border md:border-gray-100 p-8 space-y-8">
          {/* Number of Questions Section */}
          <div className="space-y-4">
            <h2 className="font-medium text-gray-900">Number of Questions <span className={countQuestions() > 0 ? "text-xs font-normal" : "hidden"}>Current: {countQuestions()} Out of 30.</span></h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Easy</label>
                <input 
                  {...register("easy",{
                    min : {value: 0, message:"Minimum limit is 0 Easy Questions"},
                    max: {value: 10, message:"Maximum limit is 10 Easy Questions. "},
                    valueAsNumber: true 
                    })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-200 hover:border-gray-300" 
                  type="number"
                  placeholder="0-10"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Medium</label>
                <input 
                    {...register("medium",{
                    min : {value: 0, message:"Minimum limit is 0 Medium Questions"},
                    max: {value: 10, message:"Maximum limit is 10 Medium Questions. "},
                    valueAsNumber: true 
                    })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-200 hover:border-gray-300" 
                  type="number" 
                  placeholder="0-10"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Hard</label>
                <input 
                    {...register("hard",{
                    min : {value: 0, message:"Minimum limit is 0 Hard Questions"},
                    max: {value: 10, message:"Maximum limit is 10 Hard Questions. "},
                    valueAsNumber: true 
                    })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-200 hover:border-gray-300" 
                  type="number" 
                  placeholder="0-10"
                />
              </div>
            </div>
          </div>
          <div>
            <p className={errors.easy ? "text-red-500" : "hidden"}>{errors.easy?.message}</p>
            <p className={errors.medium ? "text-red-500 " : "hidden"}>{errors.medium?.message}</p>
            <p className={errors.hard ? "text-red-500" : "hidden"}>{errors.hard?.message}</p>
            <p className={countQuestions() > 30 ? "text-red-500" : "hidden"}>Keep total questions under 30.</p>
            <p className={watch("easy")<0 || watch("medium")<0 || watch("hard")<0 ? "text-red-500" : "hidden"}>Number of Questions can't be Negative.</p>
            <p className={errors.formError?.message ? "text-red-500" : "hidden"}>{errors.formError?.message}</p>

          </div>
          {/* Grade Level and Language */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Grade Level</label>
              <select {...register("grade",{required: true, value:"Undergraduate"})} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-200 hover:border-gray-300 bg-white">
                <option value="High School">High School</option>
                <option value="Undergraduate">Undergraduate</option>
                <option value="Post-Graduate">Post-Graduate</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Language</label>
              <select {...register("language",{required: true, value:"English"})} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-200 hover:border-gray-300 bg-white">
                <option value="English">English</option>
              </select>
            </div>
          </div>

          {/* Reading Material Section */}
          <div className="space-y-2">
            <h2 className="font-medium text-gray-700">Include Reading Material <span className={countwords() > 1 ? "text-xs font-normal" : "hidden"}>Word Count: {countwords()} Out of 1200.</span></h2>
            <textarea 
              {...register("material", { maxLength: 1200 })}
              className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-200 hover:border-gray-300 resize-none" 
              rows="6"
              placeholder="Paste your reading material here... (optional, max 1200 words)"
            />
          </div>
          


          {/* Submit Button */}
          <div className="flex justify-center">
            <button type="submit"
              className="cursor-pointer px-8 py-3 bg-pink-500 text-white font-semibold rounded-md hover:bg-pink-500 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-md focus:outline-none" 
              
            >
              Generate
            </button>
          </div>
          
        </div>
        
      </div>
    </form>
  </>

  );
}
export default CustomizeLayout;