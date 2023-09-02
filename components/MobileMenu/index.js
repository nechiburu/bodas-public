import React, { Component } from 'react';
import { Collapse, CardBody, Card } from 'reactstrap';
import Link from 'next/link';

const services = [
    {
        id: 1,
        title: 'Cancun',
        slug: 'Cancun',
    },
    {
        id: 2,
        title: 'Jamaica',
        slug: 'Jamaica',
    },
    {
        id: 3,
        title: 'Punta Cana',
        slug: 'Punta Cana',
    },
    {
        id: 5,
        title: 'Riviera Maya',
        slug: 'Riviera-Maya',
    },
    {
        id: 6,
        title: 'Tulum',
        slug: 'Tulum',
    },
];

const menus = [
    {
        id: 1,
        title: 'Inicio',
        link: '/',
    },
    {
        id: 2,
        title: 'Nosotros',
        link: '/about',
    },
    {
        id: 4,
        title: 'Bodas Destino',
        link: '/service-s2',
        submenu: services.map((service) => ({
            id: service.id,
            title: service.title,
            link: `/service/${service.slug}`,
        })),
    },
    {
        id: 7,
        title: 'Fondo Mielero',
        link: '#',
        submenu: [
            {
                id: 71,
                title: '¿Como funciona?',
                link: '/info',
            },
            {
                id: 72,
                title: 'Regalar',
                link: '/regalo',
            },
        ],
    },
    {
        id: 5,
        title: 'Contacto',
        link: '/contact',
    },
    {
        id: 88,
        title: 'Login',
        link: '/login',
    },
    {
        id: 89,
        title: 'Registro',
        link: '/register',
    },
];

class MobileMenu extends Component {
    state = {
        isMenuShow: false,
        isOpen: 0,
    };

    menuHandler = () => {
        this.setState({
            isMenuShow: !this.state.isMenuShow,
        });
    };

    setIsOpen = (id) => () => {
        this.setState({
            isOpen: id === this.state.isOpen ? 0 : id,
        });
    };

    render() {
        const { isMenuShow, isOpen } = this.state;

        const ClickHandler = () => {
            window.scrollTo(10, 0);
        };

        return (
            <div>
                <div className={`mobileMenu ${isMenuShow ? 'show' : ''}`}>
                    <div className="menu-close">
                        <div className="clox" onClick={this.menuHandler}>
                            <i className="ti-close"></i>
                        </div>
                    </div>

                    <ul className="responsivemenu">
                        {menus.map((item) => {
                            return (
                                <li key={item.id}>
                                    {item.submenu ? (
                                        <p onClick={this.setIsOpen(item.id)}>
                                            {item.title}
                                            {item.submenu ? (
                                                <i className="fa fa-angle-right" aria-hidden="true"></i>
                                            ) : (
                                                ''
                                            )}
                                        </p>
                                    ) : (
                                        <Link onClick={ClickHandler} href={item.link}>
                                            {item.title}
                                        </Link>
                                    )}
                                    {item.submenu ? (
                                        <Collapse isOpen={item.id === isOpen}>
                                            <Card>
                                                <CardBody>
                                                    <ul>
                                                        {item.submenu.map((submenu) => (
                                                            <li key={submenu.id}>
                                                                <Link
                                                                    onClick={ClickHandler}
                                                                    className="active"
                                                                    href={submenu.link}
                                                                >
                                                                    {submenu.title}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </CardBody>
                                            </Card>
                                        </Collapse>
                                    ) : (
                                        ''
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <div className="showmenu" onClick={this.menuHandler}>
                    <button type="button" className="navbar-toggler open-btn">
                        <span className="icon-bar first-angle"></span>
                        <span className="icon-bar middle-angle"></span>
                        <span className="icon-bar last-angle"></span>
                    </button>
                </div>
            </div>
        );
    }
}

export default MobileMenu;
