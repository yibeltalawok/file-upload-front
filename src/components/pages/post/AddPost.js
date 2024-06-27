import React from "react";
import Layout from "../../layout/layout";
import {NavLink,useParams,useNavigate} from 'react-router-dom';
import { useState, useEffect} from "react";
import { useForm } from "react-hook-form";
import { useDispatch,useSelector} from "react-redux";
import {updatePost,fetchPost,postData} from "../../../actions/postAction";

const initialValue={ title:"",
                     description:""
                     } 
  const AddPost= ()  =>{

  const { handleSubmit,
    register,
    reset,
    formState: { errors }} = useForm();

  const dispatch = useDispatch();

  const param=useParams()
  const navgate=useNavigate()

  const id =param.id;

     const onReset = async () =>{
     const result = await dispatch(fetchPost(id))
     reset(result.payload); 
  }
  const viewPosts=()=>{
    navgate('/ViewPosts')
    // window.location.reload();
  }
  
  useEffect(() => {
   onReset();
  }, []);

//   useEffect(() => {
//    dispatch(fetchPost(id))
//    // setDataValue(posts);
//  }, []);

  const {posts} = useSelector(
    (state) => state.posts);
      // alert(data.title)

  const [dataValue, setDataValue] = useState(initialValue);
  const [image, setImage] = useState(null);
  const{title,description}=dataValue; 
  const handleInputChange = event => {
    const { name, value } = event.target;
    setDataValue({ ...dataValue, [name]: value });
  };

   const OnSubmit =(e) => {
    console.log("new data is : ",e);
            // const fileData=posts?.file           
            const formData=new FormData()
             formData.append('file',image);
             formData.append('title', e.title);
             formData.append('description', e.description);
             formData.append('fileData', e.file);

            //  alert(e.description+","+e.title)
        if(e.title!=="" && e.description!=="")
         {
           if(!id){    
                         console.log("Good try=",formData.get('name'));

            //  for(let [name, value] of formData) {
            //        console.log("post=",`${name} = ${value}`); // key1 = value1, then key2 = value2
            //         }
             dispatch(postData(formData));
            //  window.location.reload(false);
            //  alert("በትክክል መመዝገብ ችላዋል")
            }
        else{
  
            //  for(let [name, value] of formData) {
            //      console.log("update=",`${name} = ${value}`); // key1 = value1, then key2 = value2
            //       }
                 dispatch(updatePost({id:id,formData:formData}));
                 alert("በትክክል መመዝገብ ችላዋል") 
                 navgate('/ViewPosts')  
                 window.location.reload(); 

              }}
        else{
          alert("ርእስ እና ማብራሪያ ቀድመው ይሙሉ")    
        }}

     return(
     <>
      <Layout/>
      <div className="lg:flex sm:block">  
        {/*Left part  */}
       <div className="w-1/4">
       <div className=" border-2 mt-2 ml-3 w-72 ">
       <button className=" rounded-lg h-10 w-20 bg-zinc-100 text-center m-3 ml-5 font-bold">
       <NavLink   to ='/AddPost'>ጭምር</NavLink>
       </button>
       <button onClick={()=>{viewPosts()}} className=" rounded-lg h-10 w-20 bg-zinc-100 text-center m-3 ml-16 font-bold">
        {/* <NavLink   to ='/ViewPosts'> */}
        እይት
        {/* </NavLink> */}
       </button>
      </div>
   </div>
    {/* middle part */}
    <div className="flex w-2/4 h-screen  bg-grey-lighter">
       <form onSubmit={handleSubmit(OnSubmit)} className="w-full h-screen">
         <input className=" bg-slate-50 rounded-2xl w-3/4 h-12  mt-7 border-collapse border-2 p-5 ml-10"
          {...register("title")}placeholder="ርእስ ..." />
         <textarea className="bg-slate-50 rounded-2xl w-full h-72  mt-5 border-collapse border-2 p-5 ml-5"
         {...register("description")} placeholder="ማብራሪያ ...">
         </textarea>
         <input type="file" onChange={(e) => setImage(e.target.files[0])} name="image" multiple
          className=" lg:ml-20 ml-10 mt-3">
         </input>
         <br /><br />
         <button className="inline-block lg:ml-96 rounded-lg w-32 lg:mt-14 p-2 bg-stone-400 text-white text-lg font-semibold ml-28">                 
          ጭምር
         </button>
       </form>
    </div>
      {/* Right part */}
     <div className=" w-1/4">
    </div>
   </div>
   </>
  )}
export default AddPost;