const Table = ({ sat }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type of Satellite</th>
          <th>Launch Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
      {sat.map((id, data) => {
          return (
            <tr key={id}>
              <td>{id.name}</td>
              <td>{id.type}</td>
              <td>{id.launchDate}</td>
              <td>{id.data}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  );
};

export default Table;
