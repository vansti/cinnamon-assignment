import Box from '@mui/material/Box';
import { useDebounce } from 'hooks';
import { User } from 'model';
import React, { useCallback, useEffect, useState } from 'react';
import { color } from 'theme/color';
import Header from './components/Header';
import UserList from './components/UserList';

const sx = {
  container: {
    mx: 7.5,
  },
  userList: {
    backgroundColor: color.hoverBlue,
  }
};

export const UserManagement: React.FC = () => {
  const [userList, setUserList] = useState<User[]>([]);
  const [search, setSearch] = useState<string>('');
  const searchText = useDebounce(search);

  useEffect(() => {
    async function fetchUserList() {
      const requestUrl = !searchText ? 'https://api.github.com/users' : `https://api.github.com/search/users?q=${searchText}`;
      const response = await fetch(requestUrl);
      const responseJSON = await response.json();
      const users = !searchText ? responseJSON : responseJSON?.items
      setUserList(users || []);
    }
    fetchUserList();
  }, [searchText]);

  const handleSearch = useCallback((event: React.ChangeEvent<HTMLInputElement>) => setSearch(event.target.value), []);

  return (
    <>
      <Box sx={sx.container}>
        <Header search={search} handleSearch={handleSearch} />
      </Box>
      <Box sx={sx.userList}>
        <Box sx={sx.container}>
          <UserList userList={userList} />
        </Box>
      </Box>
    </>
  );
}

export default React.memo(UserManagement);
