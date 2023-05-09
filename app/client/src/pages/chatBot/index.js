import React , {useState} from 'react'
import FormChatBot from './FormChatBot'
import StepperForm from '../Stepper/StepperForm'
import { makeStyles } from '@material-ui/styles';
import ResponeChat from './ResponeChat';
import Map from '../Maps/Map'
import Image from '../Unsplash/Image'
import LoginButton from '../Auto0/Auto0';

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@1,500&display=swap');
</style>

const Index = () => {
  const [controller , setController]  = useState(0)
  const [responseBot, setResponseBot] = useState('');
  const classes = useStyles();

  return (
    <div className={classes.warp}>
      {
        responseBot == '' && controller < 2 ? <StepperForm  props = {{controller:controller,setController:setController }}></StepperForm>:null
      } 
        <FormChatBot props = {{setController:setController , controller:controller , setResponseBot:setResponseBot ,responseBot:responseBot}}></FormChatBot>
        <ResponeChat props={{responseBot:responseBot}}></ResponeChat>
        {/* <Map></Map> */}
        {/* <LoginButton></LoginButton> */}
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