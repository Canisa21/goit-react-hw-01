import './App.css'
import { Profile } from "../src/components/Profile";
import user from "../src/data/user.json";
import { FriendList } from "../src/css/friends.module.css";
import friends from "../src/data/friends.json";
import { TransactionHistory } from "../src/css/transactions.module.css";
import transactions from "../src/data/transactions.json";

export const App = () => {
  return (
    <>
      <Profile 
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}>
      </Profile>

      <FriendList friends={friends} />
      <TransactionHistory items={transactions}></TransactionHistory>


    </>)};

export default App
