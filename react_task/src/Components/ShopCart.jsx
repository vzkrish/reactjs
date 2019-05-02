import React from 'react'

export default class ShopCart extends React.Component{
    constructor(props){
        super(props)
        this.state={inputText:'1'}
        const sampUser = [];
        sampUser.push({ id: Math.random(),
                name: "Apples",
                prodDesc: "Apples are very good for health, best recommended for health",
                price: 1.99
            });
        
        this.state = ({users:sampUser})

    }

    addNewProduct(props){
        console.log(props)
        const newelement = this.state.users;  
        newelement.push( {
            id: 101,
            name: "Grapes",
            prodDesc: "Grapes are very good for health, best recommended for health",
            price: 2.99
        });

        this.setState({users:newelement});
    }

    handleChangeEvent(event){
        console.log(event.target.value)
        this.setState({
            inputText:event.target.value
        })
    }    
    
    render(){

        // const users = [];
        //     users.push({
        //         id: 100,
        //         name: "Apples",
        //         prodDesc: "Apples are very good for health, best recommended for health",
        //         price: 1.99
        //     });
        
     console.log(this.state.users)   
    return(
<div className="container">

	<table id="cart"  className="table table-hover table-condensed">

    				<thead>
						<tr>
							<th width ="50%" >Product</th>
							<th width ="10%" >Price</th>
							<th width ="8%" >Quantity</th>
							<th width ="22%"  className="text-center">Subtotal</th>
							<th width ="10%" ></th>
						</tr>
					</thead>
					<tbody>
{this.state.users.map((user, index) => {
    return(    
						<tr key={user.id}>
							<td data-th="Product">
								<div className="row">
									<div className="col-sm-2 hidden-xs"><img src="http://placehold.it/100x100" alt="..." className="img-responsive"/></div>
									<div className="col-sm-10">
										<h4 className="nomargin">{user.name}</h4>
										<p>{user.prodDesc}</p>
									</div>
								</div>
							</td>
							<td data-th="Price">{user.price}</td>
							<td data-th="Quantity">
								<input type="number" className="form-control text-center"  
                                value={this.state.inputText} 
                                onChange={this.handleChangeEvent.bind(this)}/>
							</td>
							<td data-th="Subtotal" className="text-center"><TextDisplay text={this.state.inputText}></TextDisplay></td>
							<td className="actions" data-th="">
								<button className="btn btn-info btn-sm"><i className="fa fa-refresh"></i></button>
								<button className="btn btn-danger btn-sm"><i className="fa fa-trash-o"></i></button>								
							</td>
						</tr>
                                             );
                                            })}  
					</tbody>
					<tfoot>
						<tr className="visible-xs">
							<td className="text-center"><strong>Total <TextDisplay text={this.state.inputText}></TextDisplay></strong></td>
						</tr>
						<tr>
							<td><button className="btn btn-warning" onClick={() => this.addNewProduct(this.state.users)}> Add New Product</button>
                                {/* <a href="#" className="btn btn-warning"><i className="fa fa-angle-right"></i> Add New Product</a> */}
                                </td>
							<td className="hidden-xs"></td>
							<td className="hidden-xs text-center"><strong>Total <TextDisplay text={this.state.inputText}></TextDisplay></strong></td>
							<td><a href="#" className="btn btn-success btn-block">Checkout <i className="fa fa-angle-right"></i></a></td>
						</tr>
					</tfoot>

				</table>
              
</div>
) 
    }
}

const TextDisplay = (props) =>{
    return (
    <div>  <span > {props.text * 1.99}</span> </div>
    );
}   

