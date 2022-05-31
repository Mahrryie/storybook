import React, {useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';

import '../../styles/index.scss';
import InputField from './InputField';
import InformationText from './InformationText';
import AttachFileNoteList from './AttachFileNoteList';

const ContactUs = ({colorScheme = 'primary_1'}) => {
    const fileInput = useRef<HTMLInputElement>(null);
    const [files, setFiles] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [project, setProject] = useState('');
    const [company, setCompany] = useState('');
    const [isNameValid, setIsNameValid] = useState(true);
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPhoneValid, setIsPhoneValid] = useState(true);
    const [isFormSending, setIsFormSending] = useState(false);

    const TOTAL_SIZE = 'The total size of attachments should not exceed 10 MB.';
    const ALLOWED_TYPES = 'Allowed types:';
    const FILE_EXTENSIONS =
        '.jpg,.jpeg,.png,.gif,.doc,.docx,.ppt,.pptx,.pdf,.txt,.rtf,.odt,.ods,.odg,.odp,.xls,.xlsx,.xlxs,.vcf,.vcard,.key,.rar,.zip,.7z,.gz,.gzip,.tar,';

    const PLEASE_BE_INFORMED =
        'Please be informed that when you click the Send button Itransition Group will process your personal data in accordance with our ';
    const PRIVACY_LINK = 'Privacy notice';
    const PURPOSE = ' for the purpose of providing you with appropriate information.';

    const Information = (
        <p className='paragraph'>
            {PLEASE_BE_INFORMED}
            <a href='/privacy-notice' className='contact-form-privacy-link'>{PRIVACY_LINK}</a>
            {PURPOSE}
        </p>
    );

    const handleOnNameChange = (value) => {
        setName(value);
    };

    const handleOnEmailChange = (value) => {
        setEmail(value);
    };

    const handleOnPhoneChange = (value) => {
        setPhone(value);
    };

    const handleOnProjectChange = (value) => {
        setProject(value);
    };

    const handleOnCompanyChange = (value) => {
        setCompany(value);
    };

    return (
        <>
            <div id='contact-form-container' className={`container section main-grid contact-form-container ${colorScheme}`}>
                <form
                    id='contact-form'
                    action=''
                    method=''
                    className={`contact-form`}
                >
                    <div className='main-grid-halved'>
                        <InformationText />
                        <div className={!isNameValid ? 'main-grid-halved-item error-shown' : 'main-grid-halved-item'}>
                            <InputField
                                id='name'
                                type='text'
                                placeHolder='Full name'
                                onChange={handleOnNameChange}
                                isRequired
                                disabled={isFormSending}
                                contactFormRole='input'
                            />
                        </div>
                        <div className={!isEmailValid ? 'main-grid-halved-item error-shown' : 'main-grid-halved-item'}>
                            <InputField
                                id='email'
                                type='email'
                                placeHolder='E-mail'
                                contact-form-role='input'
                                onChange={handleOnEmailChange}
                                isRequired
                                disabled={isFormSending}
                                contactFormRole='input'
                            />
                        </div>
                        <div className={!isPhoneValid ? 'main-grid-halved-item error-shown' : 'main-grid-halved-item'}>
                            <InputField
                                id='phone'
                                type='tel'
                                placeHolder='Phone number'
                                onChange={handleOnPhoneChange}
                                isRequired
                                disabled={isFormSending}
                                contactFormRole='input'
                            />
                        </div>
                        <div className='main-grid-halved-item'>
                            <InputField
                                id='company'
                                type='text'
                                placeHolder='Company'
                                onChange={handleOnCompanyChange}
                                disabled={isFormSending}
                                contactFormRole='input'
                            />
                        </div>
                    </div>
                    <InputField
                        id='message'
                        type='textarea'
                        placeHolder='Describe your idea'
                        contactFormRole='input'
                        onChange={handleOnProjectChange}
                        isRequired
                        disabled={isFormSending}
                    />

                    <div className='contact-attachment form'>
                        <div className='file-attachment'>
                            <div className='attachment-container'>
                                <label for="attachment">
                                    <span class="main-button main-button-blue button outlined " tabindex="0">
                                        <span class="main-button-label">Attach file</span>
                                    </span>
                                </label>
                                <input
                                    type='file'
                                    id='attachment'
                                    className='attach-file'
                                    accept={FILE_EXTENSIONS}
                                    multiple
                                    disabled={false}
                                />
                                <div className='attach-file-mark'>
                                <svg className='question-mark-svg' width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                    <path fill-rule='evenodd' clip-rule='evenodd' d='M0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3512 0.5 23.5 5.64873 23.5 12C23.5 18.3512 18.3512 23.5 12 23.5C5.64873 23.5 0.5 18.3512 0.5 12ZM12 1.5C6.20101 1.5 1.5 6.20101 1.5 12C1.5 17.799 6.20101 22.5 12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5Z' fill='#6E6D71'/>
                                    <path d='M11.7725 6.0517C10.5179 6.0517 9.41525 6.77914 8.96846 7.80039C8.85778 8.05338 8.56296 8.16874 8.30997 8.05806C8.05698 7.94738 7.94162 7.65256 8.0523 7.39957C8.66757 5.99323 10.1442 5.0517 11.7725 5.0517C13.9685 5.0517 15.838 6.51551 15.838 8.88963C15.838 9.89066 15.3977 10.6409 14.7996 11.2064C14.216 11.7582 13.4702 12.1463 12.8198 12.4524C12.802 12.4608 12.7837 12.4681 12.765 12.4743C12.7599 12.4765 12.7065 12.4995 12.6192 12.5568C12.5337 12.6129 12.4354 12.689 12.3441 12.7803C12.1525 12.9719 12.0449 13.1743 12.0449 13.3655V15.8684C12.0449 16.1445 11.821 16.3689 11.5449 16.3689C11.2687 16.3689 11.0449 16.145 11.0449 15.8689V13.3655C11.0449 12.7981 11.3545 12.3557 11.637 12.0731C11.9002 11.8099 12.2096 11.6155 12.4149 11.5377C13.0468 11.2395 13.6581 10.9095 14.1126 10.4798C14.5575 10.0591 14.838 9.55757 14.838 8.88963C14.838 7.16719 13.5212 6.0517 11.7725 6.0517Z' fill='#6E6D71'/>
                                    <path d='M11.5 18.7107C11.8866 18.7107 12.2 18.3973 12.2 18.0107C12.2 17.6241 11.8866 17.3107 11.5 17.3107C11.1134 17.3107 10.8 17.6241 10.8 18.0107C10.8 18.3973 11.1134 18.7107 11.5 18.7107Z' fill='#6E6D71'/>
                                </svg>
                                    <div className='attach-file-note'>
                                        <p className='attach-file-note-paragraph'>
                                            {TOTAL_SIZE}
                                        </p>
                                        <p className='attach-file-note-paragraph paragraph-bolder'>
                                            {ALLOWED_TYPES}
                                        </p>
                                        <AttachFileNoteList />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='information-submit'>
                            {Information}
                            <button class="main-button main-button-blue primary" type="submit" form="contact-form" tabindex="0">
                                <span class="main-button-label">
                                    <span>Send</span>
                                </span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default ContactUs;

ContactUs.propTypes = {
    colorScheme: PropTypes.string
}

ContactUs.defaultProps = {
    colorScheme: ''
}