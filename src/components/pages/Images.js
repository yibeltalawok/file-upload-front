import Layout from "../layout/layout";
import { useDispatch, useSelector } from "react-redux";
import BaseUrl from "../../utils/base_url";
import React, { useState,useEffect} from "react";
import "react-datepicker/dist/react-datepicker.css";
import { deleteFile,viewfiles} from "../../actions/filename";
let check;
// let index;
// let k;
const Image = (props) =>{
      // dispatch
        const dispatch = useDispatch();
      // use effect
        const files = useSelector((stateDate) => stateDate.fileList);
        const [scheduledSearches, setScheduledSearches] = useState([]);
        const [listData, setListData] = useState([]); 
        const [selectedValue, setSelected] = useState("");
        const [selectedValue2, setSelected1] = useState("");
        const [selectedDate, setselectedDate] = useState(null);
        const handleClick = (event) => {
          setSelected(event.target.value);
          check="year"
        };
        const handleClick2 = (event) => {
          setSelected1(event.target.value);
          check="month"
        };
        const handleClick3=(event)=>{
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
        const someList=()=>{     
          setSelected("")
          setSelected1("")
          setselectedDate("")
          setScheduledSearches([])
          setListData([])
          for(let i=(files.fileList?.length)-1;i>=0;i--){
            if(!files){
              alert("No file registered")
              break;
            }
            else{
              if(files.fileList[i]?.type=="image")
              setListData(scheduledSearches => scheduledSearches.concat({id:files?.fileList[i]?.id,name:files?.fileList[i]?.name,createdAt:files?.fileList[i]?.createdAt.split('T')[0],fileName:files.fileList[i]?.name.split('-')[2]}));
              }}} 
           const allList=()=>{
           setListData([])
           setSelected("")
           setSelected1("")
           setselectedDate("")
           setScheduledSearches([])
           let schedule =[]     
         for(let i=(files.fileList?.length)-1;i>=0;i--){
           if(files.fileList[i]?.type==="image"){
           schedule.push({
             id:files.fileList[i]?.id,
             name:files.fileList[i]?.name,
             createdAt:files.fileList[i]?.createdAt.split('T')[0],
             fileName:files.fileList[i]?.name.split('-')[2]
           })
         }}
         setScheduledSearches(schedule)
        }
     //Fetch image uploaded in year 
      const uploadInYear=()=>{
        setScheduledSearches([])
        setListData([])
        setSelected1("")
        setselectedDate("")

        // handleClick(e)
        for(let i=(files?.fileList?.length)-1;i>=0;i--){
          if(!selectedValue){
            alert("please select Year")
            break;
          }
          else{
             if(files.fileList[i]?.createdAt.split('-')[0]==selectedValue && files?.fileList[i]?.type=="image")
             setScheduledSearches(scheduledSearches =>
               scheduledSearches.concat({id:files?.fileList[i]?.id,name:files?.fileList[i]?.name,createdAt:files?.fileList[i]?.createdAt.split('T')[0],fileName:files.fileList[i]?.name.split('-')[2]}));
                   }}
                  }
     //Fetch image uploaded in Month 
      const uploadInMonth=()=>{
        setScheduledSearches([])
        setListData([])
        setselectedDate("")
        // handleClick2(e)
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
              if(files?.fileList[i].type=="image")
              setScheduledSearches(scheduledSearches => scheduledSearches.concat({id:files?.fileList[i]?.id,name:files?.fileList[i]?.name,createdAt:files?.fileList[i]?.createdAt.split('T')[0],fileName:files.fileList[i]?.name.split('-')[2]}));              }}
          }}
          const getByDate=()=>{
            setScheduledSearches([])
            setListData([])
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
                     if(files.fileList[i]?.createdAt.split('-')[0]==selectedValue && files.fileList[i]?.createdAt.split('-')[1]==selectedValue2 && files.fileList[i]?.createdAt.split('-')[2].split('T')[0]==selectedDate){
                        if(files?.fileList[i]?.type=="image")  
                        setScheduledSearches(scheduledSearches => scheduledSearches.concat({id:files?.fileList[i]?.id,name:files?.fileList[i]?.name,createdAt:files?.fileList[i]?.createdAt.split('T')[0],fileName:files.fileList[i]?.name.split('-')[2]}));            
                                }}
                           }}

        const handleSaveImage = async (e) => {
        fetch(e.target.href, {
          method: "GET",
          headers: {}
        })
          .then(response => {
            response.arrayBuffer().then(function(buffer) {
              const url = window.URL.createObjectURL(new Blob([buffer]));
              const link = document.createElement("a");
              link.href = url;
              link.setAttribute("download", "image.png"); //or any other extension
              document.body.appendChild(link);
              link.click();
            });
          })
          .catch(err => {
            console.log(err);
          });
      };
    
      const deleteImage=(id)=>{
        const data={
          folder:"images",
          ID:id
        }
    if (window.confirm('እርግጠኛነህ  ዪሄን ማጥፋት ፈልገሐል?')){
      dispatch(deleteFile(data));
      window.location.reload(false);
      }    
     }
      useEffect(() =>{
      dispatch(viewfiles())   
      someList()
    }, []); 
   return(
     <>
     <Layout/>
     <div className="lg:flex md:block mt:3 block ">      
     <div className="mt-4 lg:ml-5 md:ml-2  w-1/4">
     <div className="ml-8 flex mt-5">
     <button className="bg-slate-50 w-20  h-10 rounded-md" 
      onClick={()=>allList()}>ሁሉም</button>
     <button className="bg-slate-50 w-20 ml-12 h-10 rounded-md" 
     onClick={()=>someList()}>የቅርብ ጊዜ</button>
    </div>
    <br /><br />
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
                <button className="bg-slate-100 w-20 ml-28 h-10 rounded-md" 
                 onClick={selectToView} type="button">
                  እይት</button>
                <br />
            </div>
        <div className=" flex flex-wrap h-auto">   
            {
           (scheduledSearches.length)>0
              ?(
             scheduledSearches.map((file) => (
            <div className=" bg-slate-600 mb-16 lg:mt-20 md:mt-7 m-4  flex lg:w-80 lg:h-60 md:w-60 md:h-44 w-60 h-40
                           flex-wrap rounded-lg" key={file.id}>              
               {
             <img
            className=" peer w-full lg:h-60 md:h-60 h-40 hover:scale-50 transition cursor-pointer duration-700 rounded-lg"
             src={`${BaseUrl}/images/${file.name}`}  
             alt="A house with two children standing in front of it"
             onError={event => {
             event.target.src = "http://localhost:11278/images/default.png"
             event.onerror = null
            }}/> 
            }
          <div className="ml-8 ">
           <span > {file.fileName} </span> 
           <br /> 
           <span className=" sm:ml-2 lg:ml-32 text-cyan-600 text-sm ">በ {file.createdAt} የተለቀቀ</span>
           </div>    
          <div class="hidden peer-hover:flex hover:flex absolute
           w-[350px]
           flex-col bg-white mt-40 -ml-5 h-24">
        <a
         className=" h-4 w-4 text-center  bold ml-64 p-4 cursor-pointer -mt-2"
         href={`http://localhost:11278/images/${file.name}`} 
           >
          ክፍት
         </a>
       <button  className=" h-4 w-4 text-center  bold ml-64 p-4 cursor-pointer"
        onClick={()=>deleteImage(file.id)}            
          >ጥፍት
        </button> 
        <a
         className=" h-4 w-4 text-center  bold ml-64 p-4 cursor-pointer"
         href={`http://localhost:11278/images/${file.name}`}
         download
         onClick={e => handleSaveImage(e)}
        >
        ውርድ
      </a>
     </div>
       </div>
            ))):(
           <> 
        <div className=" flex flex-wrap h-auto">   
          {
            listData.slice(0,10)?.map((item) => 
          (      
            <div className=" bg-slate-600 mb-16 lg:mt-20 md:mt-7 m-4  flex lg:w-80 lg:h-60 md:w-60 md:h-44 w-60 h-40
                           flex-wrap rounded-lg" key={item.id}>              
               {
            <img
            className=" peer w-full lg:h-60 md:h-60 h-40 hover:scale-50 transition cursor-pointer duration-700 rounded-lg"
            src={`${BaseUrl}/images/${item.name}`}  
            alt="A house with two children standing in front of it"
            onError={event => {
            event.target.src = "http://localhost:11278/images/default.png"
            event.onerror = null
           }}/>}

          <div className="ml-8">
          <span > {item.fileName} </span> <br /> 
          {/* <span className="ml-32 text-cyan-600 text-sm w-full">በ {item.createdAt} የተለቀቀ</span> */}
          <span className=" sm:ml-2 lg:ml-32 text-cyan-600 text-sm ">በ {item.createdAt} የተለቀቀ</span>
          </div>    
          <div class="hidden peer-hover:flex hover:flex absolute
           w-[350px] flex-col bg-white mt-40 -ml-5 h-24">
        <a
         className=" h-4 w-4 text-center  bold ml-64 p-4 cursor-pointer -mt-2"
         href={`http://localhost:11278/images/${item.name}`} 
           >
          ክፍት
         </a>
       <button  className=" h-4 w-4 text-center  bold ml-64 p-4 cursor-pointer"
        onClick={()=>deleteImage(item.id)}            
          >ጥፍት
        </button> 
        <a
        className=" h-4 w-4 text-center  bold ml-64 p-4 cursor-pointer"
         href={`http://localhost:11278/images/${item.name}`}
         download
         onClick={e => handleSaveImage(e)}
        >
        ውርድ
      </a>
     </div>
       </div>
            ) 
             )}
        </div>
        
      {/* (<div className=" flex flex-wrap h-auto md:-m-2 p-3 sm:ml-1">   
          {
          files.fileList?.map((item) => 
          (      
           (item.type=='image') ?( 
            <div className="mb-16 m-5 flex w-80 h-60 flex-wrap rounded-lg"key={item.id}>               
               {
            <img
            className=" peer w-full h-60 p-5 hover:scale-50 transition cursor-pointer duration-700 rounded-lg"
            src={`${BaseUrl}/images/${item.name}`}  
            alt="A house with two children standing in front of it"
            onError={event => {
            event.target.src = "http://localhost:11278/images/default.png"
            event.onerror = null
           }}/> 
           }
          <div className="ml-8 ">
          <span > {item.name.split('-')[2]} </span> <br /> 
          <span className=" ml-32 text-cyan-600 text-sm ">በ {item.createdAt.split('T')[0]} የተለቀቀ</span>
          </div>    
          <div class="hidden peer-hover:flex hover:flex absolute
           w-[350px]
           flex-col bg-white mt-40 -ml-5 h-24">
        <a
         className=" h-4 w-4 text-center  bold ml-64 p-4 cursor-pointer -mt-2"
         href={`http://localhost:11278/images/${item.name}`} 
           >
          ክፍት
         </a>
       <button  className=" h-4 w-4 text-center  bold ml-64 p-4 cursor-pointer"
        onClick={()=>deleteImage(item.id)}            
          >ጥፍት
        </button> 
        <a
        className=" h-4 w-4 text-center  bold ml-64 p-4 cursor-pointer"
         href={`http://localhost:11278/images/${item.name}`}
         download
         onClick={e => handleSaveImage(e)}
        >
        ውርድ
      </a>
     </div>
       </div>
            ) 
          :(null))
             )}
        </div>
     ) */}
    </>
     )}
   </div> 
 </div> 
  </>
  )}
export default Image;