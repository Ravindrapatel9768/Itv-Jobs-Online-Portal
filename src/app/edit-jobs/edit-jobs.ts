import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-jobs',
  imports: [],
  templateUrl: './edit-jobs.html',
  styleUrl: './edit-jobs.css',
})
export class EditJobs {

  title : string="";
  description : string="";
  openings : number=0;

  constructor(private route: ActivatedRoute)
  {
    // this.title = this.route.snapshot.queryParamMap.get('title') || "";
    // this.description = this.route.snapshot.queryParamMap.get('description')||"";
    // this.openings = Number(this. route.snapshot.queryParamMap.get('openings')) || 0;

    // this.title = this.route.snapshot.paramMap.get('title') || "";
    // this.description = this.route.snapshot.paramMap.get('description')||"";
    // this.openings = Number(this. route.snapshot.paramMap.get('openings')) || 0;

    this.title = history.state.title || "";
    this.description = history.state.description || "";
    this.openings = Number(history.state.openings) || 0

  }

}
