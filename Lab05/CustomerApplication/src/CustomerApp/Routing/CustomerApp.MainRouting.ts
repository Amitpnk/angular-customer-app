import { HomeComponent } from '../Home/CustomerApp.HomeComponent';

export const MainRoutes = [
    { path: 'Home', component: HomeComponent },
    { path: 'Customer', loadChildren: '../Customer/CustomerApp.CustomerModule#CustomerModule' },
    { path: 'Supplier', loadChildren: '../Supplier/CustomerApp.SupplierModule#SupplierModule' },
    { path: '', component: HomeComponent }
];
