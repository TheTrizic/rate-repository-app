import { useMutation } from '@apollo/client';
import { useApolloClient } from '@apollo/client';


import useAuthStorage from '../hooks/useAuthStorage';
import { SIGN_IN } from '../graphql/mutations';

const useSignIn = () => {
	const [mutate, result] = useMutation(SIGN_IN);
	const authStorage = useAuthStorage();
	const apolloClient = useApolloClient();

	const signIn = async ({ username, password }) => {

		const myResult = await mutate({variables: {input:{username, password}}});
		await authStorage.setAccessToken(myResult.data.authorize.accessToken);
		apolloClient.resetStore();
		return myResult;
	};

	return [signIn, result];
};

export default useSignIn;