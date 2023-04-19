import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { HighlightDirective } from '@/directives/highlight.directive';
import { ShadowDirective } from '@/directives/shadow.directive';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ErrorMessageComponent } from './error-message/error-message.component';

@NgModule({
    declarations: [
        HighlightDirective,
        ShadowDirective,
        ErrorMessageComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    exports: [
        HighlightDirective,
        ShadowDirective,
        ErrorMessageComponent

    ]
})
export class SharedModule {
}