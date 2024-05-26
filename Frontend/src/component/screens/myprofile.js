import React,{useState,useEffect,useContext} from 'react'
import {useHistory} from 'react-router-dom'
import {UserContext} from '../../App'
import {Link} from 'react-router-dom'


function Home(){

    const[data,setData] = useState([])



    return(<div>
        {/* Navbar */}
        <div>
            <div>
                <h2>My properties :</h2>
            </div>

            <div>
                <img src=""/>
                <div>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </div>
        </div>
    </div>)
}

export default Home