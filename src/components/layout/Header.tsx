import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAppSelecctor } from '../../app/hooks';
import { useDispatch } from 'react-redux';
import { EuiHeader, EuiText, EuiTextColor } from '@elastic/eui';

export function Header() {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
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
    const responsiveSection: any = [{
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
    const [isResponsive, setIsResponsive] = useState(false);
    const userName = useAppSelecctor((state) => state.auth.userInformation?.name);
    const [breadCrumbs, setBreadCrumbs] = useState([
        { text: "Dashboard" }
    ])

    useEffect(() => {
        if (window.innerWidth < 500) {

        }
    }, [])

    return (
        <>
            <EuiHeader style={{ minHeight: '8vh' }} sections={isResponsive ? responsiveSection : section} />
            <EuiHeader style={{ minHeight: '8vh' }} sections={[
                { breadcrumbs: breadCrumbs }
            ]} />
        </>
    )
}