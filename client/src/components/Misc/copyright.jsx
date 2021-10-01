import * as React from 'react';
import styles from './Copyright.module.scss';

import Link from '@mui/material/Link';

export default function Copyright(props) {
    return (
      <div style={{color: props.color || styles.copyright || "black"}} {...props}>
        {'Copyright © '}
        <Link color="inherit" href="/">
          Log Inspector
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </div>
    );
  }