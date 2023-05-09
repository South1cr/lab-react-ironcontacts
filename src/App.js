import "./App.css";
import{ useState } from 'react';
import contacts from "./contacts.json";



const contactsArr = contacts.slice(0, 5);

function App() {

  const [contactsArr, setContacts] = useState(contacts.slice(0, 5));
  
  const addContact = () => {
    let contact = contacts[Math.floor(Math.random() * contacts.length)]
    setContacts( arr => [...arr, contact]);
  }

  const sortName = () => {
    function compare( a, b ) {
      if ( a.name < b.name ){
        return -1;
      }
      if ( a.name > b.name ){
        return 1;
      }
      return 0;
    }
    let arr = [...contactsArr];
    arr.sort(compare)
    setContacts( e => [...arr]);
  }

  const sortPopularity = () => {
    function compare( a, b ) {
      if ( a.popularity < b.popularity ){
        return -1;
      }
      if ( a.popularity > b.popularity ){
        return 1;
      }
      return 0;
    }
    let arr = [...contactsArr];
    arr.sort(compare)
    setContacts( e => [...arr]);
  }

  const deleteContact = (id) => {
    let contactArray = [...contactsArr];
    contactArray.forEach((elem, i, arr) => {
      if(id === elem.id){
        arr.splice(i, 1)
      }
    })
    setContacts( e => [...contactArray]);
  }

  return <div className="App">
    <h1>IronContacts</h1>
    <button onClick={addContact}>Add Contact</button>
    <button onClick={sortName}>Sort Name</button>
    <button onClick={sortPopularity}>Sort Popularity</button>
    <table>
      <tbody>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
          <th></th>
        </tr>
        {contactsArr.map((contact, i) => {
          return <tr key={i}>
            <td><img src={contact.pictureUrl}></img></td>
            <td>{contact.name}</td>
            <td>{contact.popularity}</td>
            <td>{contact.wonOscar && <img src="https://github.githubassets.com/images/icons/emoji/unicode/1f3c6.png"></img>}</td>
            <td>{contact.wonEmmy && <img src="https://github.githubassets.com/images/icons/emoji/unicode/1f3c6.png"></img>}</td>
            <td><button onClick={() => {deleteContact(contact.id)}}>Delete</button></td>
          </tr>
        })}
      </tbody>
    </table>
  </div>;
}
export default App;
