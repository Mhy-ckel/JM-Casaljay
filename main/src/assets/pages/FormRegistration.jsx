import { useState } from "react";
import "./FormRegistration.css";


const FormRegistration = () => {

    const [ formData, setFormData ] = useState({
        name: "",
        age: 0,
        adress: ""
    });

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (formData.name === "" ||  formData.age === "" ||  formData.adress === "") {
            alert("Please fill out the form correctly!");

        } else if (Number(formData.age) < 18) {
            alert("You must be at least 18 years old to register!");
        } else {  
            alert("Form submitted successfully!");
        }
    }

    return (
       <main className="form-main">
            <h1>Form Registration</h1>
            <figure className="form-card">
                <form onSubmit={handleFormSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input 
                            type="text" placeholder='e.g. John Doe'
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                            />
                    </div>

                    <div className="form-group">
                        <label htmlFor="age">Age</label>
                        <input 
                            type="number" placeholder='e.g. 99'  
                            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                            required
                            />
                    </div>

                    <div className="form-group">
                        <label>Adress</label>
                        <input 
                            type="text" placeholder='e.g. 123 Main St'
                            onChange={(e) => setFormData({ ...formData, adress: e.target.value })}
                            required
                            />   
                    </div>
                    <span>{}</span>
                    <button type='submit' className='subBtn'>Submit</button>
                </form>
            </figure>

            <figure className="hh1">
                <h1 className="hh2">{formData.name}</h1>
                <h1 className="hh3">{formData.age}</h1>
                <h1 className="hh3">{formData.adress}</h1>
            </figure>
       </main>
    );
}

export default FormRegistration;