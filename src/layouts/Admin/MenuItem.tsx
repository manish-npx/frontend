import { useEffect, useState } from 'react';
import { NavLink, useNavigate, useLocation, Location, Link } from 'react-router-dom';
import { IMenuItem } from './Sidebar';

const MenuItem = ({ menuItem }: { menuItem: IMenuItem }) => {
    const [isMenuExtended, setIsMenuExtended] = useState(false);
    const [isExpandable, setIsExpandable] = useState(false);
    const [isMainActive, setIsMainActive] = useState(false);
    const [isOneOfChildrenActive, setIsOneOfChildrenActive] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuExtended(!isMenuExtended);
        setIsOneOfChildrenActive(!isOneOfChildrenActive);

    };

    const handleMainMenuAction = () => {
        if (isExpandable) {
            toggleMenu();
            return;
        }
        navigate(menuItem.path ? menuItem.path : '/');
    };

    const calculateIsActive: (url: Location) => void = (url: Location) => {
        setIsMainActive(false);
        setIsOneOfChildrenActive(false);
        if (isExpandable && menuItem && menuItem.children) {
            menuItem.children.forEach((item) => {
                if (item.path === url.pathname) {
                    setIsOneOfChildrenActive(true);
                    setIsMenuExtended(true);
                }
            });
        } else if (menuItem.path === url.pathname) {
            setIsMainActive(true);
        }
    };

    useEffect(() => {
        if (location) {
            calculateIsActive(location);
        }
    }, [location, isExpandable, menuItem]);

    useEffect(() => {
        if (!isMainActive && !isOneOfChildrenActive) {
            setIsMenuExtended(false);
        }
    }, [isMainActive, isOneOfChildrenActive]);

    useEffect(() => {
        setIsExpandable(
            Boolean(menuItem && menuItem.children && menuItem.children.length > 0)
        );
    }, [menuItem]);

    return (
        <>
            {Boolean(menuItem && menuItem.children && menuItem.children.length > 0) ?

                <li className={`sidebar-dropdown ${isMenuExtended ? 'active' : ''}`}>
                    <a role="link" onClick={handleMainMenuAction} style={{ cursor: 'pointer' }} >
                        <i className={`ti ti-${menuItem.icon} me-2`}></i>
                        <p>{(menuItem.name)}</p>
                    </a>

                    {isExpandable && menuItem && menuItem.children && menuItem.children.map((item) => (
                        <div className={`sidebar-submenu  ${isMainActive || isOneOfChildrenActive ? 'd-block' : ''}`}>
                            <ul key={item.name}>
                                <li>
                                    <NavLink className="nav-link" to={`${item.path}`}>
                                        <p>{(item.name)}</p>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    ))}
                </li>

                : <li><Link to={`${menuItem.path}`}><i className={`ti ti-${menuItem.icon} me-2`}></i>{(menuItem.name)}</Link></li>
            }
        </>
    );
};

export default MenuItem;
