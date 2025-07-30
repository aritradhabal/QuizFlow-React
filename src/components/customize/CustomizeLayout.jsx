import React from 'react';
import { useForm } from 'react-hook-form';

export default function CustomizeLayout() {
  const { register, handleSubmit, formState: { errors }, subscribe} = useForm();
  
  const onSubmit = (data) => {
    console.log(data);
  }
  
  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)} className="h-full bg-[#F8F8FB] flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 space-y-8">
          {/* Number of Questions Section */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-900">Number of Questions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Easy</label>
                <input 
                  {...register("easy", { required: true, min: 0, max: 10, valueAsNumber: true })} 
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-200 hover:border-gray-300" 
                  type="number" 
                  placeholder="0-10"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Medium</label>
                <input 
                  {...register("medium", { required: true, min: 0, max: 10, valueAsNumber: true })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-200 hover:border-gray-300" 
                  type="number" 
                  placeholder="0-10"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Hard</label>
                <input 
                  {...register("hard", { required: true, min: 0, max: 10, valueAsNumber: true })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-200 hover:border-gray-300" 
                  type="number" 
                  placeholder="0-10"
                />
              </div>
            </div>
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
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-700">Include Reading Material</h2>
            <textarea 
              {...register("material", { maxLength: 1200 })}
              className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-200 hover:border-gray-300 resize-none" 
              rows="6"
              placeholder="Paste your reading material here... (optional, max 1200 characters)"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-4">
            <button type="submit"
              className="cursor-pointer px-8 py-3 bg-pink-500 text-white font-semibold rounded-xl hover:bg-pink-500 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl focus:outline-none" 
              
            >
              Generate Quiz ✨
            </button>
          </div>
        </div>
        
      </div>
    </form>
  </>

  );
}