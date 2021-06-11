import firebase from './firebase';

export const handleCreateUserWithEmailAndPassword = (name: string, email: string, password: string) => {
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

const updateName = (name) => {
    const user = firebase.auth().currentUser;

    user.updateProfile({
        displayName: name
    })
}

export const handleSignOut = () => {
    firebase.auth().signOut()
}

export const formatUser = (user) => ({
    email: user.email,
    name: user.displayName,
    photoUrl: user.photoURL,
});