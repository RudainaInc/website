import { LANG_CHANGE } from '../actions/types';

export const changeLang = (lang: string) => (dispatch: any) => {
    dispatch({
        payload: lang,
        type: LANG_CHANGE,
    });
}