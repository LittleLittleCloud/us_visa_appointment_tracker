'use client'

import { VisaData, VisaType, getVisaDataAsync } from "@/api";
import React, { FC } from "react";
import { CentralBox, LargeLabel, SmallLabel, TinyLabel } from "./Globals";
import { CircularProgress, Stack } from "@mui/material";

export const VisaTracker: FC<{visaType: VisaType}> = ({visaType}) => {
    const [data, setData] = React.useState<VisaData | undefined>(undefined);
    const [loading, setLoading] = React.useState<boolean>(true);

    React.useEffect(() => {
        setLoading(true);
        getVisaDataAsync(visaType).then((data) => {
            setData(data);
            setLoading(false);
        });
    }, [visaType]);

    const dateti = (timestamp: number) => {
        const date = new Date(timestamp);
        return date.toLocaleDateString() + " " + date.toLocaleTimeString();
    }

    return (
        <CentralBox
            sx = {{
                width: "100%",
                height: "100%",
            }}>
            <Stack
                direction={'column'}
                spacing={2}
                sx = {{
                    backgroundColor: 'background.secondary',
                    borderRadius: '1.3rem',
                    padding: '1.7rem',
                    pt: '1.2rem',
                }}>
                <LargeLabel>
                    {visaType}
                </LargeLabel>
                {loading && <CircularProgress />}
                {data &&
                    data.data.map((data, k) => 
                    <SmallLabel key={k}>
                        {data[0]} - {data[1]} (last updated: {dateti(data[2])})
                    </SmallLabel>)}
            </Stack>
        </CentralBox>
    )
}