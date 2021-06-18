import Link from 'next/link';
import { useState } from 'react';
import router from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import NavbarContainer, { NavButton } from './Navbar.style';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleDropdown = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <NavbarContainer>
      <div className="content">
        <div className="logo">
          <Link href="/">
            <a>OffSpace</a>
          </Link>
        </div>
        <div style={{ flex: 1 }} />
        <div className="buttons hide-mobile" id="desktop-navber">
          <NavButton
            onClick={() => {
              router.push('/settings');
            }}
          >
            <a>Settings</a>
          </NavButton>
        </div>
        <div className="hide-desktop" id="mobile-navber">
          <FontAwesomeIcon icon={faBars} onClick={handleDropdown} />
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem
              onClick={() => {
                router.push(`/settings`);
              }}
            >
              Settings
            </MenuItem>
          </Menu>
        </div>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
