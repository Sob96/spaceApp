import { useContext } from "react";
import { AppContext } from "../App";

function User() {
  const {orders, setOrders} = useContext(AppContext);

  const remove = (id) => {
      let arr = [];
      arr = orders.filter(order => order.id !== id);
      setOrders([...arr]);
      if (arr.length === 0) localStorage.setItem('ordersLocal', '');
  }


  return (
      <section className="user">
        {orders.map((order, index) => (
          
          <div key={index} className="user_form">
              <div className="form_div">
                  <p>date</p>
                  <div className="user_select">{order.date}</div>
              </div>
              <div className="form_div">
                  <p>from</p>
                  <div className="user_select">{order.from}</div>
              </div>
              <div className="form_div">
                  <p>passangers</p>
                  <div className="user_select"> 
                    {order.passengers} Adult
                  </div>
              </div>
              <div className="form_div">
                  <p>price</p>
                  <div className="user_select"> 
                    {order.price} $
                  </div>
              </div>
              <div className="form_div"> <button onClick={() => {remove(order.id)}} className="button_order changed">Cancel trip</button> </div>
        </div>
      ))}
      </section>
       
    );
  }
  
  export default User;