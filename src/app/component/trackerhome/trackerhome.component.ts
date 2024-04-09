import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { TrackerServiceService } from '../../services/tracker-service.service';

@Component({
  selector: 'app-trackerhome',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule,RouterLink],
  templateUrl: './trackerhome.component.html',
  styleUrl: './trackerhome.component.css'
})
export class TrackerhomeComponent implements OnInit {

  tasks: any[] = [];
  
  constructor(private Taskservice: TrackerServiceService,private router:Router){}

  //  add task
  addTask(title: string, description: string): void {
    if (!title.trim() || !description.trim()) {
      alert('Please enter both a title and a description.')
      return;
    }
    this.Taskservice.addTask(title, description);
  }
  
  // updation
  update(task:any){
    this.router.navigate(['edit/',task.id])
  }

  // deletion
  deleteTask(id: number): void {
    
    this.tasks = this.tasks.filter(task => task.id !== id);
   
  }
  
  ngOnInit(): void {
    this.tasks = this.Taskservice.getDetails();
    
  }
}
