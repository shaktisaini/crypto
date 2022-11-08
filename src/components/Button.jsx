import { styled } from '@mui/material/styles';
import {Button} from "@mui/material";
import { borderRadius } from '@mui/system';

export const Custombutton = styled(Button)({
    color: '#fff',
    backgroundColor: '#2B9EB3',
    borderRadius:'10px',
    fontWeight:'600',
    padding: '10px 20px 10px 20px',
    "&:hover":{
        backgroundColor: '#2B9EB3'
    }
})