import React from 'react'

//1 Create the Context
const MyContext = React.createContext();

//2 Create Provider Component
class MyProvider extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'Krishnam',
            salary:10000, 
            job:'Engineer'
        }
    }

    render(){
        return(
            <MyContext.Provider value ={{
                // Context Data
                state:this.state,
                //Function
                incrementSalary: () => this.setState({
                    salary: this.state.salary + 1000
                })
            }}>
            {this.props.children}
            </MyContext.Provider>
        );
    }
}

//3 Wrap main app into Myprovider to access the context
export default class Context extends React.Component{
    render(){
        return(
            <MyProvider>
                <div className="bg-success">
                <h2 className="bg-info">Krish React Context API Demo </h2>

                <Family/>
                </div>
            </MyProvider>
        )
    }
}

const Family = () => {
    return(
        <div>
            <Person/>
            <Employee></Employee>
        </div>
    );
}

class Person extends React.Component{
    render(){
        return(
            <div>
                <MyContext.Consumer>
                  {
                      (context) => (
                          <React.Fragment>
                              <h3 className="br-primary">
                                    Person Details
                              </h3>
                              <p>
                                  Hi! {context.state.name}
                              </p>
                              <p className="br-danger"> Salary : {context.state.salary}
                              </p>
                              <p className="br-danger"> Job : {context.state.job}
                              </p>
                               <button className="btn btn-primary" onClick={context.incrementSalary}>Increment Salary</button> 
                          </React.Fragment>
                      )
                  }  
                </MyContext.Consumer>
            </div>
        );
    }
}

class Employee extends React.Component{
    render(){
        return(
            <div>
                <MyContext.Consumer>
                  {
                      (context) => (
                          <React.Fragment>
                              <h3 className="br-primary">
                                    Person Details
                              </h3>
                              <p>
                                  Hi! {context.state.name}
                              </p>
                              <p className="br-danger"> Salary : {context.state.salary}
                              </p>
                              <p className="br-danger"> Job : {context.state.job}
                              </p>
                          </React.Fragment>
                      )
                  }  
                </MyContext.Consumer>
            </div>
        );
    }
}