import React from 'react';
import AttachFileNoteColumn from './AttachFileNoteColumn';

const AttachFileNoteList = () => {
    return (
        <div className='attach-file-note-list'>
            <AttachFileNoteColumn extensions={['jpg', 'jpeg', 'png', 'gif']} />
            <AttachFileNoteColumn extensions={['doc', 'docx', 'ppt', 'pptx']} />
            <AttachFileNoteColumn extensions={['pdf', 'txt', 'rtf']} />
            <AttachFileNoteColumn extensions={['odt', 'ods', 'odg', 'odp']} />
            <AttachFileNoteColumn extensions={['xls', 'xlsx', 'xlxs']} />
            <AttachFileNoteColumn extensions={['vcf', 'vcard', 'key']} />
            <AttachFileNoteColumn extensions={['rar', 'zip', '7z']} />
            <AttachFileNoteColumn extensions={['gz', 'gzip', 'tar']} />
        </div>
    );
};

export default AttachFileNoteList;
