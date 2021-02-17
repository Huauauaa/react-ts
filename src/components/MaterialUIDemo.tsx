import { Avatar, Badge, CircularProgress } from '@material-ui/core';
import avatar from '../assets/images/01.jpg';
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';

function MaterialUIDemo() {
  return (
    <fieldset>
      <legend>material-ui</legend>
      <Badge badgeContent={4} color="primary">
        <Avatar alt="Tony Tony Chopper" src={avatar} />
      </Badge>
      <AccessAlarm></AccessAlarm>
      <ThreeDRotation></ThreeDRotation>
      <CircularProgress color="secondary" />
    </fieldset>
  );
}

export default MaterialUIDemo;
