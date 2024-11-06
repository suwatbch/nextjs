"use client"
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function MyComponent() {
  return (
    <Stack 
      direction="row" 
      spacing={2}
      alignItems="center" 
      justifyContent="center"
      sx={{ height: "100vh", background: "radial-gradient(#d2f1df, #d3d7fa, #bad8f4)" }}
    >
      <Button variant="contained">Button 1</Button>
      <Button variant="contained">Button 2</Button>
      <Button variant="contained">Button 3</Button>
    </Stack>
  );
}
