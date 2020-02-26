import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ResourceService} from '../../services/resource.service';
import {CvService} from '../../services/cv.service';
import {HttpClient} from '@angular/common/http';
import {TokenStorageService} from '../../services/token-storage.service';

@Component({
  selector: 'app-create-cv-form-modal',
  templateUrl: './create-cv-form-modal.component.html',
  styleUrls: ['./create-cv-form-modal.component.scss']
})
export class CreateCvFormModalComponent implements OnInit {
  createCvForm: FormGroup;
  options: string[];
  showDropDown: boolean;
  activeOption: string;
  file: any;
  @Output() onCreateCv = new EventEmitter();
  @ViewChild('fileInput', { static: false }) fileInput: ElementRef;
  @ViewChild('closeBtn', { static: false }) closeBtn: ElementRef;
  constructor(private resourceService: ResourceService,
              private formBuilder: FormBuilder,
              private cvService: CvService,
              private tokenStorage: TokenStorageService,
              private http: HttpClient
  ) {
    this.createCvForm = this.formBuilder.group({
      title: ['', Validators.minLength(1)],
      skills: [''],
      file: ['']
    });
    resourceService.getAutocompleteSkillsDictionary().subscribe(data => this.options = data);
  }

  ngOnInit() {}

  handleFileInputChanges() {
    const selectedFile = this.fileInput.nativeElement.files[0];
    this.file = selectedFile;
    this.createCvForm.patchValue({
      file: selectedFile.name
    });
  }

  onSubmit() {
    const fd = new FormData();
    fd.append('title', this.createCvForm.get('title').value);
    fd.append('skills', this.createCvForm.get('skills').value);
    if (this.file) {
      fd.append('file', this.file, this.createCvForm.get('file').value);
    }
    fd.append('user', this.tokenStorage.getUser().id.toString());

    this.http.post('http://localhost:8080/cv', fd)
      .subscribe(response => {
        this.closeBtn.nativeElement.click();
        this.onCreateCv.emit();
      });
  }

  openDropDown() {
    this.showDropDown = true;
  }

  closeDropDown() {
    this.showDropDown = false;
  }

  setActiveOption(option: string) {
    this.activeOption = option;
  }

  updateSkillsInputOnSelectOption(option: string) {
    const skillsInputValue = this.createCvForm.get('skills').value;
    if (skillsInputValue === null || !skillsInputValue.includes(' ')) {
      this.createCvForm.patchValue({
        skills: option + ' '
      });
    } else {
      const queryArray = skillsInputValue.split(' ');
      queryArray[queryArray.length - 1] = option;
      this.createCvForm.patchValue({
        skills: queryArray.join(' ') + ' '
      });
    }
  }
}
