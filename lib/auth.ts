type userData = {
    email: string;
    displayName: string;
    photoURL: string;
}

type returnData = {
    email: string;
    name: string;
    photoUrl: string;
}

import firebase from './firebase';

export const handleCreateUserWithEmailAndPassword = (name: string, email: string, password: string): void => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(res => {
            updateName(name)
        })
        .catch(err => console.log(err))
}

export const handleSingInWithEmailAndPassword = (email: string, password: string) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then(res => {
            const formattedData = formatUser(res.user)
            return formatUser
        })
        .catch(err => {
            return err.message
        })
}

const updateName = (name: string): void => {
    const user = firebase.auth().currentUser;

    user.updateProfile({
        displayName: name
    })
}

export const handleSignOut = (): void => {
    firebase.auth().signOut()
}

export const formatUser = (user: userData): returnData => ({
    email: user.email,
    name: user.displayName,
    photoUrl: user.photoURL,
});