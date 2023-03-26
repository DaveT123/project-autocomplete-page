"use client";

function DisplayRepositories({ dataObj }) {
    return (
        <div className="flex flex-col w-full mx-5">
            <div className="flex flex-col items-center">
                {dataObj?.items?.map((item) => {
                    return (
                        <div
                            key={item?.id}
                            className="flex flex-row my-5 py-5 pl-20 border border-black w-full"
                        >
                            <div>
                                <p> Repository: {item.full_name}</p>
                                <p> Description: {item.description}</p>
                                <p>
                                    <span>GitHub Link: </span>
                                    <a
                                        href={item.html_url}
                                        className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                                        target="_blank"
                                    >
                                        {item.html_url}
                                    </a>
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default DisplayRepositories;
