import React ,{Component,useState} from 'react';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import { Link } from "react-router-dom";
export default function Displaycandidat() {
    const [candidats,setCandidats] = useState([]);
    const config = {
        headers: {
            "Content-Type":"appliation/json",
            Authorization: `Bearer ${localStorage.getItem("authToken")}`
        }
    }

    axios.get(`http://localhost:3000/users/all`, config)
    .then((response) => {
        setCandidats(response.data);
    console.log(response.data)
    })
    .catch((error) => {
    console.log(error)
    })
/**pagination */
    const [pageNumber,setPageNumber]=useState(0);
    const addedcandidatPerPage=1;
    const pageVisited=pageNumber*addedcandidatPerPage;
    const pageCount=Math.ceil(candidats?.length/addedcandidatPerPage);
    const changePage=({selected})=>{
        setPageNumber(selected);
    }
/**end */
const paginatecandidats=  candidats?.slice(pageVisited,pageVisited+addedcandidatPerPage).map((candidat, index) => {
    return(
        <div class="lg:flex lg:space-x-6 py-6">
       
     
        <div class="flex-1 lg:pt-0 pt-4"> 
             
            <Link to={`/detailcandidat/${candidat._id}`} class="text-xl font-semibold line-clamp-2" style={{color: "#0cb9c1"}}>  {candidat.Nom}</Link>
            <p class="line-clamp-2 pt-1"> {candidat.Prenom}</p>
            
            <div class="flex items-center pt-3">
               
                <div class="flex items-center mx-4"> 
                  
                <div class="course-details-info">
            <ul>
                <li> <i class="icon-feather-sliders"></i> {candidat.Email} </li>
                <li> By <a href="user-profile-1.html" style={{color: "orange"}}>{candidat.Num} </a> </li>
                <li> By <a href="user-profile-1.html" style={{color: "orange"}}>{candidat.Poste} </a> </li>
                <li> By <a href="user-profile-1.html" style={{color: "orange"}}>{candidat.Cv} </a> </li>
                <li> By <a href="user-profile-1.html" style={{color: "orange"}}>{candidat.Message} </a> </li>
                <li>
                 
                </li>
            </ul>
        </div>
                </div>
                <div class="flex items-center">  </div>
            </div>

        </div>
    </div>

    )

})


  
        return (
          

<div>
   
<div class="main_content">
            <div class="mcontainer">


                <div class="lg:flex  lg:space-x-12">

                    <div class="lg:w-3/4">
                        

                        <div class="flex justify-between relative md:mb-4 mb-3">
                            <div class="flex-1">
                                <h2 class="text-3xl font-semibold" style={{marginRight:"300px"}}> candidats List </h2>
                               
                            </div>
                              </div>


                        <div class="divide-y">
                        {paginatecandidats}
                    <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    onPageChange={changePage}
                    pageCount={pageCount}
                    containerClassName={"uk-pagination my-5 uk-flex-center"}
                    nextLinkClassName={"uk-icon uk-pagination-next"}
                    previousClassName={"uk-icon uk-pagination-previous"}
                    activeClassName={"uk-active"}
                    disabledClassName={"uk-disabled"}
                     />

                        </div>
                      
                   
                    </div>
                    
                    <div class="lg:w-1/4 w-full flex-shrink-0">

                        <div uk-sticky="offset:100" class="uk-sticky">
  
                        <div class="uk-width-expand uk-grid-margin uk-first-column">
                      
                        <div class="sidebar-filter uk-sticky" 
                         >

                            
<br/>
                        </div><div class="uk-sticky-placeholder" style={{height: "0px", margin: "0px"}}></div>

                    </div>
                           
                  

                      
                  
                        </div>
                    </div>
                </div>

        
            </div>
        </div>
        
</div>

     
   )
    





}