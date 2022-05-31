import React from 'react';

interface Props {
    extensions: string[];
}

const AttachFileNoteColumn = ({extensions}) => {
    return (
        <div className='column'>
            {extensions.map((extension) => (
                <p key={`${extension}`}>{extension}</p>
            ))}
        </div>
    );
};

export default AttachFileNoteColumn;
