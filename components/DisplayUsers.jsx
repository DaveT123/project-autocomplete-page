"use client";

function DisplayUsers({ dataObj }) {
    return (
        <div className="flex flex-col w-full mx-5">
            <div className="flex flex-col items-center w-full mx-5">
                {dataObj?.items?.map((item) => {
                    return (
                        <div
                            key={item?.id}
                            className="flex flex-row my-5 py-5 pl-20 border border-black w-full"
                        >
                            <div className="pr-2">
                                <img
                                    src={item.avatar_url}
                                    alt="avatar"
                                    className=" w-20 h-20 object-fill"
                                />
                            </div>
                            <div>
                                <p> User ID: {item.login}</p>
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

export default DisplayUsers;
