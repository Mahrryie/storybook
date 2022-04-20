import React from 'react';
import '../styles/ContainerDefault.css';
import '../styles/reset.css';

const ContainerDefault = ({children, containerClass = 'section container'}) => {
    return (
        <div className={containerClass}>
            {children}
        </div>
    );
};

export default ContainerDefault;