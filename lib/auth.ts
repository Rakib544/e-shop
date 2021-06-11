import firebase from './firebase';

export const handleCreateUserWithEmailAndPassword = (name: string, email: string, password: string) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(res => {
            updateName(name)
            console.log(res)
        })
        .catch(err => console.log(err))
}

export const handleSingInWithEmailAndPassword = (email: string, password: string) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
}

const updateName = (name) => {
    const user = firebase.auth().currentUser;

    user.updateProfile({
        displayName: name
    }).then(() => {
        console.log('name updated successfully')
    }).catch((error) => {
        console.log(error)
    });
}

export const handleSignOut = () => {
    firebase.auth().signOut()
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })
}