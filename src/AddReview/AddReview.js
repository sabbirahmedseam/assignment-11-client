import React, { useContext } from 'react';
import  { AuthContext } from '../AuthProvider/AuthProvider';

const AddReview = () => {
    const{name}=useContext(AuthContext)
    console.log(name);
    
    return (
        <div>
            review
            {name}
        </div>
    );
};

export default AddReview;