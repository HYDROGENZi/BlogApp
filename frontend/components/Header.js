import { useState } from 'react';
import { APP_NAME } from '../config';
import Link from 'next/Link';
import Router from 'next/router';
import { signout,isAuth } from '../actions/auth';
import NProgress from 'nprogress';
import {

  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

Router.onRouteChangeStart = url=> NProgress.start();
Router.onRouteChangeComplete = url=> NProgress.done();
Router.onRouteChangeError = url=> NProgress.done();

const Header =() =>{
    const [isOpen,setIsOpen] = useState(false);

    const toggle = ()=>{
        setIsOpen(!isOpen);
    };
    return(
        <div>
        <Navbar color="light" light expand="md">
          <Link href="/">
            <NavLink style={{cursor:'pointer'}} className="font-weight-bold">{APP_NAME}</NavLink>
          </Link>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              
              <React.Fragment>
              <NavItem>
                <Link href="/blogs">
                <NavLink style={{cursor:'pointer'}}>Blogs</NavLink>
                </Link>
              </NavItem>
                </React.Fragment>

                {!isAuth() &&( <React.Fragment>
                <NavItem>
                <Link href="/signin">
                <NavLink style={{cursor:'pointer'}}>Sign in</NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/signup">
                <NavLink style={{cursor:'pointer'}}>Sign up</NavLink>
                </Link>
              </NavItem>
                </React.Fragment>)}

              {isAuth() && isAuth().role === 0 && (<NavItem>
              <Link href="/user">
                <NavLink style={{cursor:'pointer'}}>{`${isAuth().name}`}</NavLink>
              </Link>
              </NavItem>)}

              {isAuth() && isAuth().role === 1 &&(<NavItem>
              <Link href="/admin">
                <NavLink style={{cursor:'pointer'}}>{`${isAuth().name}`}</NavLink>
              </Link>
              </NavItem>)}

              {isAuth() && (<NavItem>
                
                <NavLink style={{cursor:'pointer'}} onClick={()=>signout(()=>{
                  Router.replace(`/signin`)
                })}>Signout</NavLink>
                
              </NavItem>)}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
};
export default Header;
  
  