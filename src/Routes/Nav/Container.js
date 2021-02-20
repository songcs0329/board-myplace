import { fBaseAuth } from "Apis/fBase";
import { Link, useHistory } from "react-router-dom";
import Presenter from './Presenter';

const Container = ({ userObject }) => {
  const history = useHistory()
  const handleLogOut = () => {
    fBaseAuth.signOut()
    history.push("/")
  }

  return (
    <Presenter
      userEmail={userObject.email}
      Link={Link}
      handleLogOut={handleLogOut}
    />
  );
};

export default Container