import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-products',
  templateUrl: './update-products.component.html',
  styleUrls: ['./update-products.component.css']
})
export class UpdateProductsComponent implements OnInit{

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    
  }

  onSubmit(data:any){
    console.log(data);
    
  }

}
