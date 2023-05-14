import React , {useState} from 'react'
import FormChatBot from './FormChatBot'
import StepperForm from '../Stepper/StepperForm'
import { makeStyles } from '@material-ui/styles';
import ResponeChat from './ResponeChat';
import LoginButton from '../Auto0/LoginButton';
import LogoutButton from '../Auto0/LogoutButton';
import { useAuth0 } from "@auth0/auth0-react";
import '../Unsplash/style.css'

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@1,500&display=swap');
</style>

const Index = () => {
  const [controller , setController]  = useState(0)
  const [responseBot, setResponseBot] = useState('');
  const classes = useStyles();
  const { user, isAuthenticated ,logout  } = useAuth0();


  return (
    <div className={classes.warp}>
      {
        !isAuthenticated ? <LoginButton /> :
          (
            <>
              <LogoutButton/>
              {responseBot === '' && controller < 2 && <StepperForm props={{ controller: controller, setController: setController }} />}
              <FormChatBot props={{ setController: setController, controller: controller, setResponseBot: setResponseBot, responseBot: responseBot }} />
              <ResponeChat props={{ responseBot: responseBot }} />
            </>
          )
      }
    </div>
  )
}

export default Index

const useStyles = makeStyles({
  warp:{
    display:'flex',
    width:'100%',
    padding:20,
    flexDirection:'column',
    justifyContent: 'flex-start',
    height:'100vh',
    fontFamily: 'Roboto Mono , monospace',
    fontWeight: 'bold',
  }
})

