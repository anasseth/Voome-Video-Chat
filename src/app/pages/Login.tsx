import { EuiButton, EuiFlexGroup, EuiFlexItem, EuiImage, EuiPanel, EuiProvider, EuiSpacer, EuiText, EuiTextColor } from '@elastic/eui';
import animation from '../../assets/images/animation.gif'
import logo from '../../assets/images/logo.png'
import '@elastic/eui/dist/eui_theme_light.json';
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import { firebaseAuth, userRef } from '../utils/FirebaseConfig';
import { addDoc, getDocs, query, where } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUserInformation } from '../slices/AuthSlice';
import { current } from '@reduxjs/toolkit';

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    onAuthStateChanged(firebaseAuth, (currentUser) => {
        if (currentUser) {
            navigate("/");
        }
    })

    const login = async (params: any) => {
        const provider = new GoogleAuthProvider();
        const { user: { displayName, uid, email } } = await signInWithPopup(firebaseAuth, provider);
        if (email) {
            const firestoreGetUserQuery = query(userRef, where("uid", "==", uid));
            const fetchedUser = await getDocs(firestoreGetUserQuery);
            if (fetchedUser.docs.length == 0) {
                await addDoc(userRef, {
                    uid,
                    name: displayName,
                    email
                })
            }
            dispatch(setUserInformation({
                uid,
                name: displayName,
                email
            }));
            navigate("/");
        }
    }

    return (
        <EuiProvider colorMode='dark'>
            <EuiFlexGroup alignItems='center' justifyContent='center' style={{ width: '100vw', height: '100vh' }}>
                <EuiFlexItem grow={false}>
                    <EuiPanel paddingSize='xl'>
                        <EuiFlexGroup alignItems='center' justifyContent='center'>
                            <EuiFlexItem>
                                <EuiImage src={animation} alt='GIF Animation Showing People Doing Meeting'></EuiImage>
                            </EuiFlexItem>
                            <EuiFlexItem>
                                <EuiImage src={logo} alt='Brand Logo' size="230px" />
                                <EuiSpacer size='xs' />
                                <EuiText textAlign='center' grow={false}>
                                    <h3>
                                        <EuiTextColor>One platform to </EuiTextColor>
                                        <EuiTextColor color='#6b5efc'>connect all</EuiTextColor>
                                    </h3>
                                </EuiText>
                                <EuiSpacer size='l' />
                                <EuiButton fill onClick={login}>
                                    <EuiTextColor color="white">
                                        Login with Google
                                    </EuiTextColor>
                                </EuiButton>
                            </EuiFlexItem>
                        </EuiFlexGroup>
                    </EuiPanel>
                </EuiFlexItem>
            </EuiFlexGroup>
        </EuiProvider>
    );
}

export default Login;
