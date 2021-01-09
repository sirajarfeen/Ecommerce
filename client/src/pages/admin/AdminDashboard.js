import React,{useState, useEffect} from 'react';
import AdminNav from '../../components/Navbar/AdminNav';
import {getOrders, changeStatus } from '../../functions/admin';
import { useSelector, useDispatch} from 'react-redux';
import { toast } from 'react-toastify';
import Orders from '../../components/order/Orders';

const AdminDashboard =() => {
    const [orders, setOrders] = useState([]);
    const {user} = useSelector((state) => ({...state }));

    useEffect((
        loadOrders()
    ),[]);

    const loadOrders = () => 
        getOrders(user.token).then((res) => {
            console.log(JSON.stringify(res.data, null,4 ));
            setOrders(res.data);
        })

     const handleStatusChange = (orderId, orderStatus) => {
         changeStatus(orderId, orderStatus, user.token).then(res => {
             toast.success('Status updated')
             loadOrders();
         })
     }   
    
  
    return (
        <div className="container-fluid">
        <div className="row">
        <div className="col-md-2">
            <AdminNav/>
        </div>
        <div className="col-md-10">
        <h4>Admin Dashboard</h4>
        <Orders orders={orders} handleStatusChange={handleStatusChange} />
    </div>
    </div>
    </div>
    );
};

export default AdminDashboard;




// import React,{useState, useEffect} from 'react'
// import AdminNav from '../../components/Navbar/AdminNav';
// import AdminProductCard from '../../components/cards/AdminProductCard';
// import {getProductsByCount} from '../../functions/product';

// const AdminDashboard =() => {
//     const [products,setProducts]=useState([]);
//     const [loading, setLoading]= useState(false);

//     useEffect(() => {
//       loadAllProducts();  
//     },[])
//   const loadAllProducts =() => {
//       setLoading(true);
//     getProductsByCount(100)
//     .then((res)=>{
//     setProducts(res.data)
//     setLoading(false)
//     })
//     .catch((err)=>{
//         setLoading(false)
//         console.log(err)});
//   }
//     return (
//         <div className="container-fluid">
//         <div className="row">
//         <div className="col-md-2">
//             <AdminNav/>
//         </div>
       
//         <div className="col">
//         {loading?(<h4 className="text-danger">Loading...</h4>):
//         (
//             <h4>All Products</h4>
//         )}
//             <div className="row">
//             {products.map((p)=>(
//             <div key={p._id} className="col-md-4">
//                 <AdminProductCard product ={p}/>
//                 </div>
//             ))}
//             </div>
//     </div>
//     </div>
//     </div>
//     );
// };

// export default AdminDashboard;