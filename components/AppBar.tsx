'use client'

import { AppBar, Toolbar, Stack } from "@mui/material";
import React, { FC } from "react";
import { LargeLabel } from "./Globals";

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
                spacing={2}>
                <LargeLabel>
                    US Visa Appointment Tracker (Canada)
                </LargeLabel>
            </Stack>
        </Toolbar>
    </AppBar>);
}
