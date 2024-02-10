import { AiOutlineSortAscending, AiOutlineSortDescending } from "react-icons/ai";
import { Column, TableOptions, useSortBy, useTable ,usePagination } from "react-table";

function TableHOC <T extends object>(columns: Column <T>[], data: T[], containerClassName: string, heading: string, showPaginaTion: boolean = false){

    return function HOC(){


        const options: TableOptions<T> ={
            columns,
            data,
            initialState:{
                pageSize: 6,
            }
        }
        const {getTableProps, getTableBodyProps, headerGroups, page, prepareRow, nextPage, previousPage, canNextPage, canPreviousPage, pageCount, state:{pageIndex}} = useTable(options, useSortBy, usePagination)
        return(
        <div className={containerClassName}>
            <h2 className="heading">
                {heading}
            </h2>

            <table className="table" {...getTableProps()}>
                <thead>
                    {
                        headerGroups.map((headerGroups)=> (
                            <tr {...headerGroups.getHeaderGroupProps}>
                                {
                                    headerGroups.headers.map((column) =>(
                                        <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                            {column.render("Header")}
                                            {
                                                column.isSorted && 
                                                <span>
                                                    {" "}
                                                    {column.isSortedDesc?<AiOutlineSortDescending/> : <AiOutlineSortAscending/>}
                                                </span>
                                            }
                                        </th>
                                    ))
                                }
                            </tr>

                        ))
                    }
                </thead>
                <tbody {...getTableBodyProps()}>

                    {
                        page.map((row) => {
                            prepareRow(row);

                            return <tr {...row.getRowProps()}>
                                {
                                    row.cells.map((cell) => (
                                        <td {...cell.getCellProps()}>
                                            {cell.render("Cell")}
                                            
                                        </td>
                                    ))
                                }
                            </tr>
                        })
                    }
                </tbody>
            </table>

            {
                showPaginaTion && <div className="table-pagination">
                    <button disabled={!canPreviousPage} onClick={previousPage}> Prev</button>
                    <span>{`${pageIndex + 1} page of ${pageCount}`}</span>
                    <button disabled={!canNextPage} onClick={nextPage}>Next</button>
                </div>
            }
        </div>
        )
        
    }
}

export default TableHOC;