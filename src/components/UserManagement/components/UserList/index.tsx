import { User, UserId } from 'model';
import React, { useCallback, useEffect } from 'react';
import SelectedBar from './components/SelectedBar';
import UserTable from './components/UserTable';

interface UserListProps {
  userList: User[]
}

const UserList: React.FC<UserListProps> = (props) => {
  const { userList } = props;
  const [selected, setSelected] = React.useState<UserId[]>([]);

  const handleDeSelectAll = useCallback((_event: React.MouseEvent<HTMLButtonElement>) => {
    setSelected([]);
  }, []);

  const handleSelectAllClick = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = userList.map((user) => user.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  }, [userList]);

  const handleRowClick = useCallback((_event: React.MouseEvent<HTMLTableRowElement>, id: UserId) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: UserId[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  }, [selected]);

  useEffect(() => {
    setSelected([]);
  }, [userList]);

  return (
    <>
      <UserTable
        userList={userList}
        selected={selected}
        handleRowClick={handleRowClick}
        handleSelectAllClick={handleSelectAllClick}
      />
      <SelectedBar
        selected={selected}
        handleDeSelectAll={handleDeSelectAll}
      />
    </>
  );
}

export default React.memo(UserList);