export const UPDATE_USER = 'user:updateUser';

export function updateUser(newuser) {
    return {
        type: UPDATE_USER,
        payload: {
            user: newuser
        }
    }
}