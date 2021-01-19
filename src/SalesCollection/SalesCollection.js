import React from 'react';
import { Link } from 'react-router-dom';
import './SalesCollection.css';
const { API_SERVER_TOKEN, API_SERVER_URL } = require('../config');

class SalesCollection extends React.Component {
  state = {
    allPosting: [],
    updated: false,
  };

  componentDidMount() {
    fetch(`${API_SERVER_URL}/api/postings`, {
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${API_SERVER_TOKEN}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.status);
        }
        return res.json();
      })
      .then((data) => {
        this.setState({
          allPosting: data,
        });
      })
      .catch((error) => {
        this.setState({ errorMessage: error.message });
      });
  }

  handleClickDelete = (postId) => (e) => {
    fetch(`${API_SERVER_URL}/api/postings/${postId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${API_SERVER_TOKEN}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.status);
        }
      })
      .then(() => {
        let updatedData = this.state.allPosting.filter((post) => post.id !== postId);
        this.setState({ allPosting: updatedData });
      })
      .catch((error) => {
        this.setState({ errormessage: error.message });
      });
  };

  renderTableData() {
    return this.state.allPosting.map((posting) => {
      return (
        <tr key={posting.id}>
          <td>{posting.sales_number}</td>
          <td>{posting.vendor}</td>
          <td>{posting.territory}</td>
          <td>{posting.invoice}</td>
          <td>{posting.paid}</td>
          <td>
            <Link to={`/salesentry/update/${posting.id}`}>
              <button type="button">Update</button>
            </Link>
          </td>
          <td>
            <button id="delete_posting" value={posting.id} onClick={this.handleClickDelete(posting.id)}>
              Delete posting
            </button>
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <section className="app-section full-height">
        <header className="coll-banner">
          <h1>Protech Sales</h1>
        </header>
        <div className="testme">
          <table className="blueTable">
            <thead>
              <tr>
                <th>Sales number</th>
                <th>Vendor</th>
                <th>Territory</th>
                <th>Invoice Number</th>
                <th>Paid</th>
              </tr>
            </thead>
            {/* <tfoot>
                        <tr>
                        <td colSpan="4">
                        <div className="links"><a href="#">&laquo;</a> <a className="active" href="#">1</a> <a href="#">2</a> <a href="#">3</a> <a href="#">4</a> <a href="#">&raquo;</a></div>
                        </td>
                        </tr>
                    </tfoot> */}
            <tbody>{this.renderTableData()}</tbody>
          </table>
        </div>
      </section>
    );
  }
}

export default SalesCollection;
