import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { PersonalInfoComponent } from "./personal-info/personal-info.component";
import { ProjectListComponent } from "./project-list/project-list.component";
import { PersonProvider } from "./Services/person-provider";
import { ProjectProvider } from "./Services/project-provider";

const appRoutes: Routes = [
    { path: '', component: ProjectListComponent },
    { path: '**', component: AppComponent },
];

@NgModule({
    declarations: [
        AppComponent,
        PersonalInfoComponent,
        ProjectListComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
    ],
    providers: [ProjectProvider, PersonProvider],
    bootstrap: [AppComponent],
})

export class AppModule {}
