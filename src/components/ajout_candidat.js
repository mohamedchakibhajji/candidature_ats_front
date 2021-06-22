import React,{useState, useEffect} from 'react';
import {Link } from 'react-router-dom';
import axios from 'axios';
import Select from 'react-select'


const Ajout_cand = ({history}) =>{

    const [Nom, setNom]= useState("");
    const [Prenom, setPrenom]= useState("");
    const [Email, setEmail]= useState("");
    const [Num, setNum]= useState("");
    const [Poste, setPoste]= useState("");
    const [Cv, setCV]= useState("");
    const [Message, setMessage]= useState("");
    const [error, setError]= useState("");


    const Posteoptions = [
        { value: 'Stage PFE', label: 'Stage PFE' },
        { value: 'Stage', label: 'Stage' }
      ]
      const addHandler = async (e) =>{
        e.preventDefault();
        const config = {
            header: {
                "Content-Type":"application/json"
            }
        }

      
        try {
            const {data} = await axios.post(
              
                "http://localhost:3000/users/add", 
                {Nom,Prenom,Email,Num,Poste,Cv,Message},
                config);
        

        } catch (error) {
            setError(error.response.data.error);
            console.log(error.response.data.error);
            setTimeout(() => {
                setError("");
            }, 5000);
        }
    }

    return(
            <body style={{background:"#f3f4f6",height:"850px"}}>
                <div class="bg-white py-4 shadow dark:bg-gray-800">
            <div class="max-w-6xl mx-auto">


                <div class="flex items-center lg:justify-between justify-around" style={{height:'30px'}}>

                    <a href="trending.html">
                        <img src="assets/user/images/logoo.png" alt="" class="w-32" style={{width: '80px'}}/>
                    </a>

                    <div class="capitalize flex font-semibold  lg:block my-2 space-x-3 text-center text-sm">
                    <Link to="/list">  <a href="javascript:void(0);" class="py-3 px-4">List User</a> </Link>
                               </div>

                </div>
            </div>
        </div>
                <div class="lg:p-12 max-w-xl lg:my-0 my-12 mx-auto p-6 space-y-">
                    <form onSubmit={addHandler} class="lg:p-10 p-6 space-y-3 relative bg-white shadow-xl rounded-md">
                        <h1 class="lg:text-2xl text-xl font-semibold mb-6"> Register </h1>
                        
                        <div>
                            <label htmlFor="name" class="mb-0"> Username </label>
                            <input type="text" placeholder="Name" id="name" required value={Nom} onChange={(e) => setNom(e.target.value)} class="bg-gray-100 h-12 mt-2 px-3 rounded-md w-full"/>
                        </div>
                        <div>
                            <label htmlFor="prenom" class="mb-0"> prenom </label>
                            <input type="text" placeholder="prenom" id="prenom" required value={Prenom} onChange={(e) => setPrenom(e.target.value)} class="bg-gray-100 h-12 mt-2 px-3 rounded-md w-full"/>
                        </div>
                        <div>
                            <label htmlFor="email" class="mb-0"> email </label>
                            <input type="email" placeholder="Info@example.com" id="email" required value={Email} onChange={(e) => setEmail(e.target.value)} class="bg-gray-100 h-12 mt-2 px-3 rounded-md w-full"/>
                        </div>
                        <div>
                            <label htmlFor="Num" class="mb-0"> num </label>
                            <input type="number" placeholder="tel" id="num" required value={Num} onChange={(e) => setNum(e.target.value)} class="bg-gray-100 h-12 mt-2 px-3 rounded-md w-full"/>
                        </div>
                        <div>
                            <label htmlFor="poste" class="mb-0"> poste </label>
                             <Select placeholder="Poste"  required    value={Poste}  id="poste" options={Posteoptions} onChange={(e) => setPoste(e.value)} />

                        </div>
                        <div>
                            <label htmlFor="cv" class="mb-0"> cv </label>
                            <input type="text" placeholder="cv" id="cv" required value={Cv} onChange={(e) => setCV(e.target.value)} class="bg-gray-100 h-12 mt-2 px-3 rounded-md w-full"/>
                        </div>
                        <div>
                            <label htmlFor="message" class="mb-0"> message </label>
                            <textarea type="text" placeholder="message" id="message" required value={Message} onChange={(e) => setMessage(e.target.value)} class="bg-gray-100 h-12 mt-2 px-3 rounded-md w-full"/>
                        </div>
                        {error && <span style={{color:'red'}}>{error}</span>}
                        <div>
                            <button type="submit" class="bg-blue-600 font-semibold p-2 mt-5 rounded-md text-center text-white w-full">
                                Register</button>
                        </div>
                     
                    </form>


                </div>
            </body>
    )
}

export default Ajout_cand;
