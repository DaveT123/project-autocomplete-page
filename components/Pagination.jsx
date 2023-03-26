"use client";

function Pagination({ currentPage, totalPages, handleChangePage }) {
    // Determine the range of page numbers to show
    const range = [];
    for (
        let i = Math.max(1, currentPage - 2);
        i <= Math.min(totalPages, currentPage + 2);
        i++
    ) {
        range.push(i);
    }

    return (
        <div className="flex w-1/2 justify-around pagination">
            {/* left button */}
            <button
                disabled={currentPage === 1}
                onClick={() => handleChangePage(currentPage - 1)}
            >
                <span>{"<"}</span>
            </button>

            {range[0] > 1 && (
                <>
                    <button onClick={() => handleChangePage(1)}>1</button>
                    {range[0] > 2 && <span>...</span>}
                </>
            )}
            {range.map((page) => (
                <button
                    key={page}
                    disabled={page === currentPage}
                    onClick={() => handleChangePage(page)}
                >
                    {page}
                </button>
            ))}
            {range[range.length - 1] < totalPages && (
                <>
                    {range[range.length - 1] < totalPages - 1 && (
                        <span>...</span>
                    )}
                    <button onClick={() => handleChangePage(totalPages)}>
                        {totalPages}
                    </button>
                </>
            )}

            {/* right button */}
            <button
                disabled={currentPage === totalPages}
                onClick={() => handleChangePage(currentPage + 1)}
            >
                <span>{">"}</span>
            </button>
        </div>
    );
}

export default Pagination;
