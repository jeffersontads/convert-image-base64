import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'convertImageBase64';

  uploadImageForm!: FormGroup;
  profileImage: any;
  Imageloaded: boolean = false;

  constructor(
    private fb: FormBuilder,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.uploadImageForm = this.fb.group({
      Image: [''],
    });
  }

  imageUpload(event: any) {
    var file = event.target.files.length;
    for (let i = 0; i < file; i++) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.profileImage = event.target.result;
        this.changeDetector.detectChanges();
      };
      reader.readAsDataURL(event.target.files[i]);
    }
  }

  handleImageLoad() {
    this.Imageloaded = true;
  }

  onSubmit() {
    var Image = this.profileImage; //get Image Base64
    console.log("Imagem BASE64--> ",Image, " <--Imagem BASE64");
  }
}
