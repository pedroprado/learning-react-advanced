export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

const storeResult = (result) =>{

    return dispatch => {
        setTimeout(()=>{
            dispatch({
                type:STORE_RESULT,
                result: result
            })
        }, 2000)
    }
}

const deleteResult = (id) =>{
    return {
        type: DELETE_RESULT,
        resultElId: id
    }
}

export default {
    storeResult,
    deleteResult
}
