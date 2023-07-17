'use client'

import { AppBar, Toolbar, Stack, Tooltip, Button } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import React, { FC } from "react";
import { LargeClickableLabel, LargeLabel, SmallClickableLabel } from "./Globals";

export const VisaAppBar:FC = () => {
     return (<AppBar
        position="static"
        sx={{
            flexGrow: 1,
        }}>
        <Toolbar
            variant="regular">
            <Stack
                direction={'row'}
                flexGrow={1}
                spacing={2}>
                <LargeClickableLabel
                    onClick={() =>{
                        window.open('/');
                    }}>
                    US Visa Appointment Tracker (Canada)
                </LargeClickableLabel>
            </Stack>
            <Stack
                spacing={2}
                direction='row'>
                <Tooltip title="View project on GitHub">
                    <GitHubIcon
                        fontSize='large'
                        onClick={() => {
                            window.open('https://github.com/LittleLittleCloud/us_visa_appointment_tracker');
                        }} />
                </Tooltip>
                <Button // jump to /release
                    onClick={() => {
                        window.open('/release');
                    }}>
                    Release Notes
                </Button>
            </Stack>
        </Toolbar>
    </AppBar>);
}
