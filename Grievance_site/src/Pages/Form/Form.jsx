import React ,{useState} from 'react';
import "./Form.css";
import axios from 'axios';
import Swal from 'sweetalert2'
import Navbar from '../../components/Navbar/Navbar';
const Form = () => {
  const [grievanceType, setGrievanceType] = useState('');
  const [description, setDescription] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleInputChange = () => {
    // Check if at least two of the first inputs are filled
    if ((grievanceType && description)) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');

    try {
      await axios.post('http://localhost:8080/form', { name, email });
      Swal.fire({
        title: "Success!",
        text: "Your grievance has been successfully submitted !!. We will review it shortly.",
        icon: "success"
      });
    } catch (error) {
      console.error('There was an error submitting the grievance:', error);
      alert('Error submitting grievance');
    }
  };


  return (
    <>
    <Navbar/>
    <div className='form'>
      <h1>Get Started with Your Application</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="grievance-type">Grievance Type</label>
          <select
            name="grievance-type"
            id="grievance-type"
            value={grievanceType}
            onChange={(e) => {
              setGrievanceType(e.target.value);
              handleInputChange();
            }}
          >
            <option value="">Select a grievance type</option>
            <option value="health-safety">Health and Safety</option>
            <option value="salary-benefits">Salary and Benefits</option>
            <option value="workplace-issues">Workplace Issues</option>
            <option value="harassment-discrimination">Harassment or Discrimination</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="description">Grievance Description</label>
          <textarea
            name="description"
            id="description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
              handleInputChange();
            }}
          ></textarea>
        </div>
        <div>
          <label htmlFor="supporting-file">Supporting Documents</label>
          <input type="file" name="supporting-file" id="supporting-file" accept=".pdf,.doc,.docx,.jpg,.png,.jpeg" />
        </div>
        <button
          type="submit"
          disabled={isButtonDisabled}
          style={{
            pointerEvents: isButtonDisabled ? 'none' : 'auto',
            cursor: isButtonDisabled ? 'not-allowed' : 'pointer',
            backgroundColor: isButtonDisabled ? 'gray' : 'blue',
            color: 'white'
          }}
        >
          Submit
        </button>
      </form>
    </div>
    </>
  );
}

export default Form;
