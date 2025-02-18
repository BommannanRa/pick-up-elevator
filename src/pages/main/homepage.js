import React from "react";
import "./homepage.css";
import MyImage from "../../assets/Heart-Target.svg";
import {useNavigate} from 'react-router-dom';

function Homepage() {

    let navigate = useNavigate();

    return(
        <div className="main-container">
            <div>
                <img className="logo" src={MyImage} alt="Heart" height={450} width={450}></img>
            </div>
            <div>
                <form>
                <div className="form-group">
                    <label>
                        <select className="choose">
                            <option value="email">email</option>
                            <option value="phone">phone no</option>
                            <option selected value="user_id">user id</option>
                            <option value="order_id">order id</option>
                        </select>
                    </label>
                    <input type="text" name="text" className="form-text"/>
                </div>
                <button className="button" onClick={()=>{navigate("/orders")}}>
                    Search
                </button>
                </form>
            </div>
        </div>
    )
}
export default Homepage