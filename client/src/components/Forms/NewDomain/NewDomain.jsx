import * as React from 'react';
import { withRouter } from 'react-router';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { connect } from 'react-redux'; // connect to store

const NewDomainForm = (props) => {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" label="Domain" variant="standard" />
    </Box>
  );
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = {

};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewDomainForm));