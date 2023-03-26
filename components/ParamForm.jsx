"use client";

function ParamForm({
    sort,
    order,
    perpage,
    handleSortFromChild,
    handleOrderFromChild,
    handlePerpageFromChild,
}) {
    return (
        <table className="flex flex-col w-full">
            <tbody>
                <tr className="flex justify-between">
                    <td className="flex w-1/3">
                        <span>Sort: </span>
                    </td>
                    <td className="flex-1">
                        <input
                            type="text"
                            value={sort}
                            onChange={(e) =>
                                handleSortFromChild(e.target.value)
                            }
                            className="border border-black w-full"
                        />
                    </td>
                </tr>
                <tr className="flex justify-between">
                    <td className="flex w-1/3">
                        <span>Order: </span>
                    </td>
                    <td className="flex-1">
                        <input
                            type="text"
                            value={order}
                            onChange={(e) =>
                                handleOrderFromChild(e.target.value)
                            }
                            className="border border-black w-full"
                        />
                    </td>
                </tr>
                <tr className="flex justify-between">
                    <td className="flex w-1/3">
                        <span>Per_page: </span>
                    </td>
                    <td className="flex-1">
                        <input
                            type="number"
                            value={perpage}
                            onChange={(e) =>
                                handlePerpageFromChild(e.target.value)
                            }
                            min={1}
                            max={100}
                            className="border border-black w-full"
                        />
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default ParamForm;
