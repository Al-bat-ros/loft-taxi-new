
import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';


export default function Select(events) {
  const { listArr, ...props} = events;

  
  const [labels, setLabels] = useState([]);
 

  useEffect(() => {
    
    setLabels(listArr)
  },[listArr])

 
  
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <NativeSelect>
          {labels.map((elem, i) => (
            
            <option key={i} >{elem}</option>
          ))}
        </NativeSelect>
      </FormControl>
    </Box>
  );
}