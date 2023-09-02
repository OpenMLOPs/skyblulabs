import React from "react";
import { Backdrop, CircularProgress } from '@mui/material';

const Loading = ({loading}) => {
    return (
        <Backdrop style={{ zIndex: 1500, color: '#fff', }} open={loading}>
            <CircularProgress color="inherit" />
        </Backdrop>
    )
}

export default Loading;