import React from 'react'
import './LogList.css'

const LogList = ({ logs }) => {

    const rows = logs.map((log) =>
        <tr key={log.name}>
            <td>{log.id}</td>
            <td>{log.name}</td>
            <td>{log.reason}</td>
            <td>{log.type}</td>
            <td>{log.unban_date}</td>
            <td>{log.lifted}</td>
        </tr>
    );


    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope='col'>ID</th>
                    <th scope='col'>Name</th>
                    <th scope='col'>Reason</th>
                    <th scope='col'>Type</th>
                    <th scope='col'>Length</th>
                    <th scope='col'>Lift</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody> 
        </table>
    );
};

export default LogList