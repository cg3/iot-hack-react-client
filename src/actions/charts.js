
export const chartDataSuccess = (data) => {

  return (dispatch) => {
    dispatch({
      type: 'CHART_SUCCESS',
      payload: data
    });
  };

};
