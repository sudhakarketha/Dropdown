import React, { useState } from 'react'

import Help from './Help';
import Learn from './Learn';

const Dropdownheader = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    return (
        <div>
            <ul className='Drop-header'>
                <li className='drop-item' >Products<i class="fa fa-angle-down" aria-hidden="true"></i></li>
                <li className='drop-item'>Solutions<i class="fa fa-angle-down" aria-hidden="true"></i></li>
                <li className='drop-item'>Pricing<i class="fa fa-angle-down" aria-hidden="true"></i></li>
                <li className='drop-item' onClick={toggleDropdown}>Resources <i className={`fa ${isDropdownOpen ? 'fa-angle-up' : 'fa-angle-down'}`} aria-hidden='true'></i></li>

            </ul>
            {isDropdownOpen && (
                <ul className='dropdown-menu'>
                    <div className='help'>
                        <Help />
                    </div>
                    <div className='learn'>
                        <Learn />
                    </div>
                </ul>
            )}

        </div>
    )
}

export default Dropdownheader;


// import React, { useState } from 'react';

// const DropdownHeader = () => {
//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//     const toggleDropdown = () => {
//         setIsDropdownOpen(!isDropdownOpen);
//     };

//     return (
//         <div className='dropdown-container'>
//             <ul className='dropdown-header'> Products <i class="fa fa-angle-down" aria-hidden="true"></i></ul>

//             <div className='dropdown-header'> Solutions <i class="fa fa-angle-down" aria-hidden="true"></i></div>




//             <div className='dropdown-header' onClick={toggleDropdown}>
//                 Resources <i className={`fa ${isDropdownOpen ? 'fa-angle-up' : 'fa-angle-down'}`} aria-hidden='true'></i>
//             </div>
//             {isDropdownOpen && (
//                 <ul className='dropdown-menu'>
//                     <li className='dropdown-item'>Products</li>
//                     <li className='dropdown-item'>Solutions</li>
//                     <li className='dropdown-item'>Resources</li>
//                     <li className='dropdown-item'>Pricing</li>
//                 </ul>
//             )}

//             <div className='dropdown-header'> Pricing <i class="fa fa-angle-down" aria-hidden="true"></i></div>





//         </div>
//     );
// };

// export default DropdownHeader;


