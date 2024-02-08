
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { Role, RoleList } from '@app-pages/settings/setting';

import { RoleService } from '@app-pages/settings/role/role.service';
import { root } from 'rxjs/internal-compatibility';
import { CustomStateError } from '@app-pages/shared/dynamic-dialog/custom-error';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'ngx-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.scss'] ,
  providers: [{ provide: root, useClass: CustomStateError },MessageService ]
   
  
})
export class AddRoleComponent {
  formTitle: string = "Add";
  selectedItem: Role;
  existingValues: string[] = ['apple', 'banana', 'cherry'];
  nbForm: FormGroup;
  role: Role[];
  loading = false;
  customErrorStateMatcher = new CustomStateError()
  constructor(private formBuilder: FormBuilder, private roleService: RoleService, protected dialogRef: NbDialogRef<AddRoleComponent>, private router: Router, private messageService: MessageService) {
    this.nbForm = this.formBuilder.group({
      RoleId: [''],
      RoleName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],

    });
    this.getRoleListRecords()
  }

  ngOnInit(): void {
    if (this.selectedItem !== undefined) {
      this.formTitle = "Update"
      this.nbForm.setValue({
        RoleId: this.selectedItem.RoleId,
        RoleName: this.selectedItem.RoleName,
      });
    }
  }

  close() {
    this.dialogRef.close();
  }

  getRoleListRecords() {
    this.roleService.getRoleList(1,100,'').subscribe((res: RoleList) => {
      
      this.role = res.RoleData;
      if (this.selectedItem !== undefined) {
        this.nbForm.get('RoleName').setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(50),this.customErrorStateMatcher.duplicateValidator(this.role, 'RoleName',this.selectedItem.RoleName)]);
        // this.nbForm.get('RoleName').updateValueAndValidity();
      } else {
        this.nbForm.get('RoleName').setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(50),this.customErrorStateMatcher.duplicateValidator(this.role, 'RoleName', null)]);
        // this.nbForm.get('RoleName').updateValueAndValidity();
      }
      
    })
  }
  submit() {
    ////debugger;
    if (this.nbForm.valid) {
      this.loading = true
      this.customErrorStateMatcher.trimFormValues(this.nbForm)
     
      if (this.selectedItem !== undefined) {
        this.nbForm.get('RoleId').setValue(this.selectedItem.RoleId);
        const roleDetails = this.nbForm.value
        this.roleService.updateRoleDetail(roleDetails).subscribe(res => {
          if (res == true) {
            this.loading = false
            this.dialogRef.close(roleDetails);
            // this.close();
          }   else {
            this.loading = false
            this.showPop('warn', 'Alert', 'Somthing went wrong');
          }
        },
          (error) => {
            if (error.status === 404 || error.status === 500) {
              this.router.navigate(['/error']);
            }
        })
      } else {
        const roleDetails = this.nbForm.value
        this.roleService.addRoleDetail(roleDetails).subscribe(res => {
          if (res == true) {
            this.loading = false
            this.dialogRef.close(roleDetails);
            // this.close();
          }   else {
            this.loading = false
            this.showPop('warn', 'Alert', 'Somthing went wrong');
          }
        },
          (error) => {
            if (error.status === 404 || error.status === 500) {
              this.router.navigate(['/error']);
            }
        })
      }

    } else {
      this.nbForm.markAllAsTouched();
    }
  }

  showPop(status: string, summary: string, detail: string) {
    this.messageService.add({ severity: status, summary: summary, detail: detail })
  }
}





