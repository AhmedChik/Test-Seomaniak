import { Component, OnInit } from '@angular/core';
import { Student } from '../models/etudiant.model';
import { EtudiantService } from '../services/etudiant.service';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-etudiant',
  standalone: true,
  imports: [FormsModule, CommonModule, NgFor],
  templateUrl: './etudiant.component.html',
  styleUrl: './etudiant.component.css',
})
export class EtudiantComponent implements OnInit {
  students: Student[] = [];
  student: Student = new Student();

  constructor(private studentService: EtudiantService) {}

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(): void {
    this.studentService.getStudents().subscribe((data: Student[]) => {
      this.students = data;
      console.log(this.students);
    });
  }

  onSubmit(): void {
    if (this.student.id === 0) {
      this.studentService.addStudent(this.student).subscribe(() => {
        this.getStudents();
        this.student = new Student();
      });
    } else {
      this.studentService
        .updateStudent(this.student.id, this.student)
        .subscribe(() => {
          this.getStudents();
          this.student = new Student();
        });
    }
  }

  editStudent(student: Student): void {
    this.student = { ...student };
  }

  deleteStudent(id: number): void {
    this.studentService.deleteStudent(id).subscribe(() => {
      this.getStudents();
    });
  }
}
