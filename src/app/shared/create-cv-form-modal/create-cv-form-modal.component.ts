import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ResourceService} from '../../services/resource.service';

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
  uploadedFileName: string;
  @ViewChild('fileInput', { static: false }) fileInput: ElementRef;
  @ViewChild('closeBtn', { static: false }) closeBtn: ElementRef;
  constructor(private resourceService: ResourceService, private fb: FormBuilder) {
    this.createCvForm = this.fb.group({
      title: ['', Validators.minLength(1)],
      skills: [''],
      file: ['']
    });
    resourceService.getAutocompleteSkillsDictionary().subscribe(data => this.options = data);
  }

  ngOnInit() {
  }

  handleFileInputChanges() {
    this.uploadedFileName = this.fileInput.nativeElement.files[0].name;
  }

  onSubmit() {
    this.closeBtn.nativeElement.click();
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
