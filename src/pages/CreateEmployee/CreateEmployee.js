import { Link } from 'react-router-dom';
import './createEmployee.scss';

const CreateEmployee = () => {

  return (
    <div className='createEmployee container'>
      Create employee component
      <Link to='/'>Home</Link>
    </div>
  );
};

export default CreateEmployee;