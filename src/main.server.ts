import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
