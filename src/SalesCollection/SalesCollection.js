import React from 'react'
import './SalesCollection.css'

class SalesCollection extends React.Component{
    render(){
        return(
            <section className="app-section">
                <header className="coll-banner">
                    <h1>Protech Sales</h1>
                </header>

                <table className="blueTable">
                    <thead>
                        <tr>
                            <th>Sales Person</th>
                            <th>Vendor</th>
                            <th>Territory</th>
                            <th>Paid</th>
                        </tr>
                    </thead>
                     <tfoot>
                        <tr>
                        <td colSpan="4">
                        <div className="links"><a href="#">&laquo;</a> <a className="active" href="#">1</a> <a href="#">2</a> <a href="#">3</a> <a href="#">4</a> <a href="#">&raquo;</a></div>
                        </td>
                        </tr>
                    </tfoot>
                    <tbody>
                        <tr>
                            <td>sales person 1</td>
                            <td>vendor A</td>
                            <td>No. Dakota</td>
                            <td>True</td>
                            <td>Update - delete</td>
                        </tr>
                        <tr>
                            <td>sales person 2</td>
                            <td>vendor A</td>
                            <td>Colorado</td>
                            <td>false</td>
                            <td>Update - delete</td>
                        </tr>
                        <tr>
                            <td>sales person 3</td>
                            <td>vendor B</td>
                            <td>Iowa</td>
                            <td>false</td>
                            <td>Update - delete</td>
                        </tr>
                        <tr>
                            <td>sales person 4</td>
                            <td>vendor C</td>
                            <td>Minnesota</td>
                            <td>false</td>
                            <td>Update - delete</td>
                        </tr> 
                    </tbody> 
                </table>
            </section>
        );
    }
}

export default SalesCollection;