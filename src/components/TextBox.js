import React from 'react';

const TextBox = function (props) {
  const onChange = event => {
    props.onChange(event.target.value);
  };

  return (
    <textarea
      value={props.value}
      onChange={onChange}
      placeholder={props.placeholder}
      className={props.className}
    />
  );
};

TextBox.defaultProps = { value: '' };

export default TextBox;
