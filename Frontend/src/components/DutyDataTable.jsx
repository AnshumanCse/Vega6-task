import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
} from '@mui/material';

const DutyDataTable = ({ data }) => {
    if (!data || data.length === 0) {
        return <Typography variant="body1">No duties found.</Typography>;
    }

    return (
        <TableContainer component={Paper} style={{ marginTop: '20px' }}>
            <Table>
                <TableHead style={{ backgroundColor: "#D6D6D6" }}>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Vehicle</TableCell>
                        <TableCell>Driver</TableCell>
                        <TableCell>Conductor</TableCell>
                        <TableCell>Start Time</TableCell>
                        <TableCell>Duration</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((duty) => (
                        <TableRow key={duty._id}>
                            <TableCell>{new Date(duty.date).toLocaleDateString()}</TableCell>
                            <TableCell>{duty.vehicleId.name} ({duty.vehicleId.vehicleNumber})</TableCell>
                            <TableCell>{duty.driverId.name}</TableCell>
                            <TableCell>{duty.conductorId.name}</TableCell>
                            <TableCell>{duty.startTime}</TableCell>
                            <TableCell>{duty.duration.hours}h {duty.duration.minutes}m</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default DutyDataTable;