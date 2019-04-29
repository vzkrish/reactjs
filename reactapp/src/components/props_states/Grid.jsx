import React from 'react';

export default class Grid extends React.Component
{
    render()
    {
        // build the users list
        const users = [];
        for (let i=1; i<10; i++) {
            users.push({
                id: i,
                username: 'Krish ' + i,
                job: 'Employee ' + i,
            });
        }

        // render
        return(
            <table class="table table-striped table-dark">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Job</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => {
                        return(
                            <tr key={user.id} >
                                <td>#{user.id}</td>
                                <td>{user.username}</td>
                                <td>{user.job}</td>
                                <td>
                                    <a href={'/user-edit/' + user.id}>
                                        Edit
                                    </a>
                                </td>
                                <td>
                                    <button type="button" className="btn-primary" data-id={user.id}>Delete</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
    }
}