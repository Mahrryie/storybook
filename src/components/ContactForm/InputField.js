import React from 'react';
import parseEntities from 'parse-entities';

export interface Props {
    id: string;
    placeHolder: string;
    type: string;
    isRequired?: boolean;
    onChange: (value: string) => void;
    disabled?: boolean;
    contactFormRole?: string;
}

const InputField = ({
    id,
    placeHolder,
    type,
    validation,
    isRequired,
    onChange,
    disabled,
    contactFormRole,
}) => {
    const errorClassName = validation && !validation.isValid ? 'error' : '';
    const [focused, setFocused] = React.useState(false);
    const [dataShrink, setShrink] = React.useState(false);
    const [inputValue, getInputValue] = React.useState('');
    const onFocus = () => (setFocused(true), setShrink(true));
    const onBlur = () => {
        setFocused(false);
        inputValue.trim() ? setShrink(true) : setShrink(false);
    };
    const onFieldChange = (e) => {
        getInputValue(e.target.value);
        onChange(e.target.value);
    };

    const labelAutoFill = inputValue.length > 0;

    return (
        <>
            <div className={`main-text-field ${disabled ? 'disabled' : ''} ${errorClassName}`}>
                <label className={`main-text-field-label ${focused ? 'focused' : ''} ${dataShrink || labelAutoFill ? 'shrink' : ''} ${errorClassName}`} htmlFor={type} id={`${type}-label`}>
                    {parseEntities(placeHolder)}
                </label>
                <div className={`text-input-field ${focused ? 'focused' : ''} ${errorClassName}`}>
                    {type !== 'textarea' ?
                        <input
                            type={type}
                            id={id}
                            className='main-text-field-input'
                            aria-invalid='false'
                            onFocus={onFocus}
                            onBlur={onBlur}
                            onChange={onFieldChange}
                            value={inputValue}
                            disabled={disabled}
                            contact-form-role={contactFormRole}/> :
                        <textarea
                            id={id}
                            className='main-text-field-input'
                            contact-form-role={contactFormRole}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            onChange={onFieldChange}
                            value={inputValue}
                            disabled={disabled}
                        />
                    }
                    <fieldset aria-hidden='true' className='main-text-field-fieldset'>
                        <legend className='main-text-field-legend'>
                            <span>
                                {parseEntities(placeHolder)}
                            </span>
                        </legend>
                    </fieldset>
                </div>
            </div>
        </>
    );
};

export default InputField;
