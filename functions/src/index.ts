import * as functions from "firebase-functions";
import fetch from 'node-fetch';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

export const assert = (data: any, key: string) => {
    if (!data[key]) {
        throw new functions.https.HttpsError('invalid-argument', `function called without ${key} data`);
    } else {
        return data[key];
    }
}

export const catchErrors = async (promise: Promise<any>) => {
    try {
        return await promise;
    } catch(err) {
        throw new functions.https.HttpsError('unknown', err)
    }
}

const discordTokenCallMethod = async (code: string) => {
    const client_id = functions.config().discord.clientid;
    const client_secret = functions.config().discord.clientsecret;

    let formBody = new URLSearchParams();
    formBody.append('client_id', client_id)
    formBody.append('client_secret', client_secret)
    formBody.append('grant_type', 'authorization_code')
    formBody.append('code', code)
    formBody.append('redirect_uri', 'http://localhost:8080/discord')
    formBody.append('scope', 'identify email connections')

    return await fetch('https://discord.com/api/oauth2/token', {
        method: 'POST',
        body: formBody,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then((res) => (res.json()));
}

const twitchTokenToData = async (token: string) => {
    const headers = {
        'Authorization': `Bearer ${token}`
    }
    return await fetch("https://id.twitch.tv/oauth2/userinfo", {
        method: 'GET',
        headers: headers,
        redirect: 'follow'
    })
      .then(response => (response.json()))
      .catch(error => console.log('error', error));
}

export const discordCodeToToken = functions.https.onCall(async(data) => {
    const code = assert(data, 'code')
    return await catchErrors(discordTokenCallMethod(code))
})

export const callableTwitchCodeToData = functions.https.onCall(async(data) => {
    const token = assert(data, 'token')
    return await catchErrors(twitchTokenToData(token))
})