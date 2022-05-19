import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'navigation',
  pure:false
})
export class NavigationPipe implements PipeTransform {

  transform(value: {name:string, balance:number}[], status:string): any {

   let filteredData: {name:string, balance:number}[]=[]
   if (status === 'get all students'|| status ===''){
     for (let student of value)
     filteredData.push(student)
  }

 if (status === 'get students with balance'){
    for (let student of value){
      if (student.balance>0){
        filteredData.push(student)
      }
    }
   }

   if (status === 'get students without balance'){
    for (let student of value){
      if (student.balance<=0){
        filteredData.push(student)
      }
    }
   }
   return filteredData
  }

}
