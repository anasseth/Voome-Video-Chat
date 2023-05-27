import { EuiCard, EuiFlexGroup, EuiFlexItem, EuiImage, EuiProvider } from '@elastic/eui';
import '@elastic/eui/dist/eui_theme_light.json'
import { useAppSelecctor } from '../hooks';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import dashboard1 from '../../assets/images/dashboard1.png';
import dashboard2 from '../../assets/images/dashboard2.png';
import dashboard3 from '../../assets/images/dashboard3.png';
import { Header } from '../../components/layout/Header';

function Dashboard() {
    useAuth();
    const navigate = useNavigate();

    return (
        <>
            <div
                style={{
                    height: "100vh",
                    display: "flex",
                    flexDirection: "column"
                }}
            >
                <EuiFlexGroup justifyContent='center' alignItems='center' style={{ margin: '5vw 10vh' }}>
                    <EuiFlexItem>
                        <EuiCard
                            icon={<EuiImage size="5rem" alt='' src={dashboard1} />}
                            title="Create Meeting"
                            description="Create a new meeting and invite people"
                            onClick={() => { navigate("/create") }}
                            paddingSize='xl'
                        />
                    </EuiFlexItem>
                    <EuiFlexItem>
                        <EuiCard
                            icon={<EuiImage size="100%" alt='' src={dashboard2} />}
                            title="My Meeting"
                            description="Find your created meetings here !"
                            onClick={() => { navigate("/my-meeting") }}
                            paddingSize='xl'
                        />
                    </EuiFlexItem>
                    <EuiFlexItem>
                        <EuiCard
                            icon={<EuiImage size="5rem" alt='' src={dashboard3} />}
                            title="Upcoming Meeting"
                            description="Find your upcoming meetings here !"
                            onClick={() => { navigate("/upcoming") }}
                            paddingSize='xl'
                        />
                    </EuiFlexItem>
                </EuiFlexGroup>
            </div>
        </>
    );
}

export default Dashboard;
