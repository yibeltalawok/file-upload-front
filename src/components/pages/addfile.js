import React from "react";
import Layout from "../layout/layout";
import { Axios } from "axios";
import { useState, useEffect} from "react";
import { useForm } from "react-hook-form";
import { fileUpload } from "../../actions/fileAction";
import { useDispatch, useSelector } from "react-redux";
import {eplusappfile} from "../../actions/filename";
import Img1 from '../../img/imgs1.jpg';
import Img3 from '../../img/imgs2.jpg';
import Img2 from '../../img/imgs3.jpg';
import Img4 from '../../img/csm.jpeg';
import SimpleImageSlider from "react-simple-image-slider";
   
const Addfile=(props) =>{
  const images = [
    { url:Img1 },
    { url:Img2 }, 
    { url:Img3 },
    { url:Img4 }
   ];
  const { handleSubmit,register,formState: { errors }} = useForm();
  // const { files } = useSelector((state) => state.files);
  const dispatch = useDispatch();

    // const setImgfile = (e) => {
    //   setFile (e.target.files[0])
    // }
    // const OnSubmit = (data, e) => {
    // if(!selectedType){
    //   alert("የምትመዘግበውን አይነት አልመረጥህም ስለዚህ ሊመዘገብልህ አይችልም")
    //   }
    // else if(fileName !==''){
    //     const fileData =new FormData()
    //     fileData.append("file", files)
    //     fileData.append("fileName", fileName)
    //     fileData.append("type", selectedType)
    
    //     dispatch(eplusappfile(fileData));
    //     alert("በትክክል መመዝገብ ችላዋል")
    //    }
    //   else{
    //     alert("እባክዎን የተሰጡትን ቦታዎች ብትክክል መሙላትዎን ያረጋግጡ ")
    //   }
    //   }
    
  const [name, setFile] = useState([]);
   const OnSubmit =(e) => {
      const formData=new FormData()
      //  console.log("file==",name)
      if(name==null){
        alert("መመዝገብ የፈለጉትን ፋይል ያስገቡ")
      }
      else{
        for (let i = 0; i < name.length; i++) {
          formData.append('name', name[i]);
           }
             console.log("Good try=",formData.get('name'));
             // for(let [name, value] of formData) {
             //   console.log(`${name} = ${value}`); // key1 = value1, then key2 = value2
             //   }
           dispatch(eplusappfile(formData));
           window.location.reload(false);
          alert("በትክክል መመዝገብ ችላዋል")
          setFile ([])
          }}
    return(
        <>
     <Layout/>
  <div className="lg:flex mt:3 sm:block ">      
    <div className=" shadow-gray-600 lg:w-5/12 lg:ml-5 sm:w-4/12 m-1 lg:p-10  border-gray-400 rounded-lg sm:ml-0 sm:p-1">
      <SimpleImageSlider
      className="mt-5"
        width={400}
        height={200}
        images={images}
        showBullets={true}
        showNavs={true}
        slideDuration={3}
        autoPlay 
      />
      <br />
      <h4 className="  w-full">
         ሃሎ ጤና ይስጥልን ኢጵላሣጵ ነው!ኢጵላሣጵ የመረጃ ምጥቀቶችና የአክሲዮን ገበያ አልሚ ተቋም ነው።ኢጵላሣጵ
         ለመረጃ አጠቃቀም፣ ደህንነት፣ ልውውጥና 
         ክምችት (አደልክ) የሚረዱ ሙያዊ አገልግሎቶችን ፍልግ፣ ጥንት፣ ንድፍ፣ ቅምር፣ ሙክር፣ ትግብር፣ ጥግንና ዝምን ነው።የራሱ ዋና የንግድ አድራሻ ህንፃ ላይ 
         ከሳምንት እስከ ሳምንት ያለቅድመ ሁኔታ 24 ሰዓት ሥርት፣ ኢጵላሣጵ ዲጅታል መንደር ግንብት ነው።
      </h4>
  </div>
    <div className="bg-white flex mr-10 mt-5 sm:ml-3 lg:ml-7">
      <form onSubmit={handleSubmit(OnSubmit)}>
        <h4 className="text-center w-3/4">
        ይህ ድርጅታችን ኢጵላሣጵ  ፋይል ፣ ስዕል ወይም ቪዲዮ መጨመር ሲፈልግ በማንኛውም ስአት መጨመር  የሚችልበት ገጽ ሲሆን "ገብተው ይምረጡ" እሚለውን 
        በመጫን የሚፈልጉትን ያህል የመረጃ አይነት ዝርዝር ከመረጡ በኋላ "የመረጡትን ያስቀምጡ" እሚለውን በመጫን ማስቀመጥ ይችላሉ።
        </h4>
       <div className="flex w-full h-52 items-center justify-center bg-grey-lighter lg:-ml-28 md:-ml-10 sm:ml-1">
          <label className="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide
                       uppercase border border-blue cursor-pointer hover:bg-blue -ml-12">
              <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                 <path
                   d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
              </svg>
              <label className="block">
              <span className="mt-2 text-base leading-normal cursor-pointer">ገብተው ይምረጡ </span>
              <input  type="file" onChange={(e) => setFile(e.target.files)} name="name" multiple 
              className="block w-full text-slate-500 file:mx-4 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 
               file:text-violet-700 hover:file:bg-violet-100 cursor-pointer"
              />
              </label>
         </label>
       </div> 
       <div className="flex w-full h-32 items-center justify-center">
         <button className="relative inline-flex md:ml-8 items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br
            from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 
            dark:focus:ring-green-800">
            {/* <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                 የመረጡትን ያስቀምጡ !
            </span> */}
            <span className="inline-block animate-pulse rounded-bd p-2 bg-teal-400 text-white text-lg font-semibold">                 
              የመረጡትን ያስቀምጡ !
              <svg className="w-6 h-6 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
            </svg>
           </span>
          </button>
         </div> 
       </form>
      </div>
    </div>
   </>
  )}
export default Addfile;