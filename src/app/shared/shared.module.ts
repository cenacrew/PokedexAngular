import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { HighlightDirective } from '@/directives/highlight.directive';
import { ShadowDirective } from '@/directives/shadow.directive';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        HighlightDirective,
        ShadowDirective
    ],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    exports: [
        HighlightDirective,
        ShadowDirective
    ]
})
export class SharedModule {
}