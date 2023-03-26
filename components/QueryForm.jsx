"use client";

import { useEffect } from "react";
import client from "../utils/axiosClient";

function QueryForm({
    type,
    handleDataObjFromChild,
    query,
    handleQueryFromChild,
    sort,
    order,
    perpage,
    page,
}) {
    const handleInputChange = (e) => {
        const query = e.target.value;
        handleQueryFromChild(query);
    };

    const handleKeyDown = (e) => {
        if (e.keyCode == 13) {
            e.preventDefault();
        }
    };

    // delay query by 0.3s to avoid overloading API
    useEffect(() => {
        const delayFunc = setTimeout(() => {
            handleApiResponse(query);
        }, 300);

        return () => clearTimeout(delayFunc);
    }, [query, page]);

    const handleApiResponse = async (query) => {
        if (!query) {
            return;
        }

        try {
            // Handle get request here
            const response = await client.get(
                `${type}/?q=` +
                    `${type == "issues" ? "is:issue " : ""}` +
                    query +
                    // "&type=" +
                    // type +
                    "&sort=" +
                    sort +
                    "&order=" +
                    order +
                    "&per_page=" +
                    perpage +
                    "&page=" +
                    page
            );

            const data = response.data;
            handleDataObjFromChild(data);
            console.log(data);
        } catch (error) {
            console.log(error);
            handleDataObjFromChild(error);
        }
    };

    return (
        <form className="w-full max-w-md">
            <div className="flex items-center border-b border-teal-500 py-2">
                <input
                    type="text"
                    placeholder="Type your query here..."
                    value={query}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                />
            </div>
        </form>
    );
}

export default QueryForm;
