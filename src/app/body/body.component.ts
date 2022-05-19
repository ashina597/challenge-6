import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  public newName = ''
  public newBalance = 0

  public searchstring:string = ''

  public status = ''



  public students:{name:string, balance:number}[]=[]
    // {
    //   name: 'Ashina Barasa',
    //   balance: 5000
    // },

    // {
    //   name: 'Victor Kurgat',
    //   balance: -500
    // },

    // {
    //   name: 'Joy Yego',
    //   balance: 1500
    // },

    // {
    //   name: 'Leila Queen',
    //   balance: -2500
    // }
  constructor() { }
  addStudent(){

    if (this.newName==='')
    {
        const warning = document.querySelector(".warning") as HTMLDivElement
        warning.style.display = 'block';
        warning.textContent = '*Please insert name'
        setTimeout(()=>{
          warning.style.display = 'none';
        },5000)
        return
      }

      for(let a of this.students)
      {
        if (a.name===this.newName){
          const warning = document.querySelector(".warning") as HTMLDivElement
        warning.style.display = 'block';
        warning.textContent = '*Student already exists'
        setTimeout(()=>{
          warning.style.display = 'none';
        },5000)
        return
        }
      }
    this.students.push(
      {
        name: this.newName,
        balance: this.newBalance
      }
    )
    const success = document.querySelector(".success") as HTMLDivElement
    success.style.display = 'block';
    setTimeout(()=>{
      success.style.display = 'none';
      },5000)
    this.newName =''
    this.newBalance=0
  }

  all_students(){
   this.status = 'get all students'
  }

  students_with_balance(){
    this.status = 'get students with balance'
   }

   students_without_balance(){
    this.status = 'get students without balance'
   }


  ngOnInit(): void {
  }

}
