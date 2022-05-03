import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../App";
import { Alert } from 'antd';

function Order() {
    let navigate = useNavigate();
    const [passengers, setPassengers] = useState(1);
    const [price, setPrice] = useState(2199);
    const { orders, setOrders, toggleElem } = useContext(AppContext);
    const [date, setDate] = useState('28 February');
    const [from, setFrom] = useState('California');
    const [toggleAlert, setToggleAlert] = useState(false);

    const changeQuantity = (event) => {
        event.preventDefault();
        if (passengers < 10)setPassengers(passengers + 1);
    }

    useEffect(() => {
        setPrice(price * passengers);
    }, [passengers])

    const getDate = (event) => setDate(event.target.value);

    const getFrom = (event) => setFrom(event.target.value);

    const generateId = () => {
        let id = 0;
        let max = 0;
        orders.forEach(order => {
            if (order.id > max) max = order.id;
        });
        id = +max + 1;
        return id;
    }

    const closeAlert = () => setToggleAlert(false);

    const makeAnOrder = (event) => {
        event.preventDefault();
        if (toggleElem === false) {
            navigate('/login/');
        } else {
            const arr = orders;
            arr.push( {
                id: generateId(),
                date: date,
                from: from,
                passengers: passengers,
                price: price
            })
    
            setOrders([...arr]);
            setPassengers(1);
            setPrice(2199);
            setDate('21 June');
            setFrom('California');
            setToggleAlert(true);
            setTimeout(closeAlert, 2000);
        }
    }


    return (
            <section className="order">
                {!toggleAlert ? '' : <Alert className="alert"
                message="Success!"
                description="You've sucessfully purchased the trip of your dreams!"
                type="success"
                showIcon/>}
                <div className="container">
                    <div className="order_wrapper">
                        <div className="order_text">
                            <div className="order_text_destination">
                                <p>destination</p>
                                <h3>moon</h3>
                                <h4>${price}</h4>
                            </div>
                            <div className="order_text_details">
                                <div className="order_text_details-container">
                                    <hr/>
                                </div>
                                <h5>travel time</h5>
                                <p className="other_color">9 Hours</p>
                                <h5>base</h5>
                                <p className="other_color">Huygens crater</p>
                                <h5>avaible experience</h5>
                                <p className="other_color">23</p>
                            </div>
                            <div className="order_text_elonMask">
                                <p>Depending on the refund conditions, you can cancel your ticket. Mobile tickets can also be cancelled via the SPACED app or website.
                                To find out exactly how this works, please ask Elon Musk.</p>
                                <a href="https://www.space.com/spaceflight">more information</a>
                            </div>
                        
                        </div>
                    </div>
                    <div className="order_form">
                        <form>
                            <div className="form_div">
                                <p>date</p>
                                <select value={date} onChange={getDate} className="form_select"> 
                                    <option>21 June</option> 
                                    <option>21 September</option> 
                                    <option>21 December</option> 
                                    <option>21 January</option> 
                                </select>
                            </div>
                            <div className="form_div">
                                <p>from</p>
                                <select value={from} onChange={getFrom} className="form_select"> 
                                    <option>California</option> 
                                    <option>Arizona</option> 
                                    <option>Nevada</option>  
                                </select>
                            </div>
                            <div className="form_div">
                                <p>passangers</p>
                                <button onClick={changeQuantity} className="form_select last"> 
                                {passengers} Adult
                                </button>
                            </div>
                            <div className="form_div"> <button onClick={makeAnOrder} className="button_order changed">book now</button> </div>
                        </form>
                    </div>
                
                </div>
        </section>

    );
  }
  
  export default Order;