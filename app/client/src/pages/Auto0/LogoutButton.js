import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import Avatar from '@mui/material/Avatar';

const LogoutButton = () => {
    const { user, isAuthenticated ,logout  } = useAuth0();

  return (
    <>
    {isAuthenticated && (
        <>
          <Avatar alt={user.name}  src={user.picture}  onClick={() => logout()}/>
        </>
      )}
    </>
  )
}

export default LogoutButton