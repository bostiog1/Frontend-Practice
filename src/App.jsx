import { AxiosUserList } from "./components/AxiosUserList";
import ButtonFetchUsers from "./components/ButtonFetchUsers";
import { FetchUsersList } from "./components/FetchUsersList";
import { LastCall } from "./components/LastCall";
import { PostAxios } from "./components/PostAxios";
import { PostAxiosAgain1 } from "./components/postAxiosAgain1";
import { PostAxiosAgain2 } from "./components/PostAxiosAgain2";
import UserForm from "./components/UserForm";
import { useFetchUsers } from "./hooks/useFetchUsers";

const App = () => {
  const { users, loading, error } = useFetchUsers();

  return (
    <div>
      {/* <AxiosUserList /> */}
      {/* <FetchUsersList users={users} loading={loading} error={error} /> */}
      {/* <UserForm /> */}
      {/* <PostAxios /> */}
      {/* <PostAxiosAgain /> */}
      {/* <PostAxiosAgain1 /> */}
      {/* <PostAxiosAgain2 /> */}
      {/* <ButtonFetchUsers /> */}
      <LastCall />
    </div>
  );
};

export default App;
