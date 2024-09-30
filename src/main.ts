import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { registerLicense } from '@syncfusion/ej2-base';

// Registering Syncfusion license key
registerLicense('Ngo9BigBOggjHTQxAR8/V1NDaF5cWGNCf1NpRmNGfV5ycEVCal9ZTnVYUiweQnxTdEFjUHxecHBRRWRfU0R3XA==');
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
