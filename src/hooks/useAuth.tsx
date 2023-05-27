import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { firebaseAuth } from '../app/utils/FirebaseConfig';
import { setUserInformation } from '../app/slices/AuthSlice';

function useAuth() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(
            firebaseAuth,
            (currentUser) => {
                if (!currentUser) {
                    navigate("/")
                }
                dispatch(setUserInformation(
                    {
                        uid: currentUser?.uid,
                        name: currentUser?.displayName,
                        email: currentUser?.email
                    }
                ))
            })
        return () => unsubscribe();
    }, [dispatch, navigate])

}

export default useAuth;