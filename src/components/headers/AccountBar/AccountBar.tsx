import React, { FC } from 'react';
import { Box, Button, CircularProgress, Container, Menu, MenuItem, Typography } from '@mui/material';
import { useRouter } from 'next/router';

import { useGetProfileAvatarQuery } from '@/query/profile/avatar.query';
import { useLogoutQuery } from '@/query/authorization/authorization.query';

import CustomAvatar from '@/components/avatar/CustomAvatar';

import TaggedText from '@/common/TaggedText';

import VerifiedIcon from '@/ui/icon/VerifiedIcon';

interface IAccountBar {
  name?: string;
  tag?: string;
  hasAvatar?: boolean;
  isVerified?: boolean;
  isVertical?: boolean;
  isLoading?: boolean
}

const AccountBar: FC<IAccountBar> = ({
  name,
  tag,
  hasAvatar,
  isVerified,
  isVertical,
  isLoading,
}) => {
  const { data: avatarUrl } = useGetProfileAvatarQuery();
  const { refetch: logout } = useLogoutQuery();
  const { push } = useRouter();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  if (isLoading) return (<CircularProgress sx={{ m: 1 }} />)
  if (!name || !tag) return (<></>)

  return (
    <Container disableGutters >
      {/* имя и тэг пользователя, всплывающее меню */}
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: 1,
          m: 0,
          p: 0,
          minWidth: 'auto'
        }}
      >
        {/* отображение аватара или бланка */}
        {hasAvatar && <CustomAvatar img={avatarUrl} alt='AvatarAlt' width={30} height={30} />}
        <Box
          sx={{
            display: { xs: 'none', md: 'flex', lg: 'flex' },
            flexDirection: isVertical ? 'column' : 'row',
            alignItems: isVertical ? 'start' : 'center',
            gap: '0 8px',
          }}
        >
          <Box sx={{ display: 'flex', gap: '8px' }}>
            <Typography variant="h5" fontWeight={700}> {name} </Typography>
            {isVerified && <VerifiedIcon />}
          </Box>
          <TaggedText color="tag.contrastText" tagSymbol="@" text={tag} />
        </Box>
      </Button>

      <Menu
        disableScrollLock
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        sx={{
          '& .MuiMenu-paper': {
            top: '770px!important',
          }
        }}
      >
        <MenuItem onClick={() => {
          handleClose();
          push('/profile')
        }}>Profile</MenuItem>
        <MenuItem onClick={() => {
          handleClose();
          logout(); push('/logout')
        }}>Logout</MenuItem>
      </Menu>
    </Container>
  );
};

export default AccountBar;
