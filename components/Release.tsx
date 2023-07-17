'use client'

import { Box, CircularProgress } from "@mui/material";
import React from "react";
import { useState } from "react";
import { Markdown } from "./Markdown";
import { CentralBox } from "./Globals";

export const Release = () => {
    const [releaseMD, setReleaseMD] = useState('');
    const [loading, setLoading] = useState(true);

    React.useEffect(() => {
        fetch('https://raw.githubusercontent.com/LittleLittleCloud/us_visa_appointment_tracker/main/RELEASE_NOTE.md').then((response) => {
            response.text().then((text) => {
                setReleaseMD(text);
                setLoading(false);
            });
        });
    }, []);


    return (
        <CentralBox
            sx={{
                width: "100%",
            }}>
            {loading && <CircularProgress />}
            {!loading &&
                <Box
                    sx={{
                        backgroundColor: 'background.secondary',
                        borderRadius: '1.3rem',
                        padding: '1.7rem',
                        pt: '1.2rem',
                    }}>
                    <Markdown>{releaseMD}</Markdown>
                </Box>}
        </CentralBox>
    )
}