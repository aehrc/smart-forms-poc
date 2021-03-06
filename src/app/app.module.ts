import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RedirectComponent } from './redirect/redirect.component';
import { LaunchComponent } from './launch/launch.component';
import { QRenderComponent } from './qrender/qrender.component';
import { PatientBannerComponent } from './patient-banner/patient-banner.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { HttpClientModule } from '@angular/common/http';

import { 
  QuestionnaireItemStringComponent,
  QuestionnaireItemTextComponent,
  QuestionnaireItemBooleanComponent,
  QuestionnaireItemDateComponent,
  QuestionnaireItemIntegerComponent,
  QuestionnaireItemDateTimeComponent,
  QuestionnaireItemDisplayComponent,
  QuestionnaireItemQuantityComponent
} from './questionnaire-item/questionnaire-item.component';
import { ShortTextOrTextFilterPipe } from './questionnaire-item/questionnaire-item-base.component';
import { QuestionnaireItemGroupComponent, TabFilterPipe, NonTabItemFilterPipe } from './questionnaire-item/questionnaire-item-group.component';
import { QuestionnaireItemRepeatComponent } from './questionnaire-item/questionnaire-item-repeat.component';
import { QuestionnaireItemChoiceComponent } from './questionnaire-item/questionnaire-item-choice.component';
import { QuestionnaireItemOpenChoiceComponent } from './questionnaire-item/questionnaire-item-openchoice.component';
import { QuestionnaireItemDecimalComponent } from './questionnaire-item/questionnaire-item-decimal.component';

import { QuestionnaireOffCanvasComponent } from './questionnaire-off-canvas/questionnaire-off-canvas.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { QuestionnaireListComponent } from './questionnaire-list/questionnaire-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    RedirectComponent,
    LaunchComponent,
    QRenderComponent,
    PatientBannerComponent,
    QuestionnaireComponent,
    QuestionnaireItemGroupComponent, 
    QuestionnaireItemRepeatComponent,
    QuestionnaireItemStringComponent,
    QuestionnaireItemTextComponent,
    QuestionnaireItemIntegerComponent,
    QuestionnaireItemBooleanComponent,
    QuestionnaireItemDateComponent,
    QuestionnaireItemChoiceComponent,
    QuestionnaireItemDateTimeComponent,
    QuestionnaireItemDecimalComponent,
    QuestionnaireItemDisplayComponent,
    QuestionnaireItemOpenChoiceComponent,
    QuestionnaireItemQuantityComponent,
    QuestionnaireOffCanvasComponent,
    ShortTextOrTextFilterPipe,
    TabFilterPipe,
    NonTabItemFilterPipe,
    SpinnerComponent,
    QuestionnaireListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
