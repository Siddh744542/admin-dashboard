import React from 'react';
import { Box } from '@mui/material';
import Header from 'componenets/Header';
import BreakdownChart from 'componenets/BreakdownChart';
const Breakdown = () => {

    return (
       <Box m="1.5rem 2.5rem">
            <Header title="BREAKDOWN" subtitle="Breakdown of sales by Category" />
            <Box mt="40px" height="75vh" >
                <BreakdownChart />
            </Box>
       </Box>
    )
}

export default Breakdown