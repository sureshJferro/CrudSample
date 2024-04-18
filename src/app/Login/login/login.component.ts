import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Errors } from '../../Model/errors/errors.component';
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { CommonService } from '../../Service/CommonService';
interface AuthForm {
  email: FormControl<string>;
  password: FormControl<string>;
  username?: FormControl<string>;
  phonenumber?: FormControl<string>;
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export default class LoginComponent implements OnInit {
    authType = "";
    title = "";
    errors: Errors = { errors: {} };
    isSubmitting = false;
    authForm: FormGroup<AuthForm>;
    destroyRef = inject(DestroyRef);
    constructor(
      private readonly route: ActivatedRoute,
      private readonly router: Router,
      private readonly commonService: CommonService,
    ) {
      this.authForm = new FormGroup<AuthForm>({
        email: new FormControl("", {
          validators: [Validators.required],
          nonNullable: true,
        }),
        password: new FormControl("", {
          validators: [Validators.required],
          nonNullable: true,
        }),
      });
    }
    ngOnInit(): void {
      this.authType = this.route.snapshot.url.at(-1)!.path;
      this.title = this.authType === "login" ? "Sign in" : "Sign up";
      if (this.authType === "register") {
        this.authForm.addControl(
          "username",
          new FormControl("", {
            validators: [Validators.required],
            nonNullable: true,
          }),
        );
        this.authForm.addControl(
          "phonenumber",
          new FormControl("", {
            validators: [Validators.required],
            nonNullable: true,
          }),
        );
      }
    }
    
    submitForm(): void {
      this.isSubmitting = true;
      this.errors = { errors: {} };
      let observable =
      this.authType === "login"
        ? this.commonService.login(this.authForm.value as {Email:string ,Password: string })
        : this.commonService.register(
            this.authForm.value as {
              Email: string;
              Password: string;
              UserName: string;
              PhoneNumber: string;
            },
          );

    observable.pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: () => void this.router.navigate(["/"])
    });
      
    }
}
