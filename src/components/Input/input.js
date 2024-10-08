import React, { useState } from "react";
import Tooltip from "../Tooltip/tooltip"; // Assuming there's a Tooltip component

/**
 * Composant Input.
 * @typedef Input
 * @kind functionnal component
 * @param {Object} props - Les propriétés du composant.
 * @param {string} props.title - L'URL de l'image.
 * @param {function} props.handleOnChange - La fonction activé au .
 * @param {string} props.type - Le type de l'input.
 * @param {string} props.id - L'id de l'input.
 * @param {string} props.size - La taille de l'input.
 * @param {string} props.options - Les options pour les selects.
 * @returns {React.JSX.Element} - Le composant Input.
 */
const Input = ({title, handleOnChange, id, type, size, options, isDisable, defaultValue, isRequired, userInfosData, isTooltip, isLabel, maxLength}) => {
    const [isPasswordVisible,setIsPasswordVisible] = useState(false);

    let input= null;
    switch (type) {
        case "textarea":
            input=<textarea 
            type={type}
            disabled={isDisable || false}
            defaultValue={defaultValue}
            name={id}
            id={id}
            autoComplete={title}
            placeholder={title}
            onChange={(e)=>{handleOnChange && handleOnChange(e.target.value ,id)}}
            className={`${isDisable ? "bg-light-grey" : "bg-white"}  text-black p-2 block ${size} rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}/>
            break;
        case "select":
            input=<select
                    name={id}
                    id={id}
                    autoComplete="Name of the role"
                    className="p-2 block text-black bg-white rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                        {options.map((option, index)=><option value={option.value} key={index}>{option.name}</option>)}
                    </select>
            break;

        case "number":
            input=<input
            type="number"
            name={id}
            id={id}
            defaultValue={defaultValue}
            autoComplete={title}
            placeholder={title}
            onChange={(e)=>{handleOnChange && handleOnChange(e.target.value ,id)}}
            className={`p-2 block text-black ${size} ${isDisable ? "bg-light-grey" : "bg-white"} rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
            />

            break;
        default:
            input=<input
            disabled={isDisable || false}
            type={type==="password" && isPasswordVisible && 'text' || type}
            {...(type === "number" && {min: 0})}
            name={id}
            id={id}
            defaultValue={defaultValue}
            autoComplete={title}
            placeholder={title}
            required={isRequired || false}
            onChange={(e)=>{handleOnChange && handleOnChange(e.target.value ,id)}}
            className={`p-2 block text-black ${size} ${isDisable ? "bg-light-grey" : "bg-white"} rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
            />
            break;
    }
    return(
        <div className="pb-2">
            <div className="flex">
                {isLabel === true &&<label htmlFor={id} className="block text-sm text-light-black font-medium leading-6 whitespace-nowrap">
                {title} :
                </label>}

                {type === "password" && !isDisable &&
                <div className="flex ml-auto m-1">
                        <span className="label-text mr-2">Display</span>
                        <input type="checkbox" className="border-light-blue hover:border-light-blue checkbox checkbox-primary" onClick={() => setIsPasswordVisible(!isPasswordVisible)}/>
                </div>}
            </div>
            {isTooltip === true ? 
            <Tooltip message={`Your ${title.toLowerCase()}`}>
                {input}
            </Tooltip> :
            <div>
                {input}
            </div>
            }
        </div>
    );
}

export default Input;