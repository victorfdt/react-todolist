import axios from 'axios';

//Creating action
export const loadJob = () => {
    
    //When you return a function inside an action, redux thunk will take this action.
    return function(dispatch){
        return axios.get('https://jobs.github.com/positions.json?description=javascript&page=1', {
    	headers: {
    	  'Access-Control-Allow-Origin': '*',
    	  'content-type': 'application/x-www-form-urlencoded'
    	},
    	
	    })
        .then(function (response){
            return jobLoaded(response)
            
        }).catch(function(error){
            return jobLoadFail()
        });
    }
}

export const jobLoaded = (data) => {
    return {
    type: 'JOB_LOADED',
    data: data
  };
}

export const jobLoadFail = (data) => {
    return {
    type: 'JOB_LOAD_FAIL',
  };
}

