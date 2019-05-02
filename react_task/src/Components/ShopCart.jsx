import React from 'react'

export default class ShopCart extends React.Component{
    constructor(props){
        super(props)
        this.state={inputText:'1'}
    }

    handleChangeEvent(event){
        console.log(event.target.value)
        this.setState({
            inputText:event.target.value
        })
    }
    
    render(){
    return(
<div className="container">
	<table id="cart" className="table table-hover table-condensed">
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
						<tr>
							<td data-th="Product">
								<div className="row">
									<div className="col-sm-2 hidden-xs"><img src="http://placehold.it/100x100" alt="..." className="img-responsive"/></div>
									<div className="col-sm-10">
										<h4 className="nomargin">Product 1</h4>
										<p>Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet.</p>
									</div>
								</div>
							</td>
							<td data-th="Price">$1.99</td>
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
					</tbody>
					<tfoot>
						<tr className="visible-xs">
							<td className="text-center"><strong>Total <TextDisplay text={this.state.inputText}></TextDisplay></strong></td>
						</tr>
						<tr>
							<td><a href="#" className="btn btn-warning"><i className="fa fa-angle-left"></i> Continue Shopping</a></td>
							<td colspan="2" className="hidden-xs"></td>
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