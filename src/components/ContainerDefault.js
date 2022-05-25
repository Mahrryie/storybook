import React from 'react';
import '../styles/ContainerDefault.css';

const ContainerDefault = ({children, containerClass = 'section container'}) => {
    return (
        <div className={containerClass}>
            {children}
        </div>
    );
};

export default ContainerDefault;