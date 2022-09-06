import { Component, OnInit, ViewChild } from '@angular/core';
import { of } from 'rxjs';
import { NgWizardConfig, NgWizardService, StepChangedArgs, StepValidationArgs, STEP_STATE, THEME } from 'ng-wizard';
import { AdminGrillaAltaConfirmacionComponent } from './admin-grilla-alta-confirmacion/admin-grilla-alta-confirmacion.component';
 

@Component({
  selector: 'met-admin-grilla-alta',
  templateUrl: './admin-grilla-alta.component.html',
  styleUrls: ['./admin-grilla-alta.component.scss']
})
export class AdminGrillaAltaComponent implements OnInit {

  @ViewChild(AdminGrillaAltaConfirmacionComponent) adminConfirmacion:AdminGrillaAltaConfirmacionComponent
  
  step:number = 1;

  stepStates = {
    normal: STEP_STATE.normal,
    disabled: STEP_STATE.disabled,
    error: STEP_STATE.error,
    hidden: STEP_STATE.hidden
  };

  config: NgWizardConfig = {
    selected: 0,
    theme: THEME.dots,
    lang: {
      previous: 'Anterior',
      next: 'Siguiente',
    }
  };
 

  constructor(private ngWizardService: NgWizardService) { }

  ngOnInit(): void {
  }

  finalStep(){
    this.adminConfirmacion.confeccionarTurno();
  }

  showPreviousStep(event?: Event) {
    this.ngWizardService.previous();
  }
 
  showNextStep(event?: Event) {
    this.ngWizardService.next();

  }
 
  resetWizard(event?: Event) {
    this.ngWizardService.reset();
  }
 
  setTheme(theme: THEME) {
    this.ngWizardService.theme(theme);
  }
 
  stepChanged(args: StepChangedArgs) {
    this.finalStep();
  }
 
  isValidTypeBoolean: boolean = true;
 
  isValidFunctionReturnsBoolean(args: StepValidationArgs) {
    return true;
  }
 
  isValidFunctionReturnsObservable(args: StepValidationArgs) {
    return of(true);
  }

}
