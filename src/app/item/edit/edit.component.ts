import { Component, OnInit } from '@angular/core'; 
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from '../item.service';
import { Item } from '../item';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html', 
  styleUrls: ['./edit.component.css'] // Fixed to 'styleUrls' (plural)
})
export class EditComponent implements OnInit {
  item: Item = {
    id: 0,
    name: '',
    category: '',
    brand: ''
  }

  constructor(
    private itemService: ItemService, 
    private router: Router, 
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id')); // Access route params directly
    this.getById(id);
  }

  getById(id: number): void {
    this.itemService.getById(id).subscribe({
      next: (data) => {
        this.item = data;
      },
      error: (err) => {
        console.error('Error fetching item:', err);
      }
    });
  }
  cancel(){
    this.router.navigate(["item/home"]);
  }
  update() {
    this.itemService.update(this.item).subscribe({
      next:(data)=>{
        this.router.navigate(["item/home"]);
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
}
