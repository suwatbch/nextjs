"use client";
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';

export default function Loading() {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + '.' : ''));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box 
      display="flex" 
      alignItems="center" 
      justifyContent="center" 
      sx={{ height: "100vh" }}
    >
      Loading{dots}
    </Box>
  );
}
