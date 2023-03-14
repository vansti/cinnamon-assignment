import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { DeleteIcon, DownloadIcon } from 'icons';
import { User, UserId } from 'model';
import React from 'react';
import { color } from 'theme/color';

interface UserTableProps {
  userList: User[]
  selected: UserId[]
  handleSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleRowClick: (event: React.MouseEvent<HTMLTableRowElement>, id: UserId) => void
}

const sx = {
  table: {
    mb: 8
  },
  tableHead: {
    'th': {
      fontSize: '14px',
      lineHeight: '19px',
      fontWeight: 600,
    }
  },
  avatar: {
    mr: 2
  },
  checkbox: {
    color: 'grey.400',
    '&.Mui-checked': {
      color: 'primary.light',
    }
  },
  contentText: {
    fontSize: '14px',
    lineHeight: '19px',
    color: 'primary.light',
  },
  alignCenter: {
    display: 'flex',
    alignItems: 'center',
  },
  row: {
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: color.hoverBlue,
    },
    '&.Mui-selected': {
      backgroundColor: color.selectedBlue,
    }
  }
};

const UserTable: React.FC<UserTableProps> = (props) => {
  const {userList, selected, handleSelectAllClick, handleRowClick} = props;
  const numSelected = selected.length;
  const rowCount = userList.length;

  return (
    <Table sx={sx.table}>
      <TableHead sx={sx.tableHead}>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              sx={sx.checkbox}
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={handleSelectAllClick}
            />
          </TableCell>
          <TableCell>No.</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Blog</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {userList.map((user) => (
          <TableRow
            key={user.id}
            sx={sx.row}
            onClick={(event) => handleRowClick(event, user.id)}
            selected={selected.includes(user.id)}
            aria-checked={selected.includes(user.id)}
          >
            <TableCell padding="checkbox">
              <Checkbox
                sx={sx.checkbox}
                checked={selected.includes(user.id)}
              />
            </TableCell>
            <TableCell>
              {user.id}
            </TableCell>
            <TableCell>
              <Box sx={sx.alignCenter}>
                <Avatar alt={user.login} src={user.avatar_url} sx={sx.avatar} />
                <Typography sx={sx.contentText}>{user.login}</Typography>
              </Box>
            </TableCell>
            <TableCell>
              <Link
                sx={sx.contentText}
                href={user.html_url}
                underline="none"
                target="_blank"
                onClick={e => e.stopPropagation()}
              >
                {user.html_url}
              </Link>
            </TableCell>
            <TableCell>
              <Box sx={sx.alignCenter}>
                <IconButton size='small' onClick={e => e.stopPropagation()}>
                  <DownloadIcon />
                </IconButton>
                <Divider orientation="vertical" variant="middle" flexItem />
                <IconButton size='small' onClick={e => e.stopPropagation()}>
                  <DeleteIcon />
                </IconButton>
              </Box>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default React.memo(UserTable);