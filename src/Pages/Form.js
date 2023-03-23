import React, { useRef } from 'react';

function Form () {

        const empId = useRef("");
        const empName = useRef("");
        const empSalary = useRef("");
        const empAdd = useRef("");

        function showData (){
            let empID = empId.current.value;
            let empname = empName.current.value;
            let empsalary = empSalary.current.value;
            let empadd = empAdd.current.value;

            alert(
            `
            Employee id is ${empID}
            Employee name is ${empname}
            Employee salary is ${empsalary}
            Employee Address is ${empadd}
            `
            );
        }


    return (
      <div>
        <form onSubmit={showData}>
            <div className="form-container">
                <h1>Enter Employee Details</h1>
                
                    <div className="form-group">
                        <input type="text" placeholder="Enter Emp ID" name='empId' className="form-control" ref={empId} />
                        <div className="error" style={{display:"none"}}>Please Enter valid Emp ID</div>
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Enter Emp Name" name='empName' className="form-control" ref={empName}  />
                        <div className="error" style={{display:"none"}}>Please Enter valid Emp Name</div>
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Enter Emp Salary" name='empSalary' className="form-control" ref={empSalary} />
                        <div className="error" style={{display:"none"}}>Please Enter valid Emp Salary</div>
                    </div>
                    <div className="form-group">
                        <textarea placeholder="Enter Emp Address" id="empAdd" name='empAdd' className="form-control" rows="50" ref={empAdd}></textarea>
                        <div className="error" style={{display:"none"}}>Please Enter valid Emp Address</div>
                    </div>
                    <button type="submit" id="submit">Submit</button>
                
            </div>
        </form>
      </div>
    )
  
}

export default Form