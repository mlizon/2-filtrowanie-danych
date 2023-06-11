import { useState } from 'react';
import './UsersList.css'

const UsersList = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    usertype: ''
  })};

  const [users, setUsers] = useState([]);
  const [filterList, setFilterList] = useState([]);

  const handleInputChange = (e) => {

    const target = e.target
    const name = target.name
    setFormData(prevDataForm => {
      return { ...prevDataForm, [name]: target.value }
    })
  }
  const filtering = () => {
    
    let filter

    if (btnTargetName === 'users') {

      filter = users.filter((user) => {
        return (user.usertype === 'admin')
      })
    }
   if (btnTargetName === 'admin') {

      filter = users.filter((user) => {
        return (user.usertype === 'ad in')
      })
    }
    if  (btnTargetName === 'all') {
   
    }
  }

  
  function setUser(e) {
  e.preventDefault();
  setUsers(users.concat({ ...formData, id: Date.now() }));

}

  const removeUser = (id) => {
    const filteredUsers = users.filter(user => user.id !== id);
    setUsers(filteredUsers)
  }

  // console.log(users);

  return (
    <div className="usersList">
      <form onSubmit={setUser}>
        <label htmlFor="username">User name</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="User name"
          onChange={handleInputChange}
          value={formData.username}
        />
        <label htmlFor="email">User email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="User email"
          onChange={handleInputChange}
          value={formData.email}
        />
        <label htmlFor="usertype">User type</label>
        <select
          id="usertype"
          name="usertype"
          onChange={handleInputChange}>
          <option value="Admin">Ad in</option>
          <option value="User">Admin</option>
        </select>
        <button>Save</button>
      </form>

      <div className='buttons'>
        <button name='users' onClick={filtering}>Wyświetl userów</button>
        <button name='admins' onClick={filtering}>Wyświetl adminów</button>
        <button name='all' onClick={filtering}>Wyświetl wszystkich</button>

      </div>


      <div className='list'>

        {users.map((user) => {
          return (
            <div className='userItem' key={user.id} onClick={() => removeUser(user.id)}>
              <p>{user.username}</p>
              <p>{user.email}</p>
              <p>{user.userType}</p>
            </div>
          );
        })}
      </div>
    </div>
  );



  export default UsersList