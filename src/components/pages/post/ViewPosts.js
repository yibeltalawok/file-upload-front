    import React from "react";
    import Layout from "../../layout/layout";
    import {NavLink} from 'react-router-dom';
    import { useState, useEffect} from "react";
    import { useForm } from "react-hook-form";
    import { useDispatch, useSelector } from "react-redux";
    import {deletePost,
            viewPost,
            searchByDate,
            searchByMonth,
            searchByYear} from "../../../actions/postAction";
    import BaseUrl from "../../../utils/base_url";
      let initialValue = 
          [{
            id: "",
            title: "",
            description:"",
            file:""
            }]
      let check;
      const ViewPosts=(props) =>{
        const dispatch =useDispatch()
      const { handleSubmit,register,formState: { errors }} = useForm();
      const posts = useSelector(state => state.posts);     
      // alert(posts.posts.length) 
      const [selctedSearches, setSelctedSearches] = useState(initialValue);
      const [listData, setListData] = useState(initialValue);  
      const [titleList, setTitleList] = useState(initialValue);  
      const [title, setListTitle] = useState("");  
      const [selectedValue, setSelected] = useState("");
      const [selectedValue2, setSelected1] = useState("");
      const [selectedDate, setselectedDate] = useState(null);

//   //Fetch image uploaded in year 
    const uploadInYear=()=>{
    //  alert(posted.posted?.length)
    const searchData={year:selectedValue}
     dispatch(searchByYear(searchData)) 
      setListData([])
      setSelctedSearches([])
      setListTitle([])
      setTitleList([])
      setselectedDate("")
      setSelected1("")
      for(let i=0;i<=(posts.posts?.length)-1;i++){
        if(!selectedValue){
          alert("please select Year")
          window.location.reload(false);
          break; 
          }
       else{
         if(posts.posts[i]?.createdAt.split('-')[0]==selectedValue ) {
          setListData(scheduledSearches => scheduledSearches.concat({id:posts.posts[i]?.id,title:posts.posts[i]?.title,description:posts.posts[i]?.description,file:posts.posts[i]?.file}));
           setTitleList(list => list.concat({id:posts.posts[i]?.id,title:posts.posts[i]?.title}));
         }
        // else{
        //   alert("በዚህ አመት የተለቀቀ መንም  ነገር የለም")
        //   break;
        // }
        }}}
 //Fetch image uploaded in Month 
  const uploadInMonth=()=>{
    const searchData={year:selectedValue,month:selectedValue2}
   dispatch(searchByMonth(searchData)) 
    setListData([])
    setSelctedSearches([])
    setListTitle([])
    setTitleList([])
    setselectedDate("")
    for(let i=0; i<(posts.posts?.length);i++){
      if(!selectedValue){
        alert("please select Year")
        window.location.reload(false);
        break;
      }
      else {
         if(posts.posts[i]?.createdAt.split('-')[0]==selectedValue && posts.posts[i]?.createdAt.split('-')[1]==selectedValue2){
          setListData(scheduledSearches => scheduledSearches.concat({id:posts.posts[i]?.id,title:posts.posts[i]?.title,description:posts.posts[i]?.description,file:posts.posts[i]?.file}));
          setTitleList(list => list.concat({id:posts.posts[i]?.id,title:posts.posts[i]?.title}));
        }
        // else{
        //   alert("በዚህ ወር የተለቀቀ መንም  ነገር የለም")
        //   break;
        // }
      }}}
    const getByDate=()=>{
      const searchData={year:selectedValue,month:selectedValue2,day:selectedDate}
      dispatch(searchByDate(searchData)) 
      setListData([])
      setSelctedSearches([])
      setListTitle([])
      setTitleList([])
      for(let i=0; i<(posts.posts?.length);i++){
        if(!selectedValue){
           alert("please select Year")
           window.location.reload(false);
             break;
            }
         else if( !selectedValue2){
            alert("please select Month")
            window.location.reload(false);
            break;}
    else {
      // alert(posts.posts[i]?.createdAt.split('-')[2].split('T')[0]+"=="+selectedDate)
        if(posts.posts[i]?.createdAt.split('-')[0]==selectedValue && posts.posts[i]?.createdAt.split('-')[1]==selectedValue2 && posts.posts[i]?.createdAt.split('-')[2].split('T')[0]==selectedDate){
          setListData(scheduledSearches => scheduledSearches.concat({id:posts.posts[i]?.id,title:posts.posts[i]?.title,description:posts.posts[i]?.description,file:posts.posts[i]?.file}));
          setTitleList(list => list.concat({id:posts.posts[i]?.id,title:posts.posts[i]?.title}));
        }
  
      }
    }
      // if(listData.length==0)
      //   alert("በዚህ ቀን የተለቀቀ መንም  ነገር የለም")

        }
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
    if(check==='year'){
      uploadInYear()
        }
    else if(check==='month')
       {uploadInMonth()}
    else if(check==='day')
    {getByDate()}
     else{
      dataUsed()
     }}
     const dataUsed=()=>{
      setSelected("")
      setSelected1("")
      setselectedDate("")
     setSelctedSearches([])
     setListData([]) 
     setTitleList([])
     for(let i=0; i<(posts.posts?.length);i++){
      setListData(list => list.concat({id:posts.posts[i]?.id,title:posts.posts[i]?.title,description:posts.posts[i]?.description,file:posts.posts[i]?.file}));
      setTitleList(list => list.concat({id:posts.posts[i]?.id,title:posts.posts[i]?.title}));
    }}
    // console.log("listData==",listData[0]?.title) 
    const selectByTitle=(title)=>{
      setSelctedSearches([])
      setListData([])
      for(let i=0; i<(posts.posts?.length);i++){
        if(posts.posts[i]?.title==title)
      setListData(scheduledSearches => scheduledSearches.concat({id:posts.posts[i]?.id,title:posts.posts[i]?.title,description:posts.posts[i]?.description,file:posts.posts[i]?.file}));     
      }
      for(let i=0; i<(posts.posts?.length);i++){
        if(posts.posts[i]?.title==title)
          continue;
          setListData(list => list.concat({id:posts.posts[i]?.id,title:posts.posts[i]?.title,description:posts.posts[i]?.description,file:posts.posts[i]?.file}));  
       }}
    const searchByTitle=()=>{
    if(title){
      setSelctedSearches([])
      setListData([])
      setTitleList([])
      for(let i=0; i<(posts.posts?.length);i++){
        if(posts.posts[i]?.title==title)
      setListData(scheduledSearches => scheduledSearches.concat({id:posts.posts[i]?.id,title:posts.posts[i]?.title,description:posts.posts[i]?.description,file:posts.posts[i]?.file}));     
      setTitleList(list => list.concat({id:posts.posts[i]?.id,title:posts.posts[i]?.title})); 
      }}}

     const deletePosts=(id)=>{
     dispatch(deletePost(id))
     window.location.reload(false);
        } 
    useEffect(() => {
    dispatch(viewPost()) 
    dataUsed()
      }, []);
  return(
        <>
  <Layout/>
   <div className="lg:flex sm:block" >  
        {/*Left part  */}
    <div className="flex w-1/4">
    <div className=" block w-3/4">
     <div className=" border-2 mt-2 ml-3 w-72 lg:fixed ">
     <button className=" rounded-lg h-10 w-20 bg-zinc-100 text-center m-3 ml-5 font-bold">
       <NavLink   to ='/AddPost'>ጭምር</NavLink>
      </button>
      <button className=" rounded-lg h-10 w-20 bg-zinc-100 text-center m-3 ml-16 font-bold"
      onClick={()=>dataUsed()}
      >
        <NavLink   to ='/ViewPosts'>እይት</NavLink>
      </button>
    </div>

    <div style={{height:"480px"}}
     className="mt-24 m-5 border-2 ml-5 lg:w-80 w-60  p-5 overflow-y-scroll h-96 space-x-3 lg:fixed overflow-scroll ">
     {
      (titleList.length>0)?
      (titleList?.map( (item)=>(
    <div key={item.id} className="flex">
     <ul className="ml-5 underline m-1 list-outside list-disc">
      <button onClick={()=>selectByTitle(item.title)}>
      <li className=" text-sky-500 hover:underline float-left m-">{item.title}</li></button>
     </ul>

   </div>
    ))):(posts.posts?.map( (item)=>(
    <div key={item.id} className="flex">
     <ul className="ml-5 underline m-1 list-outside list-disc">
      <button onClick={()=>selectByTitle(item.title)}>
      <li className=" text-sky-500 hover:underline float-left m-">{item.title}</li></button>
     </ul>
   </div>
    )))
    }
 </div>
 </div>
 <div className=" lg:hidden ml-48">
   <div className="">
    <select
    value={selectedValue}
          onChange={handleClick}
            className=" rounded-sm h-12 mt-44 w-24 bg-zinc-100 text-center m-0.5 font-bold">
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
    <br />
    <select 
    value={selectedValue2}
    onChange={handleClick2}
    className=" rounded-sm h-12 mt-5 w-24 bg-zinc-100 text-center m-0.5 font-bold">
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
    <br />
    <select 
    value={selectedDate}
    onChange={handleClick3}
    className=" rounded-sm h-12 mt-5 w-24 bg-zinc-100 text-center m-0.5 font-bold">
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
  <button className="bg-slate-100 w-20 ml-36 h-10 rounded-md" 
  type="button"
  onClick={selectToView} 
  >
  እይት</button>
  <br />
  </div>
 </div>
</div>      
<div className="block w-4/5 lg:ml-40 ml-10" >
<div className="bg-slate-50 rounded-2xl w-3/4   mt-7 ml-12 border-collapse border-2 flex">
<input type="search"
          className="bg-slate-50 rounded-2xl w-11/12 h-12 p-5 "
          value={title||""}
          onChange={(e)=>setListTitle(e.target.value)}
          placeholder="ርእስ ..." >
      </input>
      <button className=" bg-gray-300 rounded-r-lg p-3 font-bold ml-1 h-full" onClick={()=>searchByTitle()}>ፍልግ</button>
   </div>
      <br /><br /><br />
       {
        (listData.length>0)?
        listData.map((item)=>(
         <div key={item.id} className=" h-auto max-w-4xl border-t-4 shadow-lg border-spacing-1 rounded-xl text-center lg:ml-5 md:-2  lg:p-5  m-6 shadow-slate-400 pl-2 pr-2 " >
         {/* to={`/AddPost/${item.id}`} */}
        <button onClick={()=>deletePosts(item.id)} className=" float-right text-red-600 mr-1 lg:-mt-4 md:-mt-0.5">ጥፍት</button> <NavLink to={`/addPost/${item.id}`} className=" float-right mr-2 lg:-mt-4 md:-mt-0.5" >ቅይር</NavLink>
          <ul className="mt-2">            
             {
              item.file ?(
              <> 
              <img
              className="w-72 h-52 cursor-pointer duration-700 rounded-lg lgmt-3 lg:ml-48 md:m-5 mt-6"
              src={`${BaseUrl}/images/${item.file}`} 
              alt="A house with two children standing in front of it"
            />               
            </>
              ):(null)}
            <h2 className=" text-xl font-bold lg:mt-3 mt-10">{item.title}</h2>
           <li>{item.description}</li>
          </ul>
         </div>))
         :(
          posts.posts?.map((item)=>(
         <div key={item.id} className=" h-auto max-w-4xl border-t-4 shadow-lg border-spacing-1 rounded-xl text-center lg:ml-5 md:-2  lg:p-5  m-6 shadow-slate-400 pl-2 pr-2 " >
        <button onClick={()=>deletePosts(item.id)} className=" float-right text-red-600 mr-1 lg:-mt-4 md:-mt-0.5">ጥፍት</button> <NavLink to={`/addPost/${item.id}`} className=" float-right mr-2 lg:-mt-4 md:-mt-0.5" >ቅይር</NavLink>
          <ul className="mt-2">            
             {
              item.file ?(
              <> 
              <img
              className="w-72 h-52 cursor-pointer duration-700 rounded-lg lgmt-3 lg:ml-48 md:m-5 mt-6"
              src={`${BaseUrl}/images/${item.file}`} 
              alt="A house with two children standing in front of it"
            />               
            </>
              ):(null)}
            <h2 className=" text-xl font-bold lg:mt-3 mt-10">{item.title}</h2>
           <li>{item.description}</li>
          </ul>
         </div>
         ))) 
         } 
       </div>
     <div className="mt-4 lg:-ml-3 w-1/4 md:ml-2 ">
      <div className="flex flex-row -ml-1 mt-10 fixed">
                {/* <select
                      value={selectedValue}
                      onChange={handleClick}
                       className=" rounded-sm h-12 w-20 bg-zinc-100 text-center m-0.5 font-bold">
                <option selected value="" className=" font-bold ">አመት</option>
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
                </select>      */}
                <select 
                 value={selectedValue}
                 onChange={handleClick}
                 className=" rounded-sm h-12 w-20 bg-zinc-100 text-center mt-10 m-0.5 font-bold">
               <option selected value="" className=" font-bold ">አመት</option>
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
                  filterMonth?.map(item => {
                    return (<option value={item}>{item}</option>);
                       })} */}
                </select> 
               <select 
               value={selectedValue2}
               onChange={handleClick2}
               className=" rounded-sm h-12 w-20 bg-zinc-100 text-center mt-10 m-0.5 font-bold">
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
               <select 
               value={selectedDate}
               onChange={handleClick3}
               className=" rounded-sm h-12 w-20 bg-zinc-100 text-center mt-10 m-0.5 font-bold">
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
          <button className="bg-slate-100 w-20 ml-10 mt-60 h-10 rounded-md fixed" 
              type="button"
              onClick={selectToView} 
              >
             እይት</button>
         </div>
       </div>
      </>
    )}
export default ViewPosts;