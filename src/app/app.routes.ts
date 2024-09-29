import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'statement-details/:sid', loadComponent: () => import('./pages/statement-detail/statement-detail.component').then((x) => x.StatementDetailComponent),
    },
    {
        path: 'login', loadComponent: () => import('./pages/auth/login/login.component').then((x) => x.LoginComponent)
    },
    {
        path: 'sign-up', loadComponent: () => import('./pages/auth/sign-up/sign-up.component').then((x) => x.SignUpComponent)
    },
    {
        path: 'forgot-password', loadComponent: () => import('./pages/auth/forgot-password/forgot-password.component').then((x) => x.ForgotPasswordComponent)
    },
    {
        path: '', loadComponent: () => import('./pages/home/home.component').then((x) => x.HomeComponent),
    },
    {
        path: 'politicians', loadComponent: () => import('./pages/politicians/politicians.component').then((x) => x.PoliticiansComponent)
    },
    {
        path: 'statements', loadComponent: () => import('./pages/statements/statements.component').then((x) => x.StatementsComponent)
    },
    {
        path: 'promises', loadComponent: () => import('./pages/promises/promises.component').then((x) => x.PromisesComponent)
    },
    {
        path: 'promises/:party/:startYear', loadComponent: () => import('./pages/promises/promises.component').then((x) => x.PromisesComponent),
    },
    {
        path: 'discussion/:articleId', loadComponent: () => import('./pages/discussion/discussion.component').then((x) => x.DiscussionComponent)
    },
    {
        path: 'about-us', loadComponent: () => import('./pages/about-us/about-us.component').then((x) => x.AboutUsComponent)
    },
    {
        path: 'ask-us', loadComponent: () => import('./components/ask-question-overlay/ask-question-overlay.component').then((x) => x.AskQuestionOverlayComponent)
    },
    {
        path: 'expose', loadComponent: () => import('./pages/expose/expose.component').then((x) => x.ExposeComponent)
    },
    {
        path: 'politicians/:id', loadComponent: () => import('./pages/politicians-profile/politicians-profile.component').then((x) => x.PoliticiansProfileComponent),
    },
    // {
    //     path: 'elections-2024', loadComponent: () => import('./pages/elections-home/elections-home.component').then(x => x.ElectionsHomeComponent)
    // },
    {
        path: 'statement-details', loadComponent: () => import('./pages/statement-detail/statement-detail.component').then((x) => x.StatementDetailComponent),
    },
    {
        path: 'coming-soon', loadComponent: () => import('./pages/coming-soon/coming-soon.component').then(x => x.ComingSoonComponent)
    },
    {
        path: '', loadComponent: () => import('./pages/home/home.component').then((x) => x.HomeComponent), pathMatch: "full"
    },
    {
        path: '**', loadComponent: () => import('./pages/not-found/not-found.component').then(x => x.NotFoundComponent)
    },
];
