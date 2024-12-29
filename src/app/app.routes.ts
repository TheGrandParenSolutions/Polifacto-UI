import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'statement-details/:sid',
        loadComponent: () => import('./pages/statement-detail/statement-detail.component').then((x) => x.StatementDetailComponent),
        data: {
            title: 'Statement Details - Polifacto',
            description: 'View detailed fact-checking analysis of statements by Indian politicians.'
        }
    },
    {
        path: 'login',
        loadComponent: () => import('./pages/auth/login/login.component').then((x) => x.LoginComponent),
        data: {
            title: 'Login - Polifacto',
            description: 'Login to Polifacto to access personalized fact-checking insights and features.'
        }
    },
    {
        path: 'sign-up',
        loadComponent: () => import('./pages/auth/sign-up/sign-up.component').then((x) => x.SignUpComponent),
        data: {
            title: 'Sign Up - Polifacto',
            description: 'Sign up for Polifacto to join India’s trusted fact-checking platform.'
        }
    },
    {
        path: 'forgot-password',
        loadComponent: () => import('./pages/auth/forgot-password/forgot-password.component').then((x) => x.ForgotPasswordComponent),
        data: {
            title: 'Forgot Password - Polifacto',
            description: 'Reset your password securely for your Polifacto account.'
        }
    },
    {
        path: '',
        loadComponent: () => import('./pages/home/home.component').then((x) => x.HomeComponent),
        pathMatch: 'full',
        data: {
            title: 'Home - Polifacto',
            description: 'Polifacto is India’s trusted platform for fact-checking statements by politicians and parties.'
        }
    },
    {
        path: 'politicians',
        loadComponent: () => import('./pages/politicians/politicians.component').then((x) => x.PoliticiansComponent),
        data: {
            title: 'Politicians - Polifacto',
            description: 'Explore detailed profiles and fact-checked statements of Indian politicians.'
        }
    },
    {
        path: 'statements',
        loadComponent: () => import('./pages/statements/statements.component').then((x) => x.StatementsComponent),
        data: {
            title: 'Statements - Polifacto',
            description: 'Browse fact-checked statements by Indian politicians and political parties.'
        }
    },
    {
        path: 'promises',
        loadComponent: () => import('./pages/promises/promises.component').then((x) => x.PromisesComponent),
        data: {
            title: 'Promises - Polifacto',
            description: 'Track political promises made by parties and their progress over time.'
        }
    },
    {
        path: 'promises/:party/:startYear',
        loadComponent: () => import('./pages/promises/promises.component').then((x) => x.PromisesComponent),
        data: {
            title: 'Promises by Party - Polifacto',
            description: 'Analyze promises made by specific parties during election campaigns.'
        }
    },
    {
        path: 'discussion/:articleId',
        loadComponent: () => import('./pages/discussion/discussion.component').then((x) => x.DiscussionComponent),
        data: {
            title: 'Discussion - Polifacto',
            description: 'Join discussions and share your views on articles and political analysis.'
        }
    },
    {
        path: 'about-us',
        loadComponent: () => import('./pages/about-us/about-us.component').then((x) => x.AboutUsComponent),
        data: {
            title: 'About Us - Polifacto',
            description: 'Learn more about Polifacto and our mission to promote transparency in politics.'
        }
    },
    {
        path: 'ask-us',
        loadComponent: () => import('./components/ask-question-overlay/ask-question-overlay.component').then((x) => x.AskQuestionOverlayComponent),
        data: {
            title: 'Ask Polifacto - Polifacto',
            description: 'Have questions? Reach out to Polifacto for detailed answers and insights.'
        }
    },
    {
        path: 'expose',
        loadComponent: () => import('./pages/expose/expose.component').then((x) => x.ExposeComponent),
        data: {
            title: 'Expose - Polifacto',
            description: 'Highlight misinformation and explore fact-checked exposes with Polifacto.'
        }
    },
    {
        path: 'politicians/:id',
        loadComponent: () => import('./pages/politicians-profile/politicians-profile.component').then((x) => x.PoliticiansProfileComponent),
        data: {
            title: 'Politician Profile - Polifacto',
            description: 'Dive into the profiles and detailed analysis of Indian politicians.'
        }
    },
    {
        path: 'statement-details',
        loadComponent: () => import('./pages/statement-detail/statement-detail.component').then((x) => x.StatementDetailComponent),
        data: {
            title: 'Statement Details - Polifacto',
            description: 'View in-depth fact-checking details of politicians’ statements.'
        }
    },
    {
        path: 'coming-soon',
        loadComponent: () => import('./pages/coming-soon/coming-soon.component').then(x => x.ComingSoonComponent),
        data: {
            title: 'Coming Soon - Polifacto',
            description: 'Stay tuned for new features and updates coming to Polifacto soon.'
        }
    },
    {
        path: '**',
        loadComponent: () => import('./pages/not-found/not-found.component').then(x => x.NotFoundComponent),
        data: {
            title: 'Page Not Found - Polifacto',
            description: 'The page you are looking for does not exist on Polifacto.'
        }
    },
];
