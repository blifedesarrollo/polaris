import * as React from 'react';
import Choice from '../Choice';
import * as styles from './RadioButton.scss';

export interface Props {
  label: React.ReactNode,
  checked?: boolean,
  id?: string,
  name?: string,
  value?: string,
  disabled?: boolean,
  onChange?(newValue: boolean): void,
  onFocus?(): void,
  onBlur?(): void,
}

export default function RadioButton({
  label,
  checked,
  disabled,
  onChange,
  onFocus,
  onBlur,
  id = uniqueID(),
  name = id,
  value,
}: Props) {
  function handleChange({currentTarget}: React.ChangeEvent<HTMLInputElement>) {
    if (onChange == null) { return; }
    onChange(currentTarget.checked);
  }

  return (
    <Choice label={label} id={id}>
      <div className={styles.RadioButton}>
        <input
          id={id}
          name={name}
          value={value}
          type="radio"
          checked={checked}
          disabled={disabled}
          className={styles.Input}
          onChange={handleChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        <div className={styles.Backdrop} />
        <div className={styles.Icon} />
      </div>
    </Choice>
  );
}

let index = 1;
function uniqueID() {
  return `RadioButton${index++}`;
}
