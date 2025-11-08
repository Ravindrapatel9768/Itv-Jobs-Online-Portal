import { Routes } from '@angular/router';
import { Jobs } from './jobs/jobs';
import { AddJob } from './add-job/add-job';
import { NotFound } from './not-found/not-found';
import { EditJobs } from './edit-jobs/edit-jobs';

export const routes: Routes = [
    {
        path:'',
        component:Jobs
    },
    {
        path:'home',
        component: Jobs
    },
    {
        path:'add-jobs',
        component: AddJob,
    },
    {
        path:'edit-job',
        component: EditJobs,
    },
    // {
    //     path:'edit-job/:title/:description/:openings',
    //     component: EditJobs,
    // },

    {
        path:'**',
        component: NotFound
    }
];
