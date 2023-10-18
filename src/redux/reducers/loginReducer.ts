/* eslint-disable default-param-last */
/* eslint-disable consistent-return */
const initialState = {
  email: '',
  password: '',
}

export async function handleAuth(email, password) {
  console.log(`Aqui esta o email: ${email} e a password ${password}`)
  try {
    const result = fetch('https://9578-163-47-49-182.ngrok.io/auth/signin', {
      method: 'get',
    })
      .then((httpResponse) => {
        if (httpResponse.ok) {
          return httpResponse.json()
        }
        throw new Error()
      })
      .then((json) => json)
    return result
  } catch (error) {
    console.log(error)
  }
}

export default function reducer(state = initialState, action) {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case 'LOGIN':
      handleAuth(state.email, state.password)
      return state
  }
}
