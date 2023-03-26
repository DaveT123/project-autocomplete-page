"use client";

import { useRef, useState } from "react";

function TypeDropDown({ types, handleTypeFromChild }) {
    const [option, setOption] = useState("users");
    const selectRef = useRef();

    const handleSelect = () => {
        const value = selectRef.current.value;
        setOption(value);
        handleTypeFromChild(value);
    };

    return (
        <div className="flex items-center">
            <select
                className="form-control"
                name="type"
                value={option}
                ref={selectRef}
                onChange={handleSelect}
            >
                <option value disabled>
                    Selection:
                </option>
                {types.map((option) => {
                    return (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    );
                })}
            </select>
        </div>
    );
}

export default TypeDropDown;
