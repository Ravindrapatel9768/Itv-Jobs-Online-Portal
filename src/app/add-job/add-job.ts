import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { JobService } from '../job-service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-job',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './add-job.html',
  styleUrl: './add-job.css',
})
export class AddJob {

  jobForm: any;
  isLoading: boolean=false;

  constructor(private jobService: JobService, private router: Router, private fb:FormBuilder)
  {
    
    // this.jobForm = new FormGroup({
    //   title: new FormControl('', [Validators.required,Validators.minLength(2)]),
    //   descritpion: new FormControl('',[Validators.required,Validators.minLength(2)]),
    //   openings: new FormControl(0, [Validators.required,Validators.min(1)]),
    // })


    this.jobForm = this.fb.group({
      title: ['', [Validators.required,Validators.minLength(2)]],
      description: ['',[Validators.required,Validators.minLength(2)]],
      openings: [0, [Validators.required,Validators.min(1)]],
    })
  }

  submit()
  {
    if(this.jobForm.valid)
    {
      this.isLoading = true
      this.jobService.postJob(this.jobForm.value).subscribe({
        next: ()=>{
          this.router.navigate(['home'])
          this.isLoading = false
        },
        error: ()=>{
          alert("Something went wrong")
          this.isLoading =false
        }
      })
    }
    else
    {
      alert("Data Invalid");
    }
  }
}
