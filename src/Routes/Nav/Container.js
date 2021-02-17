import { fBaseAuth } from "Apis/fBase";
import {
  Link
} from "react-router-dom";
import Presenter from './Presenter';

const Container = ({user}) => {
  const handleLogOut = () => {
    fBaseAuth.signOut()
  }

  return (
    <Presenter
      userEmail={user.email}
      Link={Link}
      handleLogOut={handleLogOut}
    />
  );
};

export default Container