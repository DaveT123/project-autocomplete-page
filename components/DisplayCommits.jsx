"use client";

function DisplayCommits({ dataObj }) {
    return (
        <div className="flex flex-col w-full mx-5">
            <div className="flex flex-col items-center">
                {dataObj?.items?.map((item) => {
                    return (
                        <div className="flex flex-row my-5 py-5 pl-20 border border-black w-full">
                            <div className="pr-2">
                                <img
                                    src={item.repository?.owner?.avatar_url}
                                    alt="avatar"
                                    className=" w-20 h-20 object-fill"
                                />
                            </div>
                            <div>
                                <p>
                                    <span>Repository Name: </span>
                                    {item.repository?.full_name}
                                </p>
                                <p>
                                    <span>Commit Link: </span>
                                    <a
                                        href={item.html_url}
                                        className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                                        target="_blank"
                                    >
                                        {item.html_url}
                                    </a>
                                </p>
                                <p>
                                    <span>Message: </span>
                                    {item.commit?.message}
                                </p>
                                <p>
                                    <a
                                        href={item.committer?.html_url}
                                        className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                                        target="_blank"
                                    >
                                        {item.commit?.committer?.name}
                                    </a>
                                    <span> comitted on </span>
                                    {item.commit?.committer?.date.substring(
                                        0,
                                        10
                                    )}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default DisplayCommits;
