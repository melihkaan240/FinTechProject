import React, { SyntheticEvent } from "react";
import "./Table.css";
import { testIncomeStatementData } from "./testData";

const data = testIncomeStatementData;

interface Props {
   
};

type Company = (typeof data)[0];

const configs = [
    {
        Label: "Year",
        render: (company: Company) => company.acceptedDate
    },
    {
        Label: "Cost of Revenue",
        render: (company: Company)=> company.costOfRevenue
    }
]

const Table: React.FC<Props> = (props: Props): JSX.Element => {
    const renderedRows = data.map((company)=>{
        return (
            <tr key={company.cik}>
                {configs.map((val:any)=>{
                    return(

                    <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                        {val.render(company)}
                    </td>

                    )
                })}
            </tr>
        )
    })
    const renderedHeaders = configs.map((config:any)=>{
        return(
            <th key={config.label} className="p-4 text-left text-xs font-medium text-fray-500 uppercase tracking-wider">
                {config.label}
            </th>
        )
    })
    return (
       <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8">
        <table>
            <thead className="min-w-full divide-y divide-gray-200 m-5 ">{renderedHeaders}</thead>
            <tbody>{renderedRows}</tbody>
        </table>
       </div>
    )
}

export default Table;