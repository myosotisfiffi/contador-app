import type React from "react";
type DefaultInputProps = { type: 'text' | 'number' | 'search' | 'email' | 'password' } & React.ComponentProps<'input'>;

export function DefaultInput( {type} : DefaultInputProps) {
    return (
      <div>
        <label htmlFor="myInput">task</label>
        <input id="myInput" type="{type}"  />
      </div>
    ); 
}