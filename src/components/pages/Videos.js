import Layout from "../layout/layout";
import { useDispatch, useSelector } from "react-redux";
import BaseUrl from "../../utils/base_url";
import React, { useState,useEffect} from "react";
import "react-datepicker/dist/react-datepicker.css";
import {deleteFile,viewfiles} from "../../actions/filename";
import { saveAs } from 'file-saver'

  let initialValue = [
     {id: "", name: ""},
    ]
let check;
// let index;
// let k;

  const Videos = () =>{
      // dispatch
       const dispatch = useDispatch();            
        const [selectedValue, setSelected] = useState("");
        const [selectedValue2, setSelected1] = useState("");
        const [selectedDate, setselectedDate] = useState(null);
        const [scheduledSearches, setScheduledSearches] = useState(initialValue);
        const [videoList, setVideoList] = useState(initialValue);

        const files = useSelector((stateDate) => stateDate.fileList);
        // const daylist = useSelector((stateDate) => stateDate.fileDay.file);   
        // const monthlist = useSelector((stateDate) => stateDate.fileMonth.file);   
        // const yearlist = useSelector((stateDate) => stateDate.fileYear.file);   

        const[filterDay,setFilterDay]=useState([])
        const[filterMonth,setFilterMonth]=useState([])
        const[filterYear,setFilterYear]=useState([])
          const someList=()=>{
          setScheduledSearches([])
          setVideoList([])
          setSelected("")
          setSelected1("")
          setselectedDate("")
  
           for(let i=(files?.fileList?.length)-1;i>=0;i--){
            // alert(files?.files?.fileList[i]?.type)
           if(files?.fileList[i]?.type=="video")
            // files.files?.map((item) => arrOfSomeFileList.push({id:item.id,name:item.name}));
            setVideoList(list => list.concat({id:files?.fileList[i]?.id,name:files?.fileList[i]?.name,fileName:files.fileList[i]?.name.split('-')[2],createdAt:files?.fileList[i]?.createdAt.split('T')[0]}));
             }} 

          //    if(videoList.length<=10){
          //  index=videoList.length
          //     k=0;
          //    }
          //    else{
          //     index=videoList.length
          //     k=index-10;
          //    }

      const allList=()=>{
        setSelected("")
        setSelected1("")
        setselectedDate("")
        setVideoList([])
        setScheduledSearches([])
        for(let i=(files?.fileList?.length)-1;i>=0;i--){
          if(!files){
            alert("No file registered")
            break;
          }
          else{
            if(files?.fileList[i]?.type=="video")
            setScheduledSearches(scheduledSearches => scheduledSearches.concat({id:files?.fileList[i]?.id,name:files?.fileList[i]?.name,fileName:files.fileList[i]?.name.split('-')[2],createdAt:files?.fileList[i]?.createdAt.split('T')[0]}));
            }
          }
          }
     //Fetch image uploaded in year 
      const uploadInYear=()=>{
        setScheduledSearches([]);
        setVideoList([]);
        setSelected1("")
        setselectedDate("")
        for(let i=(files?.fileList?.length)-1;i>=0;i--){
          if(!selectedValue){
            alert("please select Year")
            break;
          }
          else{
             if(files.fileList[i]?.createdAt.split('-')[0]==selectedValue && files?.fileList[i]?.type=="video")
             setScheduledSearches(scheduledSearches => scheduledSearches.concat({id:files?.fileList[i]?.id,name:files?.fileList[i]?.name,fileName:files.fileList[i]?.name.split('-')[2],createdAt:files?.fileList[i]?.createdAt.split('T')[0]}));
            }}}
            
     //Fetch image uploaded in Month 
      const uploadInMonth=()=>{
        setScheduledSearches([]);
        setVideoList([]);
        setselectedDate("")
        for(let i=(files?.fileList?.length)-1;i>=0;i--){
          if(!selectedValue){
            alert("please select Year")
            break;
          }
          else if( !selectedValue2){
            alert("please select Month")
            break;
          }
          else {
             if(files.fileList[i]?.createdAt.split('-')[0]==selectedValue && files.fileList[i]?.createdAt.split('-')[1]==selectedValue2){
              if(files?.fileList[i]?.type=="video")
              setScheduledSearches(scheduledSearches => scheduledSearches.concat({id:files?.fileList[i]?.id,name:files?.fileList[i]?.name,fileName:files.fileList[i]?.name.split('-')[2],createdAt:files?.fileList[i]?.createdAt.split('T')[0]}));
            }}
            }}
          const getByDate=()=>{
            setScheduledSearches([]);
            setVideoList([]);
                for(let i=(files?.fileList?.length)-1;i>=0;i--){
                  if(!selectedDate){
                    alert("please select Day")
                    break;
                  }
                  if(!selectedValue){
                    alert("please select Year")
                    break;
                  }
                  else if( !selectedValue2){
                    alert("please select Month")
                    break;
                  }
                  else {
                     if(files.fileList[i]?.createdAt.split('-')[0]==selectedValue && 
                     files.fileList[i]?.createdAt.split('-')[1]==selectedValue2 && 
                     files.fileList[i]?.createdAt.split('-')[2].split('T')[0]==selectedDate){
                        if(files?.fileList[i]?.type=="video")  
                        setScheduledSearches(scheduledSearches => scheduledSearches.concat({id:files?.fileList[i]?.id,name:files?.fileList[i]?.name,fileName:files.fileList[i]?.name.split('-')[2],createdAt:files?.fileList[i]?.createdAt.split('T')[0]}));
                      }}
                  }}
                  const handleDownloadVideo = async (name) => {
                    try {
                      saveAs(`http://localhost:11278/videos/${name}`, 'video.mp4') // Put your image url here.

                    } catch (error) {
                      console.error(error);
                    }};

                    const handleClick = event => {
                      setSelected(event.target.value);
                      check="year"
                    };
                    const handleClick2 = event => {
                      setSelected1(event.target.value);
                      check="month"
                    };
                    const handleClick3=event=>{
                      setselectedDate(event.target.value);
                      check="day"
                      }
                      const selectToView=()=>{
                    
                        if(check==='year')
                           uploadInYear()
                        if(check==='month')
                           uploadInMonth()   
                        if(check==='day')
                           getByDate()    
                          }
                          
          const deleteImage=(id)=>{
            const data={
              folder:"videos",
              ID:id
               }
            if (window.confirm('እርግጠኛነህ ዪሄን ማጥፋት ፈልገሐል?'))  
            {
              dispatch(deleteFile(data));
              window.location.reload(false);
  
            }         
          } 

          // const filterDayValue=()=>{
          //   setFilterDay([])
          //   for(let i=0;i<(daylist?.length);i++){
          //     if(daylist[i]?.type=="video")
          //    setFilterDay(scheduledSearches => scheduledSearches.concat(daylist[i]?.day));
          //      }
          //     }
          // const filterMonthValue=()=>{
          //       setFilterMonth([])
          //       for(let i=0;i<(monthlist?.length);i++){
          //         if(monthlist[i]?.type=="video")
          //         setFilterMonth(scheduledSearches => scheduledSearches.concat(monthlist[i]?.month));
          //          }
          //         }
          // const filterYearValue=()=>{
          //           setFilterYear([])
          //           for(let i=0;i<(yearlist?.length);i++){
          //             if(yearlist[i]?.type=="video")
          //             setFilterYear(scheduledSearches => scheduledSearches.concat(yearlist[i]?.year));
          //              }
          //             }
      // use effect
      useEffect(() => {
        dispatch(viewfiles())
        // filterDayValue();
        // filterMonthValue();
        // filterYearValue();
        // dispatch(getPostDay())
        // dispatch(getPostMonth())
        // dispatch(getPostYear())
        someList()
      }, []); 
 return(
   <>
  <Layout/> 
   <div className="lg:flex md:block mt:3  sm:block ">      
    <div className="mt-4 lg:ml-5 w-1/4">
    <div className="ml-8 flex mt-5">
    <button className="bg-slate-50 w-20  h-10 rounded-md" 
     onClick={()=>allList()}>ሁሉም</button>
     <button className="bg-slate-50 w-20 ml-12 h-10 rounded-md" 
     onClick={()=>someList()}>የቅርብ ጊዜ</button>
    </div>    <br /><br />
     <div className="flex ">
     <select className=" rounded-sm h-12 w-24 bg-zinc-100 text-center m-0.5 font-bold"
      value={selectedValue}
       onChange={handleClick}>
               <option selected value="" className=" font-bold">አመት</option>
                <option  value="2020" className=" font-bold">2020</option>               
                <option  value="2021" className=" font-bold">2021</option>
                <option  value="2022" className=" font-bold">2022</option>
                <option  value="2023" className=" font-bold">2023</option>
                <option  value="2024" className=" font-bold">2024</option>
                <option  value="2025" className=" font-bold">2025</option>
                <option  value="2026" className=" font-bold">2026</option>
                <option  value="2027" className=" font-bold">2027</option>
                <option  value="2028" className=" font-bold">2028</option>
                <option  value="2029" className=" font-bold">2029</option>
                <option  value="2030" className=" font-bold">2030</option>
                  {/* {
                  filterYear?.map(item => {
                    return (<option value={item}>{item}</option>);
                       })} */}
                </select> 
                <select className=" rounded-sm h-12 w-24 bg-zinc-100 text-center m-0.5 font-bold"
                onChange={handleClick2}
                value={selectedValue2}
                 >
                 <option selected value="">ወር</option>
                <option  value="01" className=" font-bold">1</option>               
                <option  value="02" className=" font-bold">2</option>
                <option  value="03" className=" font-bold">3</option>
                <option  value="04" className=" font-bold">4</option>
                <option  value="05" className=" font-bold">5</option>
                <option  value="06" className=" font-bold">6</option>
                <option  value="07" className=" font-bold">7</option>
                <option  value="08" className=" font-bold">8</option>
                <option  value="09" className=" font-bold">9</option>
                <option  value="10" className=" font-bold">10</option>
                <option  value="11" className=" font-bold">11</option>
                <option  value="12" className=" font-bold">12</option>               
                   {/* {
                  filterMonth?.map(item => {
                    return (<option value={item}>{item}</option>);
                       })} */}
               </select>
               <select className=" rounded-sm h-12 w-24 bg-zinc-100 text-center m-0.5 font-bold"
               value={selectedDate}
               onChange={handleClick3}>
               <option  selected value="">ቀን</option>
               <option  value="01" className=" font-bold">1</option>               
                <option  value="02" className=" font-bold">2</option>
                <option  value="03" className=" font-bold">3</option>
                <option  value="04" className=" font-bold">4</option>
                <option  value="05" className=" font-bold">5</option>
                <option  value="06" className=" font-bold">6</option>
                <option  value="07" className=" font-bold">7</option>
                <option  value="08" className=" font-bold">8</option>
                <option  value="09" className=" font-bold">9</option>
                <option  value="10" className=" font-bold">10</option>
                <option  value="11" className=" font-bold">11</option>
                <option  value="12" className=" font-bold">12</option>               
                <option  value="13" className=" font-bold">13</option>
                <option  value="14" className=" font-bold">14</option>
                <option  value="15" className=" font-bold">15</option>
                <option  value="16" className=" font-bold">16</option>
                <option  value="17" className=" font-bold">17</option>
                <option  value="18" className=" font-bold">18</option>
                <option  value="19" className=" font-bold">19</option>
                <option  value="20" className=" font-bold">20</option>
                <option  value="21" className=" font-bold">21</option>
                <option  value="22" className=" font-bold">22</option>
                <option  value="23" className=" font-bold">23</option>
                <option  value="24" className=" font-bold">24</option>
                <option  value="25" className=" font-bold">25</option>
                <option  value="26" className=" font-bold">26</option>
                <option  value="27" className=" font-bold">27</option>
                <option  value="28" className=" font-bold">28</option>
                <option  value="29" className=" font-bold">29</option>
                <option  value="30" className=" font-bold">30</option>
                <option  value="31" className=" font-bold">31</option>
                 {/* {
                  filterDay?.map(item => {
                    return (<option value={item}>{item}</option>);
                       })} */}
                </select> 
              </div>
                <br />
                <button className="bg-slate-100 w-20 ml-28 h-10" 
                 onClick={selectToView} type="button">
                  እይት</button>
       </div>

       <div className=" lg:ml-1 flex flex-wrap mt-5 sm:ml-1  rounded-lg ">   
          {
         (scheduledSearches.length)>0
          ?(
            scheduledSearches.map((file) => (

              <div className="   flex w-80 h-96 m-2 ml-10 flex-wrap rounded-lg pr-0.5"key={file.id}>              
          <video controls className="peer w-full hover h-72 cursor-pointer rounded-2xl justify-center"
           src={`${BaseUrl}/videos/${file.name}`}  type="video/mp3">
          </video> 
          <span className="ml-5 "> {file.fileName} </span>
          <span className=" ml-32 text-cyan-600 text-sm ">በ {file.createdAt} የተለቀቀ</span>
          <div class="hidden peer-hover:flex hover:flex absolute
           w-[350px]
           flex-col bg-white  mt-64 h-20">
        <a
         className=" h-4 w-4 text-center  bold ml-64 -mt-3 p-4 cursor-pointer"
         href={`http://localhost:11278/videos/${file.name}`} 
         >
         ክፍት </a>
       <button  className=" h-4 w-4 text-center  bold ml-64 p-4 cursor-pointer"
         onClick={()=>deleteImage(file.id)}            
          >ጥፍት </button> 
       <button  className=" h-4 w-4 text-center  bold ml-64 p-4 cursor-pointer"
        onClick={()=>handleDownloadVideo(file.name)}            
         >ውርድ</button> 
      </div>
       </div> 
     ))):
     (<div className="flex flex-wrap h-auto mt-5 md:-m-2  sm:ml-1">   
            {
         videoList.slice(0,10).map((file) => 

         <div className="   flex w-80 h-96 m-2 ml-10 flex-wrap rounded-lg pr-0.5"key={file.id}>              
          <video controls className="peer w-full hover h-72 cursor-pointer rounded-2xl justify-center"
           src={`${BaseUrl}/videos/${file.name}`}  type="video/mp3">
          </video> 
          <span className="ml-5 "> {file.fileName} </span>
          <span className=" ml-32 text-cyan-600 text-sm ">በ {file.createdAt} የተለቀቀ </span>
          <div class="hidden peer-hover:flex hover:flex absolute
           w-[350px]
           flex-col bg-white  mt-64 h-20">
        <a
         className=" h-4 w-4 text-center  bold ml-64 -mt-3 p-4 cursor-pointer"
         href={`http://localhost:11278/videos/${file.name}`} 
         >
         ክፍት </a>
       <button  className=" h-4 w-4 text-center  bold ml-64 p-4 cursor-pointer"
         onClick={()=>deleteImage(file.id)}            
          >ጥፍት </button> 
       <button  className=" h-4 w-4 text-center  bold ml-64 p-4 cursor-pointer"
        onClick={()=>handleDownloadVideo(file.name)}            
         >ውርድ</button> 
      </div>
       </div> 
          )}
  </div>
          )}
 </div> 
</div> 
  </>
  )}
export default Videos;