import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Snackbar from '@mui/material/Snackbar';
import Typography from '@mui/material/Typography';
import { CloseIcon } from 'icons';

interface SelectedBarProps {
  selected: number[],
  handleDeSelectAll: React.MouseEventHandler<HTMLButtonElement>
}

const sx = {
  bar: {
    bottom: '0!important',
    width: '100vw',
    minHeight: 6,
  },
  barContent: {
    backgroundColor: 'primary.light',
    color: 'white',
    bottom: 0,
    borderRadius: 0,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: '100%',
    mx: 7.5,
    py: 0,
    px: 3,
    '& .MuiSnackbarContent-message': {
      width: '100%',
      py: 0.5,
    }
  },
  alignCenter: {
    display: 'flex',
    alignItems: 'center',
  },
  justifySpaceBetween: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  button: {
    color: 'white',
    textTransform: 'capitalize',
  }
};

const SelectedBar: React.FC<SelectedBarProps> = ({ selected, handleDeSelectAll }) => {

  return (
    <Snackbar
      sx={sx.bar}
      ContentProps={{
        sx: sx.barContent
      }}
      open={!!selected.length}
      message={
        <Box sx={sx.justifySpaceBetween}>
          <Box sx={sx.alignCenter}>
            <Typography>{selected.length} selected</Typography>
            <IconButton size='small' sx={{ ml: 1 }} onClick={handleDeSelectAll}>
              <CloseIcon sx={{ color: 'white' }} />
            </IconButton>
          </Box>
          <Box sx={sx.alignCenter}>
            <Button sx={sx.button}>
              Delete
            </Button>
            <Divider orientation="vertical" variant="middle" flexItem sx={{ backgroundColor: 'white'}} />
            <Button sx={sx.button}>
              Download
            </Button>
          </Box>
        </Box>
      }
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    />
  );
}

export default SelectedBar;