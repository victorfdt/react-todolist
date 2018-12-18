import axios from 'axios';

const jobs = [
    { title: "Senior Front End Developer" },
    { title: ".Net Frontend Developer", },
    { title: "Full Stack Software Developer" },
    { title: "Senior Front-end Engineer (Contract to Perm) - Remote or NY", },
    { title: "Senior Full Stack Web Developer" },
]
//Creating action
export const loadJob = () => {

    //When you return a function inside an action, redux thunk will take this action.
    return function (dispatch) {
        dispatch(loading())
        setTimeout(() => {
            // Yay! Can invoke sync or async actions with `dispatch`
            dispatch(jobLoaded(jobs))
        }, 2000);
    }

}

const jobLoaded = (data) => {
    return {
        type: 'JOB_LOADED',
        data: data
    };
}

const jobLoadFail = (data) => {
    return {
        type: 'JOB_LOAD_FAIL',
    };
}

const loading = () => {
    return {
        type: 'JOB_LOADING',
    };
}