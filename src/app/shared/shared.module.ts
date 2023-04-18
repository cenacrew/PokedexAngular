import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { HighlightDirective } from '@/directives/highlight.directive';
import { ShadowDirective } from '@/directives/shadow.directive';

@NgModule({
    declarations: [
        HighlightDirective,
        ShadowDirective
    ],
    imports: [
        CommonModule
    ],
    exports: [
        HighlightDirective,
        ShadowDirective
    ]
})
export class SharedModule {
}