import {
  useEffect,
  useRef,
  DetailedHTMLProps,
  TextareaHTMLAttributes,
} from 'react';
import { useField } from '@unform/core';

interface TextAreaProps
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  name: string;
}

const TextArea: React.FC<TextAreaProps> = ({ name, children, ...rest }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: textareaRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <>
      <textarea
        ref={textareaRef}
        defaultValue={defaultValue}
        className={error ? 'has-error' : ''}
        {...rest}
      >
        {children}
      </textarea>

      {error && <span className="error">{error}</span>}
    </>
  );
};

export default TextArea;
