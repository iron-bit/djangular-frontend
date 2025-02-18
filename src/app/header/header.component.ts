import { Component } from '@angular/core';
import { FundamentalNgxCoreModule } from '@fundamental-ngx/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FundamentalNgxCoreModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
