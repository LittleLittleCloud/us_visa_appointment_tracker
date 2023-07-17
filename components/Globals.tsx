'use client'

import styled from "@emotion/styled";
import { AvatarProps, Typography, TextField, BaseTextFieldProps, Select, Box, Button } from "@mui/material";
import { useState } from "react";
export const Label = styled(Typography)(({theme}) => ({
    textTransform: 'none',
    overflow: 'auto',
    overflowWrap: 'break-word',
}));

export const LargeLabel = styled(Label)(({theme}) => ({
    fontSize: '1.5rem',
    lineHeight: '2rem',
}));

export const SmallLabel = styled(Label)(({theme}) => ({
    fontSize: '1rem',
    lineHeight: '1.5rem',
}));

export const TinyLabel = styled(Label)(({theme}) => ({
    fontSize: '0.8rem',
    lineHeight: '1.2rem',
}));

export const SmallTextField = styled(TextField)<BaseTextFieldProps>(({theme}) => ({
    '& .MuiOutlinedInput-root': {
        fontSize: '1rem',
        lineHeight: '1.5rem',
    },
}));

export const SmallSelect = styled(Select)(({theme}) => ({
    borderRadius: '0.25rem',
    lineHeight: '1.5rem',
    fontSize: '1rem',
}));

export const CentralBox = styled(Box)(({theme}) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}));

export const LargeClickableLabel = styled(LargeLabel)(({theme}) => ({
    cursor: 'pointer',
    '&:hover': {
        backgroundColor: theme.palette.action.hover,
    }
}));

export const SmallClickableLabel = styled(SmallLabel)(({theme}) => ({
    cursor: 'pointer',
    '&:hover': {
        backgroundColor: theme.palette.action.hover,
    }
}));

export const TinyClickableLabel = styled(TinyLabel)(({theme}) => ({
    cursor: 'pointer',
    '&:hover': {
        backgroundColor: theme.palette.action.hover,
    }
}));

export const SmallTextButton = styled(Button)(({theme}) => ({
    ...theme.typography.button,
    padding: '0.25rem',
    textTransform: 'none',
    fontSize: '1rem',
    lineHeight: '1.5rem',
}));

export const TinyTextButton = styled(Button)(({theme}) => ({
    ...theme.typography.button,
    padding: '0.15rem',
    paddingLeft: '0.5rem',
    paddingRight: '0.5rem',
    textTransform: 'none',
    fontSize: '0.8rem',
    lineHeight: '1.2rem',
}));