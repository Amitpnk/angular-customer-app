import { HomeComponent } from '../Home/CustomerApp.HomeComponent';
import { CustomerComponent } from '../Customer/CustomerApp.CustomerComponent';
import { SupplierComponent } from '../Supplier/CustomerApp.SupplierComponent';

export const MainRoutes = [
    { path: 'Home', component: HomeComponent },
    { path: 'Customer', component: CustomerComponent },
    { path: 'Supplier', component: SupplierComponent },
    { path: '', component: HomeComponent }
];
