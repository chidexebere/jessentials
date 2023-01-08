import React, { createContext, useReducer, Dispatch } from 'react';
import { AppActions } from '../actions';
import appReducer from '../reducers/appReducer';
import { initialState } from '../initialState';

interface AppContextProps {
	children: React.ReactNode;
}

export const AppContext = createContext<{
	state: IAppState;
	dispatch: Dispatch<AppActions>;
}>({
	state: initialState,
	dispatch: () => undefined,
});

const AppContextProvider = ({ children }: AppContextProps): JSX.Element => {
	const [state, dispatch] = useReducer(appReducer, initialState);

	return (
		<AppContext.Provider value={{ state, dispatch }}>
			{children}
		</AppContext.Provider>
	);
};

export default AppContextProvider;
