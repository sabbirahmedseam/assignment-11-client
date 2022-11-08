import React, { useContext } from 'react';
import  { AuthContext } from '../AuthProvider/AuthProvider';

const AddReview = () => {
    const{user}=useContext(AuthContext)
    console.log(user);
    
    return (
        <div>
            review
            {/* {name} */}
        </div>
    );
};

export default AddReview;