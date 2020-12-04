import React from 'react';
import { Table, Form } from 'react-bootstrap';
import capitalize from 'lodash/capitalize';
import { post, get, deleteReq } from '../../../lib/request';
import { getInitials } from '../../../lib/utils';
import { API_URL, WEB_URL } from '../../../config/constants';

class TmpPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      users: [],
    };

    this.handleQueryChange = this.handleQueryChange.bind(this);
  }

  componentDidMount() {
    this.queryRecords();
  }

  async queryRecords() {
    try {
      const { data } = await get(`${API_URL}/admin/all-users`, {
        params: {
          q: this.state.query,
        },
      });

      this.setState({
        users: data,
      });
    } catch (err) {
      console.error(err);
      const errMsg = (err && err.data && err.data.message) || 'Request failed';
      alert(errMsg);
    }
  }

  async addInfluencerAccess(userId) {
    try {
      await post(`${API_URL}/admin/influencers/${userId}`);
      await this.queryRecords();
    } catch (err) {
      console.error(err);
      const errMsg = (err && err.data && err.data.message) || 'Request failed';
      alert(errMsg);
    }
  }

  async removeInfluencerAccess(userId) {
    try {
      await deleteReq(`${API_URL}/admin/influencers/${userId}`);
      await this.queryRecords();
    } catch (err) {
      console.error(err);
      const errMsg = (err && err.data && err.data.message) || 'Request failed';
      alert(errMsg);
    }
  }

  handleQueryChange(event) {
    this.setState(
      {
        query: event.target.value,
      },
      () => this.queryRecords()
    );
  }

  render() {
    return (
      <div className="container">
        <Form style={{ marginTop: '15px' }}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Control
              type="Text"
              placeholder="Email or Name"
              value={this.state.query}
              onChange={this.handleQueryChange}
            />
          </Form.Group>
        </Form>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Profile</th>
              <th>Name</th>
              <th>Email</th>
              <th>Roles</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user) => {
              const roles = user.roles || [];
              const roleNames = roles.map((r) => capitalize(r.name));
              const isInfluencer = roleNames.find(
                (e) => e.toLowerCase() === 'influencer'
              );

              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>
                    <div className="avatar_icon avatar-imgs-calendar1">
                      {user.profilePicUrl ? (
                        <img
                          src={user.profilePicUrl}
                          alt="profile-pic"
                          width="50"
                        ></img>
                      ) : (
                        <span>{getInitials(user.username)}</span>
                      )}
                    </div>
                  </td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{roleNames.join()}</td>
                  <td>
                    {!isInfluencer ? (
                      <button
                        className="btn btn-danger"
                        onClick={() => this.addInfluencerAccess(user.id)}
                      >
                        Add Influencer
                      </button>
                    ) : (
                      <button
                        className="btn btn-danger"
                        onClick={() => this.removeInfluencerAccess(user.id)}
                      >
                        Remove Influencer
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default TmpPage;
