export const saveAuthorizationUserInLocalStorage = (user) => {
    const userString = JSON.stringify(user);
    localStorage.setItem('authorization', userString);
}

export const readAuthorizationUserFromLocalStorage = () => {
    return localStorage.getItem('authorization');
}

export const removeAuthorizationUserFromLocalStorage = () => {
    return localStorage.removeItem('authorization');
}

