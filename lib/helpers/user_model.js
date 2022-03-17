export default {

    userData: function () {
        const response = JSON.parse(localStorage.user)
        return {
            'token': response.user.stsTokenManager.accessToken,
            'displayName': response.user.providerData[0].displayName,
            'email': response.user.providerData[0].email,
            'phone': response.user.providerData[0].phone,
        }
    },


}