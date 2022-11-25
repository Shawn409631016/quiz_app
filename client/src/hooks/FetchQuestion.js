import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import data from '../database/data';

/**redux actions */
import * as Action from '../redux/question_reducer';

/**fetch question hook to fetch api data and set value to store */
export const useFetchQuestion = () => {
	const dispatch = useDispatch();
	const [getData, setGetData] = useState({
		isLoading: false,
		apiData: [],
		serverError: null,
	});

	useEffect(() => {
		setGetData((prev) => ({ ...prev, isLoading: true }));

		/**async function fetch backend data */
		(async () => {
			try {
				let question = await data;

				if (question.length > 0) {
					setGetData((prev) => ({ ...prev, isLoading: false }));
					setGetData((prev) => ({ ...prev, apiData: question }));

					/**dispatch an action */
					dispatch(Action.startExamAction(question));
				} else {
					throw new Error('NO Question Available');
				}
			} catch (error) {
				setGetData((prev) => ({ ...prev, isLoading: false }));
				setGetData((prev) => ({ ...prev, serverError: error }));
			}
		})();
	}, [dispatch]);

	return [getData, setGetData];
};

/**MoveAction Dispatch function */
export const MoveNextQuestion = () => async (dispatch) => {
	try {
		dispatch(Action.moveNextAction()); /**increase trace by 1 */
	} catch (error) {
		console.log(error);
	}
};
export const MovePrevQuestion = () => async (dispatch) => {
	try {
		dispatch(Action.movePrevAction()); /**decrease trace by 1 */
	} catch (error) {
		console.log(error);
	}
};
