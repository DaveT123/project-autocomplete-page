"use client";

function DisplayTopics({ dataObj }) {
    return (
        <div className="flex flex-col w-full mx-5">
            <div className="flex flex-col items-center">
                {dataObj?.items?.map((item) => {
                    return (
                        <div className="flex flex-row my-5 py-5 pl-20 border border-black w-full">
                            <div>
                                <p> Topic: {item.name || "NIL"}</p>
                                <p> Author: {item.created_by || "NIL"}</p>
                                <p>
                                    {" "}
                                    Description:{" "}
                                    {item.short_description || "NIL"}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default DisplayTopics;
