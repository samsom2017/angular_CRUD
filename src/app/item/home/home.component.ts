import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit
{
  items: Item[]=[];



  constructor(
    private itemService: ItemService, 
    private router: Router, 
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
      this.itemService.getAllItem().subscribe((data)=>{
        this.items=data;
      })
  }


  
  cancel(){
    this.router.navigate(["item/home"]);
  }

  delete(id:Number){
    const isConfirmed=window.confirm("Are you sure yoy want to delete?");
    if(isConfirmed){
      this.itemService.delete(id).subscribe((data)=>{
        this.items=this.items.filter(itm=>itm.id!=id);
      })
      window.location.reload();
    }
    
  }

}
