import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAppSelecctor } from '../../hooks';
import { useDispatch } from 'react-redux';
import { EuiButton, EuiHeader, EuiText, EuiTextColor } from '@elastic/eui';

function Header() {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const [isResponsive, setIsResponsive] = useState(false);
    const userName = useAppSelecctor((state) => state.auth.userInformation?.name);
    const section: any = [{
        items: [
            <Link to="#">
                <EuiText>
                    <h2 style={{ padding: '0 1vw' }}>
                        <EuiTextColor color="#0b5cff">
                            Voome
                        </EuiTextColor>
                    </h2>
                </EuiText>
            </Link>
        ]
    }];
    const responsiveSection: any = [
        {
            items: [
                <Link to="#">
                    <EuiText>
                        <h2 style={{ padding: '0 1vw' }}>
                            <EuiTextColor color="#0b5cff">
                                Voome
                            </EuiTextColor>
                        </h2>
                    </EuiText>
                </Link>
            ]
        },
        {
            items: [
                <>
                    {
                        userName ? (
                            <EuiText>
                                <h3>
                                    <EuiTextColor color='white'>Hello, </EuiTextColor>
                                    <EuiTextColor color="#0b5cff">{userName}</EuiTextColor>
                                </h3>
                            </EuiText>
                        ) : null
                    }
                </>
            ]
        }
    ];
    const [breadCrumbs, setBreadCrumbs] = useState([
        { text: "Dashboard" }
    ])

    useEffect(() => {
        if (window.innerWidth < 500) {

        }
    }, [])

    return (
        <>
            <EuiHeader style={{ minHeight: '8vh' }} theme="dark" sections={isResponsive ? responsiveSection : section} />
            <EuiHeader style={{ minHeight: '8vh' }} sections={[
                { breadcrumbs: breadCrumbs }
            ]} />
            <EuiButton fill>
                <EuiTextColor color="white">
                    Login with Google
                </EuiTextColor>
            </EuiButton>
        </>
    )
}

export default Header;