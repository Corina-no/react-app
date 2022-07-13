import axios from "axios";
import { useEffect, useState } from "react";

export default function Menu() {
  const [users, setUsers] = useState({});
  useEffect(() => {
    getUsers();
  }, []);
  function getUsers() {
    axios
      .get("http://localhost/registration/Products.php")
      .then(function (result) {
        console.log(result.data);
        setUsers([result.data]);
      })
      .catch(function (result) {
        console.log(result);
      });
  }
  return (
    <div>
      <tabel>
        <thead>
          <tr>
            <th>#</th>
            <th>Denumire</th>
            <th>Imagine</th>
            <th>Pret</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr>
              <td>{user.id}</td>
              <td>{user.denumire}</td>
              <td>{user.imagine}</td>
              <td>{user.pret}</td>
            </tr>
          ))}
          ;
        </tbody>
      </tabel>
    </div>
  );
}
