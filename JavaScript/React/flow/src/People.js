// @flow
import * as React from "react";
import { useQuery } from "graphql-hooks";

const USERS_QUERY = `query {
  allMembers{
    name
    email
    id
  }
}`;

function Users(): React.Node {
  const { loading, error, data } = useQuery(USERS_QUERY, {
    variables: {
      limit: 10
    }
  });

  if (loading) return "Loading...";
  if (error) return `Something Bad Happened ${JSON.stringify(error)}`;
  //console.log(`${JSON.stringify(data)} <= data from call`);
  return (
    <div>
      <h3>Users</h3>
      <ul>
        {data.allMembers.map(({id, name, email}): React.Node=> (
          <li key = {id}> Name: {name} Email : {email}</li>
        ))}
      </ul>

    </div>
  );
}

export default Users;
