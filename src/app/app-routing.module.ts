import { NgModule } from "@angular/core";

import {  RouterModule, Routes } from "@angular/router";
import { StudentDashboardComponent } from "./components/student-dashboard/student-dashboard.component";
import { TodoDashboardComponent } from "./components/todo-dashboard/todo-dashboard.component";
import { HomeComponent } from "./components/home/home.component";
import { UsersComponent } from "./components/users/users.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";

import { UserComponent } from "./components/user/user.component";
import { UserFormComponent } from "./components/user-form/user-form.component";

//3 //roting configuration
// const appRoutes:Routes=[
    // use can use route in staring no one can ridirect
    //  {
    //     path:'**',
    //    redirectTo:'page-not-found'

    // },
    // {
    //     path:'student',
    //     component:StudentDashboardComponent
    // },
    // {
    //     path:'',
    //     component:StudentDashboardComponent
    // },
//     {
// path:'',
// redirectTo:'student',
// pathMatch:'full'
//     },
//   {
//         path:'todos',
//         component:TodoDashboardComponent
//     },
//      {
//         path:'home',
//         component:HomeComponent
//     },
//       {
//         path:'users',
//         component:UsersComponent
//     }
//     ,
//      {
//         path:'users/addUser',
//         component:UserFormComponent
//     }
//     ,
//     {
        // as a param kuch bhi leha string number special charactor or any data that why use priority
    //     path:'users/:id',
    //     component:UserComponent
    // }
    // ,
    
    // {
    //   path:'page-not-found',
    //     component:PageNotFoundComponent  
    // },
    // wild card route
//     {
//         path:'**',
//        redirectTo:'page-not-found'

//     }
// ]


const appRoutes: Routes = [

  // ✅ Default route
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'student',
    component: StudentDashboardComponent
  },

  {
    path: 'todos',
    component: TodoDashboardComponent
  },

  {
    path: 'users',
    component: UsersComponent
  },

  {
    path: 'users/addUser',
    component: UserFormComponent
  },
   {
    path: 'users/:id/editUser',
    component: UserFormComponent
  },

  {
    path: 'users/:id',
    component: UserComponent
  },

  {
    path: 'page-not-found',
    component: PageNotFoundComponent
  },

  // ✅ Always keep this LAST
  {
    path: '**',
    redirectTo: 'page-not-found'
  }
];



// 2    @NgModule:-Decorator that marks a class as an NgModule and supplies configuration metadata.
@NgModule({
    // is for root module
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[]
})
//1
export class ApproutingModule{

}