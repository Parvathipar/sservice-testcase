import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TrackerServiceService {

  constructor(private router:Router) { }

  tasks: { id: number, title: string, description: string }[] = [
    { id: 1, title: 'Research New Technologies', description: 'Explore emerging technologies relevant to the project and assess their potential benefits for implementation' },
    { id: 2, title: 'Organize Office Event', description: 'Plan and coordinate logistics for the upcoming office event, including venue booking, catering, and invitations.' },
    { id: 3, title: 'Complete Project Proposal', description: 'Draft a detailed project proposal outlining objectives, scope, deliverables, and timeline for client review.' },
    
  ];
  
   
   

  
  // add task
  addTask(title: string, description: string): void {
    const newId = this.tasks.length + 1;
    this.tasks.push({ id: newId, title, description });
    
  }
  
  // updation
  updateTask(id: number, title: string, description: string): void {
    const index = this.tasks.findIndex(task => task.id === id);
    if (index !== -1) {
      this.tasks[index] = { id, title, description };
      this.router.navigate(['/']);
    }
  }
  
  
  // deletion
  deleteTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
  getDetails(){
    return this.tasks;
  }
}
