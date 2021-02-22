import React from 'react';
import os from 'os';
import { Collapse, List, ListItem } from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';

function OSInfo() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <fieldset>
      <legend>OSInfo</legend>
      <List>
        <ListItem>arch: {os.arch()}</ListItem>
        <ListItem>platform: {os.platform()}</ListItem>
        <ListItem>homedir: {os.homedir()}</ListItem>
        <ListItem>hostname: {os.hostname()}</ListItem>
        <ListItem>release: {os.release()}</ListItem>
        <ListItem onClick={handleClick}>
          networks
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open}>
          <List>
            {Object.keys(os.networkInterfaces()).map(
              (key: string, index: number) => (
                <ListItem key={index}>{key}</ListItem>
              ),
            )}
          </List>
        </Collapse>
      </List>
    </fieldset>
  );
}

export default OSInfo;
