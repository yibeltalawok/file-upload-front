import Layout from "../layout/layout";
import { useDispatch, useSelector } from "react-redux";
import BaseUrl from "../../utils/base_url";
import React, { useState,useEffect} from "react";
import { FiTrash2 } from "react-icons/fi";
import {deleteFile,viewfiles} from "../../actions/filename";

let initialValue = [
  {id: "", name: ""},]
let check
// let index;
// let k;
const Files = () =>{
      // dispatch
      const dispatch = useDispatch();
        const [selectedValue, setSelected] = useState("");
        const [selectedValue2, setSelected1] = useState("");
        const [selectedDate, setselectedDate] = useState(null);

        const [scheduledSearches, setScheduledSearches] = useState(initialValue);
        const [fileList, setFileList] = useState(initialValue);

        const files = useSelector((stateDate) => stateDate.fileList);
        // const daylist = useSelector((stateDate) => stateDate.fileDay.file);   
        // const monthlist = useSelector((stateDate) => stateDate.fileMonth.file);   
        // const yearlist = useSelector((stateDate) => stateDate.fileYear.file);
   

        const[filterDay,setFilterDay]=useState([])
        const[filterMonth,setFilterMonth]=useState([])
        const[filterYear,setFilterYear]=useState([])
        const someList=()=>{
          setSelected("")
          setSelected1("")
          setselectedDate("")  
          setFileList([])
          setScheduledSearches([])
           for(let i=(files?.fileList?.length)-1;i>=0;i--){
             if(files?.fileList[i]?.type=="application")
             setFileList(list => list.concat({id:files?.fileList[i]?.id,name:files?.fileList[i]?.name,fileName:files.fileList[i]?.name.split('-')[2]}));
             }}

      const allList=()=>{
        setSelected("")
        setSelected1("")
        setselectedDate("")
        setFileList([])
        setScheduledSearches([]);
        for(let i=(files?.fileList?.length)-1;i>=0;i--){
          if(!files){
            alert("No file registered")
            break;
          }
          else{
            if(files?.fileList[i]?.type=="application")
            setScheduledSearches(scheduledSearches => 
              scheduledSearches.concat({id:files?.fileList[i]?.id,name:files?.fileList[i]?.name,fileName:files.fileList[i]?.name.split('-')[2]}));
          }}}

     //Fetch image uploaded in year 
      const uploadInYear=()=>{
        setScheduledSearches([]);
        setFileList([]);
        setSelected1("")
        setselectedDate("")

        for(let i=(files?.fileList?.length)-1;i>=0;i--){
          if(!selectedValue){
            alert("please select Year")
            break;
          }
          else{
             if(files.fileList[i]?.createdAt.split('-')[0]==selectedValue && files?.fileList[i]?.type=="application")
             setScheduledSearches(scheduledSearches => 
              scheduledSearches.concat({id:files?.fileList[i].id,name:files?.fileList[i]?.name,fileName:files.fileList[i]?.name.split('-')[2]}));
            
            }}
          }
     //Fetch image uploaded in Month 
      const uploadInMonth=()=>{
        setScheduledSearches([]);
        setFileList([]);
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
             if(files.fileList[i]?.createdAt.split('-')[0]==selectedValue &&
             files.fileList[i]?.createdAt.split('-')[1]==selectedValue2){
              if(files?.fileList[i]?.type=="application")
              setScheduledSearches(scheduledSearches => 
                scheduledSearches.concat({id:files?.fileList[i]?.id,name:files?.fileList[i]?.name,fileName:files.fileList[i]?.name.split('-')[2]}));
             }}
          }}
          const getByDate=()=>{
            setScheduledSearches([]);
            setFileList([]);

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
                    // alert(files[i].Day)
                     
                     if(files.fileList[i]?.createdAt.split('-')[0]==selectedValue && 
                        files.fileList[i]?.createdAt.split('-')[1]==selectedValue2){
                      if(files?.fileList[i]?.type=="application"&& files.fileList[i]?.createdAt.split('-')[2].split('T')[0]==selectedDate)  {
                          setScheduledSearches(scheduledSearches =>
                             scheduledSearches.concat({id:files?.fileList[i]?.fileList[i]?.id,name:files?.fileList[i]?.name,fileName:files.fileList[i]?.name.split('-')[2]}));
                        }
                    }}
                  }}
         
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
           
         const deleteFileData=(id)=>{
           const data={
           folder:"files",
           ID:id
               }
      if (window.confirm('እርግጠኛነህ  ዪሄን ማጥፋት ፈልገሐል?'))   {
        dispatch(deleteFile(data)) 
        window.location.reload(false);
                    }}

                //     const filterYearValue=()=>{
                //       setFilterYear([])
                //     for(let i=0;i<(yearlist?.length);i++){
                //        if(yearlist[i]?.type=="application")
                //       setFilterYear(scheduledSearches => scheduledSearches.concat(yearlist[i]?.year));
                //         }
                //       }
                //   const filterMonthValue=()=>{
                //       setFilterMonth([])
                //     for(let i=0;i<(monthlist?.length);i++){
                //       if(monthlist[i]?.type=="application")
                //       setFilterMonth(scheduledSearches => scheduledSearches.concat(monthlist[i]?.month));
                //         }
                //       }
                // const filterDayValue=()=>{
                //        setFilterDay([])
                //        for(let i=0;i<(daylist?.length);i++){
                //         if(daylist[i]?.type==="application")
                //         setFilterDay(scheduledSearches => scheduledSearches.concat(daylist[i]?.day));
                //           }
                //           // alert(dayData.length)
                //          }
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
    <div className="ml-6 flex mt-5">
    <button className="bg-slate-50 w-20  h-10 rounded-md" 
     onClick={()=>allList()}>ሁሉም</button>
     <button className="bg-slate-50 w-20 ml-12 h-10 rounded-md" 
     onClick={()=>someList()}>የቅርብ ጊዜ</button>
    </div>    <br /><br />
     <div className="flex m-3 ">
     <select className=" rounded-sm h-12 w-24 bg-zinc-100 text-center font-bold"
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
               <option value="">ቀን</option>
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
             <button className="bg-slate-100 w-20 ml-28 h-10 rounded-md" 
               onClick={selectToView} type="button">
              እይት
             </button>
          </div>
        <br /><br />
        <div className="lg:flex lg:flex-wrap md:block  md:-m-2  sm:ml-1">
          {
         (scheduledSearches.length)>0
          ?( 
           scheduledSearches.map((file) => (
            <div className="flex lg:w-1/3 md:w-1/2 flex-wrap sm:w-full " key={file.id}>
            <div className="w-full">
            <ul>
            <li className="bg-slate-100 rounded-lg mt-8 ml-5"> 
                <button   className=" float-right  rounded -mt-0.5 mr-0.5 text-red-500"
                 onClick={()=>deleteFileData(file.id)}            
                  >
                  X
                </button> 
                <a className=" underline text-sky-700 font-medium ml-2 -mt-6" href={`${BaseUrl}/files/${file.name}`}>
                {file.fileName}
               </a>
          </li>
        </ul>
       </div>
      </div>
        )))
      :(<div className="lg:flex lg:flex-wrap md:block  w-full md:-m-2  sm:ml-1">
        {(
        fileList.slice(0,15).map((file) => (
          <div className="flex lg:w-1/3 md:w-1/2 flex-wrap  sm:w-full " key={file.id}>
           <div className="w-full ">
            <ul>
              <li className="bg-slate-100 rounded-lg mt-10 ml-5"> 
                <button   className=" float-right  rounded -mt-0.5 mr-0.5 text-red-500"
                 onClick={()=>deleteFileData(file.id)}            
                  >
                  X
                </button> 
                <a className=" underline text-sky-700 font-medium ml-2 -mt-6" href={`${BaseUrl}/files/${file.name}`}>
                {file.fileName}
               </a>
          </li>
        </ul>
       </div>
      </div>
      )))}
      </div>
    )}
   </div> 
  </div> 
  </>
  )}
export default Files;