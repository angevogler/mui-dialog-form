import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';

const DialogContainer = (props) => {
  let menu_items = props.options.map((option, i) => {
    return (
      <MenuItem value={option.rowguid}>
        {option.title}
      </MenuItem>
    )
  })

  return (
    <Dialog
      open={props.dialog_show}
      onClose={props.dialog_close}
    >
      <DialogTitle>Form Dialog</DialogTitle>
      <DialogContent>
        <FormControl style={{minWidth: '150px'}}>
          <InputLabel>Label</InputLabel>
          <Select
            value={props.selected_option}
            onChange={props.selected_option_update}
            input={<Input />}
          >
          {menu_items}
          </Select>
        </FormControl>
        <DialogActions>
          <Button onClick={props.dialog_close}>Cancel</Button>
          <Button onClick={props.save}>Save</Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  )
}

export default DialogContainer;
