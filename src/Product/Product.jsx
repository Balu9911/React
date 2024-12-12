import React from 'react'
class Product extends React.Component{
    state={
        Product_name:"Apple Airpods Pro",
         qty:1,
         Price:18499,
         Image:'https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/u/r/y/-original-imagtc44zcupzhqh.jpeg?q=70'

    }
    incrHandler = ()=> {
        this.setState({qty:this.state.qty +1})
    }
    decrHandler= ()=>{
        this.setState({qty:this.state.qty -1})
    }
    render(){
        // console.log("First Render" );
        
        // return <div>
        //     {/* <h3>Product Component</h3>
        //     <h3>Product Qty:{this.state.qty}</h3>
        //     <button onClick={this.decrHandler}>DECR</button>
        //     <button onClick={this.incrHandler}>INCR</button>*/}
        // </div> 
        return <div className='container'>
                   <div className="row">
                    <div className="col-10">
                        <table className='table'>
                            <thead>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Total</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{this.state.Product_name}</td>
                                    <td><img width={"80px"} src={this.state.Image} alt="" /></td>
                                    <td>{this.state.Price}</td>
                                    <td><i onClick={this.decrHandler} className='fa fa-minus-circle'></i>{this.state.qty} <i onClick={this.incrHandler} className='fa fa-plus-circle'></i></td>
                                    <td>{this.state.qty * this.state.Price}</td>
                                </tr>
                            </tbody>

                        </table>

                    </div>
                   </div>

               </div>
    }
}
export default Product;